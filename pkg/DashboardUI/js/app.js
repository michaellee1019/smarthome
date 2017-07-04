var log = console.log;

class App {
  constructor(args) {
    this.window = args.window;
    this.$ = args.container;
    this.grid = args.grid;
    this.config = args.config;
    this.rooms = args.config.rooms;
    this.listeners = {};
  }

  submit(topic, event) {
    (this.listeners[topic] || []).forEach(l => l(event));
  }

  listen(topic, callback) {
    this.listeners[topic] = this.listeners[topic] || [];
    this.listeners[topic].push(callback);
  }

  run() {
    this.grid.init($(this.window));
    this.config.cells.forEach(b => {
      var cell = this.grid.cell(b);
      cell.data('config', b);
      cell.html(this.config.emojis[b.icon]);
      cell.addClass(b.claz);

      cell.click(() => this.submit('Cell.Click', {Cell: cell}));
      cell.dblclick(() => this.submit('Cell.Dblclick', {Cell: cell}));
      cell.on('doubletap', () => this.submit('Cell.Dblclick', {Cell: cell}));
    });

    this.config.poll.forEach(p => {
      var f = () => this.onAction(p.action, p.args)
      setInterval(f, p.period);
    });

    this.listen('Cell.Click', (e) => {
      var b = e.Cell.data('config');
      this.onAction(b.onPress.action, b.onPress.args)
    });

    this.listen('Cell.Dblclick', (e) => {
      this.grid.allCells().forEach(c => {
        var d = c.data('config');
        if(d && d.onDblPress) {
          this.onAction(d.onDblPress.action, d.onDblPress.args);
        }
      });
    });

    this.listen('Room.StateObserved', (e) => {
      var track = e.State.currentTrack;
      var artUrl = track.albumArtUri;
      if(artUrl) {
        $('body').css({backgroundImage: 'url("' + artUrl + '")'});
      }
      else {
        $('body').css({backgroundImage: ''});
      }
      var title = track.title;
      this.$.find('.state-Music').html(title ? title.substr(0,21) : '');
    });

    this.listen('Room.Changed', (e) => {
      this.grid.allCells().forEach(c => {
        var d = c.data('config');
        if(d && d.activeWhenRoom) {
          if (e.ToRoom == d.activeWhenRoom) {
            c.addClass('active');
          } else {
            c.removeClass('active');
          }
        }
      })
    });
    this.listen('Room.Changed', (e) => {
      this.getState();
    });

    this.listen('App.Started', (e) => {
      this.changeRoom('Kitchen');
    })

    this.submit('App.Started', {});
  }

  allJoin(room) {
    // TODO: could be more clever about getting all room names from `/zones`
    // it's in .members.roomName
    log('allJoin ' + room)
    this.config.rooms.filter( x => x != room ).forEach( other => {
      this.request('http://retropie.local:5005/' + other + '/join/' + room)
      
    });
  }

  changeRoom(toRoom) {
    var oldRoom = this.room;
    this.room = toRoom;
    this.submit('Room.Changed', {FromRoom: oldRoom, ToRoom: toRoom})
  }

  request(url) {
    return $.ajax(url)
      .fail(err  => console.log(url, err));
  }

  getState() {
    $.ajax(
      'http://retropie.local:5005/' + this.room + '/state'
    ).done(resp => {
      this.submit('Room.StateObserved', {
        State: resp,
      });
    });
  }

  onAction(action, params) {

    switch(action) {
    case 'AllJoin':
      this.allJoin.apply(this, params);
      break;
    case 'ChangeRoom':
      this.changeRoom.apply(this, params);
      break;
    case 'Music.GetState':
      this.getState();
      break;
    case 'Lights.SceneX':
      this.request('http://maker.ifttt.com/trigger/kitchen_switch_on/with/key/cLNpbWpb3jYP550-Mna27W');
      break;
    case 'Music.VolumeUp':
      this.request(
        'http://retropie.local:5005/' + this.room + '/volume/+5'
      )
      break;
    case 'Music.VolumeDown':
      this.request(
        'http://retropie.local:5005/' + this.room + '/volume/-5'
      )
    }
  }
}


var config = {
  emojis: {
      'TV':       '📺',
      'Film':     '🎬',
      'Bed':      '🛏',
      'Rice':     '🍙',
      'Shower':   '🛀',
      'Earth':    '🌍',
      'Play':     '▶️',
      'Pause':    '⏸',
      'Up':       '🔼',
      'Down':     '🔽',
      'Klingon':  '🖖',
      'Skip':     '⏭',
      'Time15':   '🕘',
      'Time30':   '🕕',
      'Nerd':     '🤓',
      'Notes':    '🎶',
      'Monkey':   '🙉',
      'Yell':     '🗣',
      'Ear':      '👂🏽',
      'Taco':     '🌮',
      'Speaker':  '🔈',
      'News':     '📰',
      'Sun':      '🌕',
      'Moon':     '🌑',
      'Dim':      '🌘',
      'Sunset':   '🌆',
      'Check':    '✅',
      'X':        '❌',
      '?':        '❓',
      'Tulip':    '🌷',
      'Dancers':  '👯',
      'Box':      '✳️',
      'Empty':    '⬜️',
      'ThumbsUp': '👍🏽',
      'ThumbsDown': '👎🏽',
  },
  rows: 8,
  cols: 11,
  rooms: [
    'Living',
    'Bedroom',
    'Kitchen',
    'Bathroom',
  ],
  cells: [
    { w:1, h:1,
      y:0, x:3,
      emoji: 'TV',
      activeWhenRoom: 'Living',
      onPress: {action: 'ChangeRoom', args: ['Living']},
      onDoublePress: {action: 'AllJoin', args: ['Living']},
    },
    /*
    Only one room can be "active" at a time.
    The Check/?/X below each room is its indicator. These
      indicate if the room that's above it is part of the
      same group as the active room.
    So if all rooms are playing the same thing, clicking
      any of the room icons will leave all the indicators checked.
    Double-click to all join or all leave.
    A room is *always* a part of its own group.


    Click a room to see what's playing in it.
    -> The indicators for the rooms in the same group change
    -> Click the indicator to leave/join the group

    How to silence a room X:
      - click icon for X
      - click its indicator to leave its group

    How to play everywhere:
     - click room you want to duplicate
     - select the unselected indicators

    How to play only in one room X:
     - click icon for X
     - unselect selected indicators

    TODO:
    - icon above volume that matches active room.
      Active => volume controls just that room
      Inactive => volume controls whole group

    */
    { w:1, h:1,
      y:1, x:3,
      emoji: 'Speaker',
      togglesRoom: 'Living',
      onPress: {action: 'Music.ToggleRoom', args: ['Living']},
    },

    { w:1, h:1,
      y:0, x:6,
      emoji: 'Bed',
      activeWhenRoom: 'Bedroom',
      onPress: {action: 'ChangeRoom', args: ['Bedroom']},
      onDoublePress: {action: 'AllJoin', args: ['Bedroom']},
    },
    { w:1, h:1,
      y:1, x:6,
      emoji: 'Speaker',
      togglesRoom: 'Bedroom',
      onPress: {action: 'Music.ToggleRoom', args: ['Bedroom']},
    },

    { w:1, h:1,
      y:0, x:4,
      emoji: 'Rice',
      activeWhenRoom: 'Kitchen',
      onPress: {action: 'ChangeRoom', args: ['Kitchen']},
      onDoublePress: {action: 'AllJoin', args: ['Kitchen']},
    },
    { w:1, h:1,
      y:1, x:4,
      emoji: 'Speaker',
      togglesRoom: 'Kitchen',
      onPress: {action: 'Music.ToggleRoom', args: ['Kitchen']},
    },

    { w:1, h:1,
      y:0, x:5,
      emoji: 'Shower',
      activeWhenRoom: 'Bathroom',
      onPress: {action: 'ChangeRoom', args: ['Bathroom']},
      onDoublePress: {action: 'Music.AllJoin', args: ['Bathroom']},
    },
    { w:1, h:1,
      y:1, x:5,
      emoji: 'Speaker',
      togglesRoom: 'Bathroom',
      onPress: {action: 'Music.ToggleRoom', args: ['Bathroom']},
    },

    // { w:1, h:1,
    //   y:0, x:7,
    //   emoji: 'Earth',
    //   activeWhenRoom: 'All',
    //   onPress: {action: 'ChangeRoom', args: ['All']},
    // },

    // TODO: display music cover art instead of notes
    { w:1, h:1,
      y:7, x:0,
      emoji: 'Notes',
      // 'hidden' force-refresh button
      onPress: {action:'App.Refresh', args:[]},
    },
    { w:9, h:1, // banner
      y:7, x:1,
      claz: 'state-Music',
      onPress: {action: 'Music.FetchState', args: []},
    },
    { y:7, x:2, w:0 },
    { y:7, x:3, w:0 },
    { y:7, x:4, w:0 },
    { y:7, x:5, w:0 },
    { y:7, x:6, w:0 },
    { y:7, x:7, w:0 },
    { y:7, x:8, w:0 },
    { y:7, x:9, w:0 },
    // TODO: display music cover art instead of notes
    { w:1, h:1,
      y:7, x:10,
      emoji: 'Notes'
    },

    // { w:1, h:1,
    //   y:2, x:8,
    //   emoji: 'Sun',
    //   onPress: {action: 'Lights.On', args: []},
    // },
    // { w:1, h:1,
    //   y:3, x:8,
    //   emoji: 'Dim',
    //   onPress: {action: 'Lights.Scene.Dim', args: []},
    // },
    // { w:1, h:1,
    //   y:4, x:8,
    //   emoji: 'Moon',
    //   onPress: {action: 'Lights.Off', args: []},
    // },
    // { w:1, h:1,
    //   y:5, x:8,
    //   emoji: 'Sunset',
    //   onPress: {action: 'Lights.Scene.Savana', args: ["savana"]},
    // },

    // Room/Global volume toggle
    // { w:1, h:1,
    //   y:2, x:1,
    //   emoji: 'Rice',
    //   activeWhenRoom: 'Kitchen',
    // },
    { w:1, h:1,
      y:2, x:1,
      emoji: 'Up',
      onPress: {action: 'Music.VolumeUp', args: []},
    },
    { w:1, h:1,
      y:4, x:1,
      emoji: 'Down',
      onPress: {action: 'Music.VolumeDown', args: []},
    },
    { w:1, h:1,
      y:4, x:0,
      emoji: 'Klingon',
      onPress: {action: 'Music.VolumeSame', args: []},
    },

    ////
    // volume "slider"
    ////
    // TODO: in column 0, have volume absolute numbers. Bottom is mute.
    //       The number of "lit up" rows corresponds to the volume
    //       of the current group associated with active room. Click once
    //       to change for the active room; double click to change for
    //       whole group.
    //
    // TODO: 0 is top of screen, so volumeLevel vals
    //       need to be reversed (volumeLevel = 6 - y)
    // { w:1, h:1,
    //   y:6, x:0,
    //   emoji: 'Monkey',
    //   volumeLevel: 6,
    // },
    // { w:1, h:1,
    //   y:5, x:0,
    //   emoji: 'Box',
    //   volumeLevel: 5,
    // },
    // { w:1, h:1,
    //   y:4, x:0,
    //   emoji: 'Box',
    //   volumeLevel: 4,
    // },
    // { w:1, h:1,
    //   y:3, x:0,
    //   emoji: 'Empty',
    //   volumeLevel: 3,
    // },
    // { w:1, h:1,
    //   y:2, x:0,
    //   emoji: 'Empty',
    //   volumeLevel: 2,
    // },
    // { w:1, h:1,
    //   y:1, x:0,
    //   emoji: 'Empty',
    //   volumeLevel: 1,
    // },
    // { w:1, h:1,
    //   y:0, x:0,
    //   emoji: 'Empty',
    //   volumeLevel: 0,
    // },
    ////

    /////
    // Presets
    /////
    { w:1, h:1,
      y:4, x:3,
      emoji: 'News',
      onPress: {action: 'Music.Favorite', args: ['Play NPR One']},
    },
    { w:1, h:1,
      y:4, x:5,
      emoji: 'Tulip',
      onPress: {action: 'Music.Favorite', args: ['Tulip Radio']},
    },
    { w:1, h:1,
      y:3, x:6,
      emoji: 'Monkey',
      onPress: {action: 'Music.Favorite', args: ['Sosononos']},
    },
    { w:1, h:1,
      y:3, x:7,
      emoji: 'Nerd',
      onPress: {action: 'Music.Favorite', args: ['Alpha Chill - Medium']},
    },
    { w:1, h:1,
      y:4, x:6,
      emoji: 'Dancers',
      onPress: {action: 'Music.Favorite', args: ['Britney Spears Radio']},
    },
    // TODO: maybe just use built-in pandora support?
    { w:1, h:1,
      y:3, x:5,
      emoji: 'Taco',
      onPress: {action: 'Music.Favorite', args: ['Despacito (Feat. Daddy Yankee) Radio']},
    },
    { w:1, h:1,
      y:3, x:3,
      emoji: 'Film',
      onPress: {action: 'Music.Preset', args: ['all-tv']},
    },

  
    { w:2, h:1, 
      y:3, x:9,
      // TODO: use same claz:state-* thing that the banner uses
      getValues: {
        url: `http://${window.secret.host.hostname}:3000/temp`,
      }
    },
    {y:3, x:10, w:0},
    {y:3, x:11, w:0},

    ////
    // Pandora ThumbsUp/ThumbsDown
    //
    // TODO: implement
    // { w:1, h:1,
    //   y:6, x:3,
    //   emoji: 'ThumbsUp',
    // },
    // { w:1, h:1,
    //   y:6, x:6,
    //   emoji: 'ThumbsDown',
    // },

    // TODO: toggle play/pause icon
    { w:1, h:1,
      y:6, x:3,
      emoji: 'Play',
      onPress: {action: 'Music.PlayPause', args: []},
    },
    { w:1, h:1,
      y:6, x:5,
      emoji: 'Pause',
      onPress: {action: 'Music.Pause', args: []},
    },
    { w:1, h:1,
      y:6, x:7,
      emoji: 'Skip',
      onPress: {action: 'Music.Next', args: []},
    },

    // TODO: sleep timer buttons - sonos http API has it built in

  ],
  poll: [
    {action: 'Music.FetchState', args: [], period: 2000},
    {action: 'GetValues', args: [], period: 5000},
  ]
};

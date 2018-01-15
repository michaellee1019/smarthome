
var config = {
  emojis: {
      'TV':       '📺' ,
      'Film':     '🎬',
      'Bed':      '🛏'  ,
      'Rice':     '🍙' ,
      'Shower':   '🛀' ,
      'Earth':    '🌍' ,
      'Play':     '▶️',
      'Up':       '🔼' ,
      'Down':     '🔽' ,
      'Skip':     '⏭',
      'Notes':    '🎶',
      'Monkey':   '🙉',
      'Dancers':  '👯‍♀️',
      'Yell':     '🗣',
      'Ear':      '👂🏽',
      'Taco':     '🌮',
      'News':     '📰',
      'Sun':      '🌕',
      'Moon':     '🌑',
      'Dim':      '🌘',
      'Sunset':   '🌆',
      'Check':    '✅',
      'X':        '❌',
      '?':        '❓',
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
      icon: 'TV',
      // TODO: rename onPress to onClick, onDblPress to onDblClick
      activeWhenRoom: 'Living',
      onPress: {action: 'ChangeRoom', args: ['Living']},
      onDblPress: {action: 'AllJoin', args: ['Living']},
    },
    /*
    Only one room can be "active" at a time.
    The Check/?/X below each room is its indicator. These
      indicate if the room that's above it is part of the
      same group as the active room.
    So if all rooms are playing the same thing, clicking
      any of the room icons will leave all the indicators checked.

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
    - implement ↑ 😘
    - icon above volume that matches active room. 
      Active => volume controls just that room
      Inactive => volume controls whole group

    */
    { w:1, h:1,
      y:1, x:3,
      icon: '?',
      togglesRoom: 'Living',
      onPress: {action: 'ToggleRoom', args: []},
    },

    { w:1, h:1,
      y:0, x:4,
      icon: 'Bed',
      activeWhenRoom: 'Bedroom',
      onPress: {action: 'ChangeRoom', args: ['Bedroom']},
      onDblPress: {action: 'AllJoin', args: ['Bedroom']},
    },
    { w:1, h:1,
      y:1, x:4,
      icon: '?',
      togglesRoom: 'Bed',
      onPress: {action: 'ToggleRoom', args: []},
    },

    { w:1, h:1,
      y:0, x:5,
      icon: 'Rice',
      activeWhenRoom: 'Kitchen',
      onPress: {action: 'ChangeRoom', args: ['Kitchen']},
      onDblPress: {action: 'AllJoin', args: ['Kitchen']},
    },
    { w:1, h:1,
      y:1, x:5,
      icon: '?',
      togglesRoom: 'Kitchen',
      onPress: {action: 'ToggleRoom', args: []},
    },

    { w:1, h:1,
      y:0, x:6,
      icon: 'Shower',
      activeWhenRoom: 'Bathroom',
      onPress: {action: 'ChangeRoom', args: ['Bathroom']},
      onDblPress: {action: 'AllJoin', args: ['Bathroom']},
    },
    { w:1, h:1,
      y:1, x:6,
      icon: '?',
      togglesRoom: 'Bathroom',
      onPress: {action: 'ToggleRoom', args: []},
    },

    // { w:1, h:1,
    //   y:0, x:7,
    //   icon: 'Earth',
    //   activeWhenRoom: 'All',
    //   onPress: {action: 'ChangeRoom', args: ['All']},
    // },

    // TODO: display music cover art instead of notes
    { w:1, h:1,
      y:7, x:0,
      icon: 'Notes'
    },
    { w:9, h:1,
      y:7, x:1,
      claz: 'state-Music',
      onPress: {action: 'Music.GetState', args: []},
    },
    { y:7, x:2, w:0 },
    { y:7, x:3, w:0 },
    { y:7, x:4, w:0 },
    { y:7, x:5, w:0 },
    { y:7, x:6, w:0 },
    { y:7, x:7, w:0 },
    { y:7, x:8, w:0 },
    { y:7, x:9, w:0 },

    { w:1, h:1,
      y:7, x:10,
      icon: 'Notes'
    },

    { w:1, h:1,
      y:2, x:8,
      icon: 'Sun',
      onPress: {action: 'Lights.On', args: []},
    },
    { w:1, h:1,
      y:3, x:8,
      icon: 'Dim',
      onPress: {action: 'Lights.Scene.Dim', args: []},
    },
    { w:1, h:1,
      y:4, x:8,
      icon: 'Moon',
      onPress: {action: 'Lights.Off', args: []},
    },
    { w:1, h:1,
      y:5, x:8,
      icon: 'Sunset',
      onPress: {action: 'Lights.Scene.Savana', args: ["savana"]},
    },
    { w:1, h:1,
      y:3, x:1,
      icon: 'Up',
      onPress: {action: 'Music.VolumeUp', args: []},
    },
    { w:1, h:1,
      y:4, x:1,
      icon: 'Down',
      onPress: {action: 'Music.VolumeDown', args: []},
    },
    { w:1, h:1,
      y:4, x:3,
      icon: 'News',
      onPress: {action: 'Music.Preset', args: ['playnpr']},
    },
    { w:1, h:1,
      y:3, x:3,
      icon: 'Taco',
      onPress: {action: 'Music.Preset', args: ['radio.despacito']},
    },
    { w:1, h:1,
      y:3, x:4,
      icon: 'Film',
      onPress: {action: 'Music.Preset', args: ['all-tv']},
    },
    { w:1, h:1,
      y:6, x:4,
      icon: 'Play', // TODO: toggle play/pause icon
      onPress: {action: 'Music.PlayPause', args: []},
    },
    { w:1, h:1,
      y:6, x:5,
      icon: 'Skip',
      onPress: {action: 'Music.Next', args: []},
    },
  ],
  poll: [
    {action: 'Music.GetState', args: [], period: 3000},
  ]
};
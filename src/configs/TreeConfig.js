export const config = [
  {
    name: '1',
    id: 1,
    children: [
      {
        name: '1.1',
        id: 11,
      }, {
        name: '1.2',
        id: 12,
        children: [
          {
            name: '1.2.1',
            id: 121,
          }, {
            name: '1.2.2',
            id: 122,
          },
        ]
      },
    ]
  },
  {
    name: '2',
    id: 2,
    children: [
      {
        name: '2.1',
        id: 21,
        children: [
          {
            name: '2.2.1',
            id: 221,
          }, {
            name: '2.2.2',
            id: 222,
          },
        ]
      }, {
        name: '2.2',
        id: 22,
      },
    ]
  },
]
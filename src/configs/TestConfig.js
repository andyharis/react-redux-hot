export const config = [
  /*row 1*/[
    {
      field: 'test',
      label: 'DateType',
      style: {
        width: 300,
      },
      type: "DateType",
      value: "2015-01-07",
      format:"YYYY/MM/DD",

    }, {
      field: 'testd',
      label: 'TimeType',
      style: {
        width: 300,
      },
      type: "TimeType",
      value: "2015-01-07 10:20:00",
      format:"HH:mm:ss",

    }, {
      field: 'test',
      label: 'TextAreaType',
      style: {
        width: 150,
      },
      type: "TextAreaType",
      value: 'ssssssssssssssss'
    },
  ],
  /*row 2*/[
    {
      field: 'test',
      label: 'TextInputType',
      style: {
        width: 150,
      },
      type: "TextInputType",
    }, {
      field: 'ImageType',
      label: 'ImageType',
      style: {
        width: 300,
      },
      imageStyle:{
        width: '150px',
      },
      value: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: -2,
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
      type: "ImageType",
    },{
      field: 'Andy',
      label: 'NumberType',
      style: {
        width: 200
      },
      type: "NumberType",
      value: "1500",
      separator: ',',
      prefix: '$',
      postfix: 'RUB'
    },
  ],
]
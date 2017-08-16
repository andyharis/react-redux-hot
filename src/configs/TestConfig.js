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
      value: 'test input',
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
        url: 'https://images4.cosmopolitan.ru/upload/img_cache/b44/b44e2dd8fc4b668789d4b9c7d5003be7_fitted_740x0.jpg',
        thumbUrl: 'https://images4.cosmopolitan.ru/upload/img_cache/b44/b44e2dd8fc4b668789d4b9c7d5003be7_fitted_740x0.jpg',
      }, {
        uid: -2,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: -3,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',

      }, {
        uid: -4,
        name: 'yyy.png',
        status: 'done',
        url: 'https://vk.com/images/deactivated_hid_200.gif',
        thumbUrl: 'https://vk.com/images/deactivated_hid_200.gif',
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
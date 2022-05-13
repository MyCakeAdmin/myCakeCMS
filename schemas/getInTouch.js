export default {
    name: 'getInTouch',
    title: 'Get In Touch',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'telephone',
        title: 'Telephone',
        type: 'string',
      },
      {
        title: 'Address',
        name: 'address',
        type: 'object',
        fields: [
          {name: 'house', type: 'string', title: 'House'},
          {name: 'street', type: 'string', title: 'Street'},
          {name: 'town', type: 'string', title: 'Town'},
          {name: 'area', type: 'string', title: 'County and Postode'},
        ]
      },
    ],
  }
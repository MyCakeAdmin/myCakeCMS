export default {
    name: 'myPlace',
    title: 'My Place',
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
        name: 'top',
        title: 'Top Content',
        type: 'blockContent',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name: 'links',
        title: 'Useful Links',
        type: 'array',
        of: [{type: 'link'}]
      },
    ],
  }
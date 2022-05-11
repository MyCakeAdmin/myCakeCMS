export default {
    name: 'ourClients',
    title: 'Our Clients',
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
        name: 'gallery',
        title: 'Logo Gallery',
        type: 'gallery',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  }
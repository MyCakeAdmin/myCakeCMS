export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Sub Title',
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
        title: 'Home Upper',
        name: 'homeUpper',
        type: 'object',
        fields: [
          {
            title: 'Title',
            name: 'title',
            type: 'string',
          },
          {
            title: 'Body',
            name: 'body',
            type: 'array',
            of: [
              {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
              ],
              }
            ]
          },
        ]
      },
      {
        title: 'Home Grid',
        name: 'homeGrid',
        type: 'array',
        of: [
          {
            title: 'Area',
            name: 'area',
            type: 'object',
            fields: [
              {
                title: 'Title',
                name: 'title',
                type: 'string',
              },
              {
                title: 'Body',
                name: 'body',
                type: 'text',
              },
              {
                title: 'Image',
                name: 'image',
                type: 'image',
              },
              {
                title: 'Page URL',
                name: 'pageUrl',
                type: 'string'
              },
            ]
          },
        ]
      },
      {
        title: 'Home Testimonial',
        name: 'homeTestimonial',
        type: 'object',
        fields: [
          {
            title: 'Testimonial',
            name: 'testimonial',
            type: 'text',
          },
          {
            title: 'Attribution',
            name: 'attribution',
            type: 'string',
          },
        ]
      },
    ],
  }
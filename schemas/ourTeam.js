export default {
    name: 'ourTeam',
    title: 'Our Team',
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
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        title: 'Team Members',
        name: 'teamMembers',
        type: 'array',
        of: [
            {
            title: 'Member',
            name: 'member',
            type: 'object',
            fields: [
              {
                title: 'Name and Position',
                name: 'namePosition',
                type: 'string',
              },
              {
                title: 'Bio',
                name: 'bio',
                type: 'text',
              },
              {
                title: 'Email',
                description: 'Full email',
                name: 'email',
                type: 'string',
              },
              {
                title: 'Twitter',
                description: 'Twitter handle beginning @',
                name: 'twitter',
                type: 'string',
              },
            ]
          }
        ],
      },
    ],
  }
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Base')
    .items([
        S.listItem()
          .title('Home')
          .child(
            S.document()
              .schemaType('home')
              .documentId('home')
          ),
        S.listItem()
          .title('Our Clients')
          .child(
            S.document()
              .schemaType('ourClients')
              .documentId('ourClients')
          ),
          S.listItem()
          .title('Our Team')
          .child(
            S.document()
              .schemaType('ourTeam')
              .documentId('ourTeam')
          ),
          S.listItem()
          .title('Get in Touch')
          .child(
            S.document()
              .schemaType('getInTouch')
              .documentId('getInTouch')
          ),
          ...S.documentTypeListItems().filter(listItem => !['home', 'ourClients', 'ourTeam', 'getInTouch'].includes(listItem.getId()))
      ])
export default {
    name: 'download',
    title: 'Download',
    type: 'document',
    fields: [
        {
            name: 'downloadPdf',
            title: 'Download PDF',
            type: 'object',
            fields: [
              {name: 'title', type: 'string', title: 'Title'},
              {name: 'reportFile', type: 'file', title: 'Upload PDF'},
            ]
        },
    ],
  }
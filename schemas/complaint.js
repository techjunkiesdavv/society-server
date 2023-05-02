const complaint = {
    name: 'complaint',
    title: 'Complaints',
    type: 'document',
    fields: [
      {
        name: 'user',
        title: 'User',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'flat',
        title: 'Flat No.',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'time',
        title: 'Time',
        type: 'datetime',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'complaint',
        title: 'Complaint',
        type: 'text',
        validation: (Rule) => Rule.required(),
      },
    ],
  }
  
  export default complaint
  
const announcements = {
  name: 'announcements',
  title: 'Announcements',
  type: 'document',
  fields: [
    {
      name: 'announcement',
      title: 'Announcement',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default announcements

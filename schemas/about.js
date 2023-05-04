const about = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'flats',
      title: 'flats',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'members',
      title: 'members',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },{
      name: 'wings',
      title: 'wings',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default about

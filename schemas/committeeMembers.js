const committeMembers = {
  title: 'Society Committee Members',
  name: 'committeMembers',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Designation',
      name: 'designation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Wing',
      name: 'wing',
      type: 'string',
      options: {
        list: [
          {title: 'A', value: 'A'},
          {title: 'B', value: 'B'},
          {title: 'C', value: 'C'},
          {title: 'D', value: 'D'},
          {title: 'E', value: 'E'},
          {title: 'OR-Villa', value: 'OR-Villa'},
          {title: 'TU-Villa', value: 'TU-Villa'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'House No',
      name: 'house_no',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Phone Number',
      name: 'phone_number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default committeMembers

const bills = {
  name: 'bills',
  title: 'Bills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'billDate',
      title: 'Bill Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dueDate',
      title: 'Due Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default bills

const expenditure= {  
  name: 'expenditure',
  title: 'Expenditure',
  type: 'document',
  fields:[ 
    {
      name: 'balance',
      title: 'Balance',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paymentHistory',
      title: 'Payment History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'payment',
              title: 'Payment',
              type: 'number',
              validation: Rule => Rule.required(),
            },
            {
              name: 'date',
              title: 'Date',
              type: 'datetime',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
  initialValue: {
    balance: 0,
    paymentHistory: [],
  },
  liveEdit: true,
}; 
export default expenditure ;  
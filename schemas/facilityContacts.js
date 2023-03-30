const facilityContacts = {
 
    name: "facilityContacts",
  title: "Facility Contacts",
  type: "document",
  fields: [
   
  {
      name: "plumber",
      title: "Plumber",
      type: "array",
      
     of: [
        {
          type: 'object',
           fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "phone",
          title: "Phone",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "rating",
          title: "Rating",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "charge",
          title: "Charge",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "icon",
          title: "Icon",
          type: "image",
          validation: (Rule) => Rule.required(),
        },
      ],
        },
      ],
    },
    {
      name: "carpenter",
      title: "Carpenter",
      type: "array",
     of: [
        {
          type: 'object',
           fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "phone",
          title: "Phone",
          type: "string",
        },
        {
          name: "rating",
          title: "Rating",
          type: "string",
        },
        {
          name: "charge",
          title: "Charge",
          type: "string",
        },
        {
          name: "icon",
          title: "Icon",
          type: "image",
        },
      ],
        },
      ],
    },
    {
      name: "electrician",
      title: "Electrician",
      type: "array",
     of: [
        {
          type: 'object',
           fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "phone",
          title: "Phone",
          type: "string",
        },
        {
          name: "rating",
          title: "Rating",
          type: "string",
        },
        {
          name: "charge",
          title: "Charge",
          type: "string",
        },
        {
          name: "icon",
          title: "Icon",
          type: "image",
        },
      ],
        },
      ],
    }
  ],
}

export default facilityContacts

//    const facilities =
//         [
            
//                 {
//                     title: "Electrician",
//                     src: electricianimg,
//                     employees: [
//                      {
//                     name: 'Ramesh Gautam',
//                     phone: '+913332456337',
//                     rating: '3.5',
//                     charge: '200',
//                     src: electricianimg1
//                 }, {
//                     name: 'Prem Sahu',
//                     phone: '+913332456337',
//                     rating: '3.5',
//                     charge: '200',
//                     src: electricianimg1
//                 }]
//                 },
    
            
//         ];

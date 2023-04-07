const userSchema = {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alternate',
      title: 'Alternate Phone',
      type: 'string',
      description: 'optional',
    },
    {
      name: 'wing',
      title: 'Wing',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'flat',
      title: 'Flat',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'allowed',
      title: 'Allowed',
      type: 'boolean',
      description: 'Toggle to allow or disallow user',
      validation: (Rule) => Rule.required(),
    }
  ],
};

export default userSchema ;
      
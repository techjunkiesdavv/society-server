const about= {  name:'about',
    title:'About',
    type:'document',
    fields:[
        {
            name:'heading',
            title:'Heading',
            type:'string',
            validation: Rule => Rule.required(),
        },
        {
            name:'content',
            title:'Content',
            type:'string',
            validation: Rule => Rule.required(),
        }
    ],
    
    }

export default about ;  
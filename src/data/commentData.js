const comments = [
    {
        id: 1,
        comment:'This is the 1 comment',
        replies:[
        {
            id: 3,
            comment:'This is the f3 reply',
            replies:[
                {
                    id: 4,
                    comment:'This is the 4 again reply',
                    replies:[{
                        id: 7,
                        comment:'This is the 7 again reply',
                        replies:[]
                    }]
                },
                {
                    id: 6,
                    comment:'This is the 6 again reply',
                    replies:[]
                }
            ]
        },
        {
            id: 5,
            comment:'This is the 5 second reply',
            replies:[]
        }]
    },
    {
        id: 2,
        comment:'This is 2 comment',
        replies:[]
    }
];
export default comments;


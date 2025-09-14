
export const docesConfig = {
    mainNav: [
        {title: "Docs" , url: "/docs"} ,
        {title: "Components" , url: "/conponents"}, 
        {title: "Blot" , url: "/blogs"}, 
    ],

    navMain:[ 
        {  
         title: "Getting Started" ,
         url: "/docs/getting-started",
         items:[
            {title: "Installation" , url: "/docs/installation"},
            {title: "introduction" , url:"/docs/introduction"},
         ]
        },
        {
            title: "Components",
            url: "/components",
            items: [
                {title: "Button" , url: "/docs/components/button" , isActive: true},
            ]
        }
    ],

    sidebarNav: { 
        gettingStarted: [ 
            {title: "Installation" , url: "/docs/installation"}, 
            {title: "introduction" , url:"/docs/introduction"},
        ], 
        components: [
            {title: 'button' , url: "/components/button"},
        ]
    }

}

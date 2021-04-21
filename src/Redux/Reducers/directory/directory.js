const initialState ={
    sections:[
        {
        title:"HATS",
        imageUrl:"https://i.ibb.co/cvpntL1/hats.png",
        id:0,
        linkUrl:"shop/hats"
    },
    {
        title:"JACKETS",
        imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",
        id:1,
        linkUrl:"shop/jackets"
    },
    {
        title:"SNEAKER",
        imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",
        id:2,
        linkUrl:"shop/sneakers"
    },
    {
        title:"MEN",
        imageUrl:"https://i.ibb.co/R70vBrQ/men.png",
        id:3,
        size:"large",
        linkUrl:"shop/mens"
    }, 
    {
        title:"WOMEN",
        imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",
        id:4,
        size:"large",
        linkUrl:"shop/womens"
    },
   
]
}



export const Directory = (state=initialState,action)=>{
switch(action){
    default:
        return state;
}


}


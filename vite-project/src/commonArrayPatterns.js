const shoppingCart=[
    {id:1,product:"Plum Cake",Price:20},
    {id:2,product:"pala Kova",Price:10},
    {id:3,product:"Biryani",Price:120},
];
// Adding to Array
[...shoppingCart,{id:4,product:"Cofee Mug",Price:7.99}];
// Removing an element
shoppingCart.filter((item)=> item.id!==2)
//updating all elements in an Array
shoppingCart.map((item)=>{
    return {
        ...item,product:item.product.toLowerCase(),
    };
});
// modifying a particular element in an Array
shoppingCart.map((item)=>{
    if(item.id===3){
        return {...item,price:10.99};
    }
    else{
        return item;
    }
});
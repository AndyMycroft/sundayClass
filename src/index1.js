const favoriteFood = [
    {
        id:1,
        name: 'pizza',
        isHot: true,
        isWestern: true,
    },
    {
        id:2,
        name: 'steak',
        isHot: true,
        isWestern: true,

    },
    {
        id:3,
        name: '回锅肉',
        isHot: true,
        isWestern: false,
        },
        {
            id:4,
            name: '麻婆豆腐',
        isHot: true,
        isWestern: false,
        }
]
var IsWestern = function(ListDishes){
    for(var ii=0;ii<ListDishes.length;ii=ii+1){
        var item = ListDishes[ii]
        if(favoriteFood.isWestern===true){
        console.log(item)
    }
    }
    
}
// IsWestern(favoriteFood)
// var FindNameDishes = function(ListDishes){
//     for(var ii=0;ii<ListDishes.length;ii=ii+1)
//      var item = ListDishes[ii]
//      if(item.name===pizza){
//          console.log(item)
//      }
//      else{
//          console.log("null")
//      }
// }
// IsWestern(favoriteFood)
const pizza = favoriteFood.find(function(item){
    return (item.name ==='pizza')

})
const steak = favoriteFood.find(function(item){
    return (item.id===1)
})

console.log(steak)
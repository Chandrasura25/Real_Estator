let allProducts = [
    {name:'Rice',price:45000,id:'1'},
    {name:'Kpomo',price:700,id:'2'},
    {name:'Beans',price:40000,id:'3'},
    {name:'Indomie',price:3700,id:'4'}
]
export default function handler(req,res){
    res.send(allProducts)
} 
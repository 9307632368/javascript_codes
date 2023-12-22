array=[2,3,4,6,8];
const mulArray= array.map((currentElem)=>{
    return currentElem*2;
}).filter((currentElem)=>{
    return currentElem>10;
})
   
console.log(mulArray);

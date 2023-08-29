const mul = (...args) =>{
    let mul = 1;
 for(let i=0;i<args.length;i++){
  mul = mul * args[i]; 
 }
 return mul;
}
module.exports = { mul }

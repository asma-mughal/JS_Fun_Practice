const mul = (...args) =>{
    let mul = 1;
 for(let i=0;i<args.length;i++){
  mul = mul * args[i]; 
 }
 return mul;
}
const min = (...args) =>{
    let min =0;
 for(let i=0;i<args.length;i++){
  if(args[i] < min){
    min = args[i]
  }
 }
 return min;
}
const max = (...args) =>{
    let max =0;
 for(let i=0;i<args.length;i++){
  if(args[i] > max){
    min = args[i]
  }
 }
 return max;
}
const addRecurse = (...nums) =>{
    let sum =0;
    if(nums.length === 0 ){
        return 0;
    }
    else {
       sum = sum + nums[nums.length - 1];
        return sum + addRecurse(...nums.slice(0, nums.length - 1));
      }
}
const maxRecurse = (...nums) =>{
    let min =nums[0];
    if(nums.length === 0) {
      return infinity
    }
    else {
       const lastNumber = nums[nums.length - 1];
        if (lastNumber < min) {
            min = lastNumber;
        const minRest = maxRecurse(...nums.slice(0, nums.length - 1));
        if (minRest < min) {
            min = minRest;
        }
        
        return min;
    }
}
}
module.exports = { mul, min, max ,addRecurse}

// object Array function

let obj:{id:number,name:string,age:any} = { id: 1, name: "doniyor" ,age:23}
let arr3:number[] = [1,2,3]
function add(x:number,y:number):string|number {
   return x+y
}

let add2 = function (x:number,y:number):string|number  {
   return x+y
}
let add3 =  (x:number,y:number):string|number|void => {
   return x+y
}
console.log(add3(1,2))
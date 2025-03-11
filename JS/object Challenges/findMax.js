const arr = [5,2,3,4,1,10,19,6,23];

let result= arr.reduce((acc, current)=>{
    if (current>acc){
        acc = current
    }
    return acc
}, arr.length>0?arr[0]:"arry is empty")

console.log(result);



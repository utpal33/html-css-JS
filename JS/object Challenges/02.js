let users = [
    { firstName:"utpal", lastName:"kant", age:27, location:'bihar' },
    { firstName:"himanshu", lastName:"kamina", age:27, location:'chattisgarh' },
    { firstName:"vinay", lastName:"kumar", age:30, location:'jharkhand' },
    { firstName:"utsav", lastName:"jha", age:24, location:'bihar' },
    { firstName:"akash", lastName:"xyz", age:30, location:'banglore' },
]

//  list of fullname of all users
let fullName = users.map((item)=>{
    return item['firstName']+ " "+ item['lastName']
    // return 
})


// groupBy users which are from same location
const locationGroupBY = users.reduce((acc, user)=>{
    if(!acc[user.location]){
        acc[user.location] = [user]
    }
    else {
        acc[user.location].push(user)
    }
    return acc
    
}, {})


// count users have same location
const userCountOfSameLocation = users.reduce((acc, user)=>{
    if (!acc[user.location]){
        acc[user.location] = 1
    }
    else
        acc[user.location] +=1
    return acc
}, {})


//    
const firstName = users.filter((user)=> user.age<30).map((user)=> user.firstName)
// console.log(firstName);

    /* using reduce method */
const reduceFirstName = users.reduce((acc, user)=> {
    if(user.age<30){
        acc.push(user.firstName)
    }
    return acc
}, [])
console.log(reduceFirstName);
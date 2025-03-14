let mymap = new Map([
    [1, {name:"utpal", address: "bihar"}],
    [2, "Learn React"],
    [3, "Build a project"],
    [4, "Apply for jobs"],
    [true, "applying for jobs"],
    [false, "this is false key"]

])

// console.log(mymap.get(1));
// mymap.set(2, {name:"kant" , address:"bihar"})
// console.log(mymap.values());

// mymap.forEach((value, key)=> console.log(key, value))


//delete the elemnet which matches the key. and return boolean value;
// console.log(mymap.delete(2));

// return length of Map
// console.log(mymap.size);

// delete all the elements of Map Object
        /* console.log(mymap.clear());
        console.log(mymap); */


// console.log(mymap.entries());

// returns boolean value if the key is present or not in the Map;
// console.log(mymap.has(false));


console.log(mymap.name);


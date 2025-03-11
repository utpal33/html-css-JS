//  Merge Two arrays by Id

const arr1 = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' }
  ];
  
const arr2 = [
{ id: 1, age: 25 },
{ id: 2, age: 30 }
];

const myMap = new Map()

arr1.forEach(obj=> myMap.set(obj.id, obj))
arr2.forEach(obj=> myMap.set(obj.id, { ...myMap.get(obj.id), ...obj }))

console.log();


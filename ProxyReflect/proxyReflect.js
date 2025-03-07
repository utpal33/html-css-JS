const p1 = {
    fname : "utpal",
    lname: "kanr",
    age:28
}

console.log(p1.age);


// porxy Layer : i.e a validation layer for an object to directly or wronglumanipulate by the user
// new proxy (target_Object, handler_Object) handler itself is an object which defines some validation for targeted object

const p1_proxy = new Proxy(p1  ,{

    get(target, prop) {
        return prop in target? Reflect.get(target, prop):false;
    },
    set(target, prop, value){
        if (prop in target){
            switch (prop) {
                case "fname":
                case "lname":
                    if (typeof value !== "string") throw new Error(`${prop} value must be a string`)
                    break;
                case "age":
                    if (typeof value !== "number") throw new Error(`${prop} value must be number`);
                    break;
                default:
                    Reflect.set(target, prop, value)
                    break;
            }
        }
    }
});

console.log(p1_proxy.agee);
console.log(p1_proxy.pro)
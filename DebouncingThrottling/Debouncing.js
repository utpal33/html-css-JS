function debounce(fn, delayTime){
    let timerId;

    return function (...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn(...args)
        }, delayTime)
    }
}

function search(query){
    console.log(`searching for ${query}`);
}

let searchWithDebounce = debounce(search, 1000)


let query = 'utpal kant'
let searchedQuery="";
for(let i=0; i<query.length; i++){
    searchedQuery += query[i]
    searchWithDebounce(searchedQuery);

}
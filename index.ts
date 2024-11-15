// generics 


const addId = (obj: object) => {
    let id = Math.floor(Math.random() * 100)
    return {...obj, id }
}

let user = addId({
    name: 'John',
    age: 30,
})

console.log(addId);
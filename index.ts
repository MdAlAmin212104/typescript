// generics 


const addId = <T>(obj: T) => {
    let id = Math.floor(Math.random() * 100)
    return {...obj, id }
}

let user = addId({
    name: 'John',
    age: 30,
})

user.age = 30


interface apiResponse<T> {
    status: number;
    position: string;
    data: T;
}


const response1 : apiResponse<object> = {
    status: 200,
    position: 'New York',
    data: {
        name: 'John',
        age: 30,
    },
}
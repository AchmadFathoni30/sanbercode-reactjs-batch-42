const myCountPromise = (param) =>{
    return new Promise( (resolve, reject) =>{
        if (param != undefined) {
            setTimeout(() => {
                resolve(param * 2)
            }, 2000)
        } else {
            setTimeout(() =>{
                reject("Maaf tidak ada nilai dalam parameter");
            }, 2000)
        }
    })
}

myCountPromise(2)
.then((result) =>{
    console.log(result)
})
.catch((error) =>{
    console.log(error)
})
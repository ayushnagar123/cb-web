function getCoffee(name,amount){
    const f=(resolve)=>{
        setTimeout(()=>{
            resolve("Coffee")
        },2000)
    }
    const p1 = new Promise(f)
    return p1
}
const coffeePromise=getCoffee("Cold Brew")
const drink = (coffee)=>console.log("Yumm")

coffeePromise.then(coffee=>{
    drink(coffee)
})
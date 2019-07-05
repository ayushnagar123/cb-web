const generatePromise=val=>n=>{
    
    const p1=new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(val)
        },n)
    })
}
generatePromise("Cold drink piyega")(1000).then(console.log)
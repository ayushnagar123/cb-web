function getJob(field,type){
    const f=(resolve)=>{
        setTimeout(()=>{
            resolve("got job")
        },5000)
    }
    const p2=new Promise(f)
    return p1
}

function getDegree(name,degree){
    const f=(resolve)=>{
        setTimeout(()=>{
            resolve(name+"get the"+ degree+" degree")
        },4000)
    }
    const p1=new Promise(f)
    return p1
}

const degreePromise=getDegree("Ayush","B.tech")
degreePromise.then(degree=>{
    console.log("get degree")
    var getJob=getJOb("IT","Developer")
    getJob.then(degree=>{
        console.log("get job")
    })
}).catch(err=>{console.log("complete your degree")})

// It emit if the promise is resolve or reject more than once or resolve after reject or reject after resolve

process.on('multipleResolves',(type,promise,reason)=>{
    console.error(type,promise,reason)
    setImmediate(()=>process.exit(1))
})

async function main(){
    try{
        return await new Promise((resolve,reject)=>{
            resolve('First call');
            resolve('Swallowed resolve');
            reject(new Error('Swallowed reject'))
        })
    }
    catch{
        throw new Error('Failed')
    }
}

main().then(console.log)
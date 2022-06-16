//2...............
console.log('a');
console.log('b');
setTimeout(() => console.log('c'), 3000)
setTimeout(() => console.log('d'), 0)
console.log('e');
//o/p=>a,b,e,d,c


//3...........
async function init(){
    console.log('a');
    console.log('b');
    await new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('c')
            resolve();
        }, 3000)
    }) 
    await new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('d')
            resolve();
        }, 0)
    })
    console.log('e');
}
init();
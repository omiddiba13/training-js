 const promise = new Promise ( function(resolve,reject){
    let x=0 ; 
    if (x===0)
resolve("ok")
;
else {
    reject("tere is an error")
}
 });

 promise 
    // .then((resolveValue)=>{
    //     console.log(resolveValue)

    // })
    .then((value)=>`${value} first`)
    .then((value)=>`${value} tow`)
    .then((value)=>`${value} tree`)
    .then((value)=>`${value} four`)
    .then((value)=>{console.log(value)})
        
.catch((errValue)=>{
    console.log(errValue);
});

; 
async function justAName(){ 
    return "hi";
}
console.log(justAName()); // this give us promise // es8 

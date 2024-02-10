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
    .then((resolveValue)=>{
        console.log(resolveValue)

    })
.catch((errValue)=>{
    console.log(errValue);
});

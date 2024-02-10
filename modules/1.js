
// export default 
function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
  }
   //export 
    function sumNums(...aegs){
  let sum = 0 ;
  aegs.forEach((num)=>(sum+=num));
  return sum 
}



///

const person = {f:'omid' , l:'diba',age:30}



export { randomColor as default, sumNums, person }
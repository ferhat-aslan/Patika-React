import axios  from "axios";

// function topla(a,b) {
//     return a+b;
    
// }
// //const cikar=(a,b)=>a-b;

// export default topla;
async  function data(number) {

    let { data:user }= await axios("https://jsonplaceholder.typicode.com/users/"+ number);
    let { data:post }= await axios("https://jsonplaceholder.typicode.com/posts?userId="+ number);

    console.log(user,post);
}
export default data;

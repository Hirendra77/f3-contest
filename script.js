// fetch("https://dummyjson.com/products")
// .then((response)=> response.json())
// .then((data)=>{
//     console.log(data);
//     let myImg = data.image;
//     let mydiv = document.getElementById("name");
//     myImg.map((image)=>{
        
//     })
// })


fetch("https://dummyjson.com/products")
.then((response)=>response.json())
.then((data)=>{
    console.log("ShowData",data);
    let myArr=data.products;
    
    let myDiv=document.getElementById("container")
    myArr.map((product)=>{
        myDiv.innerHTML+=
     `<div class="card">
     <div class="card-image">
         <img src="${product.images[0]}" alt="image">
     </div>
     <div class="card-body">
         <div class="details">
             Title:${product.title}
         </div>

         <div class="brand">
             Brand:${product.brand}
         </div>

         <div class="price">
             Price:${product.price}
         </div>

         <div class="rating">
             Rating:${product.rating}
         </div>

         <div class="stock">
             Stock:${product.stock}
         </div>

         

     </div>
     
 </div>`
       
            
        
        
    });
})



// // Fetching data from an API using .then is to make a GET request to the API endpoint.-
// fetch('https://dummyjson.com/products').then( (apidata)=> {
// console.log(apidata);
// return apidata.json();
// }).then((actualdata)=>{
//     console.log(actualdata);

//       //Data shown as UI. Rendering  all of the products in the form of a flexwrap, as shown in the UI.-
//       for(let i=0;i<30;i++)
//       {
//         //const button=document.createElement("btn");
//         const alldata=actualdata.products[i];
//         for(let i=0;i<1;i++)
//         {
//         const fetchdata=document.createElement("div");
//         fetchdata.innerHTML=

//       //A.Product contains information such as [name, id, image, price, rating, discount, and stock].
//       //B.Data correctly extracted from API response [Extraction of Data Correctly].
//       `<img src=${alldata.images[i]} alt="photo"
//       height="400"; 
//       width="300"; 
//       border="1px solid black";
//       box-sizing="border-box";  
//       />
//       <br>
      
//       Title-  ${alldata.category} &nbsp &nb
let  getDiv = document.getElementById("getDiv")
let getsearch = document.getElementById("news")
let getnews = () => {
fetch (`https://newsapi.org/v2/everything?q=${getsearch.value}&from=2024-10-11&to=2024-10-11&sortBy=popularity&apiKey=ca620c025f954f08aa73085d01205306`)
      .then(data => data.json())
      .then(data => {
for (let i = 0; i <data.articles.length; i++){
      console.log(data);
// getDiv.innerHTML += `<div class="card m-5" style="width: 18rem;">
//   <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
//   <div class="card-body ">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`     

               //aik sy zyada card lagany ka method

getDiv.innerHTML = `<div class="card m-5" style="width: 18rem;">
  <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
  <div class="card-body ">
    <h5 class="card-title">Karachi news</h5>
    <p class="card-text">this is the karachi news alert.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>      

<div class="card m-5" style="width: 18rem;">
  <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
  <div class="card-body ">
    <h5 class="card-title">Karachi news</h5>
    <p class="card-text">this is the karachi news alert.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>  

            // apni save pic lagany ka  method

<div class="card m-5" style="width: 18rem;">
  <img src="${"https://th.bing.com/th/id/OIP.6hdvcRQxbCPypRxJwFNKJwHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.3"} class="card-img-top" alt="...">
  <div class="card-body ">
    <h5 class="card-title">image</h5>
    <p class="card-text">for maam Shafaque.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>` 

}
      }

      )  
}
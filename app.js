function search(){
    if(document.getElementById('topicName').value.trim()==''){
        alert("You Can't Leave it empty");
    }else{
    var input=document.getElementById('topicName').value;
    fetch(`https://newsapi.org/v2/everything?q=${input}&from=2024-05-15&sortBy=publishedAt&apiKey=7794a0f650e64d8f94bd055d36fef11f`)
    .then(function(response) {
      if (!response.ok) {

console.log("Error Detected line#010") 
     }
      return response.json();
    })
    .then(function(data) {
        console.log(data);
        document.getElementById('topicShow').innerText=`Showing Result of ${input},total news ${data.totalResults}`
        document.getElementById('resultsContainer').innerHTML='';
        for(var i=0;i<data.articles.length;i++){
            if(data.articles[i].title!='[Removed]'){
                if(data.articles[i].urlToImage==null){
                    data.articles[i].urlToImage='https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png';
                }
            document.getElementById('resultsContainer').innerHTML+=`<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="News image">
  <div class="card-body">
  <p>Dated:${data.articles[i].publishedAt}</p>
    <h5>${data.articles[i].title}</h5>
    <p class="card-text">${data.articles[i].description}</p>
  <button><a href="${data.articles[i].url}">Read More</a></button>
</div>
</div>
`
            }}




    })
    
   
  
}
}
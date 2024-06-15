loadHome();
function search(){
  if(document.getElementById('topicName').value.trim()==''){
      alert("You Can't Leave it empty");
  }else{
  var input=document.getElementById('topicName').value;
  fetch(`https://newsdata.io/api/1/news?apikey=pub_46447f0aba730f2b20c23f7da0a4d67af2839&q=${input}`)
  .then(function(response) {
    if (!response.ok) {
alert("Error #010");
}
    return response.json();
  })
  .then(function(data) {
      console.log(data);
      document.getElementById('topicShow').innerText=`Showing Result of ${input},total news ${data.totalResults}`
      document.getElementById('resultsContainer').innerHTML='';
      for(var i=0;i<data.results.length;i++){
     
          if(data.results[i].title!='[Removed]'){
              if(data.results[i].image_url==null){
                  data.results[i].image_url='https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png';
              }

             
          document.getElementById('resultsContainer').innerHTML+=`<div class="card" style="width: 18rem;margin:20px">
<img class="card-img-top imgCard" src="${data.results[i].image_url}" alt="News image">
<div class="card-body">
<p><b>Published:</b>${data.results[i].pubDate}</p>
  <h5>${data.results[i].title}</h5>
      <p><b>Source:</b>${data.results[i].source_id}</p>
<button class="btn btn-primary"><a style="color:white;" target=blank href="${data.results[i].source_url}">Read More</a></button>
</div>
</div>
`
          }}
  })
}}

  






  function loadHome(){  
    fetch(`https://newsdata.io/api/1/news?apikey=pub_46447f0aba730f2b20c23f7da0a4d67af2839&q=news&country=pk&language=en&category=world `)
    .then(function(response) {
      if (!response.ok) {
  alert("Error");
  }
      return response.json();
    })
    .then(function(data) {
        console.log(data);
        document.getElementById('resultsContainer').innerHTML='';
        for(var i=0;i<data.results.length;i++){
          console.log(i) 
            if(data.results[i].title!='[Removed]'){
                if(data.results[i].image_url==null){
                    data.results[i].image_url='https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png';
                }
  
               
            document.getElementById('resultsContainer').innerHTML+=`<div class="card" style="width: 18rem;margin:20px">
  <img class="card-img-top imgCard" src="${data.results[i].image_url}" alt="News image">
  <div class="card-body">
<p><b>Published:</b>${data.results[i].pubDate}</p>
  <h5>${data.results[i].title}</h5>
      <p><b>Source:</b>${data.results[i].source_id}</p>
  <button class="btn btn-primary"><a style="color:white;" target=blank href="${data.results[i].source_url}">Read More</a></button>
  </div>
  </div>
  `
            }}
             })
             }

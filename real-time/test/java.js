
https://api.nytimes.com/svc/search/v2/articlesearch.json?q=arts&api-key=39ALIhXqQVpHf5lj34APoFVUbPOsnvHt&begin_date=20120101&end_date=20121231


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //getMonth() is 0 based
var yyyy = today.getFullYear();
if(dd < 10) {
    dd = '0' + dd;
} 
if(mm < 10) {
    mm= '0' + mm;
} 
today = yyyy + mm + dd;
console.log("Today is " + today);

// read the JSON file

var xmlhttp = new XMLHttpRequest();

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&begin_date=20200430$end_date=20200429&api-key=39ALIhXqQVpHf5lj34APoFVUbPOsnvHt'; 
//your file name (or, the structured URL for API call)
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid-19&api-key=YOUR_KEY&begin_date=" + today + "&end_date=" + today;
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    printArticles(data);
  
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function printArticles(data){
  var docs = data.response.docs;
  for (i = 0; i < docs.length; i++) {
      
    var articleContainer= document.createElement("div");
    articleContainer.classList.add('article-container');

    var title = document.createElement("div");
    title.classList.add("article-title");
    title.innerText = docs[i].headline.main;
    title.href = docs[i].web_url;
    title.target = "_blank";
 //  anchor.target
// <li class="articles">
//   <a href="URL" target="_blank">HEADLINE</a>
// </li>

    


    var image = document.createElement("img");
    image.classList.add("article-image");
    var imageUrl;
    for (j = 0; j < docs[i].multimedia.length; j++){
      if (docs[i].multimedia[j].type == "image") {
        imageUrl = docs[i].multimedia[j].url;
        break; 
      }
        //  [i] is the iterater ,cycling thorugh article
           // [j] is multimedia
       // JavaScript Break statement 
    }
    image.src = "http://www.nytimes.com/" + imageUrl;
    
    articleContainer.appendChild(title);
    articleContainer.appendChild(image);
    document.getElementById("article-list").appendChild(articleContainer);
  }
}

 function showArticleImageAndText(event) {
    //REVEAL THE IMAGE ON CLICK
    var image = event.target.nextSibling;
    image.classList.add("visible");

    //ADD THE ARTICLE TEXT TO THE PAGE
    var articleText = document.createElement("div");
    //find the article in our database
    var matchingArticle = data.filter(function (article) {
      return docs[i].headline.main === event.target.innerHTML
    });
    //get the abstract from the matching article and put it in the element
    articleText.innerHTML = matchingArticle[0].abstract;
    //append the element to the page
    document.getElementById("article-text-container").appendChild(articleText);
  };




https://api.nytimes.com/svc/search/v2/articlesearch.json?q=arts&api-key=39ALIhXqQVpHf5lj34APoFVUbPOsnvHt&begin_date=20120101&end_date=20121231


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //getMonth() is 0 based
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}
today = yyyy + mm + dd;
console.log("Today is " + today);

// read the JSON file

var xmlhttp = new XMLHttpRequest();

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&begin_date=20200101&api-key=39ALIhXqQVpHf5lj34APoFVUbPOsnvHt';
//your file name (or, the structured URL for API call)
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid-19&api-key=YOUR_KEY&begin_date=" + today + "&end_date=" + today;
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    // console.log(data);
    init()
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function printArticles (docs) {
  var list = document.getElementById("article-list")

  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }

  for (i = 0; i < docs.length; i++) {

    var articleContainer = document.createElement("div");
    articleContainer.classList.add('article-container');

    var title = document.createElement("div");
    var p = document.createElement("p");
    p.innerText = docs[i].headline.main
    title.classList.add("article-title");
    title.appendChild(p);
    title.href = docs[i].web_url;
    title.target = "_blank";
    // title.addEventListener('click', showArticleImageAndText)
    p.addEventListener('click', showArticleImageAndText)

    var image = document.createElement("img");
    image.style.maxWidth = '200px'
    image.style.maxHeight = '200px'
    image.classList.add("article-image");
    var imageUrl;
    for (j = 0; j < docs[i].multimedia.length; j++) {
      if (docs[i].multimedia[j].type == "image") {
        imageUrl = docs[i].multimedia[j].url;
        break;
      }
    }
    image.src = "http://www.nytimes.com/" + imageUrl;
    if (i % 2 == 0) {
      articleContainer.appendChild(title);
      title.style.textAlign = 'left'
      articleContainer.appendChild(image);
    } else {
      articleContainer.appendChild(image);
      articleContainer.appendChild(title);
      title.style.textAlign = 'right'

    }

    list.appendChild(articleContainer);
  }
}

function showArticleImageAndText (event) {
  //REVEAL THE IMAGE ON CLICK
  var image = event.target.nextSibling ||
    event.target.previousSibling ||
    event.target.parentNode.nextSibling ||
    event.target.parentNode.previousSibling;

  var nodes = document
    .getElementById('article-text-container')
    .childNodes;

  if (document
    .getElementById('place-holder'))
    document
      .getElementById('article-text-container').removeChild(document
        .getElementById('place-holder'))

  nodes.forEach(node => {
    console.log(node.firstChild)
    if (node.firstChild) {
      console.log(parseFloat(node.style.opacity))
      node.style.opacity = 0.2 + ""
    }
  })

  image.classList.add("visible");

  //ADD THE ARTICLE TEXT TO THE PAGE
  var articleText = document.createElement("a");
  //find the article in our database
  var matchingArticle = data.response.docs.find(function(article) {
    // console.log(article)
    return article.headline.main === event.target.innerHTML
  });
  // console.log(matchingArticle)
  //get the abstract from the matching article and put it in the element
  articleText.innerHTML = matchingArticle.abstract;
  //append the element to the page
  var articleTextWarpper = document.createElement("div");

  articleText.classList.add('element');
  articleText.href = matchingArticle.web_url
  articleText.style.color = getColor();
  articleText.target = '_blank'
  articleTextWarpper.appendChild(articleText);
  articleTextWarpper.classList.add('article-text-warpper')
  document.getElementById("article-text-container").appendChild(articleTextWarpper);
};

function getColor () {
  return `rgb(${getPigment()},${getPigment()},${getPigment()})`
}

function getPigment () {
  return Math.floor(Math.random() * 256)
}

function replace () {
  var index = Math.random() * (data.response.docs.length - 4);

  printArticles(data.response.docs.slice(index, index + 4))
}

function init () {
  document.getElementById('bar').addEventListener('click', replace)
  printArticles(data.response.docs.slice(0, 4));
}



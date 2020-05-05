
 // creating two divs 
 //the document.createElement() method creates the HTML element specified by tagName

var div1 = document.createElement('div');
div1.className = 'sidebar';
//GetElementsByTagName() will retrieve an array of all element objects with the specified tag name. "div1"
// Create a new paragraph element, and append it to the end of the document body
document.getElementsByTagName('body')[0].appendChild(div1);

var div2 = document.createElement('div');
div2.className = 'content';
document.getElementsByTagName('body')[0].appendChild(div2);

//assigning an array
var pages = ["home", "writings", "drawings", "sketchbook",
"prints", "travel", "organizations", "contact", "links"];


//select sidebar
var sidebar = document.querySelector(".sidebar");
//for loop to create sidebar
// counting from 1 and reach to the end of the length
for (let i =0; i < pages.length; i++) 
{
  console.log(pages[i]);
  //generate texts for the sidebar, "tags".
  var link = `<a href =" " class="sidebar-link"> ${pages[i]}</a >`;
  // change the list into links 
  sidebar.innerHTML += link; 
}



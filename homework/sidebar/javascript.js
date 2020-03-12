var div1 = document.createElement('div');
div1.className = 'sidebar';
document.getElementsByTagName('body')[0].appendChild(div1);

var div2 = document.createElement('div');
div2.className = 'content';
document.getElementsByTagName('body')[0].appendChild(div2);


var pages = ["home", "writings", "drawings", "sketchbook",
"prints", "travel", "organizations", "contact", "links"];



var sidebar = document.querySelector(".sidebar");
for (let i =0; i < pages.length; i++) {
  console.log(pages[i]);
  var link = `<a href =" " class="sidebar-link"> ${pages[i]}</a >`;
  sidebar.innerHTML += link; 
}
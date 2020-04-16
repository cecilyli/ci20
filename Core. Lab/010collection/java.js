//generating elements with JavaScript

var mirrorContainer =document.getElemenetById
("mirror-container");

var Data = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

//this is the part where you 'd add the actual element to your HTML file'

for (var i=0;i <data.length; i++){
	var image = document.createElement("img"); //property
	image.classList("mirror") ;//class 
	image.src = data[i];

	mirrorContainer.appendChild(image);

}







//querySelector allow you to select elements like you would in css
//quertSelectorAll

var mirrors= document.querySelectorAll(".mirror");

for (var i=0; i < mirror.length; i++){
	mirrors[i].addEventListener("click",handleCLick);
}


function handleCLick(event){
   //remove the filter we applied to the clicked  mirror elemnet
  console.log(event.target);


  var revealedElements = document.querySelector(".clicked");

  if (revealedElement) {
  } revealedElement.classlist.remove("clicked");

  event.target.classlist.add("clicked");
}
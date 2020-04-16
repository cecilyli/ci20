
function show(target){

  var items = document.querySelectorAll('.items');
  for (i = 0; i < items.length; i++) {
    items[i].classList.remove('shown');
  }
  
  var selected = document.querySelectorAll(target);
  for (i = 0; i < selected.length; i++) {
    selected[i].classList.add('shown');
  }

 //remove highlights from nav first...
  var filter = document.querySelectorAll('.filter');
  for (i = 0; i < filter.length; i++) {
    filter[i].classList.remove('selected');
  }
  //then  highlight the current
  if (target !== ".items"){
  event.target.classList.add('selected'); 
  }
}
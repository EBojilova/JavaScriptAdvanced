window.onload = function(){
  var selectedElement = document.getElementById("the-button");
  function onButtonClick(event){
      console.log(this);
      console.log(event)
      console.log(this === selectedElement); //logs true
  }
  selectedElement.addEventListener("click", onButtonClick,false);
};

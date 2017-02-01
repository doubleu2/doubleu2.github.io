
//js to work with the tabs
function openCity(evt, cityName){
  var i, tabeContent, tablinks;
  tabContent = document.getElementsByClassName('tabContent');

  //loop through the tabs
  for(i=0; i< tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }


  tablinks = documentElement.getElementsByClassName('tablinks');
  for (i=0; i<tablinks.length; i<++){
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(citName).style.display = "block"
  evt.currentTarget.className += " active";
}

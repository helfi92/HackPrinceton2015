function loadImage(searchTerms) {
	var searchTerms = $("#search").val() ;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     	
     	var json = JSON.parse(xhttp.responseText); 
     	console.log(json);
      //document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "/api?searchTerms="+searchTerms, true);
  xhttp.send();

}

function formatSearchTerms(searchTerms){
	
}
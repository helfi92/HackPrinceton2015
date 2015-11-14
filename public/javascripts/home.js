$(document).ready(function() {
    $("#myTags").tagit({
    	afterTagAdded: function(event, ui){
    		var tags = $("#myTags").tagit("assignedTags");
    		//formatSearchTerms(tags);
    		console.log(ui);
    		console.log(event);

    	}
    });
});


function loadImage(searchTerms) {
	//var searchTerms = $("#search").val() ;
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

function formatSearchTerms(){
	var tagArray = $("#myTags").tagit("assignedTags");
	var plus = encodeURIComponent('+'); 
	var formmatedString = "";
	for( var i = 0 ; i < tagArray.length ; i++){
		if(formmatedString.length == 0){
			formmatedString = tagArray[i];
		}else{
			formmatedString += plus + tagArray[i]; 
		}
	}
	console.log(formmatedString);
	loadImage(formmatedString);
}
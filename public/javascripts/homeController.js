app.controller('homeController',['$scope','$timeout', function($scope,$timeout){
	$scope.section = 0;
    $scope.list = [];

    $scope.selectItem = function(index){
    	if($scope.section == 0){
    		console.log($scope.list[index].thumbnailImage);
    		$scope.imageHat = $scope.list[index].thumbnailImage;
    	}
    }

	$(document).ready(function() {
	    $("#myTags").tagit({
	    	afterTagAdded: function(event, ui){
	    		formatSearchTerms();
	    	}
	    });
	});

	function loadImage(searchTerms) {
		//var searchTerms = $("#search").val() ;
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
	     	
	     	var json = JSON.parse(xhttp.responseText); 
	     	$scope.list = json.items;
	     	$timeout();
	     	console.log('list is: ' + $scope.list);
	     	console.log(xhttp.responseText);
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
}]);
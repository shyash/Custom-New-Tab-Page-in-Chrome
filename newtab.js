document.addEventListener('DOMContentLoaded', function () {
  
     chrome.storage.local.get(['content'], function(result) {
          if(result.content){
            document.querySelector("html").innerHTML = result.content
          }
          
        });
 
});
	   
  
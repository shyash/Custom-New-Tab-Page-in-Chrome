document.addEventListener('DOMContentLoaded', function () {
  (function() {
     chrome.storage.local.get(['content'], function(result) {
          if(result.content){
            document.querySelector("textarea").value = result.content
          }
          
        });
  })()
  document.querySelector('button').addEventListener('click', save);
});
	   
    function save() {
		chrome.storage.local.set({content: document.querySelector("textarea").value}, function() {
          console.log('Value is set to ' + document.querySelector("textarea").value);
        });
	}  

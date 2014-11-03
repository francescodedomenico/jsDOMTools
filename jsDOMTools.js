//jsDOMTools v0.2
//author: Francesco De Domenico
//website: https://github.com/frankdd89/jsDOMTools
function removeElementByID(id){
    var elem = document.getElementById(id);
    if (elem != null) elem.parentNode.removeChild(elem);
}
function containsString(str, toSearch){
    for(var x=0;x<str.length;x++){
      if(str.substring(x,x+toSearch.length)==toSearch){
        return true;
      }
    }
    return false;
  }
  function getElementsWithClassName(className){
    var allNodes = document.getElementsByTagName("html")[0].childNodes;
    var toReturn = new Array();
    for(var i=0;i<allNodes.length;i++){
      var tempClass = allNodes[i].getAttribute("class");
      if(containsString(tempClass,className))
        toReturn.append(allNodes[i]);
    }
    return toReturn;
  }
function getElementByClassName(tagName, className) {
		var allTagNodes = document.getElementsByTagName(tagName);
		var ret = new Array();
		var cont = 0;
		if (allTagNodes != null) {
			for (var i = 0, il = allTagNodes.length; i < il; i++) {
				if (allTagNodes[i].getAttribute("class")==className){
						ret[cont] = allTagNodes[i];
						cont++;
					}
			}
		}
		return ret;
	}
function removeElementByClassName(tagName,className){
	var allTagNodes = document.getElementsByTagName(tagName);
	if(allTagNodes!=null){
		for (var i=0, il=allTagNodes.length; i<il; i++) {
			if(allTagNodes[i].getAttribute("class")==className)
				allTagNodes[i].parentNode.removeChild(allTagNodes[i]);
		}
	}
}
function hideElementByClassName(tagName,className){
	var allTagNodes = document.getElementsByTagName(tagName);
	if(allTagNodes!=null){
		for (var i=0, il=allTagNodes.length; i<il; i++) {
			if(allTagNodes[i].getAttribute("class")==className)
				allTagNodes[i].style.visibility="hidden";
		}
	}
}

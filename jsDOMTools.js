//jsDOMTools v0.1
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

//jsDOMTools v0.5
//author: Francesco De Domenico
//website: https://github.com/frankdd89/jsDOMTools

function removeElementByID(id) {
  var elem = document.getElementById(id);
  if (elem != null) elem.parentNode.removeChild(elem);
}

function containsString(str, toSearch) {
  for (var x = 0; x < str.length; x++) {
    if (str.substring(x, x + toSearch.length) == toSearch) {
      return true;
    }
  }
  return false;
}

function getTextBetween(text, str1, str2) {
  for (var x = 0; x < text.length; x++) {
    if (text.substring(x, x + str1.length) == str1) {
      x = x + str1.length;
      var buffer = "";
      for (var y = x; y < text.length; y++) {
        if (text.substring(y, y + str2.length) == str2)
          return buffer;
        buffer += text[y];
      }
    }
  }
  return buffer;
}

function removeElementByClassName(tagName, className) {
  var allTagNodes = document.getElementsByTagName(tagName);
  if (allTagNodes != null) {
    for (var i = 0, il = allTagNodes.length; i < il; i++) {
      if (allTagNodes[i].getAttribute("class") == className)
        allTagNodes[i].parentNode.removeChild(allTagNodes[i]);
    }
  }
}

function hideElementsByClassName(tagName, className) {
  var allTagNodes = document.getElementsByTagName(tagName);
  if (allTagNodes != null) {
    for (var i = 0, il = allTagNodes.length; i < il; i++) {
      if (allTagNodes[i].getAttribute("class") == className)
        allTagNodes[i].style.visibility = "hidden";
    }
  }
}

function sendNotification(img, title, text) {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    var notification = new Notification(title, {
      body: text,
      icon: img
    });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function(permission) {
      if (!('permission' in Notification)) {
        Notification.permission = permission;
      }
      if (permission === "granted") {
        var notification = new Notification(title, {
          body: text,
          icon: img
        });
      }
    });
  }
}

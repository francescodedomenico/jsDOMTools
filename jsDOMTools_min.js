//jsDOMTools v0.1
//author: Francesco De Domenico
//website: https://github.com/frankdd89/jsDOMTools
function removeElementByID(b){b=document.getElementById(b);null!=b&&b.parentNode.removeChild(b)}function containsString(b,d){for(var a=0;a<b.length;a++)if(b.substring(a,a+d.length)==d)return!0;return!1}function getElementByClassName(b,d){var a=document.getElementsByTagName(b),c=[],e=0;if(null!=a)for(var f=0,g=a.length;f<g;f++)a[f].getAttribute("class")==d&&(c[e]=a[f],e++);return c}
function removeElementByClassName(b,d){var a=document.getElementsByTagName(b);if(null!=a)for(var c=0,e=a.length;c<e;c++)a[c].getAttribute("class")==d&&a[c].parentNode.removeChild(a[c])}function hideElementByClassName(b,d){var a=document.getElementsByTagName(b);if(null!=a)for(var c=0,e=a.length;c<e;c++)a[c].getAttribute("class")==d&&(a[c].style.visibility="hidden")};

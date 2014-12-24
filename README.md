jsDOMTools v0.3
author: Francesco De Domenico
website: https://github.com/frankdd89/jsDOMTools
==========

Some functions to manipulate DOM nodes, strings and more.

function containsString(string, toSearchString)
description: searches for the toSearchString in string
parameters: String string, the string to search in. String toSearchString, the string to search for in string.
returns: true if the string is found, false otherwise

function getElementsWithClassName(className)
description: searches for every element cointaining the className substring in the "class" attribute.
parameters:  String className -  the class substring we want elements to be returned.
returns: and array of elements containing the className in the "class" attribute.

function getTextBetween(Text,stringLeft,stringRight)
description: returns the substring of Text between stringLeft and stringRight
parameters: String Text - the source text; String stringLeft - left substring to search; String stringRight - right substring to the returned buffer.
returns: a string buffer cointained between stringLeft and stringRight.

function removeElementByID(idToRemove)
description: removes the node idToRemove from the DOM
parameters: String idToRemove, the id of the node to remove from the DOM.
returns: void.

function removeElementByClassName(nodeType,classNameToRemove)
description: removes the node which has the classNameToRemove from the DOM
parameters:	String nodeType, the Type of the node to be removed. eg: "div","h","a".
			String classNameToRemove, the className of the node to be removed.
returns: void.

function removeElementByClassName(nodeType,classNameToRemove)
description: set the visibility = hidden property to the node which has the classNameToRemove from the DOM
parameters:	String nodeType, the Type of the node to hide. eg: "div","h","a".
			String classNameToRemove, the className of the node to hide.
returns: void.

jsDOMTools v0.2
author: Francesco De Domenico
website: https://github.com/frankdd89/jsDOMTools
==========

Some functions to manipulate DOM nodes.

function containsString(string, toSearchString)
description: searches for the toSearchString in string
parameters: String string, the string to search in. String toSearchString, the string to search for in string.
returns: true if the string is found, false otherwise

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

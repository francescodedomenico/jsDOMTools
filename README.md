jsDOMTools v0.1
author: Francesco De Domenico
website: https://github.com/frankdd89/jsDOMTools
==========

Some functions to manipulate DOM nodes.

function removeElementByID(idToRemove)
description: removes the node idToRemove from the DOM
parameters: String idToRemove, the id of the node to remove from the DOM.
return: void.

function removeElementByClassName(nodeType,classNameToRemove)
description: removes the node which has the classNameToRemove from the DOM
parameters:	String nodeType, the Type of the node to be removed. eg: "div","h","a".
			String classNameToRemove, the className of the node to be removed.
return: void.

function removeElementByClassName(nodeType,classNameToRemove)
description: set the visibility = hidden property to the node which has the classNameToRemove from the DOM
parameters:	String nodeType, the Type of the node to hide. eg: "div","h","a".
			String classNameToRemove, the className of the node to hide.
return: void.
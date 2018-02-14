 var thing = {
  "menu": {
    "id": null,
    "value": "File",
    "popup": {
       "menuitem": [
         {"value": "New", "onclick": "CreateNewDoc()"},
         {"value": "Open", "onclick": "OpenDoc()"},
         {"value": "Close", "onclick": "CloseDoc()"}
       ]
      }
    }
  }

  function menuReturn(testObj){
    for (var prop in testObj.menu.popup.menuitem){
      console.log(testObj.menu.popup.menuitem[prop].value.toLowerCase())
    }
  }

  menuReturn(thing);
//write a function that iterates over the menuItems array in the object "thing" and returns the value property lower-cased
function idCheck(testObj){
    if(testObj.menu.id == null){
      console.log("we need an id for this object,")
    } else {
      console.log(testObj.menu.id)
    }
}

idCheck(thing);

//write a function that accepts an object, and if the menu.id in the object is null, it returns "we need an id for this object,"
//else, it returns the id number. You'll need to create a second thing object (call it something else) to test this.

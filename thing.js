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

//write a function that iterates over the menuItems array in the object "thing" and returns the value property lower-cased

//write a function that accepts an object, and if the menu.id in the object is null, it returns "we need an id for this object,"
//else, it returns the id number. You'll need to create a second thing object (call it something else) to test this.

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
    for(var i =0; i < testObj.length; i++){
      for(var j = 0; j < testObj[i].length; j++){
        for(var k = 0; k < testObj[i][j].length; k++){
          if(testObj[i][j][k][key] == menuitem)
          return testObj[i][j][k];
        }
      }
    }
    console.log(testObj[0][3][0]);
  }

  console.log(menuReturn(thing));
//write a function that iterates over the menuItems array in the object "thing" and returns the value property lower-cased

//write a function that accepts an object, and if the menu.id in the object is null, it returns "we need an id for this object,"
//else, it returns the id number. You'll need to create a second thing object (call it something else) to test this.

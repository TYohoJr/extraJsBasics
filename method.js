var plant = {
  kingdom:"plantae",
  genus:"Epipremnum",
  commonName:"dumb house plant",
  fetchName: function(){
    return `the ${plant.commonName}, of kingdom ${plant.kingdom} and genus ${plant.genus}, is next to the closet behind us.`
    //write code in here
  }
}

console.log(plant.fetchName())

//Fill in the fetchName function to grab the properties kingdom and genus, and returns the string: "the {commonName}, of kingdom {kingdom} and genus {genus}, is next to the closet behind us."
//write a test for it using mocha and chai

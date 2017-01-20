function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}
 
var dessert = ["pie", "cake", "cookies"]
 
doToElementsInArray(dessert, changeCompletely)

console.log(dessert)
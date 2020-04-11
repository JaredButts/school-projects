var array = [];
var string = "";
var array1 = [];
var array2 = [];
var array3 = [];

array.push(array1, array2, array3);
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        string = string + array[i][j] + " ";
    }
}
console.log(string);
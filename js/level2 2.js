var arr = [[1, 2], [3, 4,], [6, 7, 9, [11, 12, [12, 13, [14]]]], 10]
var arrf = [];
function even(arr) {
    for (var i = 0; i < arr.length; i++)
    {
        if (Array.isArray(arr[i]))//判断是不是数组，是数组则递归
        {
            even(arr[i]);
        }
        else{
            arrf.push(arr[i]);
        }
    }
}
even(arr);
console.log(arrf);
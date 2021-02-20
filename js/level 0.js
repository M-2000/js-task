var str = 'today is a happy day'
function change(str){
  //code
  var arr = str.split(" ");//用空格将每个单词分割开，形成一个二维数组
  var arrup=[];
  for(var i =0; i < arr.length; i++)
  {
      arrup.push(arr[i][0].toUpperCase()+arr[i].substr(1));//每个i就是一个单词，用substr（1）读取每个单词除首字母的字母
  }
  console.log(arrup);
}
change(str)     //'Today Is A Happy Day'
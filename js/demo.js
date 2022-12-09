var x = 10;
//let y = 20;
x = "helo";// dynamic dâttype
var t =true;
console.log(x); // print

var y =20;

var z = y+10;
var k = x + y;
var u = y+x;
var o = y+"world ";
var p = "hello"+"world"+y;
var a = "20"+10;
console.log(a);
console.log(y);
var b=5 + 10 + 15 + "a";
if(y>10){

}else if(y>15) {

}else {

}
for (var j=0;j<10;j++) {
    console.log("j=" + j);
}
console.log("xin chào các bạn"+20+"chúc boi sang");
//giá trị của y =20 , gia tri dep
console.log("gia tri cua y = "+y+"gia tri dep" );
// nếu muốn in ra 1 chuỗi thì dùng dấu `
console.log(`gia tri cua y = ${y},gia tri dep`);

// khai bao 1 ham
function tinhtong(a,b){
    return a+b;
    console.log(a+b);
}
var kq = tinhtong(4,5) ;
var arr = [];
arr [0] = 15;
arr [1] = "abc";
arr [2] = true;
arr .push(17);
arr .push("xyz");
for(var i=0; i<arr.length ;i++){
    console.log(arr[1]);
}

confirm("bạn chác chắn muốn nộp bài");
if (rs == true){
    console.log("Người dừng đã đồng ý rồi ");
}else {
    console.log("Hủy chiến dịch");
}


var s = prompt("vui lòng nhập họ tên");// return string
console.log(s);
nếu nhập + ok -> string
nếu ko nhập +ok -> string rỗng
nêếu nhấn cancel -> null

setTimeout(function (){
    alert("heloo");

},3000)// sau 3000 mls thì sẽ hiện tb

 setInterval (function (){
     alert("xin chao")
 },3000); // thông báo sau 3s

var i =0;
setInterval(function (){
    console.log("i"+i);
    i++
},3000)



bài tập cho thời gian chạy ngược
 var min=10;
 var sec = 0;
 var timer = setInterval(function () {
     var m = min < 10 ? "0" + min:min;
     var s = sec < 10 ? "0" + sec : sec;
     console.log(m = ":" + s);
     sec--;

     if (sec<0){
         min--;
         sec = 59;
     }
    if (min < 0){
        // dùng tại đây
        clearInterval(timer)// hủy bỏ chạy vĩnh viễn
    }
},1000);


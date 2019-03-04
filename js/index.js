'use strict';

// 変数と関数は区切りは基本は小文字で大文字ででつなぐ　(ex playerNow のN)
// 定数は、基本大文字で、_でつなぐ　(ex PLAYER_FIRST )
const PLAYER_FIRST = 1
const PLAYER_SECOND = 2
let playerNow = PLAYER_FIRST

let box = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]
console.log(box);

//押された時に、その場所を感知する。
//box[0][0] = document.getElementById("a");
box[0][0] = document.getElementById("a[0][0]");
console.log(box[0][0]);
box[0][0].onclick = function(){
  alert("click OK");
}

box[0][1] = document.getElementById("a[0][1]");
console.log(box[0][1]);
box[0][1].onclick = function(){
  alert("click OK");
}






box[0][0].onclick = function(){
  console.dir(playerNow)
  //console.dir(obj)
  //objの中身が""じゃなかったら、終了する
  if(box[0][0].innerText !== "") return
  //objの中身が""だったら、実行
  if(playerNow == PLAYER_FIRST){
    playerNow = PLAYER_SECOND
    box[0][0].innerText="◎"
  }else{
    playerNow = PLAYER_FIRST
    box[0][0].innerText="×"
  }

}

let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('button#calc');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let j=document.querySelector('span#kaisu');
  j.textContent=kaisu+1;
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let k=document.querySelector('input[name="kazu"]');
   let yoso =Number(k.value);
   let i=document.querySelector('span#answer');
  i.textContent=yoso;
  
  // 課題3-1: 正解判定する
  console.log(kaisu+"回目の予想:"+yoso);
  let l=document.querySelector('p#result')
  if(kaisu > 2 ){
    console.log("答えは"+kotae+"でした.すでにゲームは終わってます")
    l.textContent="答えは"+kotae+"でした.すでにゲームは終わってます"
  }else if(kaisu===2 && kotae!==yoso){
    console.log("まちがい．残念でした答えは"+kotae+"です．")
    l.textContent="まちがい．残念でした答えは"+kotae+"です．"
  } else if(kotae===yoso){
    console.log("正解です。おめでとう！")
    l.textContent="正解です。おめでとう！"
  } else if(yoso<kotae){
    console.log("まちがい.答えはもっと大きいですよ")
    l.textContent="まちがい.答えはもっと大きいですよ"
  }else if(yoso>kotae){
    console.log("まちがい.答えはもっと小さいですよ")
    l.textContent="まちがい.答えはもっと小さいですよ"
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  }
  kaisu=kaisu+1;
}

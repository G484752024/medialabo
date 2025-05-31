
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for(let i=0; i < 2; i++){
    let shop =data.results.shop[i];

    console.log("[店舗名]"+shop.name);
    console.log("[ジャンル]"+shop.genre.name);
    console.log("[サブジャンル]"+shop.sub_genre.name);
    console.log("[キャッチコピー]"+shop.catch);
    console.log("[アクセス]"+shop.access);
    console.log("[住所]"+shop.address);
    console.log("[予算]"+shop.budget.name);
    console.log("[営業時間]"+shop.open);
    console.log("[最寄えき]"+shop.station_name);
  }
}

  let b = document.querySelector('button#calc');
  b.addEventListener('click',sendRequest );
  
  let i=0;
  function doo(data){
    let p =document.querySelector('p#message');
    let shopCount =data.results.shop.length;
    p.textContent=shopCount+'件ヒットしました';

    printDom(data);
  }

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let a=document.getElementById('result');
  if(a !== null){
    a.remove();
  }


  let container = document.createElement('div');
  container.id='result'

  for(let i=0; i<data.results.shop.length; i++){
    let shop=data.results.shop[i];

    //店舗
    let h2_tenpo =document.createElement('h2');
    h2_tenpo.textContent="店舗名"+data.results.shop[i].name;
    container.appendChild(h2_tenpo);

    //ジャンル
    let genre = document.createElement('p');
    genre.textContent = "ジャンル: " + data.results.shop[i].genre.name; //+ " / サブジャンル: " + data.results.shop[i].sub_genre.name;
    container.appendChild(genre);

    // キャッチコピー
    let catchCopy = document.createElement('p');
    catchCopy.textContent = "キャッチコピー: " + data.results.shop[i].catch;
    container.appendChild(catchCopy);

    // アクセス
    let access = document.createElement('p');
    access.textContent = "アクセス: " + data.results.shop[i].access;
    container.appendChild(access);
    
    //写真
    let img = document.createElement('img');
    if (data.results.shop[i].logo_image) {
    img.src = data.results.shop[i].logo_image;
    } else {
    img.src = data.results.shop[i].photo.pc.m;
    }

    img.classList.add('shop-image');
    
    container.appendChild(img)

    //住所
    let address = document.createElement('p');
    address.textContent = "住所: " + data.results.shop[i].address;
    container.appendChild(address);

  }
  let i = document.querySelector('p#message');
  i.insertAdjacentElement('afterend', container);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let d =document.querySelector('#sendRequest');
b.addEventListener('click',sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let H =document.querySelector('input[name="kensaku"]');
  let SH =(H.value);

  let id;
  if(SH === '居酒屋'){
    id = '01'
  } else if(SH === 'ダイニング・バー'){
    id ='02'
  } else if(SH === '創作料理'){
    id ='03'
  } else if(SH === '和食'){
    id ='04'
  } else if(SH === '洋食'){
    id ='05'
  } else if(SH ==='イタリアン・フレンチ'){
    id='06'
  } else if(SH ==='中華') {
    id='07'
  } else if(SH ==='焼肉・ホルモン'){
    id='08'
  } else if(SH ==='アジア・エスニック料理'){
    id='09'
  } else if(SH ==='各国料理'){
    id='10'
  } else if(SH ==='カラオケ・パーティ'){
    id='11'
  } else if(SH ==='バー・カクテル'){
    id='12'
  } else if(SH ==='ラーメン'){
    id='13'
  } else if(SH ==='カフェ・スイーツ'){
    id='14'
  } else if(SH ==='その他グルメ'){
    id='15'
  }  else if(SH ==='お好み焼き・もんじゃ'){
    id='16'
  } else if(SH ==='韓国料理'){
    id='17'
  }

  if(id.value ==="01" || id.value ==="02" || id.value ==="03" ||id.value ==="04" ||id.value ==="04" ||id.value ==="05" ||id.value ==="06" ||id.value ==="07" ||id.value ==="08" ||id.value ==="09" ||id.value ==="10" ||id.value ==="11" ||id.value ==="12" ||id.value ==="13" ||id.value ==="14" || id.value ==="15" ||id.value ==="16" ||id.value ==="17");
// URL を設定
let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/G0'+id+'.json'
// 通信開始
axios.get(url)
  .then(showResult)
  .catch(showError)
  .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
// サーバから送られてきたデータを出力
	let data = resp.data;
  printDom(data);

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

  doo(data);
  printDom(data)
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること

import "./styles.css";

<<<<<<< HEAD
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
<p>修正aaaa</p>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
//constで定義したオブジェクトはプロパティの変更・追加が可能
// const about = {
//   name: "emi",
//   age: "40",
// };

// about.name = "daiji";

// about.address = "setagaya";

// console.log(about);

//constで定義した配列はプロパティの変更・追加が可能
// const animals = ["dog", "cat"];
// animals[0] = "bird";
// animals.push("monkey");
// console.log(animals);

/*
テンプレート文字列 
*/

// const name = "emi";
// const age = "40";
// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);
// //こちらがテンプレート文字列
// const message2 = `私の名前は ${name}です。年齢は${age}歳です。`;
// console.log(message2);

/*
アロー関数
*/

// function fn1(str) {
//   return str;
// }

// //関数式
// const fn1 = function (str) {
//   return str;
// };
// //アロー関数
// const fn2 = (str) => {
//   return str;
// };
// const fn3 = (str) => str;
// //※1行の場合は{}とreturnを削除できる

// const fn4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(fn4(100, 1000));

/**分割代入 */

// const myProfile = {
//   name: "emi",
//   age: 40,
// };

// //普通の代入
// const messageProfile = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(messageProfile);

// // //分割代入
// // const { name, age } = myProfile;
// // const messageProfile2 = `私の私の名前は${name}です。年齢は${age}歳です。`;
// // console.log(messageProfile2);

// const myProfile = ["emi", 40];
// // const message3 = `私の名前は${myProfile[0]}です。歳は${myProfile[1]}歳です。`;
// // console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。${age}歳です。`;
// //※配列の場合は順番が大事
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name) => {
//   return `こんにちは${name}さん`;
// };
// console.log(sayHello('emi'));
//「こんにちはemiさん」となる。
// console.log(sayHello());
// //引数が無いと、「こんにちはundefindさん」となる。

// const sayHello1 = (name = "ゲスト") => {
//   return `こんにちは${name}さん`;
// };
// //引数にデフォルト値を入れる
// console.log(sayHello1());
// //引数がない場合は、デフォルトで設定した「ゲスト」が入る。

/**
 * スプレッド構文...
 * ドットを3つ
 */
//配列の展開
// const arr1 = [1, 2];
// const sum = (num1, num2) => {
//   return num1 + num2;
// };
// //console.log(sum(arr1[0], arr1[1]));
// console.log(sum(...arr1)); //スプレッド構文
// //もし、配列の中身が2つで、引数を3つ（num3）書いた場合、
// //return分にもnum3を追加するとNaNが帰ってくる。
// //引数のみnum3まで入れるだけだたらエラーはなし。

//配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3); //[3,4,5]3以下の数字がarr3に入っている
// console.log(num1);
// console.log(num2);

//配列のコピーや結合
// const arr4 = [10, 20, 30];
// const arr5 = [40, 50, 60];

// const arr6 = [...arr4]; //コピー
// //console.log(arr6);

// const arr8 = arr4; //ただの代入だとarr4を継承されちゃう。
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);
// //例えば、arr8[0]に100を再代入すると、arr4[0]も100になってしまう。
// //代入の場合は、コピーではなく、arr4をただarr8に入れただけ。中身はarr4のままでコピーではない。

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfillterを使った配列の処理
 */

const nameArr = ["佐藤", "鈴木", "原田"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => name);
// //ただnameArrをnameArr2という変数に入れる。（新しい配列を作る）
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));
//配列の中身を1個ずつコンソールに表示させる

// const numArr = [0, 1, 2, 3, 4, 5];
// const numOdd = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(numOdd);

// const newNameArr = nameArr.map((name) => {
//   if (name == "佐藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// //console.log(newNameArr);
// newNameArr.map((name) => {
//   console.log(name);
// });

/*
 *三項演算子 */

//ある条件 ? 条件がtrueの場合 : 条件がfalseの場合;
// const val = 1 != 0 ? "trueです" : "falseです";
// console.log(val);

// const num = "1300";
// //console.log(num.toLocaleString());
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値ではありません";
// console.log(formattedNum);

//


=======
const onClickAdd = () => {
  //テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";
  createIncompleteList(inputText);
};

//incomplete-listにliを追加する関数
const createIncompleteList = (text) => {
  //一番外側のliタグを作成、li変数に入れる
  const li = document.createElement("li");
  //liタグの内側のdivタグを作成、div変数に入れる
  const div = document.createElement("div");
  //divにclassをつける
  div.className = "inner";
  //テキストを囲むpタグを生成param変数に入れる
  const param = document.createElement("p");
  //param変数（pタグ）にinputText（inputに入力されたテキスト）を入れる
  param.innerText = text;
  //完了ボタンを生成、completeButton変数に入れる
  const completeButton = document.createElement("button");
  //completeButton変数（buttonタグ）に完了というテキストを入れる
  completeButton.innerText = "完了";

  //完了ボタンをクリックすると
  completeButton.addEventListener("click", () => {
    //該当するリストがincomplete-listから削除される
    deleteFromIncompleteList(completeButton.closest("li"));
    //完了リストに追加する要素を取得
    const addTarget = completeButton.parentNode;
    //その要素のTODOのテキストを取得
    const text = addTarget.querySelector("p").innerText;
    //li以下を初期化
    addTarget.textContent = null;
    //pタグにToDOのテキストを入れる
    param.innerText = text;
    //戻すボタンの生成
    const backButton = document.createElement("button");
    //deleteButton変数（buttonタグ）に削除というテキストを入れる
    backButton.innerText = "戻す";

    //liタグの子要素に各要素を設定
    addTarget.appendChild(param);
    addTarget.appendChild(backButton);
    li.appendChild(addTarget);
    document.getElementById("complete-list").appendChild(li);
  });

  //削除ボタンを生成、deleteButton変数に入れる
  const deleteButton = document.createElement("button");
  //deleteButton変数（buttonタグ）に削除というテキストを入れる
  deleteButton.innerText = "削除";

  //削除をクリックすると、該当するリストが削除される
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.closest("li"));
  });

  //divにparmを入れ子にする
  div.appendChild(param);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //さらにliにdivを入れ子にする
  li.appendChild(div);
  //ul#incomplete-listを取得して、そこにliを入れ子にする
  document.getElementById("incomplete-list").appendChild(li);
};

//incomplete-listからliを削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document.getElementById("addBtn").addEventListener("click", () => onClickAdd());
>>>>>>> 19c39386ed2e0b2250cefdbc3d5b71585a1f98e4

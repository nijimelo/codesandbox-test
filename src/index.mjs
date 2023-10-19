import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";
  createIncompleteList(inputText);
};

//incomplete-listからliを削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
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
    //deleteButton変数（buttonタグ）に戻すというテキストを入れる
    backButton.innerText = "戻す";
    //戻すをクリックすると、該当するリストが削除される
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.closest("li");
      document.getElementById("complete-list").removeChild(deleteTarget);
      //戻す項目のテキスト取得(以下にテキスト取得する内容入る)
      const text = deleteTarget.querySelector("p").innerText;
      createIncompleteList(text);
    });

    //liタグの子要素に各要素を設定
    addTarget.appendChild(param);
    addTarget.appendChild(backButton);
    li.appendChild(addTarget);
    //完了リストに追加
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

document.getElementById("addBtn").addEventListener("click", () => onClickAdd());

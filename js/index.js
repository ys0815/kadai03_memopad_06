const memoForm = document.getElementById("memo-form");
const movieTitle = document.getElementById("movie-title");
const date = document.getElementById("date");
const comment = document.getElementById("comment");
const image = document.getElementById("image");
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");
const memoList = document.getElementById("memo-list");

/*---------------------------------

 aveBtnボタンをクリックした時
 ①memo-formの内容を取得してlocalStorageに保存する
 ②入力された映画感想をmemo-listに表示させる
 ③画像をBase64形式に変換して表示する
 可能だったら★で評価するあれを作りたい

 ---------------------------------*/
saveBtn.addEventListener("click", () => {
	const titleVal = movieTitle.value;
	const dateVal = date.value;
	const commentVal = comment.value;
	const file = image.files[0];

	const memoItem = {
		key1: titleVal,
		key2: dateVal,
		key3: commentVal,
		//どうやら画像をlocalStorageに保存するにはBase64形式に変換する必要があるらしい…
		//まだ出来ていない
		key4: file,
	};
	// 以下、localStorageに保存する
	// 詰まったこと 一個一個localStorageを取得したら違ったみたいでした
	// localStorage.setItem(memoItem, JSON.stringify(memoItem));
	//と、最初に書いたけど、データが上書きされてしまった。
	localStorage.setItem("review" + Date.now(), JSON.stringify(memoItem));
});

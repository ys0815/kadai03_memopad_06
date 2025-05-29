const memoForm = document.getElementById("memo-form");
const movieTitle = document.getElementById("movie-title");
const date = document.getElementById("date");
const comment = document.getElementById("comment");
const image = document.getElementById("image");
const ranking = document.getElementById("ranking");
const genre = document.getElementById("genre");
const memoList = document.getElementById("memo-list");

//以下、データを再編集する際によく使うとのことだったのでとりあえず…
let editingKey = null;
/*---------------------------------

 submitボタンをクリックした時
 ①memo-formの内容を取得してlocalStorageに保存する
 ②入力された映画感想をmemo-listに表示させる
 ③画像をBase64形式に変換して表示する→諦めた
 可能だったら★で評価するあれを作りたい

 ---------------------------------*/
memoForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const memoItem = {
		title: movieTitle.value,
		date: date.value,
		comment: comment.value,
		ranking: ranking.value,
		genre: genre.value,
	};

	// 以下、localStorageに保存する
	// 詰まったこと 一個一個localStorageを取得したら違ったみたいでした
	// localStorage.setItem(memoItem, JSON.stringify(memoItem));
	//と、最初に書いたけど、データが上書きされてしまった。
	localStorage.setItem("review" + Date.now(), JSON.stringify(memoItem));
	memoForm.reset();
});

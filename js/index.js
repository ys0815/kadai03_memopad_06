const memoForm = document.getElementById("memo-form");
const movieTittle = document.getElementById("movie-tittle");
const date = document.getElementById("date");
const comment = document.getElementById("comment");
const image = document.getElementById("image");
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");
const memoList = document.getElementById("memo-list");

/*---------------------------------

 aveBtnボタンをクリックした時に
 入力された映画感想を取得する

 ---------------------------------*/
saveBtn.addEventListener("click", () => {
	const tittleVal = movieTittle.value;
	const dateVal = date.value;
	const commentVal = comment.value;
	const imageVal = image.value;

	//詰まったこと 一個一個localStorageを取得したら違ったみたいでした
	localStorage.setItem("movieTittle", tittleVal);
	localStorage.setItem("date", dateVal);
	localStorage.setItem("comment", commentVal);
	localStorage.setItem("image", imageVal);
	alert("データを保存しました！");
});

/*---------------------------------

 localStorageに保存する

 ---------------------------------*/
/*---------------------------------

 保存した映画感想を表示する

 ---------------------------------*/

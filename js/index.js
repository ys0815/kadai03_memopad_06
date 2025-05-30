const memoForm = document.getElementById("memo-form");
const movieTitle = document.getElementById("movie-title");
const date = document.getElementById("date");
const howTo = document.getElementById("how-to");
const comment = document.getElementById("comment");
const image = document.getElementById("image");
const rating = document.getElementById("rating");
const genre = document.getElementById("genre");
const memoList = document.getElementById("memo-list");
//以下js内にある削除ボタン
const delBtn = document.querySelectorAll(".del-btn");

//ページにアクセスした時に、displayMemosを読んで、保存してあるデータを表示させる
window.addEventListener("DOMContentLoaded", displayMemos);
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
		howTo: howTo.value,
		comment: comment.value,
		rating: rating.value,
		genre: genre.value,
	};

	// 以下、localStorageに保存する
	// 詰まったこと 一個一個localStorageを取得したら違ったみたいでした
	// localStorage.setItem(memoItem, JSON.stringify(memoItem));
	//と、最初に書いたけど、データが上書きされてしまった。

	//以下で、localStorageにあげるkeyを作る（reviewに今の時刻）
	const reviewKey = "review" + Date.now();
	localStorage.setItem(reviewKey, JSON.stringify(memoItem));

	memoForm.reset();
	displayMemos();
});

function displayMemos(reviewKey) {
	// memo-listを空にする
	memoList.innerHTML = "";

	// localStorageから全ての感想をを取得
	Object.keys(localStorage).forEach((key) => {
		if (key.startsWith("review")) {
			const memoItem = JSON.parse(localStorage.getItem(key));
			const listItem = document.createElement("div");

			//以下でアイコンを追加、innerHTMLに追加する際はsvg推奨と出てきたのでやってみた
			const dateIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>`;
			const howToIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z"/></svg>`;
			//ここで感想を表示させている
			listItem.innerHTML = `
				<h3><span style="color:#d85179; font-weight:bold;">「${memoItem.title}」</span></h3>
				<p>${dateIcon} 観た日：${memoItem.date}</p>
				<p>${howToIcon}鑑賞方法：${memoItem.howTo}</p>
				<p>${memoItem.comment}</p>
				<p>評価：★${memoItem.rating}</p>
				<p>ジャンル：${memoItem.genre}</p>
				<button class="del-btn" data-key="${key}">削除する</button>
			
			`;
			memoList.appendChild(listItem);
		}
	});
	/*---------------------------------

削除するボタンをクリックした時
 ①localStorageから該当のデータを削除する
 ②memo-listから該当のデータを削除する

---------------------------------*/
	//delBtnはclass属性なので、複数存在する。直接addEventListenerを使うと最初の一つにしか実行されないらしい
	//ここにもforEachを使って一つずつ処理をする必要があるらしい
	//delBtnの中にあるbutton一つ一つにクリックイベントを指示している
	document.querySelectorAll(".del-btn").forEach((button) => {
		button.addEventListener("click", () => {
			const key = button.getAttribute("data-key");
			localStorage.removeItem(key);
			displayMemos();
		});
	});
}
/*---------------------------------

削除するボタンをクリックした時
 ①localStorageから該当のデータを削除する
 ②memo-listから該当のデータを削除する

---------------------------------*/
//delBtnはclass属性なので、複数存在する。直接addEventListenerを使うと最初の一つにしか実行されないらしい
//ここにもforEachを使って一つずつ処理をする必要があるらしい
//delBtnの中にあるbutton一つ一つにクリックイベントを指示している
delBtn.forEach((button) => {
	button.addEventListener("click", () => {
		localStorage.removeItem();
		displayMemos();
	});
});

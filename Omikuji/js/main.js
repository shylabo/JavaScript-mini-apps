'use strict';

{
	const btn = document.getElementById('btn');

	btn.addEventListener('click', () => {
		const results = ['大吉','中吉','末吉','凶'];
		btn.textContent = results[Math.floor(Math.random() * results.length)];

		// //確率操作する場合
		// const n = Math.random();
		// if (n < 0.05) {
		// 	btn.textContent = '大吉';	//5%
		// } else if (n < 0.2) {
		// 	btn.textContent = '中吉';	//15%
		// } else {
		// 	btn.textContent = '凶';		//80%
		// }
	})
}
/*===== WEBSITE SCROLL REVEAL =====*/

/*===== SAVE CART =====*/
// Change Save heart Icon
function changeHeartIcon() {
	const replaceHeartfill = document.getElementById("bi").innerHTML;

	replaceHeartfill.replace(
		<i class="bi bi-heart"></i>,
		<i class="bi bi-heart-fill"></i>
	);
}

const read = document.querySelector('#read');
const numberNotif = document.querySelector('.badge');
const newNotif = document.querySelectorAll('.new');
const message = document.querySelectorAll('.message');
const iconNotif = document.querySelectorAll('.circle-red');
const notif = document.querySelectorAll('.notif');

console.log(numberNotif);

read.addEventListener('click', (e) => {
	e.preventDefault();

	for (let i = 0; i < newNotif.length; i++) {
		newNotif[i].classList.remove('new');

		if (iconNotif[i].parentNode === message[i]) {
			message[i].removeChild(iconNotif[i]);
			numberNotif.innerHTML = parseInt(numberNotif.innerHTML) - 1;
		}
	}
});

for (let i = 0; i < notif.length; i++) {
	notif[i].addEventListener('click', (e) => {
		e.preventDefault();

		notif[i].classList.remove('new');

		if (iconNotif[i].parentNode === message[i]) {
			message[i].removeChild(iconNotif[i]);
			numberNotif.innerHTML = parseInt(numberNotif.innerHTML) - 1;
		}
	});
}

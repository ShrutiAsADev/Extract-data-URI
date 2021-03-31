console.log('Hello World!');

const fileLoader = document.querySelector('#fileInput');
const textarea = document.querySelector('#textarea');

fileLoader.addEventListener('input', () => {
	let file = fileLoader.files[0];
	const fileReader = new FileReader();
	
	fileReader.addEventListener('load', (e) => {
		textarea.value = e.target.result;
	})
	
	fileReader.readAsDataURL(file);
})
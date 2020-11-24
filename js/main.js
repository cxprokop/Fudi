function headerClick(event) {
	console.log('click');
	const getStartedBtn = document.querySelector('.start');
	getStartedBtn.style.setProperty('font-size', '30px');
	getStartedBtn.style.setProperty('color', 'blue');
}

function changeColor(event){
	console.log('click');
	const heading = document.querySelector('.iphone-text__title');
	heading.style.setProperty('color', '#f57365');
}

function toAddParagraph(event){
	console.log('click');
	const containerForParagraph = document.querySelector('.iphone-text__description')
	let paragraph = document.createElement('p');
	paragraph.innerHTML = "Suspendisse aliquet felis consectetur libero congue, sed pulvinar";
	containerForParagraph.append(paragraph);
}

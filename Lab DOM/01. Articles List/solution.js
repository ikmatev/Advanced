function createArticle() {
	let title = document.getElementById('createTitle').value;
	let content = document.getElementById('createContent').value;

	let titleTag = document.createElement('h3')
		.appendChild(document.createTextNode(title));
	let paragraphTag = document.createElement('p')
		.appendChild(document.createTextNode(content));

	let article = document.createElement(null);
	if (title !== '' && content !== '') {
		article = document.createElement('article');
		article.appendChild(titleTag);
		article.appendChild(paragraphTag);

	}

	document.getElementById('articles').appendChild(article);
	document.getElementById('createTitle').value = '';
	document.getElementById('createContent').value = '';
}
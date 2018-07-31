<!DOCTYPE html>
<html>
<head>
	<title>Dictionary</title>
</head>
<body>
	<h1>Welcome to DIV Dictionary</h1>
	<input id="wordInput" placeholder="Please enter the word">
	<button id="submitButton" onclick="">Look Up</button>

	<ol id="wordMeaning">

	</ol>

	<script type="text/javascript">

		const wordInput = document.getElementById('wordInput');

		const submitButton = document.getElementById('submitButton');

		var wordMeaning = document.getElementById('wordMeaning');
			let listOfWords = "";

		submitButton.addEventListener('click',() => {
			console.log('Getting the meaning of the word');

			const word = wordInput.value;

			let url = `https://wordsapiv1.p.mashape.com/words/${word}/definitions`;

			fetch(url,{
				headers:{
					'X-Mashape-Key' : 'bm7Clt9jyImshp3Vbul6euVSZvH6p1wf2rOjsn4o0j3LLFgDfs'
				}
			})
			.then(response => {
				response.json().then(output => console.definitions.map(function(value){

					listOfWords = listOfWords + `<li>${value.definition}</li>`
				}))
				wordMeaning.innerHTML = listOfWords;

			})
			.catch(err => {
				alert('Oops an error occured');
				console.log(err);
		})

	})




	</script>

</body>
</html>

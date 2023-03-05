const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

quizForm.addEventListener('submit', function(e) {
	e.preventDefault();
	let score = 0;
	const userAnswers = {
		q1: quizForm.q1.value,
		q2: quizForm.q2.value
	};
	
	if(userAnswers.q1 === 'a') {
		score += 1;
	}
	
	if(userAnswers.q2 === 'c') {
		score += 1;
	}
	
	resultDiv.innerHTML = `You scored ${score} out of 2`;
});

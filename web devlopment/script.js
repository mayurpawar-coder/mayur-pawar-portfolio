let step = 0;
let name = '';

function nextQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const answerInput = document.getElementById('answerInput');
    const question = document.getElementById('question');
    const finalMessage = document.getElementById('finalMessage');

    switch (step) {
        case 0:
            name = answerInput.value;
            question.innerText = `Good Morning, ${name}! What's your birth date?`;
            answerInput.value = '';
            answerInput.placeholder = 'Enter your birth date';
            break;
        case 1:
            question.innerText = `Are you in BCA Sci FY?`;
            answerInput.value = '';
            answerInput.placeholder = 'Yes or No';
            break;
        case 2:
            if (answerInput.value.toLowerCase() === 'yes') {
                question.innerText = `Are you in Deogiri College?`;
                answerInput.value = '';
                answerInput.placeholder = 'Yes or No';
            } else {
                endSequence();
                return;
            }
            break;
        case 3:
            if (answerInput.value.toLowerCase() === 'yes') {
                finalMessage.innerText = `Abhayas Kar Chabhrya! 😂`;
            } else {
                finalMessage.innerText = `Stay focused and keep learning, ${name}!`;
            }
            endSequence();
            return;
        default:
            break;
    }

    step++;
}

function endSequence() {
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('animationContainer').style.display = 'flex';
}

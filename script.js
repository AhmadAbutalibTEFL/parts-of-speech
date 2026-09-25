// ===== Parts of Speech Practice =====

// Question 1
const question = {
    sentence: "The students study every evening.",
    targetWord: "study",
    correctAnswer: "Verb",
    explanation: "Study is a verb because it shows an action."
};


// Start the practice
function startPractice() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("practice-screen").style.display = "block";

    document.getElementById("sentence").textContent = question.sentence;
}


// Check the student's answer
function checkAnswer(answer) {

    const feedback = document.getElementById("feedback");

    if (answer === question.correctAnswer) {
        feedback.textContent = "✅ Correct! " + question.explanation;
    } else {
        feedback.textContent =
            "❌ Not quite. The correct answer is " +
            question.correctAnswer +
            ". " +
            question.explanation;
    }

}

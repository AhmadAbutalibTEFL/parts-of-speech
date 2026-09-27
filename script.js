// ===== Parts of Speech Quiz =====

// ===== Parts of Speech Learning Content =====

const partsOfSpeech = [
    {
        name: "Verb",
        meaning: "An action or a state.",
        examples: "be, have, seem, go, study, believe"
    },

    {
        name: "Noun",
        meaning: "A person, place, thing, or idea.",
        examples: "bicycle, teacher, Chicago, idea, development"
    },

    {
        name: "Pronoun",
        meaning: "Takes the place of a noun.",
        examples: "she, you, we, him, it, they"
    },

    {
        name: "Preposition",
        meaning: "Shows time or location.",
        examples: "in, on, under, before, after, between"
    },

    {
        name: "Conjunction",
        meaning: "Connects words, phrases, or ideas.",
        examples: "and, but, although, yet, because"
    },

    {
        name: "Adverb",
        meaning: "Gives more information about a verb, phrase, or another adverb.",
        examples: "slowly, loudly, strongly"
    },

    {
        name: "Adjective",
        meaning: "Gives information about a noun or pronoun.",
        examples: "large, pretty, interesting, solid, wide"
    }
];

const questions = [
    {
        sentence: "The students study every evening.",
        targetWord: "study",
        correctAnswer: "Verb",
        explanation: "Study is a verb because it shows an action."
    },
    {
        sentence: "The students study every evening.",
        targetWord: "students",
        correctAnswer: "Noun",
        explanation: "Students is a noun because it names people."
    },
    {
        sentence: "They study every evening.",
        targetWord: "They",
        correctAnswer: "Pronoun",
        explanation: "They is a pronoun because it takes the place of a noun."
    },
    {
        sentence: "The books are on the table.",
        targetWord: "on",
        correctAnswer: "Preposition",
        explanation: "On is a preposition because it shows location."
    },
    {
        sentence: "I studied, but I was tired.",
        targetWord: "but",
        correctAnswer: "Conjunction",
        explanation: "But is a conjunction because it connects ideas."
    },
    {
        sentence: "She walked slowly.",
        targetWord: "slowly",
        correctAnswer: "Adverb",
        explanation: "Slowly is an adverb because it gives more information about the verb walked."
    },
    {
        sentence: "It was a cold morning.",
        targetWord: "cold",
        correctAnswer: "Adjective",
        explanation: "Cold is an adjective because it gives information about the noun morning."
    },
    {
        sentence: "The teacher explained the rule.",
        targetWord: "explained",
        correctAnswer: "Verb",
        explanation: "Explained is a verb because it shows an action."
    }
];


let currentQuestion = 0;
let score = 0;
// ===== Learn Mode =====

function showLearnMode() {

    document.getElementById("welcome-screen").style.display = "none";

    document.getElementById("practice-screen").style.display = "none";

    document.getElementById("results-screen").style.display = "none";

    document.getElementById("learn-screen").style.display = "block";

    displayPartsOfSpeech();
}


function displayPartsOfSpeech() {

    const container = document.getElementById("parts-container");

    container.innerHTML = "";

    partsOfSpeech.forEach(part => {

        const card = document.createElement("div");

        card.className = "part-card";

        card.innerHTML = `
            <h3>${part.name}</h3>

            <p>
                <strong>Meaning:</strong>
                ${part.meaning}
            </p>

            <p>
                <strong>Examples:</strong>
                ${part.examples}
            </p>
        `;

        container.appendChild(card);
    });
}


function backToHome() {

    document.getElementById("learn-screen").style.display = "none";

    document.getElementById("practice-screen").style.display = "none";

    document.getElementById("results-screen").style.display = "none";

    document.getElementById("welcome-screen").style.display = "block";
}

// ===== Start the Quiz =====

function startPractice() {
    currentQuestion = 0;
    score = 0;

    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("learn-screen").style.display = "none";
    document.getElementById("results-screen").style.display = "none";
    document.getElementById("practice-screen").style.display = "block";

    showQuestion();
}

function exitPractice() {
    currentQuestion = 0;
    score = 0;
    backToHome();
}

// ===== Show a Question =====

function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("sentence").textContent =
        question.sentence;

    document.getElementById("target-word").textContent =
        question.targetWord;

    document.getElementById("feedback").textContent = "";
    const progress =
    ((currentQuestion + 1) / questions.length) * 100;

document.getElementById("progress-bar").style.width =
    progress + "%";

    document.getElementById("next-button").style.display = "none";

    document.querySelectorAll(".answer-button").forEach(button => {
        button.disabled = false;
    });
}


// ===== Check the Answer =====

function checkAnswer(answer) {

    const question = questions[currentQuestion];

    const feedback = document.getElementById("feedback");

    document.querySelectorAll(".answer-button").forEach(button => {
        button.disabled = true;
    });


    if (answer === question.correctAnswer) {

        score++;

        feedback.textContent =
            "✅ Correct! " + question.explanation;

    } else {

        feedback.textContent =
            "❌ Not quite. The correct answer is " +
            question.correctAnswer +
            ". " +
            question.explanation;
    }


    document.getElementById("next-button").style.display = "inline-block";
}


// ===== Next Question =====

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResults();
    }
}


// ===== Show Results =====

function showResults() {

    document.getElementById("practice-screen").style.display = "none";

    document.getElementById("results-screen").style.display = "block";

    document.getElementById("score").textContent =
        `${score} / ${questions.length}`;
}


// ===== Restart Quiz =====

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("results-screen").style.display = "none";

    document.getElementById("practice-screen").style.display = "block";

    showQuestion();
}

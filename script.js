const courses = [
    {
        id: "ela",
        title: "ELA",
        icon: "📚",
        description: "English Language Arts: reading, writing, language, and literary skills.",
        available: false
    },
    {
        id: "digital-sat",
        title: "Digital SAT",
        icon: "🎯",
        description: "Reading and Writing preparation organized by skills and difficulty.",
        available: false
    },
    {
        id: "est",
        title: "EST",
        icon: "📝",
        description: "Structured EST preparation in Grammar, Reading, and Practice.",
        available: true
    },
    {
        id: "ielts",
        title: "IELTS",
        icon: "🌍",
        description: "IELTS preparation for Listening, Reading, Writing, and Speaking.",
        available: false
    },
    {
        id: "toefl",
        title: "TOEFL",
        icon: "🎓",
        description: "TOEFL preparation covering Reading, Listening, Speaking, and Writing.",
        available: false
    },
    {
        id: "general-english",
        title: "General English",
        icon: "💬",
        description: "Build practical English skills for communication and everyday use.",
        available: false
    },
    {
        id: "young-learners",
        title: "English for Young Learners",
        icon: "🧩",
        description: "Engaging English learning designed for younger learners.",
        available: false
    },
    {
        id: "teacher-training",
        title: "Teacher Training",
        icon: "👨‍🏫",
        description: "Professional development for English language teachers.",
        available: false
    }
];

const estSessions = [
    {
        number: 1,
        grammar: "Ice Breaking & Introduction",
        reading: "Diagnostic Test",
        practice: "—",
        available: false
    },
    {
        number: 2,
        grammar: "Parts of Speech",
        grammarPage: "p. 9",
        reading: "Vocabulary in Context",
        readingPage: "p. 43",
        practice: "Drill Exercises",
        available: true
    },
    {
        number: 3,
        grammar: "Is it Relevant? Adding, Deleting, and Revising",
        grammarPage: "p. 16",
        reading: "Making the Leap: From Concrete to Abstract",
        readingPage: "p. 65",
        practice: "Drill Exercises",
        available: false
    },
    {
        number: 4,
        grammar: "Sentence and Paragraph Order",
        grammarPage: "p. 31",
        reading: "The Big Picture",
        readingPage: "p. 79",
        practice: "Drill Exercises",
        available: false
    },
    {
        number: 5,
        grammar: "Infographics",
        grammarPage: "p. 40",
        reading: "Supporting Evidence",
        readingPage: "p. 117",
        practice: "Drill Exercises",
        available: false
    },
    {
        number: 6,
        grammar: "Shorter is Better",
        grammarPage: "p. 53",
        reading: "Literal Comprehension: Same Idea, Different Words",
        readingPage: "p. 137",
        practice: "Drill Exercises",
        available: false
    },
    {
        number: 7,
        grammar: "Diction, Idioms, and Register",
        grammarPage: "p. 61",
        reading: "Reasonable Inferences",
        readingPage: "p. 158",
        practice: "Drill Exercises",
        available: false
    },
    {
        number: 8,
        grammar: "Sentences and Fragments",
        grammarPage: "p. 71",
        reading: "Extended Reasoning and Analysis",
        readingPage: "p. 189",
        practice: "Practice Test 2",
        available: false
    },
    {
        number: 9,
        grammar: "Combining & Separating Sentences",
        grammarPage: "p. 85",
        reading: "Function Questions",
        readingPage: "p. 204",
        practice: "Drill Exercises",
        available: false
    },
    {
        number: 10,
        grammar: "Cumulative Review",
        reading: "Tone and Attitude",
        readingPage: "p. 232",
        practice: "—",
        available: false
    },
    {
        number: 11,
        grammar: "Transitions",
        grammarPage: "p. 95",
        reading: "Rhetorical Strategy",
        readingPage: "p. 255",
        practice: "Drill Exercises",
        available: false
    },
    {
        number: 12,
        grammar: "Non-Essential & Essential Clauses",
        grammarPage: "p. 113",
        reading: "Paired Passages",
        readingPage: "p. 276",
        practice: "Drill Exercises",
        available: false
    },
    {
        number: 13,
        grammar: "Additional Comma Uses and Misuses",
        grammarPage: "p. 134",
        reading: "Graphics and Data Analysis",
        readingPage: "p. 300",
        practice: "Drill Exercises",
        available: false
    },
    {
        number: 14,
        grammar: "Colons and Dashes",
        grammarPage: "p. 139",
        reading: "Question Marks",
        readingPage: "p. 143",
        practice: "—",
        available: false
    },
    {
        number: 15,
        grammar: "Apostrophes: Plural vs. Possessive",
        grammarPage: "p. 144",
        reading: "Pronoun and Noun Agreement",
        readingPage: "p. 153",
        practice: "Drill Exercises",
        available: false
    },
    {
        number: 16,
        grammar: "Verbs: Agreement and Tense",
        grammarPage: "p. 170",
        reading: "Word Pairs and Comparisons",
        readingPage: "p. 193",
        practice: "Practice Test 3",
        available: false
    },
    {
        number: 17,
        grammar: "Parallel Structure",
        grammarPage: "p. 200",
        reading: "Dangling and Misplaced Modifiers",
        readingPage: "p. 210",
        practice: "Drill Exercises",
        available: false
    },
    {
        number: 18,
        grammar: "Relative Pronouns",
        grammarPage: "p. 218",
        reading: "Cumulative Review: All Punctuation and Transitions",
        readingPage: "p. 163",
        practice: "Drill Exercises",
        available: false
    },
    {
        number: 19,
        grammar: "Session details not provided",
        reading: "Session details not provided",
        practice: "—",
        available: false
    },
    {
        number: 20,
        grammar: "English Practice Test 1",
        reading: "Drill Exercises",
        practice: "—",
        available: false
    },
    {
        number: 21,
        grammar: "English Practice Test 2",
        reading: "Drill Exercises",
        practice: "—",
        available: false
    },
    {
        number: 22,
        grammar: "More Practice Tests",
        reading: "Practice Test 4",
        practice: "—",
        available: false
    }
];

function displayCourses() {
    const container = document.getElementById("courses-container");

    container.innerHTML = "";

    courses.forEach(course => {

        const card = document.createElement("div");
        card.className = "course-card";

        if (course.available) {
            card.classList.add("course-card-active");
        } else {
            card.classList.add("course-card-coming-soon");
        }

        card.innerHTML = `
            <div class="course-icon">${course.icon}</div>

            <h3>${course.title}</h3>

            <p>${course.description}</p>

            <span class="course-status">
                ${course.available ? "Available" : "Coming Soon"}
            </span>

            <button class="${course.available ? "start-button" : "secondary-button"}">
                ${course.available ? "Open Course →" : "Coming Soon"}
            </button>
        `;

        const button = card.querySelector("button");

        button.onclick = function () {
            if (course.available) {
                showESTCourse();
            } else {
                showComingSoon(course.title);
            }
        };

        container.appendChild(card);
    });
}

function displayESTSessions() {
    const container = document.getElementById("est-sessions-container");

    container.innerHTML = "";

    estSessions.forEach(session => {

        const card = document.createElement("div");
        card.className = "session-card";

        if (session.available) {
            card.classList.add("session-card-active");
        }

        card.innerHTML = `
            <div class="session-number">
                Session ${session.number}
            </div>

            <h3>
                ${session.available ? "Parts of Speech & Vocabulary in Context" : "EST Session " + session.number}
            </h3>

            <div class="session-row">
                <strong>Grammar:</strong>
                ${session.grammar}
                ${session.grammarPage ? ` (${session.grammarPage})` : ""}
            </div>

            <div class="session-row">
                <strong>Reading:</strong>
                ${session.reading}
                ${session.readingPage ? ` (${session.readingPage})` : ""}
            </div>

            <div class="session-row">
                <strong>Practice:</strong>
                ${session.practice}
            </div>

            <button
                class="${session.available ? "start-button" : "secondary-button"} session-button">
                ${session.available ? "Open Session →" : "Coming Soon"}
            </button>
        `;

        const button = card.querySelector("button");

        button.onclick = function () {
            if (session.available && session.number === 2) {
                showESTSession2();
            } else {
                showComingSoon(`EST Session ${session.number}`);
            }
        };

        container.appendChild(card);
    });
}

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
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Verb",
        explanation: "Study is a verb because it shows an action."
    },

    {
        sentence: "The students study every evening.",
        targetWord: "students",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Noun",
        explanation: "Students is a noun because it names people."
    },

    {
        sentence: "They study every evening.",
        targetWord: "They",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Pronoun",
        explanation: "They is a pronoun because it takes the place of a noun."
    },

    {
        sentence: "The books are on the table.",
        targetWord: "on",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Preposition",
        explanation: "On is a preposition because it shows location."
    },

    {
        sentence: "I studied, but I was tired.",
        targetWord: "but",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Conjunction",
        explanation: "But is a conjunction because it connects ideas."
    },

    {
        sentence: "She walked slowly.",
        targetWord: "slowly",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Adverb",
        explanation: "Slowly is an adverb because it gives more information about the verb walked."
    },

    {
        sentence: "It was a cold morning.",
        targetWord: "cold",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Adjective",
        explanation: "Cold is an adjective because it gives information about the noun morning."
    },

    {
        sentence: "The teacher explained the rule.",
        targetWord: "explained",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Verb",
        explanation: "Explained is a verb because it shows an action."
    }
];


let currentQuestion = 0;
let score = 0;
// ===== Learn Mode =====

function showLearnMode() {
    hideAllScreens();

    document.getElementById("learn-screen").style.display = "block";

    displayPartsOfSpeech();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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
    showCourseHub();
}

// ===== Learn the strategy =====

function showStrategyMode() {
    hideAllScreens();

    document.getElementById("strategy-screen").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ===== Start the Quiz =====

function startPractice() {
    currentQuestion = 0;
    score = 0;

    hideAllScreens();

    document.getElementById("practice-screen").style.display = "block";

    showQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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

   const highlightedSentence = question.sentence.replace(
    question.targetWord,
    `<strong>${question.targetWord}</strong>`
);

document.getElementById("sentence").innerHTML = highlightedSentence;

    document.getElementById("target-word").textContent =
        question.targetWord;

    document.getElementById("feedback").textContent = "";
    const progress =
    ((currentQuestion + 1) / questions.length) * 100;

document.getElementById("progress-bar").style.width =
    progress + "%";

document.getElementById("next-button").style.display = "none";

renderAnswerButtons(question.choices);
}

function renderAnswerButtons(choices) {

    const container = document.getElementById("answers");

    container.innerHTML = "";

    choices.forEach(choice => {

        const button = document.createElement("button");

        button.className = "answer-button";
        button.textContent = choice;

        button.onclick = function () {
            checkAnswer(choice);
        };

        container.appendChild(button);
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
    document.getElementById("feedback").scrollIntoView({
    behavior: "smooth",
    block: "center"
});
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


function hideAllScreens() {
    const screens = document.querySelectorAll(".hero");

    screens.forEach(screen => {
        screen.style.display = "none";
    });
}


function showCourseHub() {
    hideAllScreens();

    document.getElementById("welcome-screen").style.display = "block";

    displayCourses();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showESTCourse() {
    hideAllScreens();

    document.getElementById("est-course-screen").style.display = "block";

    displayESTSessions();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showComingSoon(courseName) {
    alert(`${courseName} is coming soon.`);
}

displayCourses();


const questions = [
  {
    question: "شَجَرَة",
    answer: "Tree",
  },

  {
    question: "٣",
    answer: "Three",
  },
  {
    question: "انْظُرْ",
    answer: "Look",
  },
  {
    question: "٤",
    answer: "Four",
  },

  {
    question: "جَدَّة",
    answer: "Grandmother",
  },
  {
    question: "نَظَّارَة",
    answer: "Eye Glass",
  },
  {
    question: "طَبِيب",
    answer: "Doctor",
  },
  {
    question: "٦",
    answer: "Six",
  },
  {
    question: "أَخِي",
    answer: "Brother",
  },
  {
    question: "٢",
    answer: "Two",
  },
  {
    question: "أُخْتِي",
    answer: "Sister",
  },
  {
    question: "الغُرْفَة",
    answer: "Room",
  },
  {
    question: "مَا",
    answer: "What",
  },
  {
    question: "رَقَم",
    answer: "Number",
  },
  {
    question: "إِسْم",
    answer: "Name",
  },
  {
    question: "٧",
    answer: "Seven",
  },
  {
    question: "كَيْفَ",
    answer: "How",
  },
  {
    question: "أَيْنَ",
    answer: "Where",
  },
  {
    question: "هَذَا",
    answer: "This",
  },
  {
    question: "كَيْفَ حَالُكَ؟",
    answer: "How are you?",
  },
  {
    question: "أَرْبَعَة",
    answer: "Four",
  },
  {
    question: "اِسْمَعْ",
    answer: "Listen",
  },

  {
    question: "مُفْرَدَات",
    answer: "Vocabulary",
  },
  {
    question: "هَذَا المَكَانُ",
    answer: "This place",
  },
  {
    question: "اِعِيدْ",
    answer: "Repeat",
  },
  {
    question: "أَنْتِ",
    answer: "You (feminine)",
  },
  {
    question: "أَنْتَ",
    answer: "You (masculine)",
  },
  {
    question: "أَنَا",
    answer: "I",
  },
  {
    question: "مِنْ أَيْنَ أَنْتَ؟",
    answer: "Where are you from?",
  },
  {
    question: "نَعَم",
    answer: "Yes",
  },
  {
    question: "لَا",
    answer: "No",
  },
  {
    question: "صَحِيح",
    answer: "Correct",
  },
  {
    question: "جِنْسِيَّة",
    answer: "Nationality",
  },
  {
    question: "أَهْلًا",
    answer: "Welcome",
  },
  {
    question: "ثَلاثَة",
    answer: "Three",
  },

  {
    question: "١",
    answer: "One",
  },
  {
    question: "٨",
    answer: "Eight",
  },
  {
    question: "دَرْس",
    answer: "Lesson",
  },
  {
    question: "أَعْرِفُ",
    answer: "Know",
  },
  {
    question: "ثَمَانِيَة",
    answer: "Eight",
  },

  {
    question: "هَذِهِ",
    answer: "This (feminine)",
  },
  {
    question: "صَدِيق",
    answer: "Friend",
  },
  {
    question: "هِيَ",
    answer: "She",
  },
  {
    question: "هُوَ",
    answer: "He",
  },
  {
    question: "مَعَ",
    answer: "With",
  },
  {
    question: "فِي",
    answer: "In",
  },
  {
    question: "صُورَة",
    answer: "Picture",
  },

  {
    question: "٩",
    answer: "Nine",
  },
  {
    question: "ابْن",
    answer: "Son",
  },
  {
    question: "١٠",
    answer: "Ten",
  },
  {
    question: "جَدّ",
    answer: "Grandfather",
  },

  {
    question: "سَبْعَة",
    answer: "Seven",
  },

  {
    question: "مِعْطَف",
    answer: "Coat",
  },

  {
    question: "٥",
    answer: "Five",
  },
  {
    question: "إِلَى",
    answer: "To",
  },
  {
    question: "وَاحِد",
    answer: "One",
  },
  {
    question: "اِثْنَان",
    answer: "Two",
  },

  {
    question: "خَمْسَة",
    answer: "Five",
  },

  {
    question: "عَمّ",
    answer: "Uncle",
  },

  {
    question: "تِسْعَة",
    answer: "Nine",
  },

  {
    question: "هِيَ تَقْرَأُ",
    answer: "She reads",
  },
  {
    question: "عَشَرَة",
    answer: "Ten",
  },
  {
    question: "هُوَ يَقْرَأُ",
    answer: "He reads",
  },
  {
    question: "مَا هَذَا؟",
    answer: "What is this?",
  },
  {
    question: "سِتَّة",
    answer: "Six",
  },
];

let currentQuestionIndex = 0;

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
}

function loadQuestion(index) {
  const question = questions[index];
  const quizContainer = document.getElementById("quiz");

  // Clear previous question
  quizContainer.innerHTML = "";

  // Create a card element
  const card = document.createElement("div");
  card.classList.add("quiz-card");

  const cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");

  // Front side of the card (Arabic word)
  const cardFront = document.createElement("div");
  cardFront.classList.add("card", "card-front");
  cardFront.innerHTML = `
      <div>${question.question}</div>
    `;

  // Back side of the card (Meaning)
  const cardBack = document.createElement("div");
  cardBack.classList.add("card", "card-back");
  cardBack.innerHTML = `
      <div>${question.answer}</div>
    `;

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);
  quizContainer.appendChild(card);

  // Add flip effect on click, toggling back and forth
  let isFlipped = false;
  card.addEventListener("click", () => {
    if (isFlipped) {
      cardInner.style.transform = "rotateY(0deg)";
      isFlipped = false;
    } else {
      cardInner.style.transform = "rotateY(180deg)";
      isFlipped = true;
    }
  });
}

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  } else {
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("finish-btn").style.display = "inline-block";
  }
});

document.getElementById("finish-btn").addEventListener("click", () => {
  document.getElementById(
    "result"
  ).innerHTML = `Congratulations! You have completed the quiz.`;
  document.getElementById("finish-btn").style.display = "none";
  document.getElementById("restart-btn").style.display = "inline-block";
});

document.getElementById("restart-btn").addEventListener("click", () => {
  // Shuffle the questions
  shuffleArray(questions);

  // Reset variables and UI
  currentQuestionIndex = 0;
  document.getElementById("result").innerHTML = "";
  document.getElementById("next-btn").style.display = "inline-block";
  document.getElementById("restart-btn").style.display = "none";
  document.getElementById("finish-btn").style.display = "none";
  loadQuestion(currentQuestionIndex);
});

// Initialize the quiz
loadQuestion(currentQuestionIndex);

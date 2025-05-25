const questionsByTheme = {
    science: [
      {
        question: "Какой газ преобладает в атмосфере Земли?",
        options: ["Кислород", "Азот", "Углекислый газ", "Водород"],
        answer: 1
      },
      {
        question: "Сколько хромосом у человека?",
        options: ["42", "46", "48", "50"],
        answer: 1
      },
      {
        question: "Какая самая близкая звезда к Земле?",
        options: ["Сириус", "Полярная звезда", "Альфа Центавра", "Солнце"],
        answer: 3
      },
      {
        question: "Какой элемент обозначается символом 'Au'?",
        options: ["Серебро", "Алюминий", "Золото", "Аргон"],
        answer: 2
      },
      {
        question: "Какая планета самая большая в Солнечной системе?",
        options: ["Земля", "Сатурн", "Юпитер", "Нептун"],
        answer: 2
      },
      {
        question: "Что измеряется в амперах?",
        options: ["Напряжение", "Сила тока", "Сопротивление", "Мощность"],
        answer: 1
      },
      {
        question: "Как называется наука о растениях?",
        options: ["Зоология", "Ботаника", "Экология", "Генетика"],
        answer: 1
      },
      {
        question: "Сколько элементов в периодической таблице Менделеева?",
        options: ["92", "118", "120", "126"],
        answer: 1
      },
      {
        question: "Какая кислота содержится в желудке?",
        options: ["Серная", "Азотная", "Соляная", "Уксусная"],
        answer: 2
      },
      {
        question: "Какой газ выделяют растения при фотосинтезе?",
        options: ["Углекислый газ", "Азот", "Кислород", "Водород"],
        answer: 2
      }
    ],
    history: [
      {
        question: "В каком году началась Вторая мировая война?",
        options: ["1939", "1941", "1945", "1935"],
        answer: 0
      },
      {
        question: "Кто был первым президентом США?",
        options: ["Томас Джефферсон", "Джордж Вашингтон", "Авраам Линкольн", "Бенджамин Франклин"],
        answer: 1
      },
      {
        question: "Какой город был столицей Древнего Египта?",
        options: ["Александрия", "Мемфис", "Фивы", "Каир"],
        answer: 1
      },
      {
        question: "В каком году человек впервые полетел в космос?",
        options: ["1957", "1961", "1969", "1975"],
        answer: 1
      },
      {
        question: "Кто написал 'Войну и мир'?",
        options: ["Достоевский", "Толстой", "Чехов", "Гоголь"],
        answer: 1
      },
      {
        question: "Когда распался СССР?",
        options: ["1985", "1991", "1995", "2000"],
        answer: 1
      },
      {
        question: "Кто изобрёл печатный станок?",
        options: ["Леонардо да Винчи", "Иоганн Гутенберг", "Томас Эдисон", "Галилео Галилей"],
        answer: 1
      },
      {
        question: "В каком году крестили Русь?",
        options: ["898", "988", "1054", "1240"],
        answer: 1
      },
      {
        question: "Кто открыл Америку?",
        options: ["Фернан Магеллан", "Христофор Колумб", "Джеймс Кук", "Васко да Гама"],
        answer: 1
      },
      {
        question: "Когда началась Первая мировая война?",
        options: ["1905", "1914", "1917", "1922"],
        answer: 1
      }
    ],
    geography: [
      {
        question: "Какая самая длинная река в мире?",
        options: ["Амазонка", "Нил", "Янцзы", "Миссисипи"],
        answer: 0
      },
      {
        question: "В какой стране находится Эйфелева башня?",
        options: ["Италия", "Германия", "Франция", "Испания"],
        answer: 2
      },
      {
        question: "Какое озеро самое глубокое в мире?",
        options: ["Каспийское море", "Байкал", "Танганьика", "Верхнее"],
        answer: 1
      },
      {
        question: "Сколько океанов на Земле?",
        options: ["3", "4", "5", "6"],
        answer: 2
      },
      {
        question: "Какая самая высокая гора в мире?",
        options: ["Килиманджаро", "Эверест", "Аконкагуа", "Мак-Кинли"],
        answer: 1
      },
      {
        question: "Какая страна самая большая по площади?",
        options: ["Китай", "США", "Канада", "Россия"],
        answer: 3
      },
      {
        question: "Какой материк самый сухой?",
        options: ["Африка", "Австралия", "Южная Америка", "Антарктида"],
        answer: 1
      },
      {
        question: "Столица Австралии?",
        options: ["Сидней", "Мельбурн", "Канберра", "Брисбен"],
        answer: 2
      },
      {
        question: "Какая страна не граничит с Бразилией?",
        options: ["Аргентина", "Колумбия", "Чили", "Уругвай"],
        answer: 2
      },
      {
        question: "Какой пролив разделяет Европу и Африку?",
        options: ["Босфор", "Гибралтарский", "Дарданеллы", "Магелланов"],
        answer: 1
      }
    ]
  };
  
  let currentQuestion = 0;
  let score = 0;
  let selectedTheme = '';
  let questions = [];
  
  const themeScreen = document.getElementById('theme-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const resultScreen = document.getElementById('result-screen');
  const themeBtns = document.querySelectorAll('.theme-btn');
  const nextBtn = document.getElementById('next-btn');
  const restartBtn = document.getElementById('restart-btn');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const currentQuestionEl = document.getElementById('current-question');
  const totalQuestionsEl = document.getElementById('total-questions');
  const scoreEl = document.getElementById('score');
  const totalEl = document.getElementById('total');
  
  themeBtns.forEach(btn => {
    btn.addEventListener('click', selectTheme);
  });
  
  nextBtn.addEventListener('click', nextQuestion);
  restartBtn.addEventListener('click', restartQuiz);
  
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  
  function selectTheme(e) {
    selectedTheme = e.target.dataset.theme;
    questions = shuffleArray([...questionsByTheme[selectedTheme]]).slice(0, 10);
    
    themeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    totalQuestionsEl.textContent = questions.length;
    showQuestion();
  }
  
  function showQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    currentQuestionEl.textContent = currentQuestion + 1;
  
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option-btn');
      button.addEventListener('click', () => selectOption(index));
      optionsContainer.appendChild(button);
    });
  }
  
  function selectOption(index) {
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option-btn');
    
    options.forEach(option => option.disabled = true);
  
    if (index === question.answer) {
      options[index].classList.add('correct');
      score++;
    } else {
      options[index].classList.add('incorrect');
      options[question.answer].classList.add('correct');
    }
  
    nextBtn.classList.remove('hidden');
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      nextBtn.classList.add('hidden');
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    scoreEl.textContent = score;
    totalEl.textContent = questions.length;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultScreen.classList.add('hidden');
    themeScreen.classList.remove('hidden');
  }
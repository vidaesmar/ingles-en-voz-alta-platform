const vocabularyData = {
    A1: {
        word: "HELLO",
        phonetic: "/je'lou/",
        translation: "Hola",
        example: "Hello, how are you?"
    },
    A2: {
        word: "ROUTINE",
        phonetic: "/ru'tin/",
        translation: "Rutina",
        example: "I need to change my daily routine."
    },
    B1: {
        word: "BREAKTHROUGH",
        phonetic: "/breik'thru",
        translation: "Avance / Logro importante",
        example: "This class was a major breakthrough for my speaking."
    }
};

//DOM elements
const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const htmlRoot = document.documentElement;

//main preview card elements
const previewBadge = document.querySelector('.preview-badge');
const previewWord = document.querySelector('.preview-word');
const previewDivider = document.querySelector('.preview-divider');
const phoneticText = document.querySelector('.phonetic-text');
const translationText = document.querySelector('.translation-text');
const exampleText = document.querySelector('.example-text');

//selecting all the public directory cards at the bottom
const directoryCards = document.querySelectorAll('.directory-card');

//Interactive Vocabulary List Switcher
directoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const selectedLevel = card.querySelector('.card-level-display').textContent;
        const activeData = vocabularyData[selectedLevel];
        previewBadge.textcontent = selectedLevel;
        previewWord.textContent = activeData.word;
        phoneticText.textContent = activeData.phonetic;

        //Update the inner supporting reference translations
        translationText.innerHTML = `<small>Traducción:</small> ${activeData.translation}`;
        exampleText.innerHTML = `<small>Ej.:</small> ${activeData.example}`;
        
        //update the accent colors to match the selected level
        const levelColor = getComputedStyle(htmlRoot).getPropertyValue(`--level-${selectedLevel.toLowerCase}`);
        previewBadge.style.backgroundColor = levelColor;
        previewDivider.style.backgroundColor = levelColor;
    });
});

//Bilingual Language Capsule Toggle
langToggle.addEventListener('click', () => {
    const options = langToggle.querySelectorAll('.lang-option');
   
    //toggle the visual active class block back and forth
    options.forEach(opt => opt.classList.toggle('active'));
    
    //determine which language is now active based on layout class assignment
    const currentLang = htmlRoot.getAttribute('lang') === 'es' ? 'en' : 'es';
    htmlRoot.setAttribute('lang', newLang);

    //select all translation language blocks 
    const esBlocks = document.querySelectorAll('.lang-es');
    const enBlocks = document.querySelectorAll('.lang-en');

    //handle the display visibility flips
    if (newLang === 'en') {
        esBlocks.forEach(el => el.style.display = 'none');
        enBlocks.forEach(el => el.style.display = 'block');
    } else {
        esBlocks.forEach(el = el.style.display = 'block');
        enBlocks.forEach(el => el.style.display = 'none');
    }
});

//Minimalist light/dark mode controller
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlRoot.getAttribute('data-theme');

    //flip the data-theme parameter string inside root element
    if (currentTheme === 'dark') {
        htmlRoot.setAttribute('data-theme', 'light');
    } else {
        htmlRoot.setAttribute('data-theme', 'dark');
    }
});
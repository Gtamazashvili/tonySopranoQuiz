class Question {
    question: string;
    options: string[];
    correctAnswer: string;

    constructor(question: string, options: string[], correctAnswer: string) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
}

let quizQuestionNumber = 0;
let correctAnswers = 0;
let questionsArray : Question[] = [
    new Question("Who is the wife of Tony Soprano?", ["Adriana La Cerva", "Livia Soprano", "Carmela Soprano", "Dr. Jennifer Melfi"], "Carmela Soprano"),
    new Question("In which state is the series 'The Sopranos' primarily set?", ["New York", "California", "New Jersey", "Massachusetts"], "New Jersey"),
    new Question("Who is the FBI informant within Tony's crew in the earlier seasons?", ["Paulie Gualtieri", "Salvatore Bonpensiero", "Silvio Dante", "Christopher Moltisanti"], "Salvatore Bonpensiero"),
    new Question("In the 'Pine Barrens' episode, which two characters get lost in the snowy woods?", ["Christopher and Paulie", "Tony and Christopher", "Paulie and Silvio", "Tony and Silvio"], "Christopher and Paulie"),
    new Question("What is the name of the club owned by Silvio Dante?", ["Bada Bing!", "The Drunken Clam", "The Satriale's", "Nuovo Vesuvio"], "Bada Bing!"),
    new Question("Which character is Tony's sister?", ["Carmela Soprano", "Dr. Jennifer Melfi", "Janice Soprano", "Rosalie Aprile"], "Janice Soprano"),
    new Question("Who is the captain of the Soprano crew before Tony takes over?", ["Paulie Gualtieri", "Ralph Cifaretto", "Jackie Aprile Sr.", "Silvio Dante"], "Jackie Aprile Sr."),
    new Question("Who became a film producer and created 'Cleaver'?", ["Tony Soprano", "Christopher Moltisanti", "Silvio Dante", "Bobby Baccalieri"], "Christopher Moltisanti"),
    new Question("Which character does Carmela have a brief romantic interest in, while separated from Tony?", ["Furio Giunta", "Richie Aprile", "Father Phil Intintola", "Artie Bucco"], "Furio Giunta"),
    new Question("Which of the following is NOT a mob boss Tony interacts with?", ["Carmine Lupertazzi", "Phil Leotardo", "Johnny Sacramoni", "Benito Mussolini"], "Benito Mussolini"),
    new Question("Who becomes an FBI informant and is engaged to Christopher?", ["Janice Soprano", "Carmela Soprano", "Adriana La Cerva", "Rosalie Aprile"], "Adriana La Cerva"),
    new Question("Which character has an obsession with UFOs and the supernatural?", ["Christopher Moltisanti", "Paulie Gualtieri", "Bobby Baccalieri", "Ralph Cifaretto"], "Paulie Gualtieri"),
    new Question("Who is known for his violent outbursts and dated Janice before being killed?", ["Ralph Cifaretto", "Richie Aprile", "Bobby Baccalieri", "Silvio Dante"], "Richie Aprile"),
    new Question("Who runs the Satriale's Pork Store?", ["Paulie Gualtieri", "Silvio Dante", "Tony Soprano", "Artie Bucco"], "Tony Soprano"),
    new Question("Who is the original owner of the Bada Bing club?", ["Tony Soprano", "Paulie Gualtieri", "Hesh Rabkin", "Silvio Dante"], "Silvio Dante"),
    new Question("Who is Carmela's confidant and the priest at the Soprano's church?", ["Father John", "Father Phil Intintola", "Father Michael", "Father Peter"], "Father Phil Intintola"),
    new Question("Which character did Tony suffocate to death in a hospital?", ["Tony Blundetto", "Ralph Cifaretto", "Christopher Moltisanti", "Richie Aprile"], "Christopher Moltisanti"),
    new Question("Who bought and moved into the Soprano's old house?", ["Janice Soprano", "Carmela's cousin Brian", "Johnny Sacramoni", "Robert Wegler"], "Janice Soprano"),
    new Question("Which of the following characters did not get 'whacked' in the series?", ["Bobby Baccalieri", "Tony Soprano", "Big Pussy", "Richie Aprile"], "Tony Soprano"),
    new Question("What ailment does Uncle Junior suffer from in the later seasons?", ["Cancer", "Alzheimer's Disease", "Heart Disease", "Diabetes"], "Alzheimer's Disease")
];

function displayQuestionAndAnswer(question: Question): void {
    const questionH1 = document.getElementById("questionH1");
    const span = document.getElementById("span");
    const answerElements = [
        document.getElementById("answerNumberOne"),
        document.getElementById("answerNumberTwo"),
        document.getElementById("answerNumberThree"),
        document.getElementById("answerNumberFour")
    ];

    if (questionH1) questionH1.innerText = question.question;
    if (span) span.innerText = String(quizQuestionNumber + 1);
    answerElements.forEach((el, index) => {
        if (el) el.innerText = question.options[index];
    });
}

function checkAnswer(answer:HTMLElement): void {
    const clickedAnswer = answer.querySelector('p')?.innerText;

    if (clickedAnswer === questionsArray[quizQuestionNumber].correctAnswer) {
        correctAnswers++;
    }

    quizQuestionNumber++;

    if (quizQuestionNumber < questionsArray.length) {
        displayQuestionAndAnswer(questionsArray[quizQuestionNumber]);
    } else {
        const quizContent = document.getElementById("quizContent");
        const scoreElement = document.getElementById("score");
        const endOfTheQuiz = document.getElementById("endOfTheQuiz");

        if (quizContent) quizContent.style.display = "none";
        if (scoreElement) scoreElement.innerHTML = correctAnswers.toString();
        if (endOfTheQuiz) endOfTheQuiz.style.display = "block";
    }
}

function startTheQuiz(): void {
    displayQuestionAndAnswer(questionsArray[0]);
    document.querySelectorAll(".answer1, .answer2, .answer3, .answer4").forEach(option => {
        option.addEventListener("click", (event) => checkAnswer(event.currentTarget as HTMLElement));

    });
}

const startButton = document.getElementById("startButton");
if (startButton) {
    startButton.addEventListener("click", () => {
        const heading = document.getElementById("heading");
        const quizContent = document.getElementById("quizContent");
        startButton.style.display="none"
        if (heading) heading.style.display = "none";
        if (quizContent) quizContent.style.display = "block";

        startTheQuiz();
    });
}

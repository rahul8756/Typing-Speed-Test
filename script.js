//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = `Web development involves creating and maintaining websites. It encompasses front-end development for user interfaces (HTML, CSS, JavaScript) and back-end development for server-side functionality (Node.js, Python, PHP). Web developers use frameworks like React or Django, ensuring responsive and interactive experiences for users across various devices.`;
const Sentence = document.getElementById("sentence");

const startbtn = document.getElementById("start-btn");

const Input = document.getElementById("input");

const Timer = document.getElementById("timer");

const Result = document.getElementById("result");

const Speed = document.getElementById("speed");

const Accuracy = document.getElementById("accuracy");

const RetryBtn = document.getElementById("retry-btn");

//Decleare a coutdown variable.
let countdown = 30;

//create a event.
startbtn.addEventListener("click", () => {
  Sentence.innerHTML = sentences;
  Input.value = ""; //Clear input field
  Input.disabled = false;
  startbtn.disabled = true;
  countdown = 30; //Reset countdown
  timer();

  //Change the text color

  Sentence.style.color = "white";
});

// Define a timer function
function timer() {
  Timer.textContent = `00:${countdown}`;
  Timer.style.color = "white";
  countdown--;
  if (countdown < 0) {
    Timer.textContent = "00:00";
    showResult();
  } else {
    setTimeout(timer, 1000);
  }
}

// Function to calculate typing speed and accuracy and display the result.
function showResult() {
  const typedWords = Input.value.split(" ").filter((word) => word !== "");
  const sentenceWords = sentences.split(" ").filter((word) => word !== "");

  const correctWords = typedWords.reduce((count, word, index) => {
    return count + (word === sentenceWords[index] ? 1 : 0);
  }, 0);

  const accuracyPercentage = (
    (correctWords / sentenceWords.length) *
    100
  ).toFixed(2);
  const typingSpeed = ((60 / 30) * correctWords).toFixed(0);

  Speed.textContent = typingSpeed;
  Accuracy.textContent = accuracyPercentage;
  Result.style.color = "white";
  Result.style.display = "block";
}

// Add event listener for the retry button.
RetryBtn.addEventListener("click", () => {
  Result.style.display = "none";
  startbtn.disabled = false;
  Input.value = "";
});

// const sentences = `The quick brown fox jumps over the lazy dog . Sphinx of black quartz, judge my vow . Pack my box with five dozen liquor jugs . How vexingly quick daft zebras jump !`;
// let currentSentenceIndex = 0;
// let startTime, endTime;
// let timerInterval;

// const sentenceElement = document.getElementById("sentence");
// const inputElement = document.getElementById("input");
// const startButton = document.getElementById("start-btn");
// const timerElement = document.getElementById("timer");
// const speedElement = document.getElementById("speed");
// const accuracyElement = document.getElementById("accuracy");
// const resultElement = document.getElementById("result");
// const retryButton = document.getElementById("retry-btn");

// function startTest() {
//   sentenceElement.innerHTML = sentences;
//   inputElement.value = "";
//   inputElement.disabled = false;
//   inputElement.focus();
//   startButton.disabled = true;
//   startTime = new Date();
//   timerInterval = setInterval(updateTimer, 1000);
//   setTimeout(endTest, 30000); // End the test after 30 seconds
// }

// function updateTimer() {
//   const currentTime = new Date();
//   const elapsedTime = Math.floor((currentTime - startTime) / 1000);
//   const remainingTime = 30 - elapsedTime;
//   const minutes = Math.floor(remainingTime / 60);
//   const seconds = remainingTime % 60;
//   timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
//     .toString()
//     .padStart(2, "0")}`;
// }

// function endTest() {
//   clearInterval(timerInterval);
//   endTime = new Date();
//   const elapsedTime = Math.floor((endTime - startTime) / 1000);
//   const typedSentence = inputElement.value.trim();
//   const correctSentence = sentenceElement.textContent.trim();

//   let speed = 0;
//   let typedWords = [];
//   if (typedSentence != "") {
//     typedWords = typedSentence.split(" ");
//   }

//   const correctWords = correctSentence.split(" ");
//   console.log(correctWords);
//   let correctCount = 0;
//   let ind = 0;
//   typedWords.forEach((word, index) => {
//     if (word === correctWords[index]) {
//       correctCount++;
//       ind = index;
//     }
//   });
//   if (typedSentence != "") {
//     speed = Math.floor((correctCount / 30) * 60);
//   }
//   const accuracy = (correctCount / correctWords.length) * 100;
//   speedElement.textContent = speed;
//   accuracyElement.textContent = accuracy.toFixed(2);
//   resultElement.style.display = "block";
//   retryButton.focus();
// }

// startButton.addEventListener("click", startTest);

// retryButton.addEventListener("click", () => {
//   resultElement.style.display = "none";
//   startButton.disabled = false;
//   inputElement.value = "";
// });

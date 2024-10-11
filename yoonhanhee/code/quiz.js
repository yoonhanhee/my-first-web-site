const myName = "윤한희";
const quizData = [
    {
        question: `${myName}의 나이는?`,
        options: ["20", "21", "22", "23"],
        answer: "20", 
    },
    {   
        question: `${myName}의 MBTI는?`,
        options: ["ISTP", "INFP", "ENFP", "INTP"],
        answer: "INFP",
    },
    {
        question: `${myName}의 취미는?`,
        options: ["운동", "독서", "수면", "게임"],
        answer: "독서",
    },
    {
        question: `${myName}의 생일은?`,
        options: ["4월 16일", "8월 27일", "11월 24일", "1월 15일"],
        answer: "1월 15일",
    },
    {
        question: `${myName}가 이 페이지를 만들기 위해 걸린 시간은?`,
        options: ["약3시간", "약9시간", "약16시간", "약23시간"],
        answer: "약16시간",
    },
]; 

function renderQuiz() {
    const quizContainer = document.getElementById("quiz"); 
    quizData.forEach((item, index) => { 
        const questionHTML = `<div class="quiz-item">
                                <p>${item.question}</p>
                                ${item.options.map((option) => `
                                    <input type="radio" name="question${index}" value="${option}">
                                    <label>${option}</label>
                                    <br>
                                `).join('')}
                              </div>`;
        quizContainer.innerHTML += questionHTML; 
    });
}

// 퀴즈 제출 후 점수 계산 함수
function submitQuiz() {
    let score = 0;
    quizData.forEach((item, index) => { 
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`); 
        if (selectedOption) {
            const answer = selectedOption.value; 
            if (answer === item.answer) { 
                score++; 
            }
        }
    });

    // 결과 출력
    document.getElementById("result").innerText = "당신의 점수는 " + score + "점입니다.";
}

// renderQuiz() 호출
renderQuiz();
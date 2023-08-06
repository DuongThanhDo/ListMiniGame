export const QuizGame = () => {
    return `
        <div class="game game__qg">
            <header class="game__qg-header">
                <p>Câu hỏi số</p>
                <input type="text" value="1">
            </header>

            <div class="game__qg-container">
                <div class="game__qg-ctn_quesion">
                    <p>Ok</p>
                </div>

                <div class="game__qg-answer">
                    <div class="game__qg-answer-list">
                        <div class="game__qg-answer-item">
                            <p>A: </p>
                            <span>ok</span>
                        </div>
                        <div class="game__qg-answer-item">
                            <p>B:</p>
                            <span>ok</span>
                        </div>
                        <div class="game__qg-answer-item">
                            <p>C:</p>
                            <span>ok</span>
                        </div>
                        <div class="game__qg-answer-item">
                            <p>D:</p>
                            <span>ok</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const QuizGameACT = () => {
    var stt = 0
    const quesion = document.querySelector('.game__qg-ctn_quesion p')
    const answerText = document.querySelectorAll('.game__qg-answer-item span')
    const answerBtn = document.querySelectorAll('.game__qg-answer-item')
    const sttText = document.querySelector('.game__qg-header input')
    
    const addQuiz = () => {
        listQuestion.forEach((item, index) => {
            if(index == stt) {
                quesion.textContent = `${item.quesion}`
                answerText.forEach((itemAnswer, indexAnswer) => {
                    itemAnswer.textContent = `${item.listAnswer[indexAnswer].answer}`
                })
            }
        });
    }
    addQuiz()
    
    answerBtn.forEach((btn, vitri) => {
        btn.onclick = () => {
            listQuestion.forEach((item, index) => {
                if(index == stt) {
                    item.listAnswer.forEach((itemAnswer, indexAnswer) => {
                        if (itemAnswer.answer == answerText[vitri].textContent) {
                            if(itemAnswer.result == true) {
                                btn.classList.add('game__qg-dung')
                                quesion.textContent = `Đáp án chính xác`
                                setTimeout(() => {
                                    btn.classList.remove('game__qg-dung')
                                    stt++
                                    sttText.value = stt + 1
                                    addQuiz()
                                }, 1000);
                            }
                            else {
                                btn.classList.add('game__qg-sai')
                                quesion.textContent = `Bạn đã thua cuộc`
                                stt = 0
                                setTimeout(() => {
                                    btn.classList.remove('game__qg-sai')
                                    sttText.value = stt + 1
                                    addQuiz()
                                }, 1000);
                            }
                        }
                    })
                }
            });
            
            if (stt+1 == listQuestion.length) {
                quesion.textContent = `Bạn đã Chiến Thắng`
                sttText.value = 'Win'
                setTimeout(() => {
                    stt = 0
                    sttText.value = stt + 1
                    addQuiz()
                }, 1000);
            }
        }
    })
}

// data
export const listQuestion = [
    {
        id: 0,
        quesion: '1 + 2 = ?',
        listAnswer: [
            {
                answer: '1',
                result: false
            },
            {
                answer: '3',
                result: true
            },
            {
                answer: '-3',
                result: false
            },
            {
                answer: '-1',
                result: false
            }
        ]
    },
    {
        id: 1,
        quesion: '9 - 5 = ?',
        listAnswer: [
            {
                answer: '-5',
                result: false
            },
            {
                answer: '5',
                result: false
            },
            {
                answer: '-4',
                result: false
            },
            {
                answer: '4',
                result: true
            }
        ]
    },
    {
        id: 2,
        quesion: '12 - 4 + 4',
        listAnswer: [
            {
                answer: '12',
                result: true
            },
            {
                answer: '13',
                result: false
            },
            {
                answer: '14',
                result: false
            },
            {
                answer: '15',
                result: false
            }
        ]
    },
    {
        id: 3,
        quesion: 'a + b = ',
        listAnswer: [
            {
                answer: '2',
                result: false
            },
            {
                answer: '3',
                result: false
            },
            {
                answer: '1',
                result: false
            },
            {
                answer: `'ab'`,
                result: true
            }
        ]
    },
    {
        id: 4,
        quesion: '12-12-12-12 = ',
        listAnswer: [
            {
                answer: '-12',
                result: false
            },
            {
                answer: '12',
                result: false
            },
            {
                answer: '-24',
                result: true
            },
            {
                answer: '24',
                result: false
            }
        ]
    },
    {
        id: 5,
        quesion: '1 + 1 = ',
        listAnswer: [
            {
                answer: '1',
                result: false
            },
            {
                answer: '2',
                result: true
            },
            {
                answer: '3',
                result: false
            },
            {
                answer: '4',
                result: false
            }
        ]
    },
    {
        id: 6,
        quesion: '31 * 2 = ?',
        listAnswer: [
            {
                answer: '31',
                result: false
            },
            {
                answer: '62',
                result: true
            },
            {
                answer: '93',
                result: false
            },
            {
                answer: '13',
                result: false
            }
        ]
    },
    {
        id: 7,
        quesion: '12 / 4 = ',
        listAnswer: [
            {
                answer: '1',
                result: false
            },
            {
                answer: '2',
                result: false
            },
            {
                answer: '3',
                result: true
            },
            {
                answer: '4',
                result: false
            }
        ]
    },
    {
        id: 8,
        quesion: '100 * 10 / 100 = ',
        listAnswer: [
            {
                answer: '100',
                result: false
            },
            {
                answer: '10',
                result: true
            },
            {
                answer: '1000',
                result: false
            },
            {
                answer: '1',
                result: false
            }
        ]
    },
    {
        id: 9,
        quesion: '4321 - 1234 = ',
        listAnswer: [
            {
                answer: '3870',
                result: false
            },
            {
                answer: '3078',
                result: false
            },
            {
                answer: '3780',
                result: false
            },
            {
                answer: '3087',
                result: true
            }
        ]
    }
]
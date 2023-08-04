import { DoanSo, DoanSoACT } from "./views/pages/DoanSo.js";
import { KeoBuaBao, KeoBuaBaoACT } from "./views/pages/KeoBuaBao.js";
import { listPages } from "./views/pages/ListPages.js"
import { QuizGame, QuizGameACT } from "./views/pages/QuizGame.js";

const containerElement = document.querySelector('.container')
const comeBack = document.querySelector('.come-back')

const appACT = () => {
    containerElement.innerHTML = listPages()

    const listElementPages = document.querySelectorAll('.page-item')
    listElementPages.forEach(item => {
        item.addEventListener('click', () => {
            if(item.id == 1) {
                containerElement.innerHTML = KeoBuaBao()
                KeoBuaBaoACT()
            }
            else if(item.id == 2) {
                containerElement.innerHTML = DoanSo()
                DoanSoACT()
            }
            else if(item.id == 3) {
                containerElement.innerHTML = QuizGame()
                QuizGameACT()
            }
            comeBack.classList.toggle('hidden')
        })
    })

}
appACT()

comeBack.addEventListener('click', () => {
    containerElement.innerHTML = listPages()
    comeBack.classList.toggle('hidden')
    appACT()
})

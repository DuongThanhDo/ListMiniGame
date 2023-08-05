export const CoCaRo = () => {
    return `
        <div class="game game__ccr">
            <div class="game__ccr-container">
                <div class="game__ccr-player game__ccr-player01 game-taget">Player 01</div>

                <div class="game__ccr-playground">
                    <table>
                        <tr>
                            <td id="1"></td>
                            <td id="2"></td>
                            <td id="3"></td>
                        </tr>
                        
                        <tr>
                            <td id="4"></td>
                            <td id="5"></td>
                            <td id="6"></td>
                        </tr>
                        
                        <tr>
                            <td id="7"></td>
                            <td id="8"></td>
                            <td id="9"></td>
                        </tr>
                    </table>
                </div>
                
                <div class="game__ccr-player game__ccr-player02">Player 02</div>
            </div>

            <div class="game__ccr-reset">
                <button type="reset">Reset</button>
            </div>
        </div>
    `
}

export const CoCaRoACT = () => {
    const player01 = document.querySelector('.game__ccr-player01')
    const player02 = document.querySelector('.game__ccr-player02')
    const resetGame = document.querySelector('.game__ccr-reset button')
    const listPlayground = document.querySelectorAll('.game__ccr-playground table tr td')

    var playerSymbol = 'X'
    var checkPlayground = []
    var checkPlayer01 = []
    var checkPlayer02 = []

    console.log(player01, player02, listPlayground);

    listPlayground.forEach(element => {
        element.addEventListener('click', () => {
            if(!checkPlayground.includes(element.id)) {
                checkPlayground.push(element.id)
                element.innerText = playerSymbol
                playerSymbol != 'X' ?  playerSymbol = 'X' :  playerSymbol = 'O'

                if (checkPlayground.length % 2 != 0) {
                    checkPlayer01.push(element.id)
                    player01.classList.remove('game-taget')
                    player02.classList.add('game-taget')
                    endGameCCR()
                }
                else if (checkPlayground.length % 2 == 0) {
                    checkPlayer02.push(element.id)
                    player01.classList.add('game-taget')
                    player02.classList.remove('game-taget')
                    endGameCCR()
                }
            }
        })
    });

    resetGame.addEventListener('click', () => {
        funcReset()
    })

    const result = (arr) => {
        if (arr.includes('1') && arr.includes('2') && arr.includes('3') ||
            arr.includes('4') && arr.includes('5') && arr.includes('6') ||
            arr.includes('7') && arr.includes('8') && arr.includes('9') ||
            arr.includes('1') && arr.includes('4') && arr.includes('7') ||
            arr.includes('2') && arr.includes('5') && arr.includes('8') ||
            arr.includes('3') && arr.includes('6') && arr.includes('9') ||
            arr.includes('1') && arr.includes('5') && arr.includes('9') ||
            arr.includes('3') && arr.includes('7') && arr.includes('5')
            ) {
                return true
        }
        return false
    }

    const funcReset = () => {
        listPlayground.forEach(element => {
            player01.classList.remove('game-taget')
            player01.classList.add('game-taget')
            player02.classList.remove('game-taget')
            element.innerText = ''
            checkPlayground = []
            playerSymbol = 'X'
            checkPlayer01 = []
            checkPlayer02 = []
        })
    }

    const endGameCCR = () => {
        if (result(checkPlayer01)) {
            setTimeout(() => {
                alert('1 WIN')
                funcReset() 
            }, 100);
        }
        else if (result(checkPlayer02)) {
            setTimeout(() => {
                alert('2 WIN')
                funcReset() 
            }, 100);
        }
        else if (checkPlayground.length == 9) {
            setTimeout(() => {
                alert('Draw')
                funcReset() 
            }, 100);
        }
    }
}


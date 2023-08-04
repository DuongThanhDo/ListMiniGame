export const KeoBuaBao = () => {
    return `
        <div class="game game__kbb">
            <ul class="game__kbb-select-list">
                <li class="game__kbb-select-item" id="1"><img src="./src/assets/img/KeoBuaBao/keo.png" alt=""></li>
                <li class="game__kbb-select-item" id="2"><img src="./src/assets/img/KeoBuaBao/bua.png" alt=""></li>
                <li class="game__kbb-select-item" id="3"><img src="./src/assets/img/KeoBuaBao/bao.png" alt=""></li>
            </ul>

            <div class="game__kbb-display">
                <div class="game__kbb-display_header">
                    <p>Bạn</p>
                    <div class="game__kbb-ketqua">Hòa</div>
                    <p>Máy</p>
                </div>

                <div class="game__kbb-display_container">
                    <div class="game__kbb-display_select-ban">
                        <img src="./src/assets/img/KeoBuaBao/bao.png" alt="">
                    </div>

                    <div class="game__kbb-display_select-may">
                        <img src="./src/assets/img/KeoBuaBao/bao.png" alt="">
                    </div>
                </div>
            </div>    
        </div>
    `
}

export const KeoBuaBaoACT = () => {
    const listItem = document.querySelectorAll('.game__kbb-select-item')

    const arrMay = [1,2,3]

    listItem.forEach((item, index) => {
        item.onclick = () => {
            const may = arrMay[Math.floor(Math.random() * 3)]
            const ketQuaText = document.querySelector('.game__kbb-ketqua')
            ketQuaText.textContent = `${ketQua(index + 1, may)}`
            const imgBan = document.querySelector('.game__kbb-display_select-ban')
            const imgMay = document.querySelector('.game__kbb-display_select-may')
            imgBan.innerHTML = `<img src="./src/assets/img/KeoBuaBao/${imgKetQua(index + 1)}.png" alt="">`
            imgMay.innerHTML = `<img src="./src/assets/img/KeoBuaBao/${imgKetQua(may)}.png" alt="">`
        }
    })

    const ketQua = (ban, may) => {
        if(ban == may) return 'Hòa'
        else if((ban == 1 && may == 2) || (ban == 2 && may == 3) || (ban == 3 && may == 1)) return 'Thua'
        else return 'Thắng'
    }

    const imgKetQua = (value) => {
        if(value == 1) return 'keo'
        else if(value == 2) return 'bua'
        else return 'bao'
    }
}
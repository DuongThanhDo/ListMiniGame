export const DoanSo = () => {
    return `
        <div class="game game__ds">
            <div class="game__ds-container">
                <div class="game__ds-container_header">
                    <p>Hãy đoán số từ 1 -> 100</p>
                    <div class="game__ds-times">
                        <p>Số lượt</p>
                        <input type="text" value="15">
                    </div>
                </div>

                <div class="game__ds-container_display">
                    <p>Chưa có đáp án</p>
                </div>

                <div class="game__ds-container_result">
                    <input type="text" placeholder="DA">
                    <button>Kiểm tra</button>
                </div>
            </div>

            <div class="game__ds-reset">
                <button>Reset</button>
            </div> 
        </div>
    `
}

export const DoanSoACT = () => {
    const check = document.querySelector('.game__ds-container_result button')
    const ctnDisplay = document.querySelector('.game__ds-container_display')
    const timesText = document.querySelector('.game__ds-times input')
    const reset = document.querySelector('.game__ds-reset button')

    var kq = Math.floor(Math.random() * 100) + 1

    check.onclick = () => {
        const timesText = document.querySelector('.game__ds-times input')
        console.log(timesText.value);
        let times = Number(timesText.value)
        console.log(times);
        const resultText = document.querySelector('.game__ds-container_result input')
        var result = resultText.value
        console.log(Number(result));
        if(Number(result) > 0) {
            times--
            if(times > 0) {
                timesText.value = times
                if(Number(result) > kq)
                ctnDisplay.innerHTML = `Số ${result} lớn hơn đáp án`
                else if(Number(result) < kq)
                    ctnDisplay.innerHTML = `Số ${result} bé hơn đáp án`
                else {
                    ctnDisplay.innerHTML = `Đáp án chính xác`
                    kq = Math.floor(Math.random() * 100) + 1
                    timesText.value = 15
                }
            }
            else {
                ctnDisplay.innerHTML = `Bạn đã thua`
                kq = Math.floor(Math.random() * 100) + 1
                timesText.value = 15
            }
        }
        else {
            ctnDisplay.innerHTML = `Nhập lại đáp án`
        }
        resultText.value = ''
    }

    reset.onclick = () => {
        ctnDisplay.innerHTML = `Chưa có đáp án`
        kq = Math.floor(Math.random() * 100) + 1
        timesText.value = 15
    }
}
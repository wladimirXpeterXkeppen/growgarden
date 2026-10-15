let 水分量 = 0
// 土壌水分センサー（ピンP0）とサーボ（ピンP2）を使った自動水やり
let 水分しきい値 = 600
basic.forever(function () {
    水分量 = pins.analogReadPin(AnalogPin.P0)
    if (水分量 < 水分しきい値) {
        // 土が乾いている → サーボを回して水を供給
        pins.servoWritePin(AnalogPin.P2, 90)
        // 2秒間水やり
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P2, 0)
    }
    // 5秒ごとにチェック
    basic.pause(5000)
})

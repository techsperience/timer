let time = 0
input.onButtonPressed(Button.A, function () {
    time = 10
    while (time >= 0) {
        basic.showString("" + (time))
        basic.pause(60000)
        time += -1
    }
})
input.onButtonPressed(Button.B, function () {
    time += 10
    basic.showString("" + (time))
})
basic.forever(function () {
    serial.writeValue("time", time)
    basic.showNumber(0)
    basic.pause(5000)
})

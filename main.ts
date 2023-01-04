enum RadioMessage {
    message1 = 49434
}
radio.setGroup(1)
basic.forever(function () {
    if (gamePad.keyState(GamerBitPin.P8)) {
        radio.sendNumber(1)
    } else if (gamePad.keyState(GamerBitPin.P13)) {
        radio.sendNumber(2)
    }
})

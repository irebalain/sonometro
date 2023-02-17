basic.forever(function () {
    if (input.soundLevel() == 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(30000)
    } else {
        if (input.soundLevel() < 100) {
            basic.showIcon(IconNames.Happy)
            basic.pause(30000)
        } else {
            basic.showIcon(IconNames.Sad)
            basic.pause(30000)
        }
    }
})

basic.forever(function () {
    if (input.soundLevel() == 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
    } else {
        if (input.soundLevel() < 10) {
            basic.showIcon(IconNames.Happy)
            basic.pause(200)
        } else {
            basic.showIcon(IconNames.Sad)
            basic.pause(200)
        }
    }
})

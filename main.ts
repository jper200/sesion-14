let num_1 = 0
let num_2 = 0
let num_3 = 0
input.onButtonPressed(Button.A, function () {
    if (num_1 == 0 && num_2 == 0) {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.Shake, function () {
    num_1 = randint(0, 9)
    num_2 = randint(0, 9)
    num_3 = randint(0, 9)
    if (num_1 != num_2 && num_2 != num_3 && num_1 != num_3) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.showNumber(num_1)
        basic.showNumber(num_2)
        basic.showNumber(num_3)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        num_1 = 0
        num_2 = 0
        num_3 = 0
    }
})

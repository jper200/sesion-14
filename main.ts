let num_1 = 0
let num_2 = 0
let num_3 = 0
let mayor = 0
let media = 0
let menor = 0
input.onButtonPressed(Button.A, function () {
    if (num_1 > num_2 && num_1 > num_3) {
        mayor = num_1
        if (num_2 > num_3) {
            media = num_2
            menor = num_3
        } else {
            media = num_3
            menor = num_2
        }
        basic.showNumber(mayor)
        basic.showNumber(menor)
        basic.showNumber(menor)
    }
    if (num_2 > num_1 && num_2 > num_3) {
        mayor = num_2
        if (num_1 > num_3) {
            media = num_1
            menor = num_3
        } else {
            media = num_1
            menor = num_3
        }
        basic.showNumber(mayor)
        basic.showNumber(menor)
        basic.showNumber(menor)
    }
    if (num_3 > num_1 && num_3 > num_2) {
        mayor = num_2
        if (num_1 > num_2) {
            media = num_1
            menor = num_2
        } else {
            media = num_1
            menor = num_2
        }
        basic.showNumber(mayor)
        basic.showNumber(menor)
        basic.showNumber(menor)
    }
})
input.onGesture(Gesture.Shake, function () {
    num_1 = randint(0, 9)
    num_2 = randint(0, 9)
    num_3 = randint(0, 9)
    if (num_1 != num_2 && num_2 != num_3 && num_1 != num_3) {
        basic.showNumber(num_1)
        basic.showNumber(num_2)
        basic.showNumber(num_3)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showNumber(num_1)
        basic.showNumber(num_2)
        basic.showNumber(num_3)
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

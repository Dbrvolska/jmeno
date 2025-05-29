let tool = 0
input.onButtonPressed(Button.A, function () {
    tool = randint(0, 2)
    if (tool) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (tool == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})

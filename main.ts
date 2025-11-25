input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showNumber(steps)
})
let prev_accel = 0
let accel = 0
let z = 0
let y = 0
let x = 0
let steps = 0
let threshold = 1200
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    accel = Math.sqrt(x * x + y * y + z * z)
    if (Math.abs(accel - prev_accel) > threshold) {
        steps += 1
        basic.showNumber(steps)
        basic.pause(300)
    }
    prev_accel = accel
})

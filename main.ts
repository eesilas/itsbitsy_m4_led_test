forever(function () {
    pins.D7.digitalWrite(true)
    pause(500)
    pins.D7.digitalWrite(false)
    pause(500)
})

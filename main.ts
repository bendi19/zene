input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 1311, 255, 0, 1180, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1356, 1, 0, 255, 1180, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 531, 2292, 101, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 2426, 553, 0, 103, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 0, 1180, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1, 5000, 0, 255, 1180, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
})

const carta = 'peluche (bici coche) bici coche balón'

function isValid(letter) {
   return /^[^{[()]*\([^{[()]+\)+.*/g.test(letter)
}

isValid(carta)
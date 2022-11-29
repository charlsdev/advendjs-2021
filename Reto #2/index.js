const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
   return letter
      .trim()
      .split(' ')
      .filter(lett => !lett.startsWith('_'))
      .reduce((resp, item) => {
         if (!resp[item]) resp[item] = 0
         resp[item]++
         return resp
      }, {})
}

listGifts(carta)
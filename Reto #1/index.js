const ovejas = [
   { name: 'Noa', color: 'azul' },
   { name: 'Euge', color: 'rojo' },
   { name: 'Navidad', color: 'rojo' },
   { name: 'Ki Na Ma', color: 'rojo'},
   { name: 'AAAAAaaaaa', color: 'rojo' },
   { name: 'Nnnnnnnn', color: 'rojo'}
]

export default function contarOvejas(ovejas) {
   return ovejas.filter(
      ovj =>
         ovj.color === 'rojo' &&
         ovj.name.toLowerCase().includes('n') &&
         ovj.name.toLowerCase().includes('a')
   )
}

contarOvejas(ovejas)
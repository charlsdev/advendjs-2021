const date = new Date('Dec 24, 2021 00:00:01')

function daysToXmas(date) {
   const dayNav = new Date('Dec 25, 2021')
   return Math.ceil((dayNav - date) / (1000 * 60 * 60 * 24))
}

daysToXmas(date)
const long = 8

function createXmasTree(height) {
   const SYMBOL = {
      AST: '*',
      DASH: '_',
      NUM: '#',
   }

   const tree = []
   let width = 1, splitTree = height - 1

   for (let i = 0; i < height; i++) {
      tree.push(
         SYMBOL.DASH.repeat(splitTree - i) +
         SYMBOL.AST.repeat(width) +
         SYMBOL.DASH.repeat(splitTree - i)
      )

      width += 2
   }

   const base = SYMBOL.DASH.repeat(splitTree) + SYMBOL.NUM + SYMBOL.DASH.repeat(splitTree)
   tree.push(base)
   tree.push(base)

   return tree.join('\n')
}

createXmasTree(long)
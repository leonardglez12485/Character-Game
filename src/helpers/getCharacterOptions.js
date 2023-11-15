
const characters = [
    {name: 'Aladdin', id: 1},
    {name: 'Anna', id: 2},
    {name: 'Ariel', id: 3},
    {name: 'Minnie', id: 4},
    {name: 'Aurora', id: 5},
    {name: 'Bella', id: 6},
    {name: 'Cenicienta', id: 7},
    {name: 'Deisy', id: 8},
    {name: 'Lucas', id: 9},
    {name: 'Bambi', id: 10},
    {name: 'Donald', id: 11},
    {name: 'Elsa', id: 12},
    {name: 'Jasmin', id: 13},
    {name: 'Tomas Omaley', id: 14},
    {name: 'Pantera Rosa', id: 15},
    {name: 'Merlyn', id: 16},
    {name: 'Mowgli', id: 17},
    {name: 'Duquesa', id: 18},
    {name: 'Pocahontas', id: 19},
    {name: 'Mulan', id: 20},
    {name: 'Scooby', id: 21},
    {name: 'Bugs Bunny', id: 22},
    {name: 'Sofia', id: 23},
    {name: 'Peter Pan', id: 24},
    {name: 'Harry Potter', id: 25},
    {name: 'Baloo', id: 26},
    {name: 'Mikey', id: 27},
    {name: 'Sebastian', id: 28},
    {name: 'Simba', id: 29},
    {name: 'Blanca Nieves', id: 30},
    {name: 'Silvestre', id: 31},
    {name: 'Campanita', id: 32},
    {name: 'Tom', id: 33},
]

const getCharacters = ()=>{
    const characterArray = Array.from(Array(33))
   return characterArray.map(( _, index)=> index)
}


const getCharacterOptions= ()=>{
  const mixedCharacters = getCharacters().sort(()=> Math.random()-0.5)
  const SelectedCh = getCharacterName(mixedCharacters.slice(0,4))
  return SelectedCh
}

const getCharacterName = ([a,b,c,d] = [])=>{
   const resp = []
   resp.push(characters[a])
   resp.push(characters[b])
   resp.push(characters[c])
   resp.push(characters[d])
   return resp
}

export default getCharacterOptions
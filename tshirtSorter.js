const tshirtSorter = (str) => {
    let shirtS = ''
    let shirtM = ''
    let shirtL = ''
    for (let i = 0; i < str.length; i++){
      if (str[i] === 's') {
        shirtS += 's'
      } else if (str[i] === 'm') {
        shirtM += 'm'
      } else if (str[i] === 'l') {
        shirtL += 'l'
      }
    }
    return shirtS + shirtM + shirtL
  }
  
  console.log(tshirtSorter('smlllsmmmlssml'))
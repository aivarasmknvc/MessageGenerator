//propts to randomize from:
const prompts = {

    date : ['today', 'tomorrow', 'monday', 'tuesday', 'thursday', 'wednesday', 'friday', 'saturday', 'sunday'],
    person : ['you', 'your relative' , 'a friend','your best friend', 'a stranger'],
    act : ['betray', 'gift', 'beat', 'give', 'get', 'achieve'],
    outcome : ['good', 'bad', 'terrible', 'terrific', 'amazing', 'loved', 'awarded'],
}
//final fortune outcome .push
const fortune = [];

function randomNumb(num){
  return  Math.floor(Math.random() * num)
}
//iterate thru prompts[prop]
for (let prop in prompts) {
 let randomPr = randomNumb(prompts[prop].length) 

//switchas
switch(prop){
    case 'date':
        fortune.push(`The cards says, that ${prompts[prop][randomPr]}, `)
        break
    case 'person':
        fortune.push(`${prompts[prop][randomPr]}, will`)
        break
    case 'act' :
        fortune.push(`${prompts[prop][randomPr]} something, that will make you feel - `)
        break
    case 'outcome' :
        fortune.push(`${prompts[prop][randomPr]}, so watch out for that!`)
        break

}

}

//compile everything into one msg

function tellafortune(wisdom) {
    const format = fortune.join('\n')
    console.log(format)
  }
  
  tellafortune(fortune);

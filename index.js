// Code your solutions in this file
const messages = []

function writeCards(names, events) {
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  return(messages)
}

function countDown(integer) {
    while (integer >= 0) {
      console.log(integer)
      integer --
    }
  }
  
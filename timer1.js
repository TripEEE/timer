// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

//example node timer1.js 10 3 5 15 9 

//edge cases: if no numbers provided, don't beep
//if an input is a negative number, skip or ignore
//if an input is NaN, ignore/skip

//pseudocode:
//access process.argv as a global
//create a function, no need for an argument since process is global
//loop through process
//use a setTimeout method with this process.stdout.write('\x07');
//pass in process * 1000 as the time

const argv = process.argv.slice(2)

const secondsBeforeBeep = function(numbers) {
  for(let num of numbers) {
    const numParsed = Number(num)
    if(typeof numParsed !== 'number' || numParsed < 0) {
      continue
    } 
    setTimeout(() => {
      process.stdout.write('\x07');
    }, numParsed * 1000)
  }
} 

secondsBeforeBeep(argv)





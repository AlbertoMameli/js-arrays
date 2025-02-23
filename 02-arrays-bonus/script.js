const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longName =[]
for (let i = 0; i < teachers.length; i++ ) {
  console.log(teachers[i]);
  
  if (teachers[i].length >= 5) {
    
   longName.push(teachers[i]);
  }
 
  
}
 console.log(longName)
// 3. Rimuovi 'Ed' dall'array teachers
const removeEd =[]
for (let i =0; i < teachers.length; i++) {
  if (teachers[i] != "Ed") {
removeEd.push(teachers[i]);
  }
}
console.log(removeEd);


let ed = teachers.indexOf("Ed")
console.log(ed);



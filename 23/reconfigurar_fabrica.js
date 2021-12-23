/*
¿Puedes reconfigurar las fábricas para no parar de crear regalos?

Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, 
claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. 
Lo mejor es que veamos un ejemplo:

const from = 'BAL'
const to   = 'LIB'
const canReconfigure(from, to) // true
/* la transformación sería así:
B -> L
A -> I
L -> B

const from = 'CON'
const to   = 'JUU'
const canReconfigure(from, to) // false
no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO

const from = 'MMM'
const to   = 'MID'
cons canReconfigure(from, to) // false
no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)

const from = 'AA'
const to   = 'MID'
cons canReconfigure(from, to) // false -> no tiene la misma longitud
*/

function canReconfigure(from, to) {
  if (from.length !== to.length) return false;
  const fromMap = {};
  const toMap = {};
  for (let i = 0; i < from.length; i++) {
    const f = from[i];
    const t = to[i];
    if (f === t) {
      fromMap[f] = f;
      toMap[f] = f;
    } else {
      fromMap[f] = t;
      toMap[t] = f;
    }
  }
  for (let i = 0; i < from.length; i++) {
    const f = from[i];
    const t = to[i];
    if (fromMap[f] !== t || toMap[t] !== f) return false;
  }
  return true;
}

const from1 = "BAL";
const to1 = "LIB";
console.log(canReconfigure(from1, to1)); // true

const from2 = "CON";
const to2 = "JUU";
console.log(canReconfigure(from2, to2)); // false

const from3 = "MMM";
const to3 = "MID";
console.log(canReconfigure(from3, to3)); // false

const from4 = "AA";
const to4 = "MID";
console.log(canReconfigure(from4, to4)); // false -> no tiene la misma longitud

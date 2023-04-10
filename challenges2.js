// Desafio 11 - Crie a função generatePhoneNumber
function generatePhoneNumber (array) {
  if (array.length != 11) {
      return 'Array com tamanho incorreto.';
  }
  let contador = 1;
  for (let index = 0; index < array.length; index += 1) {
      contador = 1;
      if (array[index] < 0 || array[index] > 9) {
          return 'não é possível gerar um número de telefone com esses valores';
      }
      for (let index2 = index +1; index2 <= array.length; index2 += 1){
          if (array[index] == array[index2]) {
              contador += 1;
          }
      }
      if (contador >= 3){
          return 'não é possível gerar um número de telefone com esses valores';
      }
  }

  const ddd = `(${array[0]}${array[1]})`;
  const firstsNumbers = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  const secoundsNumbers = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  const resultado = `${ddd} ${firstsNumbers}-${secoundsNumbers}`;
  return resultado;
}

// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA, lineB, lineC) => {

  const fact1 = lineA < lineB + lineC && lineA > Math.abs(lineB) - Math.abs(lineC);
  const fact2 = lineB < lineA + lineC && lineB > Math.abs(lineA) - Math.abs(lineC);
  const fact3 = lineC < lineB + lineA && lineC > Math.abs(lineB) - Math.abs(lineC);
  const fact4 = lineA < lineB + lineC;
  const fact5 = lineB < lineA + lineC;
  const fact6 = lineC < lineB + lineA;
  if (fact1 && fact2 && fact3) {
      return true;
  } else if ( fact4 && fact5 && fact6){
      return true;
  } else {
      return false;
  }
}

// Desafio 13 - Crie a função hydrate
const hydrate = (string) => {
  string = string.split(' ');
  let contador = 0;
  let resultado = 0;
  for (let index = 0; index < string.length; index += 1) {
     if (string[index] >= 1) {
         contador += string[index];
     }
  }
  contador = contador.split('');
  for (let index2 in contador) {
     resultado = resultado + Math.floor(contador[index2]);
  }
  if (resultado > 1) {
    return `${resultado} copos de água`;
  } else {
    return `${resultado} copo de água`;
  }
 }
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};

// Desafio 1 - Crie a função compareTrue
const compareTrue = (param1, param2) => param1 === true && param2 === true;

// Desafio 2 - Crie a função splitSentence
const splitSentence = (string) => string = string.split(' ');
// Desafio 3 - Crie a função concatName
const concatName = (array) => {
  let arr = array[0];
  const arrayReverse = array.reverse();
  return `${arrayReverse[0]}, ${arr}`;
};
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => {
  const points = (wins * 3) + (ties * 1);
  return points;
};
// Desafio 5 - Crie a função highestCount
const highestCount = (array) => {
  let count = 1;
  let bigger = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > bigger) {
      count = 1;
      bigger = array[index];
    } else if (bigger === array[index]) {
      count += 1;
    }
  }
  return count;
};
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea(base, height) {
  const areaTri = (base * height) / 2;
  return areaTri;
}

function calcRectangleArea(base, heigth) {
  const areaRec = base * heigth;
  return areaRec;
}

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  const distCat1 = Math.abs(cat1 - mouse);
  const distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 > distCat2) {
    return 'cat2';
  } else if (distCat2 > distCat1) {
    return 'cat1';
  }
    return 'os gatos trombam e o rato foge';
}
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array) => {
  const stringArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      stringArray.push('fizzBuzz');
    } else if (array[index] % 5 == 0) {
      stringArray.push('buzz');
    } else if (array[index] % 3 == 0) {
      stringArray.push('fizz');
    } else {
      stringArray.push('bug!');
    }
  }
  return stringArray;
};
// Desafio 9 - Crie a função encode e a função decode
function encode(frase) {
  frase = frase.split('');
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] == 'a') {
      frase[index] = 1;
    } else if (frase[index] == 'e') {
      frase[index] = 2;
    } else if (frase[index] == 'i') {
      frase[index] = 3;
    } else if (frase[index] == 'o') {
      frase[index] = 4;
    } else if (frase[index] == 'u') {
      frase[index] = 5;
    }
  }
  return frase.join('');
}

function decode (frase) {
  frase = frase.split('');
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] == 1) {
      frase[index] = 'a';
    } else if (frase[index] == 2) {
      frase[index] = 'e';
    } else if (frase[index] == 3) {
      frase[index] = 'i';
    } else if (frase[index] == 4) {
      frase[index] = 'o';
    } else if (frase[index] == 5) {
      frase[index] = 'u';
    }
  }
  return frase.join('');
}
// Desafio 10 - Crie a função techList
function techList(array, string) {
  let list = [];
  array = array.sort();
  for (let index = 0; index < array.length; index += 1) {
    list.push({tech:array[index], name: string});
  }
  return list;
}
// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};

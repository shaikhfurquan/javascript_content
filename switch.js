/*
Switch:-The JavaScript Switch Statement
Use the switch statement to select one of many code blocks to be executed.

Syntax:-
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

 */

let vowel = 'z'
switch (vowel) {
    case 'a':
        console.log(vowel + ', Yes its vowel ');
        break;
    case 'e':
        console.log(vowel + ', Yes its vowel ');
        break;
    case 'i':
        console.log(vowel + ', Yes its vowel ');
        break;
    case 'o':
        console.log(vowel + ', Yes its vowel ');
        break;
    case 'u':
        console.log(vowel + ', Yes its vowel ');
        break;
    default:
        console.log(vowel + ', Its not volwel ');
        break;
}
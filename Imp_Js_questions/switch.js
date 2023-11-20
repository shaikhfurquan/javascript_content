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


let day = +prompt('Enter the day between 1-7')
        let msg = '';

        switch(day){
            case 1:
                msg = 'Monday';
                break;
            case 2:
                msg = 'Tuesday';
                break;
            case 3:
                msg = 'Wednesday'
                break;
            case 4:
                msg = 'Thursday'
                break;
            case 5:
                msg = 'Friday';
                break;
            case 6:
                msg = 'Saturdsay';
                break;
            case 7:
                mg = 'Sunday';
                break;
            default:
                msg = 'Wrong Input';
                break;
        }

        console.log(msg);
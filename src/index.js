const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const answer = [];
    let chank = '';
    let count = 0;
    expr = expr.replace("**********", "  ")
    for (let i = 0; i < expr.length; i += 2) {
        count += 1
        if(`${expr[i]}${expr[i + 1]}` === '10') chank += '.';
        if(`${expr[i]}${expr[i + 1]}` === '11') chank += '-';
        if(`${expr[i]}${expr[i + 1]}` === '  ') {
        answer.push(" ");
        chank = '';
        count = 0;
        };
        if(count == 5) {
        answer.push(chank);
        chank = '';
        count = 0;
        }
    }
    return answer.map(e => (MORSE_TABLE[e])? MORSE_TABLE[e] : ' ').join('');
}

module.exports = {
    decode
}
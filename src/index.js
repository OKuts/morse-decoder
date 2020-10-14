const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let i = 0;
    let letter, symbol, cod;
    let out = '';
    while (i < expr.length) {
        let j = 0;
        cod = '';
        letter = expr.slice(i, i + 10);
        if (letter !== '**********') {
            while (j < letter.length) {
                symbol = letter.slice(j, j + 2);
                if (symbol !== '00') symbol === '11' ? cod += '-' : cod += '.';
                j += 2;
            }
            out += MORSE_TABLE[cod];
        } else out += ' ';
        i += 10;
    }
    return out;
}


module.exports = {
    decode
}
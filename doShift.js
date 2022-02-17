const {
  CODE_SHIFT,
  LOWER_CODES_END,
  LOWER_CODES_START,
  UPPER_CODES_END,
  UPPER_CODES_START,
  LAT_SYMBOLS_REGEX
} = require('./constants');

const doShift = (str, shift) => {
  if (shift < 0) return doShift(str, shift + CODE_SHIFT);
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(LAT_SYMBOLS_REGEX)) {
      const code = str.charCodeAt(i);
      if (code >= UPPER_CODES_START && code <= UPPER_CODES_END) {
        char = String.fromCharCode(((code - UPPER_CODES_START + shift) % CODE_SHIFT) + UPPER_CODES_START);
      } else if (code >= LOWER_CODES_START && code <= LOWER_CODES_END) {
        char = String.fromCharCode(((code - LOWER_CODES_START + shift) % CODE_SHIFT) + LOWER_CODES_START);
      }
    }
    result += char;
  }
  return result;
};

module.exports = doShift;
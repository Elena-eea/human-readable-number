module.exports = function toReadable (number) {
  const zero = ['zero'];
  const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

  let str = number.toString();
  let result = '';
  if (str.length == 1) {
    return (number == 0) ? zero[0] : units[number - 1];
  } else if (str.length == 2) {
        if (str[0] == 1 && str[1] == 0) {
            result = teens[0];
        } else if (str[0] == 1 && str[1] != 0) {
            result = teens[parseInt(str[1])];
        } else result = (tens[parseInt(str[0]) - 1] + ((str[1] != '0') ? (' ' + units[parseInt(str[1]) - 1]) : ''));
  } else if (str.length == 3) {
        if (str[1] == 0 && str[2] == 0) {
            result = hundreds[parseInt(str[0]) - 1];
        } else if (str[1] == 0 && str[2] != 0) {
            result = hundreds[parseInt(str[0]) - 1] + ' ' + units[parseInt(str[2] - 1)];
        } else if (str[1] == 1 && str[2] == 0) {
            result = hundreds[parseInt(str[0]) - 1] + ' ' + teens[0];
        } else if (str[1] == 1 && str[2] != 0) {
            result = hundreds[parseInt(str[0]) - 1] + ' ' + teens[parseInt(str[2])];
        } else if (str[1] != 1 && str[2] == 0) {
            result = hundreds[parseInt(str[0]) - 1] + ' ' + tens[parseInt(str[1]) - 1];
        } else if (str[1] != 1 && str[2] != 0) {
            result = hundreds[parseInt(str[0]) - 1] + ' ' + tens[parseInt(str[1]) - 1] + ' ' + units[parseInt(str[2]) - 1];
        }
  }
  return result;
}

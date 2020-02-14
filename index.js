function getLookAndSayNextLine(line) {
  if (!line) {
    return '';
  }

  const [count, value] = consecutiveNumbers(line);

  return `${count}${value}` + getLookAndSayNextLine(line.substring(count));
}

const consecutiveNumbers = line => {
  const value = line[0];

  const consecutiveNumbersRegex = new RegExp(`^${value}+`);
  const matches = line.match(consecutiveNumbersRegex);

  const count = matches[0].length;

  return [count, value];
};

module.exports = getLookAndSayNextLine;


const getRandomTSCode = () => {
  const codes = {
    "0": "let",
    "1": "async",
    "2": "await",
    "3": "class",
    "4": "extends",
    "5": "constructor",
    "6": "super",
    "7": "this",
    "8": "function",
    "9": "return",
    "10": "var",
    "11": "const",
    "12": "let",
    "13": "for",
    "14": "of",
    "15": "if",
    "16": "else",
    "17": "switch",
    "18": "case",
    "19": "default",
    "20": "break",
    "21": "continue",
  };

  const randomCode = Math.floor(Math.random() * 21);

  return codes[`${randomCode}`];
};
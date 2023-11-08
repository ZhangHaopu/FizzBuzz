let i = 1;
while (i < 300) {
  let texts = [];

  if (i % 3 === 0) {
    texts.push("Fizz");
  }
  if (i % 5 === 0) {
    texts.push("Buzz");
  }
  if (i % 7 === 0) {
    texts.push("Bang");
  }
  if (i % 11 === 0) {
    texts.push("Bong");
  }
  if (i % 13 === 0) {
    let len = texts.length;
    let index = 0;
    for (let j = 0; j < len; j++) {
      index = j;
      if (texts[j][0] === "B") {
        break;
      }
    }
    texts.splice(index, 0, "Fezz");
  }

  if (i % 17 === 0) {
    texts.reverse();
  }
  let text = texts.join("");

  if (text === "") {
    text = i;
  }
  console.log(text);
  i++;
}

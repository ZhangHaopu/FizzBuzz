let i = 1;
while (i < 201) {
  let text = "";
  let text3 = "";
  let text5 = "";
  let text7 = "";
  let text11 = "";
  let text13 = "";
  if (i % 3 === 0) {
    text3 = "Fizz";
  }
  if (i % 5 === 0) {
    text5 = "Buzz";
  }
  if (i % 7 === 0) {
    text7 = "Bang";
  }
  if (i % 11 === 0) {
    text11 = "Bong";
  }
  if (i % 13 === 0) {
    text13 = "Fezz";
  }
  if (i % 17) {
    if (i % 3 === 0) {
      text = text3 + text13 + text5 + text7 + text11;
    } else {
      text = text13 + text3 + text5 + text7 + text11;
    }
  } else {
    if (i % 3 === 0) {
      text = text11 + text7 + text5 + text13 + text3;
    } else {
      text = text11 + text7 + text5 + text3 + text13;
    }
  }
  if (text === "") {
    text = i;
  }
  console.log(text);
  i++;
}

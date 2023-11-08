let i = 1;
while (i < 101) {
  let text = i;
  if (i % 3 === 0) {
    text = "Fizz";
  }
  if (i % 5 === 0) {
    if (text === i) {
      text = "Buzz";
    } else {
      text += "Buzz";
    }
  }
  console.log(text);
  i++;
}

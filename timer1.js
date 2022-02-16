const args = process.argv;
const newArr = args.slice(2);

const timer1 = (timer) => {
  setTimeout(() => {
    process.stdout.write("\x07");
    console.log("beeps");
  }, timer);
};

if (newArr.length === 0) {
  return null;
}

for (let timer of newArr) {
  if (timer === 0) {
    return null;
  }
  if (timer > 0 && !isNaN(timer)) {
    timer1(timer * 1000);
  }
}

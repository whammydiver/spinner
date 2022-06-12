const spinnerChar = ['|', '/', '-', '\\'];
const count = 0;

const spinner = function (duration, increment, count) {
  if (increment >= duration) {
    return;
  }  
  setTimeout(() => {
    process.stdout.write(`\r${spinnerChar[count % 4]}`);
  }, increment);
  count += 1;
  increment += 200;
  spinner(duration, increment, count);
}

spinner(5000, 200, 0);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1500);


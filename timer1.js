const args = process.argv.slice(2);

const scheduleBeep = (delay) => {
  if (delay > 0) {
    setTimeout(() => {
      process.stdout.write('\x07'); // System beep
    }, delay * 1000);
  }
};

const validateAndSchedule = (input) => {
  const delay = Number(input);
  if (!isNaN(delay) && delay >= 0) {
    scheduleBeep(delay);
  }
};

for (const arg of args) {
  validateAndSchedule(arg);
}


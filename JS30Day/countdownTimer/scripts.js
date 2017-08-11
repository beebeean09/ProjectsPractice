function timer(seconds) {
  const now = Date.now();
  console.log(now);
  const then = now + seconds * 1000;
  console.log(then);
}

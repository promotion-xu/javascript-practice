// setInterval 需要注意的点，使用setTimeout实现setInterval

// setInterval 需要清除之前的定时器

setIntervalFunc = () => {
  console.log(Math.random());
  setTimeout(setIntervalFunc, 1000);
};

setIntervalFunc();

// myInterval(fn, 1000);

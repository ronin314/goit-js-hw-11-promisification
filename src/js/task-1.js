const delay = ms => {
  return new Promise(resolved => {
    setTimeout(() => {
      resolved(ms);
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(1000).then(logger);
delay(2000).then(logger);
delay(3000).then(logger);
delay(4000).then(logger);
delay(5000).then(logger);

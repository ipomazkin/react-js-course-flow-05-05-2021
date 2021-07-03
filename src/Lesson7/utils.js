export function pause(ms = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Pause in ${ms}ms has ended.`);
    }, ms);
  })
}

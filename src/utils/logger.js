export function classComponentLogger(label = null, toLog = {}, options = {
  color: '#333333',
  level: 1
}) {
  let level = new Array(options.level).fill('-', 0, options.level).join(''),
    style = `color: ${options.color}; font-weight: 600;`;
  console.log(`%c${level}> ${this.constructor.name}${label ? `, ${label}: %o` : '%o'}`, style, toLog);
}

export function makeClassComponentLogger(context, options = {}) {
  let handler = classComponentLogger.bind(context);
  let fn = function(label = null, toLog = {}) {
    return handler(label, toLog, options);
  };
  return fn;
}

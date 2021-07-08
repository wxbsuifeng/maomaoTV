function compose(middleware) {
  if(!Array.isArray(middleware)) throw new TypeError('middleware stack must be an array!');
  for(const fn of middleware) {
    if(typeof fn !== 'function') throw new TypeError('middleware must be composed of function!');
  }

  return function(context, next) {
    let idx = -1;
    function dispatch(i) {
      if(idx >= i) return Promise.reject(new Error('next() call too much!'))
      idx = i;
      let fn = middleware[i];
      if(i === middleware.length) fn = next;
      if(!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return dispatch(0);
  }
}

module.exports = compose
const utils = {};

utils.flatten = function flatten(arr, out) {
  const ret = (typeof out === 'undefined') ? [] : out;
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      utils.flatten(arr[i], ret);
    } else {
      ret.push(arr[i]);
    }
  }
  return ret;
};

utils.unique = function unique(arr) {
  const out = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr.indexOf(arr[i]) == i) {
      out.push(arr[i]);
    }
  }
  return out;
};

utils.deepCopy = function deepCopy(obj) {
  if (!obj) return obj;
  let out;
  if (Array.isArray(obj)) {
    out = [];
    for (let i = 0; i < obj.length; i += 1) {
      out.push(utils.deepCopy(obj[i]));
    }
    return out;
  }
  if (typeof obj === 'object') {
    out = {};
    Object.keys(obj).forEach((key) => {
      out[key] = utils.deepCopy(obj[key]);
    });
    return out;
  }
  return obj;
};

export default utils;

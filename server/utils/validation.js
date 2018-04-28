var isRealString = (str) => {
  console.log(typeof str);
  return typeof str === 'string' && str.trim().length > 0;
};

module.exports = {isRealString};

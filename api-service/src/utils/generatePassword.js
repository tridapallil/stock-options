const { generateHash } = require('random-hash');
const md5 = require('md5');

/**
 * Create a random md5 password
 * @param {number} length
 * @returns {string}
 */
const generatePassword = (length = 5) => {
  const newHash = generateHash({ length });
  return md5(newHash);
};

module.exports = generatePassword;

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return vizhener(message, key, true, this.isDirect);
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    return vizhener(encryptedMessage, key, false, this.isDirect);
  }
}
function vizhener(message, key, encrypt, isDirect){
  message = message.toUpperCase();
  key = key.toUpperCase();
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = '';
  for(let i = 0, j = 0; i < message.length; i++, j++){
    let messageIndex = alphabet.indexOf(message[i]);
    let keyIndex = alphabet.indexOf(key[((j >= key.length) ? j%key.length : j)]);
    let alphabetIndex;
    if (messageIndex !== -1) {
      if (encrypt) {
        alphabetIndex = (alphabet.length + (messageIndex + keyIndex)) % alphabet.length;
      } else {
        alphabetIndex = (alphabet.length + (messageIndex - keyIndex)) % alphabet.length;
      }
      let symbol = alphabet[alphabetIndex];
      result += symbol;
    } else {
      j--;
      result += message[((i >= message.length) ? i%message.length : i)];
    }
  }
  if (isDirect) {
    return result;
  } else {
    return result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

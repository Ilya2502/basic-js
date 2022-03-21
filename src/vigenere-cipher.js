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
  constructor(input) {
    if (input === false) {
      this.modification = "reverse";
    } else {
      this.modification = "direct";
    }
  }
  encrypt(str, codeWord) {
    if (str === undefined || codeWord === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arrTemp = [];
    let codeWordTempArr = codeWord.toUpperCase().split("");
    for (let i = 0; i < str.length; i++) {
      if (/[a-z]/i.test(str[i])) {
        arrTemp.push(codeWordTempArr[0]);
        codeWordTempArr.shift();
        if (codeWordTempArr.length === 0) {
          codeWordTempArr = codeWord.toUpperCase().split("");
        }
      } else {
        arrTemp.push(str[i]);
      }
    }
    return this.modification == "direct" 
      ? arrTemp
      .map((item, i) =>
        /[A-Z]/.test(item)
          ? base[base.indexOf(item) + base.indexOf(str[i].toUpperCase())]
          : item
      )
      .join("")
      : arrTemp
      .map((item, i) =>
        /[A-Z]/.test(item)
          ? base[base.indexOf(item) + base.indexOf(str[i].toUpperCase())]
          : item
      )
      .reverse()
      .join("")
    }
  decrypt(str, codeWord) {
    if (str === undefined || codeWord === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arrTemp = [];
    let codeWordTempArr = codeWord.toUpperCase().split("");
    for (let i = 0; i < str.length; i++) {
      if (/[a-z]/i.test(str[i])) {
        arrTemp.push(codeWordTempArr[0]);
        codeWordTempArr.shift();
        if (codeWordTempArr.length === 0) {
          codeWordTempArr = codeWord.toUpperCase().split("");
        }
      } else {
        arrTemp.push(str[i]);
      }
    }
    return this.modification == "direct" 
      ? arrTemp
      .map((item, i) =>
        /[A-Z]/.test(item)
          ? base[base.lastIndexOf(str[i]) - base.indexOf(item)]
          : item
      )
      .join("")
      : arrTemp
      .map((item, i) =>
        /[A-Z]/.test(item)
          ? base[base.lastIndexOf(str[i]) - base.indexOf(item)]
          : item
      )
      .reverse()
      .join("")
  }
}

module.exports = {
  VigenereCipheringMachine
};

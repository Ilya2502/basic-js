const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 let arr = [];
 const chainMaker = {
   getLength() {
     return arr.length;
   },
   addLink(value) {
     value === undefined ? arr.push(`( )`) : arr.push(`( ${value} )`);
     return chainMaker;
   },
   removeLink(position) {
     if (arr[position-1] === undefined) {
       arr = [];
       throw new Error("You can\'t remove incorrect link!");
     }
     arr.splice(position-1, 1);
     return chainMaker;
   },
   reverseChain() {
     arr.reverse();
     return chainMaker;
   },
   finishChain() {
     let arrTemp = [].concat(arr);
     arr = [];
     return arrTemp.join('~~');
   }
 };

module.exports = {
  chainMaker
};

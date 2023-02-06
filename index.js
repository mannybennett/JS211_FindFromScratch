Array.prototype.findFromScratch =
  function(callBackFunc) {
    for (let i = 0; i < this.length; i++) {
      if (callBackFunc(this[i], i, this)) {
        return this[i]
      }
    }
    return undefined
  }

const numberArr = [1, 2, 3]
const myFunc = x => x > 1

console.log(numberArr.findFromScratch(myFunc))

// **********************************************

Array.prototype.findIndexFromScratch =
  function(callBackFunc) {
    for (let i = 0; i < this.length; i++) {
      if (callBackFunc(this[i], i, this)) {
        return i
      }
    }
    return -1
  }

console.log(numberArr.findIndexFromScratch(myFunc))
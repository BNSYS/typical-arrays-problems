
exports.min = function min (array) {
  if (typeof array === `undefined` || array.length === 0 ){
    return 0;
  } else {
    let minElement = array[0];
    array.forEach(element => {
        if (minElement > element){
            minElement = element;
        }
    });
    return minElement;
  }
}

exports.max = function max (array) {
    if (typeof array === `undefined` || array.length === 0 ){
        return 0;
    } else {
      let maxElement = array[0];
      array.forEach(element => {
        if (maxElement < element){
            maxElement = element;
        }
    });
    return maxElement;
    }
}

exports.avg = function avg (array) {
    if (typeof array === `undefined` || array.length === 0 ){
        return 0;
    } else {
        let sumElements = 0;
        array.forEach(element => {
           sumElements+=element;
       });
        return sumElements / array.length;
    }
}


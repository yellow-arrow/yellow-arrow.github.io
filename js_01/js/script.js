//power
	function pow(){
		var result = 1; 
		var p = false;
		var baseNumber = prompt('base number','must be an integer');
		var base = parseInt(baseNumber);
		var exponent = parseInt( prompt('exponent number','must be an integer') );
		if (exponent != 0) {
		  if (exponent < 0) {
		    exponent = -exponent;
		    p = true;
		  }
		  for (var i = 1; i <= exponent; i++) {
		    result *= base;
		  }
		  if (p) result = 1 / result;
		  }
		if (result == 1 && base != 1) {
		  alert('The exponent number must be an integer!');
		} else if (result == 0 && baseNumber != 0) {
		  alert('The base number must be an integer!');
		} else {
		console.log('The result of raising', base, 'to a power of', exponent, 'is', result);
		}
	}
	pow();
function symDif(args) {
  
  args = [...arguments]; 
  
  let arg = args.reduce(function(a, b){ 
    return a.filter(function(i){
      return b.indexOf(i) < 0;
    }).concat(b.filter(function(i){
        return a.indexOf(i) < 0;
      })
    );
  },[]).sort(function(a, b){ 
    return a-b;
  });
  
  let result = []; 
  
  for(let i = 0; i < arg.length; i++) {
    if (result.indexOf(arg[i]) === -1) {
      result.push(arg[i]);
    }
  }
  return result;
}

symDif([1, 2, 3], [5, 2, 1, 4]);

const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ],
  };
  
  const result = [];
  
  const extractBiggest = () => {
    let max = -Infinity;
    let maxIndex = -1;
    
    for (let i = 0; i < data.lists.length; i++) {
      const list = data.lists[i][1];
      const lastIndex = list.length - 1;
      
      if (list[lastIndex] > max) {
        max = list[lastIndex];
        maxIndex = i;
      }
    }
    
    if (maxIndex >= 0) {
      result.push(max);
      data.lists[maxIndex][1].pop();
    }
  };
  
  for (let i = 0; i < 15; i++) {
    extractBiggest();
  }
  
  console.log(result);
  ``
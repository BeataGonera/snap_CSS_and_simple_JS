function cutIt(arr){
  let words = arr.slice(' ');
  let shortestWord = words[0];
  
  for (i = 1; i < arr.length; i++){
   if(shortestWord.length < words[i].length){
     shortestWord = words[i]
  }else{
    continue
  }
  return shortestWord
  
  return arr.forEach((element)=>{element.slice(1, shortestWord.length)}) 
  }
}




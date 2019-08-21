'use strict';

function collectSameElements(collectionA, collectionB) {
  let result=[];
  let collectionC=collectionB.value;
  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<collectionC.length;j++){
        if(collectionA[i]===collectionC[j]){
          result.push(collectionA[i]);
      }
      }
    }
    return result; 
  }
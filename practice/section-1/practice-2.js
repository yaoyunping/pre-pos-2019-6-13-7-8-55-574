'use strict';

function collectSameElements(collectionA, collectionB) {
  //function collectSameElements(collectionA, collectionB) {
    let result=[];
    let collectionC=collectionB[0];
    for(let i=0;i<collectionA.length;i++){
      for(let j=0;j<collectionC.length;j++){
        for(let k=0;k<collectionB.length;k++){
          if(collectionA[i]===collectionC[j]){
            result.push(collectionA[i]);
        }
        }
      }
    }
    return result;
  }  

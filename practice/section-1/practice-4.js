'use strict';

function collectSameElements(collectionA, objectB) {
    let result=[];
    for(let i=0;i<collectionA.length;i++){
      for(let j=0;j<collectionB.value.length;j++){
          if(collectionA[i].key===collectionB.value[j]){
            result.push(collectionA[i]);
        }
        }
      }
      return result; 
    }

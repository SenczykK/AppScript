function searchData(writenData){
   var data = readData("write", 1, 1, 2);
   for(var i=0; i<data.length; i++){
     if(data[i][0] == writenData){
       
       return data[i][1];
     }
     else {
       Logger.log("Incorrect: "+data[i][0]);
     }
   }
}
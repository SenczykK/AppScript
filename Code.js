//var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1LfJvFPXWBxKdN8EF3GhjmbdCu8cDIpSirHSa7qzUu5I/edit#gid=0");
var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/e/2PACX-1vQyD9WA_BzBLNOWhPGIHVGY7lVLcqKbyOmAipimrdqbuSQ6nUaXmr3MGu-2rCm3YzscdFkb9OTC2v0w/pubhtml");
// First function on webpage
function doGet(){

   return pageIndex();
}  

function pageIndex(){
   var ws = ss.getSheetByName("Read");
   var list1 = readData("Read", 1, 1, ws.getLastRow(), 2);
   
   return loadPage("index", list1);
}

function loadOptions(){
   var ws = ss.getSheetByName("Options");
   var list1 = readData("Options", 2, 1, ws.getLastRow()-1, 1);
   var htmlArray = {};
   htmlArray.numbers = list1.map( function(x){return x[0];});
   htmlArray.values = list1.map( function(x){return x[1];});
   
   var outputArray = [];
   for(var i=0; i<ws.getLastRow()-1; i++){
      outputArray.push([htmlArray.numbers[i] , htmlArray.values[i]]) ;
   }
   return outputArray;
}

// Load a options from sheet Options and add it to a HTML table code
/*function loadOptions(){
   var ws = ss.getSheetByName("Options");
   var list1 = readData("Options", 2, 1, ws.getLastRow()-1, 1);

   var htmlArray = {};
   htmlArray.numbers = list1.map(function(x){ 
      return "<tr><th>"+x[0]+"</th>";
   });
   list1 = readData("Options", 2, 2, ws.getLastRow()-1, 2);
   htmlArray.values = list1.map(function(x){ 
      return "<th>"+x[0]+"</th></tr>";
   });
   
   var htmlOutputArray ="";
   for(var x=0; x<ws.getLastRow()-1; x++){
       htmlOutputArray += htmlArray.numbers[x]+htmlArray.values[x];
   }
   return htmlOutputArray;
} // --------- loadOptions() */

function include(filename){
   return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

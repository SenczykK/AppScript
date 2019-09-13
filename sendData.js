function sendData( name, surname){
   var ws = ss.getSheetByName("Write");
   ws.appendRow([ name, surname]);
}
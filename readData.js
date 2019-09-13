function readData(spreasheetName, startRow, startColumn, endRow, endColumn){
    var ws = ss.getSheetByName(spreasheetName);
    return ws.getRange( startRow, startColumn, endRow, endColumn).getValues();
}

function readData(spreasheetName, startRow, startColumn, endColumn){
    var ws = ss.getSheetByName(spreasheetName);
    return ws.getRange( startRow, startColumn, ws.getLastRow(), endColumn).getValues();
}


function GetPiadinerie(latitudine, longitudine, callbackFunction) {
    var arrayPiadinerie = [];

    for (var i = 0; i < 10; i++) {
        var piadineria = new Piadineria(i, "Citt&agrave; " + i, "Indirizzo " + i, "45.25285", "10.28785", "Provincia " + i, "Piadineria n. " + i, "Regione " + i, i * 10, i * 5);
        arrayPiadinerie.push(piadineria);
    }
    GlobalPiadinerie = arrayPiadinerie;

    callbackFunction();
}


function GetMenuPiadine(codicepiadineria, callback) {

    var piadine = [];

    piadine.push(new OrdinePiadinaRow("1", "Cotto fontina", 3.5, "Prosciutto cotto,fontina valdostana", null));
    piadine.push(new OrdinePiadinaRow("2", "Crudo fontina", 3.5, "Prosciutto crudo,fontina valdostana", null));
    piadine.push(new OrdinePiadinaRow("3", "4 formaggi", 3.8, "fontina valdostana,gorgonzola,taleggio,provola", null));
    piadine.push(new OrdinePiadinaRow("4", "Pizzaiola", 3.7, "Pomodoro,mozzarella", null));
    piadine.push(new OrdinePiadinaRow("5", "Prosciutto funghi", 3.5, "Prosciutto cotto,funghi,fontina valdostana", null));

    callback(piadine);
}


var MenuPiadine = new Array();

function OrdinePiadinaRow(codice,nome, prezzo, ingredienti, url) {

    this.codice = codice;
    this.Nome = nome;
    this.Prezzo = prezzo;
    this.Ingredienti = ingredienti;
    this.UrlImmagine = url;
    
    this.Quantita = 0;

}


function LoadPaginaMenuPiadine() {
    MenuPiadine = GetMenuPiadine(GlobalPiadinerie[IdxPiadineriaSelezionata].code,function(lista) {
        MenuPiadine = lista;
        

        

        $.mobile.changePage("#MenuPiadine", { transition: "slideup", changeHash: false });
    });
}
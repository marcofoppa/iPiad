
var MenuPiadine = new Array();
var rowPiadine = '';
var CodicePiadina = '';

function OrdinePiadinaRow(codice, nome, prezzo, ingredienti, url) {

    this.codice = codice;
    this.Nome = nome;
    this.Prezzo = prezzo;
    this.Ingredienti = ingredienti;
    this.UrlImmagine = url;

    this.Quantita = 0;

}

function ComponiEStampaMenu(lista) {
    var content = '';
    var totPezzi = 0;
    var totPrezzo = 0;

    for (var i = 0; i <= lista.length - 1; i++) {

        var pezzi = parseInt(lista[i].Quantita);
        totPezzi += pezzi;
        totPrezzo += (parseFloat(lista[i].Prezzo)*pezzi);

        content += rowPiadine;
        content = content.replace('[nome]', lista[i].Nome)
            .replace('[ingredienti]', lista[i].Ingredienti)
            .replace('[prezzo]', lista[i].Prezzo)
            .replace('[codice]', lista[i].codice)
            .replace('[quantita]', lista[i].Quantita);
    }

    $('#listViewPiadine').html(content);

    $('.BtnSelectPiadina').click(function () {
        CodicePiadina = $(this).data('codice');
        var piada = GetPiadina(CodicePiadina);
        $('#sliderQuantita').val(piada.Quantita);
        $('#popupNomePiadina').html(piada.Nome);
    });

    $.mobile.changePage("#menuPiadine", { transition: "slideup", changeHash: false });
    $('#listViewPiadine').listview('refresh');

    $('#totalePezzi').val(totPezzi);
    $('#totaleOrdine').val(totPrezzo);
}

function LoadPaginaMenuPiadine() {
    GetMenuPiadine(GlobalPiadinerie[IdxPiadineriaSelezionata].code, function (lista) {
        ComponiEStampaMenu(lista);
    });
}

function GetPiadina(codice) {
    var piada;
    for (var i = 0; i <= MenuPiadine.length - 1; i++) {
        if (MenuPiadine[i].codice === codice) {
            piada = MenuPiadine[i];
            break;
        }
    }
    return piada;
}

function OrdinaPiadina() {
    var qta = $('#sliderQuantita').val();
    for (var i = 0; i <= MenuPiadine.length - 1; i++) {
        if (MenuPiadine[i].codice === CodicePiadina) {
            MenuPiadine[i].Quantita = qta;
            break;
        }
    }
    ComponiEStampaMenu(MenuPiadine);

}

function AggiornaQuantita(valore) {
    var qta = parseInt($('#sliderQuantita').val());
    qta += valore;
    if (qta <= 0) qta = 0;
    $('#sliderQuantita').val(qta);
}
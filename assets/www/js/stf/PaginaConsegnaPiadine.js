var rowRiepilogoPiadine = '<li><p class="ui-li-aside ui-li-desc">Quantit&agrave;: <strong>[quantita]</strong><br />Prezzo complessivo: <strong>[totPrezzo]</strong> &euro;</p><h3 class="ui-li-heading">[nome]</h3></li>';

function LoadPaginaConsegnaPiadine() {

    var piadineria = GlobalPiadinerie[IdxPiadineriaSelezionata];
    $('#tblConfermaRagioneSociale').html(piadineria.ragioneSociale);

    var totPezzi = 0;
    var totOrdine = 0;
    var content = '<li data-role="list-divider" role="heading">Dettaglio Ordine</li>';

    for (var i = 0; i < MenuPiadine.length; i++) {
        var piada = MenuPiadine[i];
        if (parseInt(piada.Quantita) > 0) {
            content += rowRiepilogoPiadine;
            var prezzoPiada = parseInt(piada.Quantita) * parseFloat(piada.Prezzo);
            totPezzi += parseInt(piada.Quantita);
            totOrdine += prezzoPiada;
            content = content.replace('[nome]', piada.Nome)
                .replace('[quantita]', piada.Quantita)
                .replace('[totPrezzo]', prezzoPiada);
            
        }
    }

    $('#listViewRiepilogoPiadine').html(content);
    
    $('#tblConfermaNumeroPezzi').html(totPezzi);
    $('#tblConfermaPrezzo').html(totOrdine);

    $.mobile.changePage("#consegnaPiadine", { transition: "slideup", changeHash: false });
    $('#listViewRiepilogoPiadine').listview('refresh');
}
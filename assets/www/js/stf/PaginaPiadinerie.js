
var GlobalPiadinerie = new Array();
var IdxPiadineriaSelezionata = -1;
var _PiadineriaRow = '<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c"><a data-idx="[rowIndex]"  href="#" class="ui-link-inherit BtnPiadineria"><p class="ui-li-aside ui-li-desc"><strong>[distance]</strong> km <br />Percorrenza: <strong>[duration]</strong> min</p><h3 class="ui-li-heading">[ragioneSociale]</h3><p class="ui-li-desc"><strong>[address], [city]</strong></p></a></li>';
var rowPiadineria = '';

function Piadineria(code, city, address, latitude, longitude, province, ragioneSociale, region, distance, duration) {
    this.code = code;
    this.city = city;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.province = province;
    this.ragioneSociale = ragioneSociale;
    this.region = region;
    this.distance = distance;
    this.duration = duration;
}

function LoadPaginaPiadinerie() {

    var content = '';

    for (var i = 0; i <= GlobalPiadinerie.length - 1; i++) {
        var piad = GlobalPiadinerie[i];

        content += rowPiadineria;
        content = content
            .replace("[rowIndex]", i)
            .replace("[distance]", piad.distance)
            .replace("[duration]", piad.duration)
            .replace("[ragioneSociale]", piad.ragioneSociale)
            .replace("[city]", piad.city)
            .replace("[address]", piad.address);
    }
    
    $('#listapiadinerie').html(content);

    $(".BtnPiadineria").unbind("click").click(function (a) {
        a.preventDefault();
        IdxPiadineriaSelezionata = $(this).data('idx');
        LoadPaginaDettaglioPiadineria(GlobalPiadinerie[IdxPiadineriaSelezionata]);
    });
    
    $.mobile.changePage("#piadinerie", { transition: "slideup", changeHash: false });
    $('#listapiadinerie').listview('refresh');

}
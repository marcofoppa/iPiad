document.addEventListener("deviceready", onDeviceReady, false);

function Coordinate(latitudine, longitudine) {
    this.Latitudine = latitudine;
    this.Longitudine = longitudine;
}

function Piadineria(code, city, address, latitude, longitude, province, ragioneSociale, region,distance,duration) {
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

var GlobalPiadinerie = new Array();
var _PiadineriaRow = '<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c"><a data-idx="[rowIndex]"  href="#dettaglioPiadineria" class="ui-link-inherit BtnPiadineria"><p class="ui-li-aside ui-li-desc"><strong>[distance]</strong> km <br />Percorrenza: <strong>[duration]</strong> min</p><h3 class="ui-li-heading">[ragioneSociale]</h3><p class="ui-li-desc"><strong>[address], [city]</strong></p></a></li>';

function onError(error) {
    alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
}

function LoadPiadinerie() {

    var content = "";
    
    for (var i = 0; i <= GlobalPiadinerie.length - 1; i++) {
        var piad = GlobalPiadinerie[i];
        content += _PiadineriaRow
            .replace("[rowIndex]", i)
            .replace("[distance]", piad.distance)
            .replace("[duration]", piad.duration)
            .replace("[ragioneSociale]", piad.ragioneSociale)
            .replace("[city]", piad.city)
            .replace("[address]", piad.address);
    }

    //$('#listapiadinerie').html(content);


    $(".BtnPiadineria").unbind("click").click(function ()
    {
        var codePiadineria = $(this).data('idx');

        SetPiadineria(GlobalPiadinerie[codePiadineria]);

    });
    
    $('#listapiadinerie').html(content).listview('refresh');
    $.mobile.changePage("#piadinerie", { transition: "slideup", changeHash: true });
 
    
}


function SetPiadineria(piadineria)
{
    $.mobile.changePage("#dettaglioPiadineria", { transition: "slideup", changeHash: false });
    
    $("#map_canvas").html('').prepend(getMappaImg(piadineria.latitude, piadineria.longitude));
}


function Init() {

    $.mobile.changePage("#localizzazione", { transition: "slideup", changeHash: false });

    $.mobile.loading('show', {
        text: 'Sto caricando la tua posizione. Attendi !!!',
        textVisible: true,
        theme: 'z',
        html: ""
    });

    GetCurrentPosition();

}

function GetCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            GetPiadinerie(position.coords.latitude, position.coords.longitude, function () { LoadPiadinerie(); });
        },
        onError);
}

function onDeviceReady() {
    
    $(".BtnEsci").click(function () {
        navigator.app.exitApp();
    });

    $(".BtnInit").click(function (e) {
        e.preventDefault();
        Init();
    });
    

    $(".BtnListaPiadinerie").click(function() {
        GetCurrentPosition();
    });

    Init();
}

function getMappaImg(lat, lon)
{
    //Leggo le dimensioni dello schermo
    var width = window.innerWidth;
    var height = window.innerHeight;

    //Imposto una dimensione quadrata utilizzando la dimensione minore (larghezza - altezza)
    if (width > height)
    {
        width = height;
    }
    else if (height > width)
    {
        height = width;
    }
    
    var zoom = 16;
    
    var content = "<img alt='' src='https://maps.googleapis.com/maps/api/staticmap?center=[lat],[lon]&zoom=[zoom]&size=[width]x[height]&markers=[lat],[lon]&sensor=false' width='[width]' height='[height]' />";

    content = content.replace('[zoom]', zoom);
    content = content.replace('[lat]', lat).replace('[lon]', lon);
    content = content.replace('[lat]', lat).replace('[lon]', lon);
    content = content.replace('[width]', width).replace('[height]', height);
    content = content.replace('[width]', width).replace('[height]', height);

    return content;
}

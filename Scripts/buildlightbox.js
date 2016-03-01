var lightbox = '';
var photono = ''

$(document).ready(function () {

    /*Adds data to lightbox acording to frist attribute*/
    var type = $('.open').attr('type');

    if (type == 'like')
        lightbox = "<div class='lb-dataContainer'><div class='lb-data L'><div class='lb-detailsbottom'><span class='lb-number L'></span><span class='photofull L'>Photo full size ></span></div></div><span class='photolike R'>Like</span><span class='photolikepress R'>You like this</span></div></div>";
    if (type == 'rate') {
        photono = "<span class='imgnolb R'>#12345</span>";
        lightbox = "<div class='lb-dataContainer'><div class='lb-data L'><div class='lb-detailsbottom'><span class='lb-number L'></span><span class='photofull L'> Photo full size ></span></div></div><div class='imgrank R'><span class='range L'>Rank(1-100)</span><div class='rankswitch R'><span class='rankplus R'></span><input class='rankdisplay R' type='text' value='0'/><span class='rankminus R'></span></div></div></div></div>"
    }
    if (type == 'myphotos')
        lightbox = "<div class='lb-dataContainer'><div class='lb-data L'><div class='lb-detailsbottom'><span class='lb-number L'></span><span class='photofull L'> Photo full size ></span></div></div><span class='photolike R'>Like</span><span class='photolikepress R'>You like this</span></div></div>";
    if (type == 'over')
        lightbox = "<div class='lb-dataContainer'><span class='lbtitle R'>1St place</span><div class='lb-detailsbottom L'><span class='photofull L'>Click to open full size image></span><span class='lbname R'>Name name name namen name</span></div></div></div>";
});
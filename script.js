let n1 = 1, n2 = 2, n3 = 4, n4 = 8, n5 = 16, n6 = 32, n7 = 64, n8 = 128;
var total = 0;

function openBox(e) {
    let box = document.getElementById(e);
    console.log(total);

    if (box.src.endsWith("closedBox.jpg")) {
        box.src = "img/open_box.png";
        if (e == 1) total += n1;
        else if (e == 2) total += n2;
        else if (e == 3) total += n3;
        else if (e == 4) total += n4;
        else if (e == 5) total += n5;
        else if (e == 6) total += n6;
        else if (e == 7) total += n7;
        else if (e == 8) total += n8;
    } else if (box.src.endsWith("open_box.png")) {
        box.src = "img/closedBox.jpg";
        if (e == 1) total -= n1;
        else if (e == 2) total -= n2;
        else if (e == 3) total -= n3;
        else if (e == 4) total -= n4;
        else if (e == 5) total -= n5;
        else if (e == 6) total -= n6;
        else if (e == 7) total -= n7;
        else if (e == 8) total -= n8;
    }
    document.getElementById('output').innerHTML = total;
    document.getElementById('binaryOutput').innerHTML = total.toString(2);
}

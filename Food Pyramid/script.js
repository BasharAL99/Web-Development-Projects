function increase(id) {
    var count = parseInt(document.getElementById(id).value, 10);
    count++;
    document.getElementById(id).value = count;
}

function decrease(id) {
    var count = parseInt(document.getElementById(id).value, 10);
    if (count != 0) {
        count--;
        document.getElementById(id).value = count;
    }

}


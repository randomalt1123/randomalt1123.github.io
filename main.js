const screenshots = document.getElementsByClassName("screenshot");
var open;
var current;

function scale(i) {
    var ss = screenshots[i];
    if (open != 1) {
        if (i == 0) {
            ss.style.transform = "translate(calc(100% + 10px), 0) scale(3.25)";
            open = 1;
            current = 0;
        } else if (i == 1) {
            ss.style.transform = "scale(3.25)";
            open = 1;
            current = 1;
        } else if (i == 2) {
            ss.style.transform = "translate(calc(-100% - 10px), 0) scale(3.25)";
            open = 1;
            current = 2;
        }
    } else if (open == 1 && current == i) {
        ss.style.transform = "";
        open = 0;
        current = null;
    }

    console.log(i);
}
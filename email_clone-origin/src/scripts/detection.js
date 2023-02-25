let current = '';
let prevEvent = NaN;
let eventArray = [];

function pageLoaded(event) {
    prevEvent = event.timeStamp;
}

function isInDiv(X, Y, querySelector) {
    let target = document.querySelector(querySelector);
    if (!target) {
        return false;
    }
    let width_target = target.offsetWidth;
    let height_target = target.offsetHeight;

    const domRect_target = target.getBoundingClientRect();
    if ((X > domRect_target.x && X < domRect_target.x + width_target) &&
        (Y > domRect_target.y && Y < domRect_target.y + height_target)) {
        return true;
    }
    return false;
}
function display(event) {
    let X = event.clientX;
    let Y = event.clientY;

    let pos = '';
    if (isInDiv(X, Y, '.e-content')) {
        pos = "where to choose emails";
    } else if (isInDiv(X, Y, '.folder-pane')) {
        pos = "sidebar";
    } else if (isInDiv(X, Y, '.reading-pane')) {
        pos = "where to read the email";
    } else {
        pos = "other";
    }
    if (pos != current) { // interesting event
        current = pos;
        timeOnLastDiv = event.timeStamp - prevEvent;
        prevEvent = event.timeStamp;

        line = "Timing: " + (event.timeStamp / 1000).toFixed(2) + "X-coordinate: " + X + ",Y-coordinate: " + Y + ", I am in " + current;
        line2 = "Time passed: " + (timeOnLastDiv / 1000).toFixed(2);

        console.log(line);
        console.log(line2);

        eventArray.push({
            time: (event.timeStamp / 1000).toFixed(2),
            x: X,
            y: Y,
            target: current,
            timePassed: (timeOnLastDiv / 1000).toFixed(2),
            type: event.type
        });

        localStorage.setItem('events', JSON.stringify(eventArray));

    }
}


document.addEventListener("mousemove", display);
document.onload = pageLoaded;
window.addEventListener('load', () => {
    localStorage.clear();
});


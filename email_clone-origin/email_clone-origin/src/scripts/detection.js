let current = '';
        let prevEvent = NaN;
        let eventArray = [];

        function btnClick(event) {
            // if (event.which == 1 && event.target.id == 'ReportPhish') {
            //     timeOnLastDiv = event.timeStamp - prevEvent;
            //     prevEvent = event.timeStamp;

            //     line = "Timing: " + (event.timeStamp / 1000).toFixed(2) + "Button Left Clicked";
            //     line2 = "Time passed: " + (timeOnLastDiv / 1000).toFixed(2);
            //     //result.innerHTML = line + line2 + result.innerHTML;
            //     console.log(line);
            //     console.log(line2);

            //     //window.dispatchEvent(new Event('reportPhish'));

            //     eventArray.push({
            //         time: (event.timeStamp / 1000).toFixed(2),
            //         timePassed: (timeOnLastDiv / 1000).toFixed(2),
            //         type: event.type,
            //         button: event.which
            //     });

            //     localStorage.setItem('events', JSON.stringify(eventArray));
            // }
        };

        function pageLoaded(event) {
            prevEvent = event.timeStamp;
        }

        // function isInDiv(X, Y, querySelector) {
        //     let target = document.querySelector(querySelector);
        //     let width_target = target.offsetWidth;
        //     let height_target = target.offsetHeight;

        //     const domRect_target = target.getBoundingClientRect();
        //     if ((X > domRect_target.x && X < domRect_target.x + width_target) &&
        //         (Y > domRect_target.y && Y < domRect_target.y + height_target)) {
        //         return true;
        //     }
        //     return false;

        // }
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
            // let result = document.getElementById("result");
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
                // result.innerHTML = line + line2 + result.innerHTML;
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

        // function downloadCSV() {
        //     var eventArray = JSON.parse(localStorage.getItem("events"));
        //     var reportArray = JSON.parse(localStorage.getItem("button"));

        //     if (!eventArray || !reportArray) {
        //         return;
        //     }
        //     let csv = "Time, Type, Target, Extra\n";
        //     eventArray.forEach(function (row) {
        //         csv += row.time + "," +row.type + "," + row.position + "," + row.x + ":" + row.y + "\n";
        //     });
        //     reportArray.forEach(function (row) {
        //         csv += row.time + "," + row.type + ",ReportPhish,?\n";
        //     });


        //     let csvFile = new Blob([csv], { type: "text/csv" });
        //     let downloadLink = document.createElement("a");
        //     downloadLink.download = "events.csv";
        //     downloadLink.href = URL.createObjectURL(csvFile);
        //     downloadLink.style.display = "none";

        //     document.body.appendChild(downloadLink);
        //     downloadLink.click();
        //     document.body.removeChild(downloadLink);
        // }


        // let downloadButton = document.createElement("button");
        // downloadButton.innerHTML = "Download CSV";
        // downloadButton.onclick = downloadCSV;
        // document.body.appendChild(downloadButton);

        document.addEventListener("mousemove", display);
        document.onload = pageLoaded;
        window.addEventListener('load', () => {
            localStorage.clear();
          });
          
        //window.addEventListener('reportPhish', function(){
            //reportPhish();
        //});
        // reportPhishBtn = document.getElementById("ReportPhish");
        // if(reportPhishBtn != null){
        //     reportPhishBtn.addEventListener("click", btnClick);
        // }
        
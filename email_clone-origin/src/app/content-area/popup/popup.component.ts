import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { userName, userMail } from '../../data/datasource';

@Component({
    selector: 'popup-section',
    templateUrl: './popup.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class PopupComponent implements OnInit {

    /** Configurations for the popup page */
    constructor() {
    }

    // Right Sidebar dropdown binding properties
    public userName: string = userName;
    public userMail: string = userMail;

    public ngOnInit(): void {
    }

    public downloadCSV() {
        console.log("download csv was pressed download please");
        var eventArray = JSON.parse(localStorage.getItem("events"));
        var reportArray = JSON.parse(localStorage.getItem("button"));
        var emailArray = JSON.parse(localStorage.getItem("email"));


        if (!eventArray || !reportArray) {
            console.log("This should not happen the local storage should have data");
            return;
        }
        let csv = "Time, Type, Target, Extra\n";
        eventArray.forEach(function (row) {
            csv += row.time + "," + row.type + "," + row.target + "," + row.x + ":" + row.y + "\n";
        });
        reportArray.forEach(function (row) {
            csv += row.time + "," + row.type + "," + row.target + ",?\n";
        });
        emailArray.forEach(function (row) {
            csv += row.time + "," + row.type + "," + row.target + ",?\n";
        });


        let csvFile = new Blob([csv], { type: "text/csv" });
        let downloadLink = document.createElement("a");
        downloadLink.download = "events.csv";
        downloadLink.href = URL.createObjectURL(csvFile);
        downloadLink.style.display = "none";

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

}

import { ChangeDetectorRef, Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ToolbarComponent, ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { AutoCompleteComponent, ChangeEventArgs, SelectEventArgs as DropDownSelectEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { getContacts } from '../../../data/datasource';
import { DataService } from '../../../data-service';

@Component({
    selector: 'tools-section',
    templateUrl: './tools.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class ToolsComponent implements OnInit {

    eventArray = [];
    prevEvent: number = 0;
    /** Configurations for the Tools page */
    constructor(private _data: DataService, private chgRef: ChangeDetectorRef) {
        this.contactsList = getContacts();
    }

    @ViewChild('toolbarMobile')
    public toolbarMobile: ToolbarComponent;
    @ViewChild('txtSearch1')
    public acSearchMobile: AutoCompleteComponent;


    // ToolbarDevice Dropdown control binding properties
    private isMenuClick: boolean = false;
    public replyList: { [key: string]: Object }[] = [
        { text: 'Reply' }, { text: 'Reply All' }, { text: 'Forward' }
    ];
    public moveToList: { [key: string]: Object }[] = [
        { text: 'Inbox' }, { text: 'Sent Items' }, { text: 'Drafts' },
        { text: 'Deleted Items' }, { text: 'Archive' }, { text: 'Junk Mail' }, { text: 'Outbox' }
    ];
    
    public categoryList: { [key: string]: Object }[] = [
        { text: 'Blue category', color: 'blue', categoryStyle: 'blue-background' },
        { text: 'Red category', color: 'red', categoryStyle: 'red-background' },
        { text: 'Orange category', color: 'orange', categoryStyle: 'orange-background' },
        { text: 'Purple category', color: 'purple', categoryStyle: 'purple-background' },
        { text: 'Green category', color: 'green', categoryStyle: 'green-background' },
        { text: 'Yellow category', color: 'yellow', categoryStyle: 'yellow-background' },
        { text: 'Clear categories', color: 'transparent', categoryStyle: 'transparent-background' }
    ];
    public moreList: { [key: string]: Object }[] = [
        { text: 'Mark as unread' }, { text: 'Mark as read' }, { text: 'Flag' }, { text: 'Clear Flag' }
    ];
    private dropdownField: Object = { text: 'text', value: 'text' };

    // AutoComplete binding properties
    public contactsList: { [key: string]: Object }[] = this._data.contactsList;
    public searchFields: Object = this._data.searchFields;
    public acClearButton: boolean = false;

    public toolbarClick(args: ClickEventArgs): void {
        this._data.toolbarClick(args);
    }

    public replyAllSelect(args: DropDownSelectEventArgs): void {
        if (args.itemData.text) {
            this._data.showNewMailPopup(args.itemData.text);
            this._data.ddlReplyAllValue = args.itemData.text;
        }
        this._data.dropdownSelect = true;
    }

    public moveToSelect(args: DropDownSelectEventArgs): void {
        if (args.itemData.text) {
            let selectedMessage: { [key: string]: Object } = this._data.getSelectedMessage();
            let key: string = 'Folder';
            selectedMessage[key] = args.itemData.text;
            this._data.grpListObj.dataSource =
                this._data.getFilteredDataSource(this._data.messageDataSource, 'Folder', this._data.selectedFolderName);
            this._data.showEmptyMessage();
        }
    }

    public moreItemSelect(args: DropDownSelectEventArgs): void {
        let selectedMessage: { [key: string]: Object } = this._data.getSelectedMessage();
        let key: string = '';
        if (args.itemData.text === 'Mark as read') {
            key = 'ContactID';
            this._data.setReadStyleMessage(selectedMessage[key].toString(), 'Read');
        } else if (args.itemData.text === 'Mark as unread') {
            key = 'ContactID';
            this._data.setReadStyleMessage(selectedMessage[key].toString(), 'Unread');
        } else {
            let target: HTMLElement = this._data.selectedListElement.getElementsByClassName('e-btn-icon ej-icon-Flag_1')[0] as HTMLElement;
            this._data.flagListItem(target, selectedMessage);
        }
    }

    public autoSearchSelect(args: ChangeEventArgs): void {
        this._data.autoSearchSelect(args);
    }

    public autoSearchFocus(args: Object): void {
        document.getElementsByClassName('search-div1')[0].classList.add('search-focus');
    }

    public autoSearchBlur(args: Object): void {
        document.getElementsByClassName('search-div1')[0].classList.remove('search-focus');
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
        this._data.toolbarMobile = this.toolbarMobile;
        this._data.acSearchMobile = this.acSearchMobile;
    }

    public DDLCreated(): void {
        this.chgRef.detectChanges();
    }

    public reportButton(event, buttonName): void {  
        
        let timeOnLastDiv = this.prevEvent ? (Date.now() - this.prevEvent) / 1000 : 0;
        this.prevEvent = Date.now();
        let line = "Timing: " + Math.round(this.prevEvent / 1000) + " Report Phish Clicked";
        let line2 = "Time passed: " + timeOnLastDiv.toFixed(2);
        console.log(line);
        console.log(line2);

        this.eventArray.push({
            time: (event.originalEvent.timeStamp / 1000).toFixed(2),
            timePassed: (timeOnLastDiv / 1000).toFixed(2),
            type: event.originalEvent.type,
            target: buttonName
        });

        localStorage.setItem('button', JSON.stringify(this.eventArray));

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
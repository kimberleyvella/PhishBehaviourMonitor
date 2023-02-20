import { Component, ViewEncapsulation, OnInit, ViewChild, Input } from '@angular/core';
import { ListViewComponent, SelectEventArgs } from '@syncfusion/ej2-angular-lists';
import { Item } from '@syncfusion/ej2-angular-navigations';
import { DataService } from '../../../data-service';

@Component({
    selector: 'message-pane-section',
    templateUrl: './message-pane.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class MessagePaneComponent implements OnInit {
    @Input() item: Item;
    itemIndex: number = 0;
    eventArray = [];
    

    prevEvent: number = 0;
    /** Configurations for the Message pane page */
    constructor(private _data: DataService) {
        this.messageDataSource = this._data.messageDataSource;
    }

    @ViewChild('listview1')
    public grpListObj: ListViewComponent;

    // List View binding properties
    public messageDataSource: { [key: string]: Object }[] = null;
    public listTemplate: string = this.getListTemplate();
    public listviewFields: { [key: string]: Object } = { id: 'ContactID', text: 'text' };

    private getListTemplate(): string {
        return '<div class="template-container ${ReadStyle}-parent listenForCLick">' +
            '<div style="height:30px; pointer-events:none;">' +
            '<div class="sender-style" style="float:left; margin-top: 2px">${text}</div>' +
            '<div style="right:25px; position: absolute; margin-top: 2px; pointer-events:all;">' +
            '<button id="btnListDelete" title="Delete" class="listview-btn">' +
            '<span class="e-btn-icon ej-icon-Delete"></span>' +
            '</button>' +
            '<button id="btnListFlag" title="${FlagTitle}" class="listview-btn">' +
            '<span class="e-btn-icon ej-icon-Flag_1 ${Flagged}"></span>' +
            '</button>' +
            '<button id="btnListRead" title="${ReadTitle}" class="listview-btn">' +
            '<span class="e-btn-icon ej-icon-Mark-as-read"></span>' +
            '</button>' +
            '</div>' +
            '</div>' +
            '<div class="subjectstyle ${ReadStyle}" style="height:25px">' +
            '<div style="float:left; margin-top: 2px">${ContactTitle}</div>' +
            '<div style="right:25px; position: absolute; margin-top: 2px">' +
            '<span>${Time}</span>' +
            '</div>' +
            '</div>' +
            '<div class="descriptionstyle">${Message}</div>' +
            '</div>';
    }


    public listViewSelect(args: SelectEventArgs): void {
        this._data.selectedListElement = args.item as HTMLElement;

        let data: { [key: string]: Object } = args.data as { [key: string]: Object };
        let key: string = 'ReadStyle';
        if (data[key].toString() !== 'Read') {
            key = 'ContactID';
            this._data.setReadStyleMessage(data[key].toString(), 'Read');
            this._data.isItemClick = true;
        }
        let contentElement: Element = document.getElementsByClassName('row content')[0];
        if (window.innerWidth < 605) {
            contentElement.className = 'row content sidebar-hide show-reading-pane';
        }
        let contentWrapper: Element = document.getElementsByClassName('content-wrapper')[0];
        contentWrapper.className = 'content-wrapper';
        this._data.showSelectedMessage();
        key = 'ContactTitle';
        if (this._data.acrdnObj.items.length === 0) {
            this._data.acrdnObj.addItem({
                content: '#accodianContent', expanded: true, header: data[key].toString()
            });
        }
        let headerTitle: HTMLElement = document.getElementById('accordian');
        key = 'ContactTitle';
        headerTitle.getElementsByClassName('e-acrdn-header-content')[0].innerHTML = data[key].toString();
        key = 'Image';
        (headerTitle.getElementsByClassName('logo logo-style2')[0] as HTMLElement).style.background =
            'url(' + data[key].toString().replace('assets/images/images/', 'assets/images/large/') + ')  no-repeat 50% 50%';
        key = 'text';
        document.getElementById('sub').innerHTML = `<p>${data[key]}</p>&nbsp;<p>&lt;${data['Email']}&gt;</p>`;
        key = 'Date';
        let dateString: string = data[key].toString();
        key = 'Time';
        document.getElementById('date').innerHTML = dateString + ' ' + data[key].toString();
        key = 'CC';
        document.getElementById('to').innerHTML = (data[key].toString()).replace(/,/g, ' ; ');
        key = 'Message';
        if (data[key]) {
            document.getElementById('accContent').innerHTML = data[key].toString();
        } else {
            document.getElementById('accContent').innerHTML =
                decodeURI('%3Cdiv%20id=%22box%22%20style=%22padding:10px;%20border:%20none;%20height:%20auto;' +
                    '%22%20contenteditable=%22true%22%20data-gramm_id=%223898c552-c710-10db-69ec-08371185eb3f%22%20' +
                    'data-gramm=%22true%22%20spellcheck=%22false%22%20data-gramm_editor=%22true%22%3E%3Cp%20class=%22' +
                    'MsoNormal%22%3EDear%20Name,&nbsp;%3C/p%3E%0A%0A%3Cp%20class=%22MsoNormal%22%3EI%20really%20' +
                    'appreciate%20your%20understanding%20and%20support%20regarding%0Athe%20changes%20we\'re%20' +
                    'making%20to%20the%20project%20plan.&nbsp;%3C/p%3E%0A%0A%3Cp%20class=%22' +
                    'MsoNormal%22%3EThank%20you%20for%20your%20confidence%20in%20me.%20I\'m%20sure%20' +
                    'you\'re%20going%0Ato%20be%20pleased%20with%20the%20results.&nbsp;%3C/p%3E%0A%0A%3Cp%20class=%22' +
                    'MsoNormal%22%3EBest%20Regards,%3Cbr%3E%0AYour%20Name%3Co:p%3E%3C/o:p%3E%3C/p%3E%0A%0A%20%20%20%20%3C/div%3E');
        }

        //let sender = args.data as { [key: string]: string };
        let sender = args.item.querySelector('.sender-style').textContent;
        let timeOnLastDiv = this.prevEvent ? (Date.now() - this.prevEvent) / 1000 : 0;
        this.prevEvent = Date.now();
        let line = "Timing: " + Math.round(this.prevEvent / 1000) + " Change of email";
        let line2 = "Time passed: " + timeOnLastDiv.toFixed(2);
        console.log(line);
        console.log(line2);
        console.log("Sender div class name: " + sender);

        this.eventArray.push({
            time: (event.timeStamp / 1000).toFixed(2),
            timePassed: (timeOnLastDiv / 1000).toFixed(2),
            type: event.type,
            target: sender
        });

        localStorage.setItem('email', JSON.stringify(this.eventArray));


        // timing and perfomance in epoch 
        //console.log("Page load took " +(Date.now()) + "milliseconds");
        //console.log(window.performance);

    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
        this._data.grpListObj = this.grpListObj;
    }

    // public changeOfEmails(event): void {

    //     let sender = document.querySelector('.sender-style').textContent;
    //     let timeOnLastDiv = this.prevEvent ? (Date.now() - this.prevEvent) / 1000 : 0;
    //     this.prevEvent = Date.now();
    //     let line = "Timing: " + Math.round(this.prevEvent / 1000) + " Change of email";
    //     let line2 = "Time passed: " + timeOnLastDiv.toFixed(2);
    //     console.log(line);
    //     console.log(line2);
    //     console.log("Sender div class name: " + sender);

    //     this.eventArray.push({
    //         time: (event.timeStamp / 1000).toFixed(2),
    //         timePassed: (timeOnLastDiv / 1000).toFixed(2),
    //         type: event.type,
    //         target: sender
    //     });

    //     localStorage.setItem('email', JSON.stringify(this.eventArray));

    //}
}
//function getCursorPosition(event){
  //  document.getElementById("c_p_x").textContent = event.clientX;
    //document.getElementById("c_p_y").textContent = event.clientY;

//}
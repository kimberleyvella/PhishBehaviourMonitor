/* tslint:disable */
/**
 * datasource
 */
export let userName: string = "Kimberley Vella";
export let userMail: string = "kimvella@gmail.com";

function getRandomTime() {
    let hours = Math.floor(Math.random() * 24);
    let minutes = Math.floor(Math.random() * 60);

    let formattedTime = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);
    return formattedTime;
}

function randomDate() {
    const start = new Date('2022-01-01');
    const end = new Date('2023-01-01');
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTime);
    const year = randomDate.getFullYear();
    const month = randomDate.getMonth() + 1;
    const day = randomDate.getDate();
    const date = (`${day}/${month}/${year}`);
    return date;
}

export let messageDataSourceNew: { [key: string]: Object }[] = [

    {
        "ContactID": "SF10057",
        "text": "Scans",
        "ContactTitle": "Scans Malta ",
        "Message": "<p>Congratulations on your selection as a winner !! Mother's Day <b>GIVEAWAY</b> From Scan. Xiaomi Mi Robot Vacuum Mop Essential Wet and Dry Vacuum Cleaner (for Friday May 7) </p> <p>Please Register your name on the officak website link here => <a href='https://bit.ly/3tofNu6' target='_blank' title=''>https://bit.ly/3tofNu6</a> </p> <p>If you've signed up, please send me a screenshot as proof of your registration.</p>",
        "Email": "info@scansmalta.com",
        "CC": [],
        "CCMail": [],
        "BCC": [],
        "BCCMail": [],

        "To": "Kim Vella",
        "ToMail": "kim@outlook.com",
        "Image": "assets/images/images/paypal-icon.png",
        "Time": getRandomTime(),
        "Date": randomDate(),
        "Day": "Friday",
        "Folder": "Inbox",
        "ReadStyle": "Unread",
        "ReadTitle": "Mark as read",
        "Flagged": "None",
        "FlagTitle": "Flag this message"
    },

    {
        "ContactID": "SF10079",
        "text": "Melita Ltd",
        "ContactTitle": "Melita Ltd Survey",
        "Message": "<h2>Dear Melita plc user, congratulations! </h2> <p>We want to thank you for being a loyal Melita plc Malta user! Your IP address 213.165.183.71 has been randomly selected to receive a <b>FREE Apple iPhone X </b>.</p><p>From time to time we select a handful of Melita plc users to give them the opportunity to receive valuable gifts from our partners and sponsors. This is our way of thanking you for choosing Melita plc as your preferred service.</p> <p> Today is your lucky day! You are one of the 10 randomly selected users who will receive this gift. <b> Apple iPhone X </b>. </p> <p> To recieve your gift, you simply have to complete our short and anonymous survey. But hurry! There are only a few gifts available today! <h3><center> <b> How satisfied are you with Melita plc ? </b> </center></h3> <div class=' text-center'><button onClick=\"window.open('https://netflex.com','_blank');\" style='background-color:#5DADE2; color:white'>Very Satisfied</button> <button onClick=\"window.open('https://netflex.com','_blank');\" style='background-color:#5DADE2; color:white'>Satisfied</button> <button onClick=\"window.open('https://netflex.com','_blank');\" style='background-color:#5DADE2; color:white'>Unsatisfied</button></div> ",
        "Email": "netflix@noreply.com",
        "CC": [],
        "CCMail": [],
        "BCC": [],
        "BCCMail": [],
        "To": "Kerry Best",
        "ToMail": "kerrybest@outlook.com",
        "Image": "assets/images/images/netflix-icon.png",
        "Time": getRandomTime(),
        "Date": randomDate(),
        "Day": "Tuesday",
        "Folder": "Inbox",
        "ReadStyle": "Unread",
        "ReadTitle": "Mark as read",
        "Flagged": "None",
        "FlagTitle": "Flag this message"
    },

    {
        "ContactID": "SF10049",
        "text": "Microsoft",
        "ContactTitle": "Microsoft Account",
        "Message": "<p>Dear User,</p><p>Your account is out of limits and needs to be verfied for your safety.If it is not verified within 24 hours we will suspend your email account. Take a moment to update your account without  losing your email account.</p><br><p>To update and secure your email account,</p><a href='https://microsoft.com' target='_blank' title='Click here'>Click here</a><br><p>Microsoft Corporation.</p>",
        "Email": "micro-soft@noreply.com",
        "CC": [],
        "CCMail": [],
        "BCC": [],
        "BCCMail": [],
        "To": "Joe Borg",
        "ToMail": "joeborg1@gmail.com",
        "Image": "assets/images/images/microsoft-icon.png",
        "Time": getRandomTime(),
        "Date": randomDate(),
        "Day": "Thursday",
        "Folder": "Inbox",
        "ReadStyle": "Unread",
        "ReadTitle": "Mark as read",
        "Flagged": "None",
        "FlagTitle": "Flag this message"
    },

    {
        "ContactID": "SF10048",
        "text": "Inland Revenue",
        "ContactTitle": "Your Tax Payment ID 010372215 is failed. Update Information",
        "Message": "<p><b> Your Federal Tax Payment ID: 01037593 has been rejected.</b> </p><p>Return Reason Code R21 - The identification number used in the Company Identification Field is not valid.</p><p> Please, check the information and refer to Code R21 to get details about your company payment in transaction contacts section: </p><br><br> <a href='http://eftps.gov/R21' target='_blank' title=''>http://eftps.gov/R21</a><p>In other way forward information to your accountant adviser.</p><p> <b> EFTPS: </b> </p> <p><b> The Electronic Federal Tax Payment System </b></p> <p> <b> PLEASE NOTE: </b> Your tax payment is due regardless of EFTPS online availability. In case of emergency, you can alwats make your tax payment by calling the EFTPS. </p> <br> <p>____________ Information from ESET NOD32 Antivirus, version of virus signature database 5511 (20101007) ____________ </p> <br> <p> The message was checked by ESET NOD32 Antivirus.</p> <br>  <a href='http://www.eset.com' target='_blank' title=''>http://www.eset.com</a>",
        "Email": "info@eurolottery.com",
        "CC": [],
        "CCMail": [],
        "BCC": [],
        "BCCMail": [],
        "To": "Mary Azzopardi",
        "ToMail": "maryazz76@outlook.com",
        "Image": "assets/images/images/43.png",
        "Time": getRandomTime(),
        "Date": randomDate(),
        "Day": "Tuesday",
        "Folder": "Inbox",
        "ReadStyle": "Unread",
        "ReadTitle": "Mark as read",
        "Flagged": "None",
        "FlagTitle": "Flag this message"
    },
    {
        "ContactID": "SF10047",
        "text": "Revolut",
        "ContactTitle": "Only 7 days left to earn €50 for inviting friends to Revoult",
        "Message": "<h2>Revoult</h2><h3>There's only 7 days left to cash in </h3><p>Invite your friends to join Revolut and we'll pay you for each friend that signs up!</p><button onClick=\"console.log('Hello');\">Invite friends</button><hr><p>Revoult Payments UAB</p>",
        "Email": "no-reply@revolut.com",
        "CC": [],
        "CCMail": [],
        "BCC": [],
        "BCCMail": [],
        "To": "Kerry Best",
        "ToMail": "kerrybest@hotmail.com",
        "Image": "assets/images/images/revoult-icon.png",
        "Time": getRandomTime(),
        "Date": randomDate(),
        "Day": "Friday",
        "Folder": "Inbox",
        "ReadStyle": "Unread",
        "ReadTitle": "Mark as read",
        "Flagged": "None",
        "FlagTitle": "Flag this message"
    },

];

export let folderData: { [key: string]: Object }[] =
    [{
        "ID": 7,
        "PID": null,
        "Name": userName,
        "HasChild": true,
        "Expanded": true,
        "Count": ""
    }, {
        "ID": 8,
        "PID": 7,
        "Name": "Inbox",
        "HasChild": false,
        "Expanded": false,
        "Count": messageDataSourceNew.length
    }, {
        "ID": 9,
        "PID": 7,
        "Name": "Clutter",
        "HasChild": false,
        "Expanded": false,
        "Count": ""
    }, {
        "ID": 10,
        "PID": 7,
        "Name": "Drafts",
        "HasChild": false,
        "Expanded": false,
        "Count": ""
    }, {
        "ID": 11,
        "PID": 7,
        "Name": "Sent Items",
        "HasChild": false,
        "Expanded": false,
        "Count": ""
    }, {
        "ID": 12,
        "PID": 7,
        "Name": "Deleted Items",
        "HasChild": false,
        "Expanded": false,
        "Count": ""
    }, {
        "ID": 13,
        "PID": 7,
        "Name": "Archive",
        "HasChild": false,
        "Expanded": false,
        "Count": ""
    }, {
        "ID": 14,
        "PID": 7,
        "Name": "Junk Mail",
        "HasChild": false,
        "Expanded": false,
        "Count": ""
    }, {
        "ID": 21,
        "PID": 7,
        "Name": "Trash",
        "HasChild": false,
        "Expanded": false,
        "Count": ""
    }, {
        "ID": 22,
        "PID": 7,
        "Name": "Outbox",
        "HasChild": false,
        "Expanded": false,
        "Count": ""
    }];

export function getContacts(): { [key: string]: Object }[] {
    let contacts1: { [key: string]: Object }[] = [];
    for (let i: number = 0; i < messageDataSourceNew.length; i++) {
        addContacts(messageDataSourceNew[i], 'Email', 'text', contacts1);
    }
    return contacts1;
}

function addContacts(messageData: { [key: string]: Object }, mailId: string, text: string, contacts: { [key: string]: Object }[]): { [key: string]: Object }[] {
    let fieldId: string = 'MailId';
    let contacts1: { [key: string]: Object }[] = [];
    let contactData: { [key: string]: Object } = {};
    if (messageData[mailId]) {
        if (messageData[mailId] instanceof Array) {
            let mailIdList: string[] = messageData[mailId] as string[];
            let contactsList: string[] = messageData[text] as string[];
            for (let j: number = 0; j < mailIdList.length; j++) {
                contactData = {};
                if (!istextExist(contacts, mailIdList[j])) {
                    fieldId = 'MailId';
                    contactData[fieldId] = mailIdList[j];
                    fieldId = 'text';
                    contactData[fieldId] = contactsList[j];
                    contactData['Image'] = messageData['Image'];
                    contacts.push(contactData);
                }
            }
        } else {
            if (!istextExist(contacts, messageData[mailId].toString())) {
                contactData[fieldId] = messageData[mailId];
                mailId = 'text';
                contactData[mailId] = messageData[text];
                contactData['Image'] = messageData['Image'];
                contacts.push(contactData);
            }
        }
    }
    return contacts;
}

function istextExist(contacts: { [key: string]: Object }[], text: string): boolean {
    let key: string = 'MailId';
    for (let i: number = 0; i < contacts.length; i++) {
        if (contacts[i][key]) {
            if (contacts[i][key].toString() === text) {
                return true;
            }
        }
    }
    return false;
}
/* tslint:enable */
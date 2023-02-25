/* tslint:disable */
/**
 * datasource
 */
export let userName: string = "Andrew Fuller";
export let userMail: string = "andrewfuller@syncfusion.com";

export let folderData: { [key: string]: Object }[] =
[{
    "ID": 1,
    "PID": null,
    "Name": "Favorites",
    "HasChild": true,
    "Expanded": true,
    "Count": ""
}, {
    "ID": 2,
    "PID": 1,
    "Name": "Inbox",
    "HasChild": false,
    "Expanded": false,
    "Count": 5,
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 3,
    "PID": 1,
    "Name": "Sales Reports",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 4,
    "PID": 1,
    "Name": "Personnel",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 5,
    "PID": 1,
    "Name": "Marketing Reports",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 6,
    "PID": 1,
    "Name": "Sent Items",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
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
    "Count": 5,
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 9,
    "PID": 7,
    "Name": "Clutter",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 10,
    "PID": 7,
    "Name": "Drafts",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 11,
    "PID": 7,
    "Name": "Sent Items",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 12,
    "PID": 7,
    "Name": "Deleted Items",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 13,
    "PID": 7,
    "Name": "Archive",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 14,
    "PID": 7,
    "Name": "Junk Mail",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 15,
    "PID": 7,
    "Name": "Personnel",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 16,
    "PID": 7,
    "Name": "Sales Reports",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 17,
    "PID": 7,
    "Name": "Marketing Reports",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 18,
    "PID": 7,
    "Name": "My Team",
    "HasChild": true,
    "Expanded": true,
    "Count": ""
}, {
    "ID": 19,
    "PID": 18,
    "Name": "Richelle Mead",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 20,
    "PID": 18,
    "Name": "krystine hobson",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 21,
    "PID": 7,
    "Name": "Trash",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 22,
    "PID": 7,
    "Name": "Outbox",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}] ;


export let messageDataSourceNew: { [key: string]: Object }[] = [
  
  {
    "ContactID": "SF10057",
    "text": "PayPal",
    "ContactTitle": "PayPal Account",
    "Message": "<p>Security Center Advisory,</p><p> We have recently noticed one or more attempts to log in to your PayPal account from a   foregin IP address and we have reasons to believe that your account was hijacked by a third party without your authorization. If you recently accessed your account while travelling, the unusual log in attemps may have been initated by you.</p><p>If you are the rightful holder of the account you must click the link below and then complete all steps from the following page as we try to verify your identify.<p><a href='https://google.com' target='_blank' title='Click here to verify your account'>Click here to verify your account</a></p> <hr> </p><p>Please do not reply to this e-mail. Mail sent to this address cannot be answered.  </p>",
    "Email": "paypalmail@email.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
  
    "To": "Kim Vella",
    "ToMail": "kim@outlook.com",
    "Image": "assets/images/images/paypal-icon.png",
    "Time": "12:13 AM",
    "Date": "22/04/2022",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },

  {
    "ContactID": "SF10079",
    "text": "Netflix",
    "ContactTitle": "Netflix account",
    "Message": "<p>Dear User,</p><h4>Please update your payment details</h4><p>We're having some trouble with your current billing information. We'll try again but in the meantime you may want to update your payment details.</p> <button onClick=\"window.open('https://netflex.com','_blank');\">Update account now </button><br><p>Need help? We're here if you need it. Visit Help Center or contact us now.</p>",
    "Email": "netflix@noreply.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@outlook.com",
    "Image": "assets/images/images/netflix-icon.png",
    "Time": "10:00AM",
    "Date": "2/05/2022",
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
    "Time": "4:29 PM",
    "Date": "5/04/2022",
    "Day": "Thursday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },

  {
    "ContactID": "SF10048",
    "text": "Information Desk",
    "ContactTitle": "Lottery Money",
    "Message": "<p>Your email address was selected to claim €250,000 in a lottery. </p><p>To claim your prize, please press this link.</p><br><a href='https://youwin.com' target='_blank' title='Click here'>Click here</a><br><br><p>Congratulations!</p>",
    "Email": "info@eurolottery.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Mary Azzopardi",
    "ToMail": "maryazz76@outlook.com",
    "Image": "assets/images/images/43.png",
    "Time": "3:45 PM",
    "Date": "15/03/2022",
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
    "Time": "4.29 AM",
    "Date": "13/05/2022",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },

];

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
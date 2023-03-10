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
        "Message": "<h2>Dear Melita plc user, congratulations! </h2> <p>We want to thank you for being a loyal Melita plc Malta user! Your IP address 213.165.183.71 has been randomly selected to receive a <b>FREE Apple iPhone X </b>.</p><p>From time to time we select a handful of Melita plc users to give them the opportunity to receive valuable gifts from our partners and sponsors. This is our way of thanking you for choosing Melita plc as your preferred service.</p> <p> Today is your lucky day! You are one of the 10 randomly selected users who will receive this gift. <b> Apple iPhone X </b>. </p> <p> To recieve your gift, you simply have to complete our short and anonymous survey. But hurry! There are only a few gifts available today! <h3><center> <b> How satisfied are you with Melita plc ? </b> </center></h3> <div class=' text-center'><button class='btn default' onClick=\"window.open('https://netflex.com','_blank');\" style='background-color:#5DADE2; color:white'>Very Satisfied</button> <button class='btn default' onClick=\"window.open('https://netflex.com','_blank');\" style='background-color:#5DADE2; color:white'>Satisfied</button> <button class='btn default' onClick=\"window.open('https://netflex.com','_blank');\" style='background-color:#5DADE2; color:white'>Unsatisfied</button></div> ",
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
        "ContactTitle": "2023 FINAL WARNING",
        "Message": "<h2 style='color: #333CFF;'> <b> 2023 OFFICE Mail+ </b></h2><p>Dear customer, </p><br><p>Thank you for using our verification system.</p><h4><u style='color: #333CFF;'><a href='https://workinmail2023.weebly.com' style='color: #333CFF'target='_blank' title=' '>Click Here to Verify you are the true owner of this account</a></u></h4><p>Ignorance Of this mail will lead to permanent lock and Blocked Immediately.</p><br> <p>Thanks.</p> <h4 style='color: #333CFF;'><b> MICROSOFT©2023</b></h4> <h4 style='color: #333CFF;'><b>CUSTOMER MAIL </b></h4>",
        "Email": "micro-soft@noreply.com",
        "CC": [],
        "CCMail": [],
        "BCC": [],
        "BCCMail": [],
        "To": "Joe Borg",
        "ToMail": "joeborg1@gmail.com",
        "Image": "assets/images/images/microsoft-icon.png",
        "Time": getRandomTime(),
        "Date": '5/01/2023',
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
        "text": "365 Office",
        "ContactTitle": "2022 LAST WARNING",
        "Message": "<img src='/assets/images/large/office_365.png' style='width:175px;height:120px;'> <p>Dear User,</p><br><p>Your E-mail has exceeded the storage limit. You can not send or receive new messages until you validate your RE-mail. To RE-validate Your Mailbox <u style='color: #333CFF;'><a  href='https://shepherdedu2022.weebly.com' style='color: #333CFF'target='_blank'>CLICK HERE</a></u> If find in Spam move it to inbox and verify to Avoid Blocked immediately. </p> <br><br><br> <p>Sincerely IT Help Desk </p> <p>Office of Information Technology </p> <p>The University</p> <p>365 Office 2022</p>  ",
        "Email": "info@eurolottery.com",
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
    {
        "ContactID": "SF10080",
        "text": "Microsoft Services",
        "ContactTitle": "Warning - Update Account Now!",
        "Message": "<img src='/assets/images/large/mcast.png' style='width:180px;height:180px;'> <p><b>Dear All,</b></p><br><p>Your billing information needs to be updated within 24 Hours, If this not not done, </p><p>we shall blocK and suspend your account Immediately </p><p>Please <u style='color: #333CFF;'><a  href='http://www.drbike.co.th/webbbw.htm' style='color: #333CFF'target='_blank'>Click Here</a></u> to Update now.</p> <br> <p> <b>Sincerely! </b> </p> <p><b>Technology Customer Service </b></p> <p><b>Microsoft Services 2022 </b></p>",
        "Email": "microsoft@noreply.com",
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
    {
        "ContactID": "SF10081",
        "text": "Netflix",
        "ContactTitle": "Update your account",
        "Message": "<img src='/assets/images/large/mcast.png' style='width:180px;height:180px;'> <h2><b>Update your account to get back to watching Netflix</b></h2><br><p>Hello, </p><p>We're having some trouble with your current billing  information. We'll try again, but in the meantime you may want to update your payment details. </p><button class='btn default'onClick=\"window.open('https://netflex.com','_blank');\" style='background-color:#FF0000; color:#022BE4  '>UPDATE ACCOUNT NOW</button><br> <p> Need help? We're if you need it. Visit the <u style='color: #333CFF'><a  href='https://link.com' style='color: #333CFF'target='_blank'>Help Centre</a></u> or  <u style='color: #333CFF'><a  href='https://link.com' style='color: #333CFF'target='_blank'>contact us</a></u> now</p><br> <p>- Your friends at Netflix </p>",
        "Email": "microsoft@noreply.com",
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
    {
        "ContactID": "SF10082",
        "text": "Apple",
        "ContactTitle": "Apple ID",
        "Message": " <br><h4><b>Your Apple ID has been Locked</b></h4><p>This Apple ID has been locked for security reasons.</p><p>It looks like your account is outdated and requires updated account ownership information so we can protect your account and improve our services to maintain your privacy. </p><p> To continue using the Apple ID service, we advise you to update the information about your account ownership.</p><button class='btn default'onClick=\"window.open('https://netflex.com','_blank');\" style='background-color:#062EE5 ; color:white'><b>Update Account Apple ID</b></button><br><br> <p> For the security of your account, we advise not to notify your account password to anyone. If you have problems updating your account, please visit <u style='color: #333CFF'><a  href='https://link.com' style='color: #333CFF'target='_blank'>Apple Support</a></u>.</p><br><br> <p>Sincerely, </p><p>Apple Support</p>",
        "Email": "microsoft@noreply.com",
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
    {
        "ContactID": "SF10083",
        "text": "Facebook",
        "ContactTitle": "Did you log into Facebook from somewhere new?",
        "Message": "<p>Dear User, </p><p>Your Facebook account was recently logged into from a computer, mobile device or other location you've never used before. For your protection, we've temporarily locked your account until you can review this activity and make sure no one is using your account without your permission. </p><p> Did you log into Facebook from a new device or an unsusal location?</p><p> If this was not you, please log into Facebook from your computer and follow the instructions provided to help you control your account information.</p> <p> If this was you, there's no need to worry. Simply log into Facebook again to get back into your account. </p> <br><button onClick=\"window.open('https://netflex.com','_blank');\" style='background: #4267b2; border-radius: 2px; border: 1px solid; color:white'><b>Log In</b></button><footer style='color: #888888; font-size: 12px; text-align: left; padding: 10px;'>Facebook, Inc., Attention: Department 415, PO Box 10005, Palo Alto, CA 94303</footer>",
        "Email": "microsoft@noreply.com",
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
    {
        "ContactID": "SF10084",
        "text": "PayPal Billing Department",
        "ContactTitle": "Credit/Debit card update",
        "Message": "<img src='/assets/images/large/mcast.png' style='width:180px;height:180px;'> <p>Dear PayPal valued member, </p><p>Due to concerns, for the safety and integrity of the paypal account we have issued this warning message.</p><p> It has come to our attention that your account information needs to be updated due to inactive members, frauds and spoof reports. If you could please take 5-10 minutes out of your online experience and renew your records you will noy run into any future problems with the online service. However, failure to update your records will result in account suspension This notification expires on 48.</p> <p> Once you have updated your account records your paypal account service will not be interrupted and will continue as normal. </p> <p> Please follow the link below and login to your account and renew your account information.</p><br><u style='color: #333CFF'><a  href='https://www.paypal.com/cgi-bin/webscr?cmd=_login-run' style='color: #333CFF'target='_blank'>https://www.paypal.com/cgi-bin/webscr?cmd=_login-run</a></u><br><br><p>Sincerely, </p><p>Paypal customer department</p><footer style='color: #888888; font-size: 12px; text-align: left; padding: 10px;'>Please do not reply to this e-mail. Mail sent to this address cannot be answered. For assistance.<u style='color: #888888'><a  href='https://link.com' style='color: #888888'target='_blank'>Log in</a></u> to your PayPal account and choose the 'Help' link in the footer of any page.<br> To Receive email notification in plain text instead of HTML. update your preferences <u style='color: #888888'><a  href='https://link.com' style='color: #888888' target='_blank'>here</a></u>. </footer>",
        "Email": "Billing@PayPal.com",
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
    {
        "ContactID": "SF10085",
        "text": "Melita",
        "ContactTitle": "Changes To Your Melita Service",
        "Message": "<p>Dear User, </p><p>Thank you for choosing to pay for your Melita services using Direct Debit or a pre-authorised credit card (PACC).  We hope you find this convenient and reassuring.</p><br><p> As long as you keep paying by Direct Debit or PACC, there will be no difference in your monthly charge. As of 1st July 2022, if you opt to stop paying by Direct Debit or PACC, the cost of each of your packages will increase by €1. </p><br> <p> If you have any questions, please contact us 24/7 via instant chat on melita.com or Facebook Messenger or visit any one of our shops. You may also disconnect your service without penalties within 30 days of receiving this communication. Any advance payments or deposit will be refunded either as credit on account, by bank transfer or by cheque.</p><br><p>Best regards, </p><br><p>Melita</p><footer style='color: #888888; font-size: 12px; text-align: left; padding: 10px;'><p>Tip - If you add noreply@communications.melitaltd.com to your email address book, your email system will always recognise messages from us, ensuring our messages won't be classed as spam and you won't miss out. </p><p>Please do not reply to this email, as it is sent from an automated account. If you would like further assistance, please visit our help page.</p> </footer>",
        "Email": "noreply@communications.melitaltd.com",
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
    }
    ,
    {
        "ContactID": "SF10086",
        "text": "MCAST IICT No-reply",
        "ContactTitle": "Start of Second Semester",
        "Message": "<p>Dear Student, </p><p>Please note that your <b>timetable</b> can be viewed on the <b>MCAST IICT Website</b> for now, <a  href='https://iict.mcast.edu.mt/' style='color: rgb(51, 122, 183)' target='_blank'>https://iict.mcast.edu.mt/</a><table id='LPContainer318630' role='presentation' style='padding: 12px; width: 100%; border-width: 1px; border-style: solid; border-color: rgb(200, 200, 200); border-radius: 2px;'><tr valign='top' style='border-spacing: 0px;'><td><div id='LPImageContainer318630' style='position: relative; margin-right: 12px; height: 160px; overflow: hidden;'><a target='_blank' id='LPImageAnchor318630' href='https://iict.mcast.edu.mt/'data-safelink='true'><img id='LPThumbnailImageId318630' alt='' src='https://iict.mcast.edu.mt/wp-content/uploads/cropped-badge-mcast-2021.png' height='160' style='display: block;' width='160'></a></div></td><td style='width: 100%;'><div id='LPTitle318630' style='font-size: 21px; font-weight: 300; margin-right: 8px; font-family: wf_segoe-ui_light, &quot;Segoe UI Light&quot;, &quot;Segoe WP Light&quot;, &quot;Segoe UI&quot;, &quot;Segoe WP&quot;, Tahoma, Arial, sans-serif; margin-bottom: 12px;'><a target='_blank' id='LPUrlAnchor318630' href='https://iict.mcast.edu.mt/' data-safelink='true' style='text-decoration: none; color: rgb(51, 122, 183);'>MCAST ICT Institute</a></div><div id='LPDescription318630' style='font-size: 14px; max-height: 100px; color: rgb(102, 102, 102); font-family: wf_segoe-ui_normal, &quot;Segoe UI&quot;, &quot;Segoe WP&quot;, Tahoma, Arial, sans-serif; margin-bottom: 12px; margin-right: 8px; overflow: hidden;'>IT Courses and IT Degrees in Malta</div><div id='LPMetadata318630' style='font-size: 14px; font-weight: 400; color: rgb(166, 166, 166); font-family: wf_segoe-ui_normal, &quot;Segoe UI&quot;, &quot;Segoe WP&quot;, Tahoma, Arial, sans-serif;'>iict.mcast.edu.mt</div></td></tr></table><p>This will be available on Classter later on.</p><p>If you are a <b>Form D student</b> (repeating units), you will see the class group/s at a later stage on Classter.  Once you see the class group on Classter, you can start attending according to the timetable found on the IICT website.</p><p>Thank you</p> <p>Stefania Aquilina</p> <p>Senior Administrative Officer IICT</p>",
        "Email": "no-reply@mcast.edu.mt",
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
    }


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
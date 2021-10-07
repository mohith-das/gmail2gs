// There are two step for this.

// #1

// At first create a trigger to run the mail checker.

function switchTrigger() {
    var isExist = false;
    var triggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < triggers.length; i++) {
        if ( /*<CONDITION>*/ ) {
            isExist = true;
            ScriptApp.deleteTrigger(triggers[i]);
        }
    }
    if (!isExist) {
        ScriptApp.newTrigger( /*<CONDITION>*/).create();
        Logger.log('create');
    }
}
// #2

// Then you have to check emails. Something like that

function checkMail() {
    var sh = SpreadsheetApp.openById(properties.targetSheetId).getSheets()[0];
    var query = /* properties.queryString */ ;
    var threads = GmailApp.search(query);
    if (threads.length < 1) return;
    for (var i = 0; i < threads.length; i++) {
        var messages = threads[i].getMessages();
        for (var j = 0; j < messages.length; j++) {
            if (messages[j].isStarred()) {
                sh.appendRow([
                    new Date(),
                    messages[j].getFrom(),
                    messages[j].getPlainBody()
                ]);
                messages[j].unstar();
            }
        }
    }
}
// Be careful. You have to set up Gmail filters so that all incoming to myemail+expenses@gmail.com would be marked with an star at the beginning.

// Working Example



// Beautiful! Alexander, which benefits do we have from not setting a minute's trigger manually? – 
// Andrew Anderson
//  Jan 15 '16 at 22:39
// And I just have made 2 small amendments: 1. to the end of messages[j].getPlainBody() I have added .trim() - to get rid of final ugly break string; 2. Changed a bit vice versa - to mark the threads with a star after they they have come to the spreadsheet. But this is just the matter of taste :) – 
// Andrew Anderson
//  Jan 15 '16 at 22:44
// Don't use .everyMinutes(1) everytime. This is an example. Triggers total runtime has a limit developers.google.com/apps-script/guides/services/quotas?hl=en – 
// contributorpw
//  Jan 16 '16 at 3:18
// Well, I got the idea with a quota for running triggers. I just didn't grasp the idea with the setting the trigger programmatically. Could you please explain it? – 
// Andrew Anderson
//  Jan 16 '16 at 20:09
# Gmail to Google Sheets

Apps Script snippet to log starred Gmail messages into a Google Sheet on a trigger.

## Setup
1. Open Extensions -> Apps Script in a Google Sheet.
2. Paste `sample-code.js` into the project.
3. Set up the required properties (e.g., `targetSheetId` and `queryString`).
4. Create a time-driven trigger for `checkMail()`.

## Usage
- Messages matching the query are appended to the sheet.
- Stars are used as a lightweight "processed" marker.

## Notes
- Adjust the query to match your Gmail filters.
- Gmail quotas apply.

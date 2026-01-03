# Gmail to Google Sheets

Logs starred Gmail messages to a Google Sheet on a scheduled trigger.

## Highlights
- Pulls matching emails with a Gmail search query.
- Appends sender + body to a spreadsheet.
- Uses stars as a lightweight processed marker.

## Tech
Apps Script, Gmail, Google Sheets

## Setup
1. Open Extensions -> Apps Script in a Google Sheet.
2. Paste `sample-code.js` into the project.
3. Set required properties (e.g., `targetSheetId` and `queryString`).
4. Create a time-driven trigger for `checkMail()`.

## Usage
- Messages matching the query are appended to the sheet.
- Stars prevent duplicate processing.

## Notes
- Gmail quotas apply.

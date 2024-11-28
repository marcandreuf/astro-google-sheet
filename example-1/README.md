# Google credentials

1. Set Up Your Google Cloud Project
    * Create a new project in the Google Cloud Console.
    * Enable the Google Sheets API:
      * Go to the "Library" page in your project.
      * Search for "Google Sheets API" and click "Enable".

2. Create Service Account Credentials
    * Create a service account:
        * Navigate to "IAM & Admin" > "Service Accounts".
        * Click on "Create Service Account".
    * Download the JSON key file for your service account. This file contains your private key and service account email.

3. Copy the file to the .astro folder (this folder is ignored by git)
    * Edit the .env file. (copy the .env.dev into a .env file)

# Google Sheet document

* Create a new Google Sheet in your Google Drive.
* Share the sheet with your service account email ("client_email", found in the JSON key file) and give it edit access.


# Run:

```bash
cd example-1
pnpm install
pnpm dev
```

# Open a browser to:

http://localhost:3009/form

Sumit the form with any name and check if the form name gets stored in the google sheet.

## References:
* [Tutorial to create a service account](https://hackernoon.com/how-to-use-google-sheets-api-with-nodejs-cz3v316f)



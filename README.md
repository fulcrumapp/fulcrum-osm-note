# Fulcrum OSM Notes

Post [map notes](http://wiki.openstreetmap.org/wiki/Notes) to [OpenStreetMap](http://openstreetmap.org) from Fulcrum.

This is a script for [Google Apps Script](https://developers.google.com/apps-script/) that uses Fulcrum's webhooks to collect map errors and notes for OSM, and adds them to the public OSM map.

## Setup

### Fulcrum Configuration

Inside of your Fulcrum, add the [OSM Notes]() app to your account. Check the URL once you've added it, you'll need to set this in the Google script.

### Create Google Script

You'll need an app for Fulcrum for collecting your map notes. We've published

1. Login to [Google Apps Script](https://script.google.com) to get started, and create a **Blank Project**.
2. Copy and paste the contents of [`fulcrum-osm-note.js`](fulcrum-osm-note.js) into the workspace.
3. Set the `OSM_USERNAME` and `OSM_PASSWORD` values to your own account.
4. Set the `FULCRUM_APP_ID` to your app's unique ID from your Fulcrum account.
5. Save your script, then go to **File &rarr; Manage versions**, then create a new version.
6. Click **Publish &rarr; Deploy as web app**. You can give a description for the Project version (click Save New Version) then set **Execute the app as: me (your email)** and **Who has access to the app: Anyone, even anonymous**. Click **Deploy** and be sure to copy the web app URL.

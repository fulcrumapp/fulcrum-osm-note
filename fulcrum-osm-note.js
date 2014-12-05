function doPost(e){
  return handleResponse(e);
}

function handleResponse(e) {
  var jsonString = e.postData.getDataAsString();
  var payload = JSON.parse(jsonString);

  var username = "fulcrum-note";
  var password = "iK%Wigs,";
  var app_id   = "cd25582c-f9b7-47b5-846f-976c45f082c9";

  var lat = payload.data.latitude;
  var lng = payload.data.longitude;
  var note = payload.data.form_values["fb7c"];
  var path = "/api/0.6/notes";
  var API  = "http://api.openstreetmap.org" + path;
  var content = "?lat=" + lat + "&lon=" + lng + "&text=" + encodeURIComponent(note);
  var postUrl = API + content;

  var options = {
    "method": "POST",
    "headers": {
      "Authorization" : "Basic " + Utilities.base64Encode(username + ":" + password)
    }
  };

  // Check the Fulcrum app id
  if (payload.data.form_id === app_id) {
    // What type of Fulcrum data event is it
    if (payload.type === "record.create") {
      subject = "New Fulcrum record created";
      // Post note
      postNote();
    } else if (payload.type === "record.update") {
      subject = "Fulcrum record updated";
    } else if (payload.type === "record.delete") {
      subject = "Fulcrum record deleted";
    }
  }

  function postNote() {
    UrlFetchApp.fetch(postUrl, options);
  }

  // Build email content
  function sendMail() {
    MailApp.sendEmail({
      to: "bryan@spatialnetworks.com",
      subject: subject,
      htmlBody: postUrl
    });
  }
}

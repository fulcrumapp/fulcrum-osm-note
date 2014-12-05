function doPost(e){
  return handleResponse(e);
}

function handleResponse(e) {
  var jsonString = e.postData.getDataAsString();
  var payload = JSON.parse(jsonString);

  var username = "OSM_USERNAME";
  var password = "OSM_PASSWORD";
  var app_id   = "FULCRUM_APP_ID";

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
      postNote();
  }

  function postNote() {
    UrlFetchApp.fetch(postUrl, options);
  }
}

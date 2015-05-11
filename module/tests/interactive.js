module("browsersettings");

if (forge.is.ios()) {
    asyncTest("Play media inline", 1, function() {
              
                askQuestion("Is the module configured to play media inline?", {
                Yes: function() {
                            var videoElement = document.createElement("video");
                            videoElement.setAttribute("controls", "controls");
                            videoElement.setAttribute("webkit-playsinline", true);
                            videoElement.setAttribute("width", "100%");
                            videoElement.src = forge.inspector.getFixture("browsersettings", "small.mp4").uri;
                            document.getElementById("qunit").appendChild(videoElement);
                            askQuestion("Did the video play inline?", {
                                      Yes: function() {
                                      ok(true, "success");
                                      start();
                                      },
                                      No: function() {
                                      ok(false, "failure");
                                      start();
                                      }
                                      });
                          },
                No: function() {
                            var videoElement = document.createElement("video");
                            videoElement.setAttribute("controls", "controls");
                            videoElement.src = forge.inspector.getFixture("browsersettings", "small.mp4").uri;
                            document.getElementById("qunit").appendChild(videoElement);
                            askQuestion("Did the video play fullscreen?", {
                                        Yes: function() {
                                        ok(true, "success");
                                        start();
                                        },
                                        No: function() {
                                        ok(false, "failure");
                                        start();
                                        }
                                        });
                          }
                          });
          });
}
asyncTest("Media player requires user action", 1, function() {
               $("video" ).remove();
              askQuestion("Is the module configured to require user action to play media?", {
              Yes: function() {
                            var videoElement = document.createElement("video");
                            videoElement.setAttribute("controls", "controls");
                            videoElement.setAttribute("webkit-playsinline", true);
                            videoElement.setAttribute("width", "100%");
                            videoElement.src = forge.inspector.getFixture("browsersettings", "small.mp4").uri;
                            document.getElementById("qunit").appendChild(videoElement);
                            askQuestion("Did the video require a user action to play?", {
                                      Yes: function() {
                                      ok(true, "success");
                                      start();
                                      },
                                      No: function() {
                                      ok(false, "failure");
                                      start();
                                      }
                                      });
                          },
              No: function() {
                            var videoElement = document.createElement("video");
                            videoElement.src = forge.inspector.getFixture("browsersettings", "small.mp4").uri;
                            videoElement.setAttribute("type", "video/mp4");
                            videoElement.setAttribute("controls", "controls");
                            videoElement.setAttribute("webkit-playsinline", true);
                            videoElement.setAttribute("autoplay", "autoplay");
                            videoElement.setAttribute("width", "100%");
                            document.getElementById("qunit").appendChild(videoElement);
                            askQuestion("Did the video play automatically?", {
                                      Yes: function() {
                                      ok(true, "success");
                                      start();
                                      },
                                      No: function() {
                                      ok(false, "failure");
                                      start();
                                      }
                                      });
              }
        });
});

asyncTest("Test accept cookies", 1, function() {
  $("video" ).remove();
  var iframeElement = document.createElement("iframe");
  iframeElement.setAttribute("id", "iframe");
  document.getElementById("qunit").appendChild(iframeElement); 
  $.ajax({
    url: "http://httpbin.org/cookies/set?ajax_cookie=set_successfully",
    success: function () {
      forge.logging.log("Ajax - set cookie");
    },
    error: function(xhr) {
      forge.logging.log("Ajax error occured: " + xhr.status + " " + xhr.statusText);
    }
  });
  $("#iframe").attr("src", "http://httpbin.org/cookies/set?iframe_cookie=set_successfully");
  askQuestion("Did the ajax_cookie and the iframe_cookie set successfully?", {
    Yes: function() {
      ok(true, "success");
      start();
    }, 
    No: function() {
      ok(false, "failure");
    }
  });
});



module("browsersettings");
/*
var qunitFixture = document.createElement("div");
qunitFixture.id = "qunit-fixture";
document.body.appendChild(qunitFixture);
 */
if (forge.is.ios()) {
    asyncTest("Play media inline", 1, function() {
              
                askQuestion("Is the module configured to play media inline?", {
                Yes: function() {
                            var videoElement = document.createElement("video");
                            videoElement.setAttribute("controls", "controls");
                            videoElement.setAttribute("webkit-playsinline", true);
                            videoElement.autoPlay = false;
                            videoElement.setAttribute("width", "100%");
                            videoElement.src = forge.inspector.getFixture("browsersettings", "small.mp4").uri;
                            document.getElementById("qunit").appendChild(videoElement);
                            //qunitFixture.appendChild(videoElement);
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
                            videoElement.autoPlay = false;
                            videoElement.src = forge.inspector.getFixture("browsersettings", "small.mp4").uri;
                            document.getElementById("qunit").appendChild(videoElement);
                            //qunitFixture.appendChild(videoElement);
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
                            videoElement.autoPlay = false;
                            videoElement.setAttribute("width", "100%");
                            videoElement.src = forge.inspector.getFixture("browsersettings", "small.mp4").uri;
                            //qunitFixture.appendChild(videoElement);
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
                            //videoElement.setAttribute("controls", "controls");
                            videoElement.setAttribute("webkit-playsinline", true);
                            videoElement.autoPlay = true;
                            videoElement.setAttribute("width", "100%");
                            videoElement.src = forge.inspector.getFixture("browsersettings", "small.mp4").uri;
                            //qunitFixture.appendChild(videoElement);
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

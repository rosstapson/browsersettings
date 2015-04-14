module("browsersettings");

if (forge.is.ios()) {
    asyncTest("Play media inline", 1, function() {
              var videoElement = document.createElement("video");
              videoElement.setAttribute("controls", "controls");
              videoElement.setAttribute("webkit-playsinline", true);
              videoElement.autoPlay = false;
              videoElement.src = forge.inspector.getFixture("media", "small.mp4").uri;
              document.getElementById("qunit-fixture").appendChild(videoElement);
              
              askQuestion("Is the module configured to play media inline?", {
                          Yes: function() {
                          
                          
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
                          ok(false, "failure");
                          start();
                          }
                          });
              
              });
    
}
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

asyncTest("Test accept server-side cookies", 1, function() {
  $("video" ).remove();
  var iframeElement = document.createElement("iframe");
  iframeElement.setAttribute("id", "iframe");
  document.getElementById("qunit").appendChild(iframeElement); 
  $.ajax({
    url: "http://httpbin.org/cookies/set?mainpage_cookie=set_successfully",
    success: function () {
      forge.logging.log("Ajax - set cookie");
    },
    error: function(xhr) {
      forge.logging.log("Ajax error occured: " + xhr.status + " " + xhr.statusText);
    }
  });
  $("#iframe").attr("src", "http://httpbin.org/cookies/set?iframe_cookie=set_successfully");
  askQuestion("Did the mainpage_cookie and the iframe_cookie set successfully?", {
    Yes: function() {
      ok(true, "success");
      start();
    }, 
    No: function() {
      ok(false, "failure");
      start();
    }
  });
});

asyncTest("Test accept browser cookies", 1, function() {
  $("#iframe").remove();
  var date = new Date();
  date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
  expires = "; expires=" + date.toUTCString();
  document.cookie = "browser_cookie_successful=set" + expires + "; path=/";
  //display cookie
  var para = document.createElement("p");
  var divElement = document.createElement("div");
  var cookiePara = document.createElement("p");
  para.appendChild(document.createTextNode("These cookies are set:"));
  cookiePara.appendChild(document.createTextNode(document.cookie));
  divElement.appendChild(para);
  divElement.appendChild(cookiePara);
  document.getElementById("qunit").appendChild(divElement);
  askQuestion("Has the 'browser_cookie_successful' cookie been set?", {
    Yes: function() {
      document.cookie = "browser_cookie_successful=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      ok(true, "success");
      start();
    },
    No: function() {
      ok(false, "failure");
      start();
    }
  });
});
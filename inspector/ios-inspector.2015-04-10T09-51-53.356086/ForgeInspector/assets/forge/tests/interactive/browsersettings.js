module("browsersettings");

// In this test we call the example showAlert API method with an example string
asyncTest("Play video inline", 1, function() {	
	
	if (forge.is.ios()) {
			askQuestion("Is the module config set to play video inline?", {
			Yes: function () {
				var vidElement = document.createElement('video');
				vidElement.controls = true;
				vidElement.autoPlay = false;	
				vidElement.setAttribute("webkit-playsinline", true);
				vidElement.src = forge.inspector.getFixture("media", "small.mp4").uri;
				askQuestion("Did a video play?", {
					Yes: function() {
						askQuestion("Did the video play inline?") {
							Yes: function() {
								ok(true, "User claims success.");
								start();
							},
							No: function() {
								ok(false, "User claims failure.");
								start();
							}
						}
					}
				}				
			},
			No: function () {

				vidElement.setAttribute("webkit-playsinline", false);
				vidElement.src = forge.inspector.getFixture("media", "small.mp4").uri;
				askQuestion("Di a video play?", {
					Yes: function() {
						askQuestion("Did the video play inline?") {
							Yes: function() {
								ok(false, "User claims failure.");
								start();
							},
							No: function() {
								ok(true, "User claims success.");
								start();
							}
						}
					}
				}				
			}
		});
	}
	else {
		askQuestion("Is the module config set to play automatically?", {
			Yes: function () {
				var vidElement = document.createElement('video');
				vidElement.controls = true;
				vidElement.autoPlay = false;
				vidElement.autoPlay = true;
				vidElement.src = forge.inspector.getFixture("media", "small.mp4").uri;
			}
		}
	}
});

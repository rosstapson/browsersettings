module("browsersettings");

asyncTest("Play video inline", 1, function() {
          forge.browsersettings.showAlert("Hello, testing world!", function () {
                                       askQuestion("Did you see an alert with the message 'Hello, testing world!'?", {
                                                   Yes: function () {
                                                   ok(true, "User claims success");
                                                   start();
                                                   },
                                                   No: function () {
                                                   ok(false, "User claims failure");
                                                   start();
                                                   }
                                                   });
                                       }, function () {
                                       ok(false, "API method returned failure");
                                       start();
                                       });
          });
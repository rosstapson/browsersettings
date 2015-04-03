// Expose the native API to javascript
forge.browsersettings = {
    showAlert: function (text, success, error) {
        forge.internal.call('browsersettings.showAlert', {text: text}, success, error);
    }
};

// Register for our native event
forge.internal.addEventListener("browsersettings.resume", function () {
	alert("Welcome back!");
});

#import "browsersettings_API.h"
#import "MediaPlayback.h"

@implementation browsersettings_API

//
// Here you can implement your API methods which can be called from JavaScript
// an example method is included below to get you started.
//

// This will be callable from JavaScript as 'browsersettings.showAlert'
// it will require a parameter called text
+ (void)showAlert:(ForgeTask*)task text:(NSString *)text {
	if ([text length] == 0) {
		[task error:@"You must enter a message"];
		return;
	}
	UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Alert"
													message:text
												   delegate:nil
										  cancelButtonTitle:@"OK"
										  otherButtonTitles:nil];
	[alert show];
	[task success:nil];
}

// method to set whether video is viewed inline - need not be callable from javascript

+ (void) setMediaPlayableInline {
    [MediaPlayback setInlinePlayback:true];
}
+ (void) setUserActionRequired {
    [MediaPlayback setUserActionRequired:true];
}


@end

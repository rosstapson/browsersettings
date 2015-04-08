#import "browsersettings_EventListener.h"

@implementation browsersettings_EventListener

//
// Here you can implement event listeners.
// These are functions which will get called when certain native events happen.
//

// The example below passes an event through to JavaScript when the application is resumed.
+ (void)applicationWillEnterForeground:(UIApplication *)application {
	// It is good practise to namespace any events you send to JavaScript with your module name
	[[ForgeApp sharedApp] event:@"browsersettings.resume" withParam:nil];
}
+ (void)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    //[ForgeLog i:@"rosslog: didFinish etc etc"];
    NSString* inlineVideo = [[[[ForgeApp sharedApp] configForModule:@"browsersettings"]
                              objectForKey:@"media_playback"]
                             objectForKey:@"inline_video"];
    [ForgeLog w:@"setting inlinevideo: "];
    [ForgeLog w:inlineVideo];
    [MediaPlayback setInlinePlayback:[inlineVideo boolValue]];
    
    NSString* userActionRequired = [[[[ForgeApp sharedApp] configForModule:@"browsersettings"]
                                objectForKey:@"media_playback"]
                               objectForKey:@"require_user_action"];
    [ForgeLog w:@"setting user action required:"];
    [ForgeLog w:userActionRequired];
    [MediaPlayback setUserActionRequired:[userActionRequired boolValue]];
}



@end

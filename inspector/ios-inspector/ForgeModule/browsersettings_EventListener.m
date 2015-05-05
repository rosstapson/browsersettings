#import "browsersettings_EventListener.h"

@implementation browsersettings_EventListener

//
// Here you can implement event listeners.
// These are functions which will get called when certain native events happen.
//

+ (void)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    //[ForgeLog i:@"rosslog: didFinish etc etc"];
  
    NSString* inlineVideo = [[[[ForgeApp sharedApp] configForModule:@"browsersettings"]
                              objectForKey:@"media_playback"]
                             objectForKey:@"inline_video"];
    [Util setInlinePlayback:[inlineVideo boolValue]];
    
    NSString* userActionRequired = [[[[ForgeApp sharedApp] configForModule:@"browsersettings"]
                                objectForKey:@"media_playback"]
                               objectForKey:@"require_user_action"];
    [Util setUserActionRequired:[userActionRequired boolValue]];
}



@end

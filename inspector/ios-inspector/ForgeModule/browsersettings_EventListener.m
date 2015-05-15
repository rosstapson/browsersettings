#import "browsersettings_EventListener.h"

@implementation browsersettings_EventListener

//
// Here you can implement event listeners.
// These are functions which will get called when certain native events happen.
//

+ (void)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
      
    NSString* inlineVideo = [[[[ForgeApp sharedApp] configForModule:@"browsersettings"]
                              objectForKey:@"media_playback"]
                             objectForKey:@"inline_video"];
    [Util setInlinePlayback:[inlineVideo boolValue]];
    
    NSString* autoplayVideo = [[[[ForgeApp sharedApp] configForModule:@"browsersettings"]
                                objectForKey:@"media_playback"]
                               objectForKey:@"autoplay_video"];
    [Util setAutoplayVideo:[autoplayVideo boolValue]];
    
    NSString* acceptCookies = [[[ForgeApp sharedApp] configForModule:@"browsersettings"]objectForKey:@"accept_cookies"];
    [Util setAcceptCookies:[acceptCookies boolValue]];
}



@end

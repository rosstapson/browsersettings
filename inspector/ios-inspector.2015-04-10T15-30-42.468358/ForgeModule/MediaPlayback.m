//
//  MediaPlayback.m
//  ForgeModule
//
//  Created by Ross Tapson on 2015/04/03.
//  Copyright (c) 2015 Trigger Corp. All rights reserved.
//

#import "MediaPlayback.h"
#import <WebKit/WebKit.h>

@implementation MediaPlayback
+ (void) setInlinePlayback:(BOOL)inlinePlayback {
    if (NSClassFromString(@"WKWebView") && [[ForgeApp sharedApp] useWKWebView]) {
        WKWebView *webView = (WKWebView*)[[ForgeApp sharedApp] webView];
        // TODO handle iOS 8
        [ForgeLog w:@"forge won't support WKWebView until Apple apologise and promise to never do it again."];
    } else {
        UIWebView *webView = (UIWebView*)[[ForgeApp sharedApp] webView];
        webView.allowsInlineMediaPlayback = inlinePlayback;
    }

    return;
}
+ (void) setUserActionRequired:(BOOL)userActionRequired {
    if (NSClassFromString(@"WKWebView") && [[ForgeApp sharedApp] useWKWebView]) {
        WKWebView *webView = (WKWebView*)[[ForgeApp sharedApp] webView];
        // TODO handle iOS 8
        [ForgeLog w:@"forge won't support WKWebView until Apple apologise and promise to never do it again."];
    } else {
        UIWebView *webView = (UIWebView*)[[ForgeApp sharedApp] webView];
        webView.mediaPlaybackRequiresUserAction = userActionRequired;
    }
    

    return;
}
@end

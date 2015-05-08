//
//  Util.m
//  ForgeModule
//
//  Created by Ross Tapson on 2015/04/03.
//  Copyright (c) 2015 Trigger Corp. All rights reserved.
//

#import "Util.h"
#import <WebKit/WebKit.h>

@implementation Util
+ (void) setInlinePlayback:(BOOL)inlinePlayback {
    if (NSClassFromString(@"WKWebView") && [[ForgeApp sharedApp] useWKWebView]) {
        WKWebView *webView = (WKWebView*)[[ForgeApp sharedApp] webView];
        // TODO handle iOS 8
        [ForgeLog w:@"forge won't support WKWebView until various issues are addressed."];
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
        [ForgeLog w:@"forge won't support WKWebView until various issues are addressed."];
    } else {
        UIWebView *webView = (UIWebView*)[[ForgeApp sharedApp] webView];
        webView.mediaPlaybackRequiresUserAction = userActionRequired;
    }
    return;
}
+ (void) setAcceptCookies:(BOOL)acceptCookies {
    if (acceptCookies) {
        [[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookieAcceptPolicy:NSHTTPCookieAcceptPolicyAlways];
    }
    else {
        [[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookieAcceptPolicy:NSHTTPCookieAcceptPolicyNever];
    }
}
@end

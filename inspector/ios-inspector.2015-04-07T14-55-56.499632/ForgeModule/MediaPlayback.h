//
//  MediaPlayback.h
//  ForgeModule
//
//  Created by Ross Tapson on 2015/04/03.
//  Copyright (c) 2015 Trigger Corp. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface MediaPlayback : NSObject
+ (void) setInlinePlayback:(BOOL)inlinePlayback;
+ (void) setUserActionRequired:(BOOL)actionRequired;
@end

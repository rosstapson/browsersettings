package io.trigger.forge.android.modules.browsersettings;

import io.trigger.forge.android.core.ForgeApp;
import io.trigger.forge.android.core.ForgeLog;

public class Util {
	public static void setInlineMedia(boolean forceInlineMedia) {
		ForgeLog.i("ross: inline video: " + forceInlineMedia);
		//not required for android, video plays inline by default
		
	}
	public static void setUserActionRequired(boolean userActionRequired) {
		
		ForgeApp.getActivity().webView.getSettings().setMediaPlaybackRequiresUserGesture(userActionRequired);
	}
}

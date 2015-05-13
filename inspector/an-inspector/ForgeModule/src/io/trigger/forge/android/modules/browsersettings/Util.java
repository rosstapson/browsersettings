package io.trigger.forge.android.modules.browsersettings;

import android.os.Build;
import android.webkit.CookieManager;
import io.trigger.forge.android.core.ForgeApp;




public class Util {
	public static void setInlineMedia(boolean forceInlineMedia) {
	    //ForgeLog.i("ross: inline video: " + forceInlineMedia);
		//not required for android, video plays inline by default
	
	}
	public static void setUserActionRequired(boolean userActionRequired) {
		ForgeApp.getActivity().webView.getSettings().setMediaPlaybackRequiresUserGesture(userActionRequired);
	}
	public static void setAcceptCookies(boolean acceptCookies){		
		CookieManager cookieManager=CookieManager.getInstance();
		cookieManager.setAcceptCookie(acceptCookies);
		if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
			cookieManager.setAcceptThirdPartyCookies(ForgeApp.getActivity().webView, acceptCookies);
		}
		
	}
}

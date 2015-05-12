package io.trigger.forge.android.modules.browsersettings;

import android.webkit.CookieManager;
import io.trigger.forge.android.core.ForgeApp;
//import io.trigger.forge.android.core.ForgeLog;


public class Util {
	public static void setInlineMedia(boolean forceInlineMedia) {
	    //ForgeLog.i("ross: inline video: " + forceInlineMedia);
		//not required for android, video plays inline by default
	
	}
	public static void setUserActionRequired(boolean userActionRequired) {
		ForgeApp.getActivity().webView.getSettings().setMediaPlaybackRequiresUserGesture(userActionRequired);
	}
	public static void setAcceptCookies(boolean acceptCookies){
		CookieManager.setAcceptFileSchemeCookies(acceptCookies); //set this first as calls to this don't work after instantiating either Webview or CookieManager
		CookieManager cookieManager=CookieManager.getInstance();
		cookieManager.setAcceptCookie(acceptCookies);
		cookieManager.setAcceptThirdPartyCookies(ForgeApp.getActivity().webView, acceptCookies);
		
	}
}

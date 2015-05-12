package io.trigger.forge.android.modules.browsersettings;

import com.google.gson.JsonObject;

import io.trigger.forge.android.core.ForgeApp;
import io.trigger.forge.android.core.ForgeEventListener;
//import io.trigger.forge.android.core.ForgeLog;
import android.os.Bundle;

public class EventListener extends ForgeEventListener {
	
	public void onCreate(Bundle savedInstanceState) {
		JsonObject mediaObject = (JsonObject)ForgeApp.configForModule("browsersettings").get("media_playback");
		boolean inlineVideo = mediaObject.get("inline_video").getAsBoolean();
		boolean userActionRequired = mediaObject.get("require_user_action").getAsBoolean();
		boolean acceptCookies = ForgeApp.configForModule("browsersettings").get("accept_cookies").getAsBoolean();
		
		Util.setInlineMedia(inlineVideo);
		Util.setUserActionRequired(userActionRequired);
		Util.setAcceptCookies(acceptCookies);
	}
	
}


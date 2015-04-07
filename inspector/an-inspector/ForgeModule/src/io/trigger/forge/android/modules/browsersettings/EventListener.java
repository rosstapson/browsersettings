package io.trigger.forge.android.modules.browsersettings;

import com.google.gson.JsonObject;

import io.trigger.forge.android.core.ForgeApp;
import io.trigger.forge.android.core.ForgeEventListener;
//import io.trigger.forge.android.core.ForgeLog;
import android.os.Bundle;

public class EventListener extends ForgeEventListener {
	@Override
	public void onRestart() {
		ForgeApp.event("browsersettings.resume", null);
	}
	public void onCreate(Bundle savedInstanceState) {
		JsonObject configObject = (JsonObject)ForgeApp.configForModule("browsersettings").get("media_playback");
		boolean inlineVideo = configObject.get("inline_video").getAsBoolean();
		boolean userActionRequired = configObject.get("require_user_action").getAsBoolean();
		
		MediaSettingsUtil.setInlineMedia(inlineVideo);
		MediaSettingsUtil.setUserActionRequired(userActionRequired);
	}
	
}


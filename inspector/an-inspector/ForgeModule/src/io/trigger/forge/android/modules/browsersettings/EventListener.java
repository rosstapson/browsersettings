package io.trigger.forge.android.modules.browsersettings;

import io.trigger.forge.android.core.ForgeApp;
import io.trigger.forge.android.core.ForgeEventListener;

public class EventListener extends ForgeEventListener {
	@Override
	public void onRestart() {
		ForgeApp.event("browsersettings.resume", null);
	}
}

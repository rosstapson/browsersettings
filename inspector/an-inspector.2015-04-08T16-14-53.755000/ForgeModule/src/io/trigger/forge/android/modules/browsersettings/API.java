package io.trigger.forge.android.modules.browsersettings;

import io.trigger.forge.android.core.ForgeApp;
import io.trigger.forge.android.core.ForgeParam;
import io.trigger.forge.android.core.ForgeTask;
import android.app.AlertDialog;
import android.content.DialogInterface;
//import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

public class API {
	public static void showAlert(final ForgeTask task, @ForgeParam("text") final String text) {
		
		
		task.performUI(new Runnable() {
			public void run() {
				JsonObject configObject = (JsonObject)ForgeApp.configForModule("browsersettings").get("media_playback");
				boolean inlineVideo = configObject.get("inline_video").getAsBoolean();
				boolean userActionRequired = configObject.get("require_user_action").getAsBoolean();
				
				
				
				AlertDialog.Builder builder = new AlertDialog.Builder(ForgeApp.getActivity());
				builder.setMessage("inline video: " + inlineVideo + " / user action required: " + userActionRequired).setCancelable(false).setPositiveButton("Ok", new DialogInterface.OnClickListener() {
					public void onClick(DialogInterface dialog, int which) {
						task.success();
					}
				});
				AlertDialog alert = builder.create();
				alert.show();
			}
		});
	}
}

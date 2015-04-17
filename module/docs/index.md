``browsersettings``: Platform-agnostic browser config
=====================================================

iOS Safari disables autoplayback, and launches a full-screen widget when playing video. 

###Media Playback

iPhone
:	inline video - set this to `true` to disable fullscreen playback. The `<video>` element in the HTML document must also include the 'webkit-playsinline' attribute.


iPhone, Android
:	require user action - set this to `false` to allow auto play. Ensure the `<audio>` or `<video>` element you want to play has the 'autoplay' attribute set.
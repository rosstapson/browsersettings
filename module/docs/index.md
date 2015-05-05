``browsersettings``: Platform-agnostic browser config
=====================================================

iOS Safari disables autoplayback, and launches a full-screen widget when playing video. 

###Media Playback

inline video
:	iPhone - set this to `true` to enable inline video playback. The `<video>` element in the HTML document must also include the `webkit-playsinline` attribute.


require user action
:	require user action - set this to `true` to require the user to press 'play'. If set to `false`, ensure the `<audio>` or `<video>` element you want to play has the `autoplay` attribute set.
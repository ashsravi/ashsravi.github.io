(function loadVideo() {
  var ismobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

  if (!ismobile) {
    var video = document.getElementById('bg_video');
    var sources = video.getElementsByTagName('source');
    sources[0].src = '/assets/video/bg_video.mp4';
    sources[1].src = '/assets/video/bg_video.ogg';
    sources[2].src = '/assets/video/bg_video.webm';
    video.load();
  }
})()
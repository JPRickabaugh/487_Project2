$(document).ready(function(){
  console.log('jQ loaded'); // logs that JS is functional


  $('#video').YTPlayer({
  fitToBackground: true, // use as a background video
  videoId: 'RlKJDwViNKs',
  playerVars: {
      modestbranding: 0,
      autoplay: 1,
      mute: true,
      loop: true,
      controls: 0,
      showinfo: 0,
      branding: 0,
      rel: 0,
      autohide: 0,
      start: 41
    }
}); // Youtube video background player, set to autoplay in a muted loop starting at 41 seconds

});

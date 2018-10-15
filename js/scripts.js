$(document).ready(function(){
  console.log('jQ loaded');


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
});


$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'What country was Alexander from?',
      'options': [
        'Persia',
        'Macedon',
        'Rome',
        'Greece'
      ],
      'correctIndex': 1,
      'correctResponse': 'Good job.',
      'incorrectResponse': 'Alexander is rolling in his grave.'
    },
    {
      'q': 'How old was Alexander when he claimed the throne?',
      'options': [
        '18',
        '19',
        '20.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Good job.',
      'incorrectResponse': 'Alexander is rolling in his grave.'
    },
    {
      'q': 'Alexander was a very interested in Persian culture',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 0,
      'correctResponse': 'Good job.',
      'incorrectResponse': 'Alexander is rolling in his grave.'
    },
    {
      'q': 'What killed Alexander?',
      'options': [
        'Darius III',
        'His own men',
        'A fever'
      ],
      'correctIndex': 2,
      'correctResponse': 'Good job.',
      'incorrectResponse': 'Alexander is rolling in his grave.'
    }
  ]
});
// followed instructions for plugin, couldn't make quiz work

});

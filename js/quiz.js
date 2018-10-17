$(document).ready(function(){
  console.log('quiz script loaded'); // testing script 

  $('#quiz').quiz({
    questions: [
      {
        'q': 'Where was Alexander from?', //list the question
        'options': [
          'Macedon', //list answer choices
          'Persia',
          'Greece',
          'Egypt'
        ],
        'correctIndex': 0, //index starts at 0, in this case the answer is Macedon
        'correctResponse': 'Good job!.',
        'incorrectResponse': 'Incorrect.' // different responses based on whether the answer was correct
      },
      {
        'q': 'How old was Alexander when he claimed the throne?',
        'options': [
          '18',
          '19',
          '20',
          '21'
        ],
        'correctIndex': 2,
        'correctResponse': 'Good job!.',
        'incorrectResponse': 'Incorrect.'
      },
      {
        'q': 'True/False: Alexander was very interested in Persian culture.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 0,
        'correctResponse': 'Good job!.',
        'incorrectResponse': 'Incorrect.'
      },
      {
        'q': 'What killed Alexander?',
        'options': [
          'Darius III',
          'His own men',
          'A fever',
          'A lion'
        ],
        'correctIndex': 2,
        'correctResponse': 'Good job!.',
        'incorrectResponse': 'Incorrect.'
      }
    ]
  }); // quiz questions/answers


});

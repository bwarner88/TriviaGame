$(document).ready(function () {

var correct = 0;
var incorrect = 0;
var timerCount = 30;
var intervalId;



$('.startButton').on('click', run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  
  function decrement() {
    timerCount--;
    $("#timeRemain").html(" " + timerCount);
    if (timerCount === 0) {
      stop();
      $('#scoreContainer').show();
      $('.container').hide();
      $('.timeContainer').hide();
      $('.btnContainer').hide();
      $('.startContainer').hide();
      $('#correctAnswers').text(correct)
      $('#incorrectAnswers').text(incorrect)
    
     
    }
}
    
    function stop() {
        clearInterval(intervalId);
  }

   var init = function () {
        $('.container').hide();
        $('#scoreContainer').hide();
        $('.timeContainer').hide();
        $('.btnContainer').hide();
        $('startContainer').show();
    }
    

    var start = function () {
        $('.startButton').click(function(){
            $('.container').show();
            $('.timeContainer').show();
            $('.btnContainer').show();
            $('.startContainer').hide();
            $('#scoreContainer').hide()
            run();

        })
    }

    function answerCorrect() {
        correct++;
        }
    
    function answerWrong() {
        wrong++;
    }

    //I THINK I NEED TO MAKE AN OBJECT WITH ALL OF THE POSSIBLE ANSWERS AND IF THE CORRECT ONE IS CHECKED THEN IT WILL ADD 1 TO THE CORRECTANSWER VAR
    //AND IF IT IS INCORRECT IT WILL ADD ONE TO THE INCORRECTANSWER VAR

    var radio = $('input');
    var isCorrect = $('value');    
    var validate = function(){
        for(i = 0; i < radioCheck.lenght; i++)
                if($('input:checked').val('value' === 'right')){
                    answerCorrect();
                }
            }
        

            var submit = function () {
        $('.submitBtn').click(function () {
            $('#scoreContainer').show();
            $('.container').hide();
            $('.timeContainer').hide();
            $('.btnContainer').hide();
            $('.startContainer').hide();
            $('#correctAnswers').text(correct)
            $('#incorrectAnswers').text(incorrect)
            validate();
            
        })
    }


    //resets to start
var reset = function(){
    $('.restartBtn').click(function(){
        $('.container').hide();
        $('#scoreContainer').hide();
        $('.timeContainer').hide();
        $('.btnContainer').hide();
        $('.startContainer').show();

    })
}




init();
start();
submit();
reset();
validate();

  });
  

 








$(document).ready(function () {

    var correct = 0
    var incorrect = 0
    
    
    







    //var start = document.querySelector('#start')
    //Select the document from the Html
    var time = document.querySelector('#time')
    //Make stop watch end time at 0
    var counter = 0
    //Make a start time
    var timeLeft = 30
    //interHtml makes javascript visiable to webpage through html
    time.innerHTML = timeLeft
    //Only way to stop setInterval time clock is to make the setInterval into a variable
    var stop = null
    $("#finish").click(function () {
        
        $.each($("input[type='radio']:checked"), function () {
            
            var answer = $(this).val()
            if (answer === 'Correct') {
             correct++
            }else{
                incorrect++
            }

        });clearInterval(stop)
        $('#correct').text(correct)
        $('#incorrect').text(incorrect)
        
    });


    function stopclock() {
        timeLeft--
        //select the dom(time) and added innerHTML(time.innerHTML) and set it to equal timeLeft(time.innerHTML = timeLeft)
        time.innerHTML = timeLeft
        //Makes a if statement so that the timer will stop once it equal a variable 
        if (timeLeft === counter) {
            //inside of the if statement add a clearInterval so that the time will stop
            //Also add the setInterval variable to the clearInterval by entering clearInterval(the setInvertable variable)
            clearInterval(stop)
        }
    }

    function timeIt() {

        stop = setInterval(stopclock, 1000);
        //I added the variable that I set to timeLeft and will substract by 1 every second

    }

    var start = false;
    $("#start").click(function () {

        event.preventDefault();
        if (!start) {
            timeIt();


        }
    })

});



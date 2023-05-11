
    // scripts here:

        function submitQuiz() {
            console.log('submitted');

        // get each answer score
            function answerScore (qName) {
                var radiosNo = document.getElementsByName(qName);

                for (var i = 0, length = radiosNo.length; i < length; i++) {
                    if (radiosNo[i].checked) {
                // do something with radiosNo
                        var answerValue = Number(radiosNo[i].value);
                    }
                }
                // change NaNs to zero
                if (isNaN(answerValue)) {
                    answerValue = 0;
                }
                return answerValue;
            }

        // calc score with answerScore function
    		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + answerScore('q8') + answerScore('q9') + answerScore('q10') + answerScore('q11') + answerScore('q12') + answerScore('q13') + answerScore('q14') + answerScore('q15') + answerScore('q16') + answerScore('q17'));
            console.log("CalcScore: " + calcScore); // it works!

        // function to return correct answer string
            function correctAnswer (correctStringNo, qNumber) {
                console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
                return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
                    (document.getElementById(correctStringNo).innerHTML) + "</strong>");
                }

        // print correct answers only if wrong (calls correctAnswer function)
    
            if (answerScore('1') === 0) {
                document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
            }
    
            if (answerScore('2') === 0) {
                document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
            }
    
            if (answerScore('3') === 0) {
                document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
            }
    
            if (answerScore('4') === 0) {
                document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
            }
    
            if (answerScore('5') === 0) {
                document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
            }
    
            if (answerScore('6') === 0) {
                document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
            }
    
            if (answerScore('7') === 0) {
                document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
            }
    
            if (answerScore('8') === 0) {
                document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
            }
    
            if (answerScore('9') === 0) {
                document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
            }
    
            if (answerScore('10') === 0) {
                document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
            }
    
            if (answerScore('11') === 0) {
                document.getElementById('correctAnswer11').innerHTML = correctAnswer('correctString11', 11);
            }
    
            if (answerScore('12') === 0) {
                document.getElementById('correctAnswer12').innerHTML = correctAnswer('correctString12', 12);
            }
    
            if (answerScore('13') === 0) {
                document.getElementById('correctAnswer13').innerHTML = correctAnswer('correctString13', 13);
            }
    
            if (answerScore('14') === 0) {
                document.getElementById('correctAnswer14').innerHTML = correctAnswer('correctString14', 14);
            }
    
            if (answerScore('15') === 0) {
                document.getElementById('correctAnswer15').innerHTML = correctAnswer('correctString15', 15);
            }
    
            if (answerScore('16') === 0) {
                document.getElementById('correctAnswer16').innerHTML = correctAnswer('correctString16', 16);
            }
    
            if (answerScore('17') === 0) {
                document.getElementById('correctAnswer17').innerHTML = correctAnswer('correctString17', 17);
            }
    
        // calculate "possible score" integer
            var questionCountArray = document.getElementsByClassName('question');

            var questionCounter = 0;
            for (var i = 0, length = questionCountArray.length; i < length; i++) {
                questionCounter++;
            }

        // show score as "score/possible score"
            var showScore = "Your Score: " + calcScore +"/" + questionCounter;
        // if 4/4, "perfect score!"
            if (calcScore === questionCounter) {
                showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
            };
            document.getElementById('userScore').innerHTML = showScore;
        }

    $(document).ready(function() {

        $('#submitButton').click(function() {
            $(this).addClass('hide');
        });

    });
    
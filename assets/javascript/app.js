$(document).ready(function () {
    
    // $("#timeRemaining").hide();
    const quizContainer = $("#quiz");
    var totalAnswer=0;
    var i = 0;

    // const questions = {
    //     question: {
    //         q1: "When is your birthday?",
    //         q2: "When is your birthday?",
    //         q3: "When is your birthday?",
    //         q4: "When is your birthday?",
    //         q5: "When is your birthday?",
    //         q6: "When is your birthday?"
    //     },
    //     choices: {
    //         c1: {
    //             a: "2018-05-05",
    //             b: "2018-05-14",
    //             c: "2018-05-20",
    //             d: "2018-05-25"
    //         },
    //         c2: {
    //             a: "2018-05-05",
    //             b: "2018-05-14",
    //             c: "2018-05-20",
    //             d: "2018-05-25"
    //         },
    //         c3: {
    //             a: "2018-05-05",
    //             b: "2018-05-14",
    //             c: "2018-05-20",
    //             d: "2018-05-25"
    //         },
    //         c4: {
    //             a: "2018-05-05",
    //             b: "2018-05-14",
    //             c: "2018-05-20",
    //             d: "2018-05-25"
    //         },
    //         c5: {
    //             a: "2018-05-05",
    //             b: "2018-05-14",
    //             c: "2018-05-20",
    //             d: "2018-05-25"
    //         },
    //         c6: {
    //             a: "2018-05-05",
    //             b: "2018-05-14",
    //             c: "2018-05-20",
    //             d: "2018-05-25"
    //         }
    //     },
    //     answer:{
    //         a1:"2018-05-14",
    //         a2:"2018-05-14",
    //         a3:"2018-05-14",
    //         a4:"2018-05-14",
    //         a5:"2018-05-14",
    //         a6:"2018-05-14"
    //     }
    // }
    const myQuestions = [
        {
            question: "Who is the strongest?",
            answers: {
                a: "Superman",
                b: "The Terminator",
                c: "Waluigi, obviously"
            },
            correctAnswer: "Waluigi, obviously"
        },
        {
            question: "What is the best site ever created?",
            answers: {
                a: "SitePoint",
                b: "Simple Steps Code",
                // c: "Trick question; they’re both the best"
                c: "Trick question; they are both the best"
            },
            // correctAnswer: "Trick question; they‘re both the best"
            correctAnswer: "Trick question; they are both the best"
        },
        {
            question: "Where is Waldo really?",
            answers: {
                a: "Antarctica",
                b: "Exploring the Pacific Ocean",
                c: "Sitting in a tree",
                d: "Minding his own business, so stop asking"
            },
            correctAnswer: "Minding his own business, so stop asking"
        },
        {
            question: "What is your name?",
            answers: {
                a: "Jojo",
                b: "huiying",
                c: "Miya",
                d: "Angie"
            },
            correctAnswer: "Jojo"
        },
        {
            question: "Who is your favorite singer?",
            answers: {
                a: "Jay Chou",
                b: "Wang lihong",
                c: "Begum Akhtar",
                d: "K.L Saigal"
            },
            correctAnswer: "Jay Chou"
        }
    ];
    function buildQuiz() {
        /**
         * build quiz
         */
        // var i = 0;
        $.each(myQuestions, function (indexInArray, valueOfElement) {
            console.log(valueOfElement.question);
            $("#quiz").append(valueOfElement.question + "<br><br>");
            $.each(valueOfElement.answers, function (indexInArray, valueOfElement) {
                $("#quiz").append("<input isCorrect='' type='radio' name='" + i + "' value='" + valueOfElement + "'> &nbsp " + valueOfElement + "&nbsp&nbsp&nbsp&nbsp");
                // console.log(Object.keys(valueOfElement.answers));
                console.log($("input").attr("value")+"*********");
                console.log(indexInArray);
                // $("#quiz").append("<input type='radio' name='"+Object.keys(valueOfElement.answers)+"'> * "+valueOfElement+"<span>     ***</span>");
            });
            i++;
            $("#quiz").append("<br><br><br>");

        });
        totalAnswer=i;
    }
    buildQuiz();
    /**
    * click event
    */
    $("input").on("click", function () {
        console.log($(this).attr("name"));
        var i=parseInt($(this).attr("name"));
        if ($(this).attr("value") == myQuestions[i].correctAnswer) {
            $(this).attr("isCorrect", 1);
            console.log($(this).attr("isCorrect") + "--------true");
        } else {
            $(this).attr("isCorrect", 0);
            console.log($(this).attr("isCorrect") + "-----false");
        }
    });
   
    function showResult() {
        var correctAnswer = 0, uncorrectAnswer = 0, unanswer = 0;
        $(":input").each(function(){
            if($(this).attr("isCorrect")=='1'){
                correctAnswer++;
            }else if($(this).attr("isCorrect")=='0'){
                uncorrectAnswer++;
            }
           });
           unanswer=totalAnswer-correctAnswer-uncorrectAnswer
           console.log(correctAnswer+"-----correctAnswer");
           console.log(uncorrectAnswer+"-----uncorrectAnswer");
           console.log(unanswer+"-----unanswer");
           $("#quiz").hide();
           $("#submit").hide();
           $("#results").html("<h3>ALL DONE!<h3></br>Correct Answers:"+correctAnswer+"<br>"+"Incorrect Answers:"+uncorrectAnswer+"<br>"+"Unanswered:"+unanswer);
    }
    $("#submit").on("click", showResult);
    
     // Initializing timer variable.
     var x = 20;
     // Display count down for 20 seconds
     setInterval(function () {
         if (x <= 21 && x >= 1) {
             x--;
             // y.innerHTML = '' + x + '';
             $("#timer").html(x);
             if (x == 1) {
                 x = 21;
             }
         }
     }, 1000);
     // Form Submitting after 20 seconds.
    var auto_refresh = setTimeout(showResult, 20000);

});
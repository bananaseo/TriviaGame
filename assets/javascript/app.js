
 $(document).ready(function(){
    
    //Global Variables
    
    ///Timer
    var time = 31; 
    var intervalId; 
    var clockRunning = false; 
    
    ///Quiz
    var quiz = $("#quiz"); 
    var results = $("#results"); 
    var correctResult = 0; 
    var wrongResult = 0; 

    var answers1 = ["Kiki's Delivery Service","Castle in the Sky","The Cat Returns", "Howl's Moving Castle"]; 

    var answers2 = ["Sushi Restaurant", "Car Dealership","Bathhouse","Bookstore"]; 

    var answers3 = ["Cats","Tigers","Wolves","Bears"]; 
    

    //Quiz Functions- the radio buttons don't work 
    for (var i=0; i<answers1.length; i++) {
       var a = $("<input type='radio' name='question'>"); 
        $("#a1").append(a); 
        $("#a1").append(answers1[i]+"<p>"); 
    }; 

    for (var j=0; j<answers2.length; j++) {
        var b = $("<input type='radio' name='question'>"+answers1[j]); 
         $("#a2").append(b); 
         $("#a2").append(answers2[j]+"<p>"); 
     }

    for (var k=0; k<answers3.length; k++) {
        var c = $("<input type='radio' name='question'>"+answers1[k]); 
         $("#a3").append(c); 
         $("#a3").append(answers3[k]+"<p>"); 
    }
  
    

    //Timer Functions
    $("#start").click(run);

    function run() { 
        if (!clockRunning)
        
        intervalId = setInterval(decrement,1000); 
        clockRunning = true; 
        $(".quiz").show(); 
    }

    function decrement() {
        time--; 
        $("#wrapper").html("<h2>"+time+"</h2>")
        if (time === 0) {
            stop();
            alert("Time is up!"); 
        }
    }

    function stop() {
        clearInterval(intervalId); 
    }

    //Failed Attempt- I attempted to use for loop and this array to create radio buttons but failed miserably 
    var triviaQuestions = [
        {
            question: "Which Miyazaki film is about a girl who works in a hat shop, a mysterious wizard, and a moving castle?", 
            answers: {
                a:"Kiki's Delivery Service",
                b:"Castle in the Sky",
                c:"The Cat Returns",
                d:"Howl's Moving Castle ",
            }, 
            correctAnswer: "d"
        },
        {
            question: "In the movie 'Spirited Away,' where does the protagonist work in order to save her parents?", 
            answers: {
                a:"Sushi Restaurant",
                b:"Car Dealership",
                c:"Bathhouse",
                d:"Bookstore",
            }, 
            correctAnswer: "c"
        }
    ]



    
 

    






 })
 
 


   

    



 








    
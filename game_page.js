player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;
var word;
question_turn = "P1";
answer_turn = "P2";
  
  

document.getElementById("player1_name").innerHTML=player1_name+':';
document.getElementById("player2_name").innerHTML=player2_name+':';

document.getElementById("player_1_score").innerHTML=player1_score;
document.getElementById("player_2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+ player2_name;

function send(){
   word = "";
    get_word=document.getElementById("word").value; // Atlantic
    word=get_word.toLowerCase(); // atlantic
    console.log("word in lowerCase = "+word); //word in lowerCase = atlantic
    // 0-a, 1-t, 2-l, 3- a, 4- n, 5- t, 6- i, 7-c
    
    
    charAt1=word.charAt(1); // t
    console.log(charAt1);


    //word.length = length of atlantic - 8 


    length_divide_2=Math.floor(word.length/2); //4  == 8/2 = 4    or if it is 7 -- 7/2 = 3.5   floor(3.5) = 3
    charAt2=word.charAt(length_divide_2); // n
    console.log(charAt2);

    length_minus_1=word.length-1; //7
    charAt3=word.charAt(length_minus_1); // c
    console.log(charAt3);


    remove_charAt1=word.replace(charAt1,"_"); // atlantic -- a_lantic
    remove_charAt2=remove_charAt1.replace(charAt2,"_"); // a_lantic -- a_la_tic
    remove_charAt3=remove_charAt2.replace(charAt3,"_"); // a_la_tic --  a_la_ti_
    console.log(remove_charAt3);

   var  question_word="<h4 id= 'word_display'>Q. " + remove_charAt3 +"</h4>"; // Q. a_la_ti_
    var input_box="<br>Answer:<input type='text' id='input_check_box'>"; // create a answer box
    var check_button="<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>"; // button to check the guess


    var row = question_word+input_box+check_button; 
    /* joining all the 3 components_ 
         Q. a_la_ti
         |______________| create a answer box
         |__CHECK___|  button

    */

    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value=""; // input box blank  - Atlantic --- blank


}

  // When player with answer turn click on the check button 

function check(){

  get_ans = document.getElementById("input_check_box").value;
  ans = get_ans.toLowerCase();
  console.log(ans);

  if(ans ==  word){
    console.log("answer matched");

    if (answer_turn == "P1"){
        player1_score = player1_score + 1;
        document.getElementById("player_1_score").innerHTML=player1_score;
        console.log("P1 got a point");

    }
    else{
      player2_score = player2_score + 1;
      document.getElementById("player_2_score").innerHTML=player2_score;
      console.log("P2 got a point");
    }
      

  }
  if (answer_turn === "P1"){
    answer_turn="P2";
    document.getElementById("player_answer").innerHTML="Answer Turn - "+ player2_name;
  }
  else{
    answer_turn="P1"; 
    document.getElementById("player_answer").innerHTML="Answer Turn - "+ player1_name;
  }
  
  if(question_turn==="P1"){
      question_turn="P2";
      document.getElementById("player_question").innerHTML="Question Turn - "+ player2_name;
  }
  else{
      question_turn="P1";
      document.getElementById("player_question").innerHTML="Question Turn -" + player1_name;
    }

    document.getElementById("output").innerHTML="";
   
}

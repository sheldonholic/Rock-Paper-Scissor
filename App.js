let [computer_score, user_score] = [0, 0];
let result_ref = document.getElementById("result");
let choices_object = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    },
    'paper': {
        'rock': 'win',
        'scissor': 'lose',
        'paper': 'draw'
    }

}

function checker(input) {
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random() * 3);

    document.getElementById("comp_choice").innerHTML =
        ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML =
        ` You choose <span> ${input.toUpperCase()} </span>`;
    
    let computer_choice = choices[num];
    var change = document.getElementById("change");
   
    switch (choices_object[input][computer_choice]) {
        case 'win':
            if (input == "rock" & computer_choice == "scissor") {
                change.src = "https://img.icons8.com/ios-glyphs/60/000000/broken-link.png";
                document.getElementById("changeText").innerHTML =
                    ` Uh-oh !! You broke bot's scissor :(`;
            }
            else if (input == "scissor" & computer_choice == "paper") {
                change.src = "https://img.icons8.com/external-those-icons-lineal-those-icons/60/000000/external-paper-broken-those-icons-lineal-those-icons.png";
                document.getElementById("changeText").innerHTML =
                ` OMG !! That was bot's test paper 🤔`;
            }
            else if (input == "paper" & computer_choice == "rock") {
                change.src = "https://img.icons8.com/office/60/000000/rock.png";
                document.getElementById("changeText").innerHTML =
                ` How dare you cover the bot's stone up 👀`;
            }
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            if (input == "rock" & computer_choice == "paper") {
                change.src = "https://img.icons8.com/office/60/000000/rock.png";
                document.getElementById("changeText").innerHTML =
                    ` Hahaha !! serves you RIGHT 😎`;
            }
            else if (input == "paper" & computer_choice == "scissor") {
                change.src = "https://img.icons8.com/external-those-icons-lineal-those-icons/60/000000/external-paper-broken-those-icons-lineal-those-icons.png";
                document.getElementById("changeText").innerHTML =
                ` Only if your paper could get back to original 🤔`;
            }
            else if (input == "scissor" & computer_choice == "rock") {
                change.src = "https://img.icons8.com/ios-glyphs/60/000000/broken-link.png";
                document.getElementById("changeText").innerHTML =
                    ` Ooops !! I hope you don't mind it 😜`;
            }
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            if (input == "rock" & computer_choice == "rock") {
                change.src = "https://img.icons8.com/office/60/000000/rock.png";
                document.getElementById("changeText").innerHTML =
                    `Yeahh !! Telepathy huh 😎`;
            }
            else if (input == "scissor" & computer_choice == "scissor") {

                change.src = "https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-cheers-oktoberfest-wanicon-lineal-color-wanicon.png";
                //document.getElementById("changeText").innerHTML =
                //` That moment when a package says "Easy open and you end up using scissors, a knife, a hammer, a gun and a lightsaber trying to open it  🤔`;
                document.getElementById("changeText").innerHTML =
                ` Cheers .. We Matched !!`;
            }
            else if (input == "paper" & computer_choice == "paper") {
                change.src = "https://img.icons8.com/ios/60/000000/documents.png";
                document.getElementById("changeText").innerHTML =
                    `This should be crowned the International Time Pass Game !!😜`;
            }
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}
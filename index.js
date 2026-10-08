
window.onload = getAdvice()

function getAdvice(){
    let today = new Date()
    let day = today.getDay() 

    let title;
    let advice;

    switch(day){
        case 0:
            title = "Slow Sunday";
            advice = "Rest properly today. Prepare gently for the week.";
            break;
        case 1:
            title ="Fresh Start";
            advice= "Pick one important task and finish it before anything else.";
            break;
        case 2:
            title ="Keep Going";
             advice ="Momentum beats motivation. Do the next small thing.";

             break;
        case 3:
            title ="Midweek Check";
             advice ="Review your goals and refocus on what matters.";

             break;
        case 4:
            title ="Almost There";
             advice ="Finish strong and tie up loose ends.";
             break;
        case 5:
            title ="Friday Energy";
             advice ="Celebrate your wins and plan something you enjoy.";

             break;
        case 6:
            title ="Free Day";
             advice ="Relax, see people you love and do something fun.";

             break;

        default:
            advice = "Invalid input"
    }

document.getElementById("title").textContent= title
document.getElementById("advice").textContent = advice

document.getElementById("picture").setAttribute("src", "https://picsum.photos/800/450")

document.getElementById("date").textContent= today.toLocaleDateString(undefined,  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }) 










}
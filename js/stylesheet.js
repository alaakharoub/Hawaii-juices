function show() {
    document.getElementById("more").innerHTML = "There is a lot that we can do to reduce waste and it can feel overwhelming. Our advice is to try to do one thing and once that becomes a habit, try another thing. Each step is a step towards a better, more sustainable way to live.";
}
if (new Date().getHours() < 18) { docement.getElementById("greeting").innerHTML = "Hello!" }
let day;
switch (new Date().getday()) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";

}
document.getElementById("days").innerHTML = "Today is" + day;
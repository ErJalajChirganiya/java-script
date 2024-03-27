// //WITH ONCLICK USE IN HTML
// function display() {
//     alert("this is an event");
// }
//WITHOUT ONCLICK USE IN HTML

//1ST TYPE
// let mybtn = document.getElementById("btn");
// mybtn.addEventListener("click", () => {
//     alert("this is also another event");
// });

//2ED TYPE
// document.getElementById("btn").addEventListener("click", display);

// function display() {
//     alert("this is also an event")
// }

//view to date
document.getElementById("btn").addEventListener("click", display);
 let mydate = new Date();
function display() {
    document.getElementById("demo").innerHTML = mydate;
}
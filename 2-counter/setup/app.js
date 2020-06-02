// Set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function(e){
      //here 'e' is the event object....
      //Event object is the property of currentTarget
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
        count--;
    }
    else if(styles.contains("increase")){
        count++;
    }
    else {
        count = 0;
    }
    if(count < 0){
        value.style.color = "blue";
    } else if(count > 0){
        value.style.color = "red";
    } else if(count === 0){
        value.style.color = "#222";
    }
    value.textContent = count;
  });
});
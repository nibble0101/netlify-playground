const axios = import("axios");

const btn = document.getElementById("btn");
const todo = document.getElementById("todo");


btn.addEventListener("click", async () => {
    console.log("clicked");
    console.log(todo)
})
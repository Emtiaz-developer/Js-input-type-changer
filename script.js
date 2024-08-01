let pass = document.querySelector("#pass");
let btn = document.querySelector("button");
let para = document.querySelector("p");
let inital = false;
btn.addEventListener("click", () =>{
   
   if(inital === false){
    inital = true;
    pass.type = "text";
    btn.innerText = "Hide";
    para.innerText = "input field type is now text"
    console.log(inital);
   }else{
    inital = false;
    pass.type = "password";
    btn.innerText = "Show"
    para.innerText = "input field type is now password"
    console.log(inital)
   }
})
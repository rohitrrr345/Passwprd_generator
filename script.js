let main = document.getElementById("main");
let inputScreen = document.getElementById("inputScreen");
let slider = document.getElementById("slider");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let btns = document.getElementById("btns");
let copy=document.getElementById("copy")
slider.textContent = main.value;
main.addEventListener('input', () => {
  slider.textContent = main.value;
});
btns.addEventListener("click", () =>{
  inputScreen.value = genPassword();
});
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nmbr = "0123456789";
let sym = "-!@#$%^&*";
function genPassword(){
  let generate = "";
  let chars = "";
  chars += lowercase.checked ? lower : "";
  chars += uppercase.checked ? upper : "";
  chars += number.checked ? nmbr : "";
  chars += symbol.checked ? sym : "";
  if (chars == "" || chars.length == 0) {
    return generate;
  }
  let i = 1;
  while (i <= main.value) {
    generate += chars.charAt(Math.floor(Math.random() *chars.length));
    i++;
  }

  return generate;
}
copy.addEventListener('click', ()=>{
  if(inputScreen.value != "" || inputScreen.value.length >=1){
      navigator.clipboard.writeText(inputScreen.value);
      copy.innerText = "check";
      copy.title = "Password Copied";

      setTimeout(()=>{
          copy.innerHTML = "content_copy";
          copy.title = "";
      }, 3000)
  }
});

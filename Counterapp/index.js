let countEl = document.getElementById("count_el")
let count = 0
function increment(){
    count += 1
    countEl.innerText = count

}
let saveEl = document.getElementById("save-el")       
function save(){
    new_entry = count + " - "
    saveEl.innerText += new_entry
    console.log(count)
    count = 0
    countEl.textContent = count
}
save()

let welcomeEl = document.getElementById("welcomeEl")
let name = "Chinedu"
let greeting = "Welcome back"
welcomeEl.textContent = greeting + " " + name 



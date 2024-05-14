const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// read more 
btn1.addEventListener('click',( )=>{
    para2.classList.remove("hidden");
    btn1.classList.add("hidden");
})

// read less
btn2.addEventListener('click',( )=>{
    para2.classList.add("hidden");
    btn1.classList.remove("hidden");
})


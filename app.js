let input = document.querySelector(".cNum")

input.addEventListener('keyup', ()=>{
    let cNumber = input.value;
    cNumber = cNumber.replace(/\s/g, "");

    if(Number(cNumber)){
        cNumber = cNumber.match(/.{1,4}/g);
        cNumber = cNumber.join(" ");
        input.value = cNumber;
    }
})

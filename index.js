const toggle = document.querySelector('.toggle')
let opened = false
toggle.addEventListener('click',()=>{
    // let rotation = toggle.style.transform.rotate;
    if(opened){
        //cpllapse
        toggle.parentElement.style.height='65px'
        toggle.style.transform ='rotate(180deg)'
        opened=false
    }
    else{
        //expand
        toggle.parentElement.style.height='300px'
        toggle.style.transform ='rotate(+90deg)'
        opened=true
    }
})
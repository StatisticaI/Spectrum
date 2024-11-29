let nav=document.getElementById('navbar1')
if(window.innerWidth<=760){
    nav=document.getElementById('navbar2')
}
document.addEventListener('scroll',()=>{
    let x=window.scrollY
    if(x<=200){
        nav.style.backgroundColor="#b8b3b300"
        document.getElementById('navbar1').style.backgroundColor="#b8b3b300"
    }else{
        nav.style.backgroundColor="#414a52"
        document.getElementById('navbar1').style.backgroundColor="#414a52"
    }
})
function menu(){
    if(nav.style.display==="none"){
        nav.style.display="flex"
    }else{nav.style.display="none"}
}

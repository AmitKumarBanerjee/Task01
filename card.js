const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>
{
    panel.addEventListener('click', () =>{
        removeActiveClasses()
         panel.classList.add('active')
    })
})


function add(x,y){
    console.log(x+y)
}

add(4,5)

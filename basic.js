document.addEventListener('DOMContentLoaded', function(){
    const menuBtn = document.querySelector('#menu')
    const popUpNav = document.querySelector('.pop-up-nav')
    const exitPopBtn = document.querySelector('.fa-circle-xmark')

    const dotBtn = document.querySelector('#dotBtn')
    const threeDotsEl = document.querySelector('.pop-up-three-dots')
    const popUpExitBtn = document.querySelector('.pop')

    const threeDotsLeftBtn = document.querySelector('.fa-angle-left')

    const videoPop = document.querySelector('.pop-up-vid1')
   
    videoPop.addEventListener('click', function(){
        const videoPop2 = document.querySelector('.pop-up-vid2')
        videoPop2.play()
        videoPop2.classList.add('pop-video')
        videoPop2.autoplay = 'true'

        videoPop2.addEventListener('click', function(){
            videoPop2.pause()
            videoPop2.classList.remove('pop-video')
            videoPop2.autoplay = 'false'
        })
    })

    menuBtn.addEventListener('click', function(){
        popUpNav.classList.add('pop-up')
        document.body.classList.add('no-scroll')      
        leftBtn()
    })

    exitPopBtn.addEventListener('click', function(){
        popUpNav.classList.remove('pop-up')
        document.body.classList.remove('no-scroll')
        document.body.style.overflowY = 'scroll'
    })

    dotBtn.addEventListener('click', function(){
        threeDotsShow()
        leftBtn()
    })

    popUpExitBtn.addEventListener('click', function(){
        threeDotsEl.classList.remove('pop-up-dots')
        document.body.style.overflowY = 'scroll'
    })

    const initiativesEl = popUpNav.querySelector('ul')

    initiativesEl.addEventListener('click', function(){
        threeDotsShow()
    })
    
    const leftBasicEl = document.querySelector('.basic-dept')
    const newItemEl = document.querySelector('.featured-news')

    let prevScroll = scrollY
    
    document.addEventListener('scroll', function(){
        const mainNavEl = document.querySelector('.main-nav')
         
        let currentScroll = scrollY

        const belowVidEl = document.querySelector('.below-video')

        if(prevScroll > currentScroll){
            mainNavEl.style.top = '0'
            
            if(scrollY >= belowVidEl.offsetTop){
                mainNavEl.style.color = 'var(--dark-color)'
            }

            else{
                mainNavEl.style.color = 'var(--light-color)'
            }
        }

        else{
            mainNavEl.style.top = '-100px'
            mainNavEl.style.color = 'var(--light-color)'
        }

        prevScroll = currentScroll
      
        if(scrollY >= leftBasicEl.offsetTop){
           document.body.classList.add('bodyColorChange')
           mainNavEl.style.color = 'var(--pink-color)'          
        }

        if(scrollY >= newItemEl.offsetTop - 420){
            document.body.classList.remove('bodyColorChange')
            if(scrollY >= belowVidEl.offsetTop){
                mainNavEl.style.color = 'var(--dark-color)'
            }

            else{
                mainNavEl.style.color = 'var(--light-color)'
            }
        }

        if(scrollY < leftBasicEl.offsetTop){
            document.body.classList.remove('bodyColorChange')
            if(scrollY >= belowVidEl.offsetTop){
                mainNavEl.style.color = 'var(--dark-color)'
            }

            else{
                mainNavEl.style.color = 'var(--light-color)'
            }
        }
    })

    const draggableUlEl = document.querySelector('.draggable-div')
    let isDown = false
    let startX
    let scrollLeft

    draggableUlEl.addEventListener('mousedown', function(e){
        isDown = true
        startX = e.pageX - draggableUlEl.offsetLeft
        scrollLeft = draggableUlEl.scrollLeft
    })

    draggableUlEl.addEventListener('mouseleave', function(e){
        isDown = false
    })

    draggableUlEl.addEventListener('mouseup', function(e){
        isDown = false
    })

    draggableUlEl.addEventListener('mousemove', function(e){
        
        if(!isDown) return
        e.preventDefault()

        const x = e.pageX - draggableUlEl.offsetLeft
        const walk = (x - startX) * 3
        draggableUlEl.scrollLeft = scrollLeft - walk

    })

    const figuresEl = document.querySelector('.figures-holder')
    
    figuresEl.addEventListener('mousedown', function(e){
        isDown = true
        startX = e.pageX - figuresEl.offsetLeft
        scrollLeft = figuresEl.scrollLeft
    })

    figuresEl.addEventListener('mouseleave', function(e){
        isDown = false
    })

    figuresEl.addEventListener('mouseup', function(e){
        isDown = false
    })

    figuresEl.addEventListener('mousemove', function(e){
        if(!isDown) return
        e.preventDefault()

        const xFigures = e.pageX - figuresEl.offsetLeft
        const walkFigure = (xFigures - startX) * 3
        figuresEl.scrollLeft = scrollLeft - walkFigure
    })

    // Functions
    function threeDotsShow(){
        threeDotsEl.classList.add('pop-up-dots')
        document.body.style.overflowY = 'hidden'
    }

    function leftBtn(){     
        threeDotsLeftBtn.addEventListener('click', function(){
            threeDotsEl.classList.remove('pop-up-dots')
            popUpNav.classList.add('pop-up')
        })
    }
})
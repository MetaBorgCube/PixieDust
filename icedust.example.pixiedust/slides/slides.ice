module slides


functions
  button(text: String, onClick: Action[]) : View = button[onClick=onClick()]{ text }
  int(i: Int): View = span { i }
  li(v: View): View = li { v }
    
  slideButton(slide: Slide): View = 
    button[onClick=slide.setCurrent()]{ 
      if(slide.isCurrent) 
        b { slide.slideNumber } 
      else 
        span { slide.slideNumber } 
    }

model

  entity SlideShow{
    totalSlides: Int = current.slideNumber + current.slidesLeft <+ 0
    
    slideNumbersVisible: Int = 30 (default)
    showFooter: Boolean = false (default)
    
    actions {
      start() {
        slides := no value
      
        slides += 
          Slide {
            title = "Hello world!"
            content = div {
              "Slide content"
            }
          }
        slides += 
          Slide {
            title = "dsa"
            content = div {
              "More content"
            }
          }
          
        current := slides.first() 
      }
      
      nextSlide() {
        current := current.next
      }
      
      previousSlide() {
        current := current.previous
      }
    }
    
    
    initView: View = div {
      button[onClick=start()] { "Start slideshow" }
    }
    
    view: View = div {
      if(count(current) == 0)
        initView
      else
        div {
          current.view
          footer
        }
    }
    
    
    footer: View = footer {
      button("Previous", previousSlide)
      ul {
        (li(slideButton(current.selectPrevious)))
        li{ 
          (slideButton(current))
        }
        (li(slideButton(current.selectNext)))
      }
      button("Next", nextSlide)
    }
  }

  entity Slide {
    title: String
    content: View?
    
    slideNumber : Int = slideshow.slides.indexOf(this) <+ 0
    slidesLeft: Int = 1 + next.slidesLeft <+ 0
    
    isCurrent: Boolean = slideshow.current == this <+ false
    
    prevVisible : Int = 
      min(
        max(
          (slideshow.slideNumbersVisible /. 2)
          ++ max(0 ++ (slideshow.slideNumbersVisible - (allNext.count())))
        ) 
        ++ (allPrevious.count())
      )
    nextVisible : Int = slideshow.slideNumbersVisible - prevVisible - 1
    
    
    view: View = div{
      h1 { "[" slideNumber "] " title }
      div {
        content
      }
    }
    
    actions {
      setCurrent(){
        slideshow.current := this
      }
    }
  }
  
  

  relation Slide.next ?     = slideshow.slides.elemAt(slideNumber + 1 <+ 0) <-> Slide.inverseNext
  relation Slide.previous ? = slideshow.slides.elemAt(slideNumber - 1 <+ 0) <-> Slide.inversePrevious
    
  relation SlideShow.current ? <-> Slide.inverseCurrent
  relation Slide.slideshow 1 <-> * SlideShow.slides
  
  relation Slide.allNext0 = this ++ next.allNext0 <+ this <-> Slide.inverseAllNext0
  relation Slide.allPrevious0 = previous.allPrevious0 ++ this <+ this <-> Slide.inverseAllPrevious0
  
  relation Slide.allPrevious = allPrevious0 \ this <-> Slide.inverseAllPrevious
  relation Slide.allNext =  allNext0 \ this <-> Slide.inverseAllNext
  
  relation Slide.selectPrevious = 
    allPrevious.orderBy(s => s.slideNumber * -1).first(prevVisible).orderBy(s => s.slideNumber)
      <-> Slide.inverseSelectPrevious
      
  relation Slide.selectNext = 
    allNext.orderBy(s => s.slideNumber).first(nextVisible)
      <-> Slide.inverseSelectNext
      
data
  slideshow: SlideShow {
  }
  
execute
  slideshow.view
  
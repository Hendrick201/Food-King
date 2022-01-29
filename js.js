function showSocialMedias()
{
        document.getElementById("SocialMediasList").style.top = "60%";
        document.getElementById("MediaLabel").style.color = "#f3f307";
        document.getElementById("SocialMediasList").style.animation = "MediasAnimation 1s";
        document.getElementById("SocialMediasList").style.opacity = "100%";
        document.getElementById("MediasBorder").style.animation = "BorderAnimation 1s";
        document.getElementById("MediasBorder").style.width = "100%"; 
}
function hideSocialMedias()
{
        document.getElementById("SocialMediasList").style.top = "-100%";
        document.getElementById("MediaLabel").style.color = "#cfcf00";
        document.getElementById("MediasBorder").style.animation = "BorderAnimation2 0.5s";
        document.getElementById("MediasBorder").style.width = "0%";
        document.getElementById("SocialMediasList").style.animation = "MediasAnimation2 0.8s ";
        document.getElementById("SocialMediasList").style.opacity = "0%";
}
function BorderAnimationEnter()
{
        var currentId = event.target.id;
        document.getElementsByClassName("CardápioBorder")[currentId].style.animation = "BorderAnimation 0.5s";
        document.getElementsByClassName("CardápioBorder")[currentId].style.width = "100%"; 
}
function BorderAnimationOut()
{
        var currentId = event.target.id;
        document.getElementsByClassName("CardápioBorder")[currentId].style.animation = "BorderAnimation2 0.5s";
        document.getElementsByClassName("CardápioBorder")[currentId].style.width = "0%"; 
}

setInterval(MenuAnimation,1)
var FirstAnimationStart = true;
var FirstAnimationEnds = false;
var SecondAnimationEnds = false;
var CanAnimate = true;
function MenuAnimation()
{
        if(CanAnimate == true)
        {
                document.getElementById("SecondMenuText").style.animation = "FadeIn 2s";
                document.getElementById("SecondMenuText").style.animationDelay = "0.5s";
                setInterval(MenuAnimation2,1000)
               
          if(FirstAnimationEnds == true)
                {
                document.getElementById("MainMenuText").style.animation = "FadeIn 2s";
                document.getElementById("MainMenuText").style.animationDelay = "0.2s";
                setInterval(MenuAnimation1,500)
                }
         if(SecondAnimationEnds == true)
                {
                document.getElementById("MenuText").style.animation = "FadeIn 2s";
                document.getElementById("MenuText").style.animationDelay = "0.2s";
                setInterval(MenuAnimation3,500)
               
                AnimationEnds = true;
                }
        }
              

}
function MenuAnimation1()
{
        document.getElementById("MainMenuText").style.opacity = "100%";
        SecondAnimationEnds = true;
        
}
function MenuAnimation2()
{
        document.getElementById("SecondMenuText").style.opacity = "100%";
        FirstAnimationEnds = true;
}
function MenuAnimation3()
{
        document.getElementById("MenuText").style.opacity = "100%";
        CanAnimate = false;
}
function MenuFixedAnimationHidden()
{
        document.getElementById("MenuContainer").style.animation = "MenuAnimHidden 0.8s"
        document.getElementById("MenuContainer").style.top = "-120px" 
        document.getElementById("MenuContainer").style.backgroundColor = "#000000bd"
}
function MenuFixedAnimationShow()
{
        document.getElementById("MenuContainer").style.animation = "MenuAnimShow 0.8s"
        document.getElementById("MenuContainer").style.top = "0%"   
        document.getElementById("MenuContainer").style.backgroundColor = "#000000bd" 
}
function BottomMenuFixedAnimationHidden()
{
        document.getElementById("FooterFixed").style.animation = "BottomMenuAnimHidden 0.8s"
        document.getElementById("FooterFixed").style.bottom = "-40px" 
}
function BottomMenuFixedAnimationShow()
{
        document.getElementById("FooterFixed").style.animation = "BottomMenuAnimShow 0.8s"
        document.getElementById("FooterFixed").style.bottom = "0%" 
}
function backgroundNone()
{
        document.getElementById("MenuContainer").style.backgroundColor = ""     
}

var ClickCount = 0;
var direction = "reverse";
var time = setInterval(AutoSlide,8000)
function AutoSlide()
{
        document.getElementById("RightButton").disabled = true;
        document.getElementById("LeftButton").disabled = true;
        ClickCount ++;
}
function ClickTest()
{
      if(ClickCount ==-1)
      {
              ClickCount = 3;
      }
      if(ClickCount ==0)
      {
        document.getElementById("RightButton").disabled = false;
        document.getElementById("LeftButton").disabled = false; 
      }

                if(ClickCount ==1)
                {
                        var SliderImage1 = document.querySelector("#PlaceImage1");
                        var SliderImage2 = document.querySelector("#PlaceImage2");
                        var SliderImage3 = document.querySelector("#PlaceImage3");          
                        document.getElementById("PlaceImage3").style.animation = "SlideImagesHidden 1.5s"
                        document.getElementById("PlaceImage3").style.animationDirection = direction;
                        document.getElementById("PlaceImage3").style.animationTimingFunction = "linear"
                        document.getElementById("PlaceImage1").style.animation = "SlideImagesShow 1.5s"
                        document.getElementById("PlaceImage1").style.animationDirection = direction;
                        document.getElementById("PlaceImage1").style.animationTimingFunction = "linear"
                        document.getElementById("PlaceImage1").addEventListener("animationend", function()
                        {
                                document.getElementById("RightButton").disabled = false;
                                document.getElementById("LeftButton").disabled = false; 
                                SliderImage1.style.transform = " translateX(-100%)"  
                                SliderImage2.style.transform = " translateX(+200%)"  
                                SliderImage3.style.transform = "translateX(-100%)"   
                        })
                }
                if(ClickCount ==2)
                {
                        
                        var SliderImage1 = document.querySelector("#PlaceImage1");
                        var SliderImage2 = document.querySelector("#PlaceImage2");
                        var SliderImage3 = document.querySelector("#PlaceImage3");  
                                SliderImage2.style.transform = " translateX(100%)"       
                                document.getElementById("PlaceImage2").style.animation = "SlideImagesShow 1.5s"
                                document.getElementById("PlaceImage2").style.animationDirection = direction;
                                document.getElementById("PlaceImage2").style.animationTimingFunction = "linear"
                                SliderImage3.style.transform = " translateX(0%)"
                                document.getElementById("PlaceImage3").style.animation = "SlideImagesShow 1.5s"
                                document.getElementById("PlaceImage3").style.animationDirection = direction;
                                document.getElementById("PlaceImage3").style.animationTimingFunction = "linear"
                                document.getElementById("PlaceImage3").addEventListener("animationend", function()
                                {
                                        document.getElementById("RightButton").disabled = false;
                                        document.getElementById("LeftButton").disabled = false;
                                        SliderImage1.style.transform = " translateX(100%)" 
                                     
                                })
                
                }
                if(ClickCount ==3)
                {
                     
                        var SliderImage1 = document.querySelector("#PlaceImage1");
                        var SliderImage2 = document.querySelector("#PlaceImage2");
                        var SliderImage3 = document.querySelector("#PlaceImage3");  
                        SliderImage2.style.transform = " translateX(-100%)"       
                        document.getElementById("PlaceImage2").style.animation = "SlideImagesHidden 1.5s"
                        document.getElementById("PlaceImage2").style.animationDirection = direction;
                        document.getElementById("PlaceImage2").style.animationTimingFunction = "linear"
                        SliderImage1.style.transform = " translateX(0%)"
                        document.getElementById("PlaceImage1").style.animation = "SlideImagesHidden 1.5s"
                        document.getElementById("PlaceImage1").style.animationDirection = direction;
                        document.getElementById("PlaceImage1").style.animationTimingFunction = "linear"
                        document.getElementById("PlaceImage1").addEventListener("animationend", function()
                        {
                                document.getElementById("RightButton").disabled = false;
                                document.getElementById("LeftButton").disabled = false;
                                SliderImage1.style.transform = " translateX(0%)"
                                SliderImage2.style.transform = " translateX(0%)"
                                SliderImage3.style.transform = " translateX(0%)"     
                        })
                        ClickCount =0;  
                }
        
       
}

setInterval(ClickTest,0);
function leftClickSlide()
{      
        clearInterval(time);
        time = setInterval(AutoSlide,8000)
        direction = "reverse";
        ClickCount ++;
        document.getElementById("RightButton").disabled = true;
        document.getElementById("LeftButton").disabled = true;

}
function rightClickSlide()  
{
        clearInterval(time);
        time = setInterval(AutoSlide,8000)
        direction = "normal";
        ClickCount--;
        document.getElementById("RightButton").disabled = true;
        document.getElementById("LeftButton").disabled = true;
       


}

var lastScrollTop = 0;
window.addEventListener("scroll", function()
{
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop)
   {
    //downscroll code
    MenuFixedAnimationHidden();
    BottomMenuFixedAnimationShow();
   } 
   else 
   {
           //upscroll code
           MenuFixedAnimationShow();
           BottomMenuFixedAnimationHidden();
   }
   if(st == 0)
   {
           //upscroll in top page
           backgroundNone();
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);




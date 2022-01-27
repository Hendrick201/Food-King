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
        document.getElementById("MenuContainer").style.animation = "MenuAnimShow 1s"
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
        document.getElementById("FooterFixed").style.animation = "BottomMenuAnimShow 1s"
        document.getElementById("FooterFixed").style.bottom = "0%" 
}
function backgroundNone()
{
        document.getElementById("MenuContainer").style.backgroundColor = ""     
}
var clickCount = 0;
var canClick = true;
var canResetClick = false;
function leftClickSlide()
{
 clickCount ++;
}
function rightClickSlide()
{
 clickCount -= 2;
}
function AlSlide()
{
        clickCount ++;
}
function clickReset()
{
        canClick = true;
        canResetClick = false;
}
function ButtonOn()
{
        document.getElementById("RightButton").disabled = false;
        document.getElementById("LeftButton").disabled = false;
}
setInterval(SlideImagesController, 0);
// setInterval(AlSlide, 3000); ///passa o slide sozinho 
function SlideImagesController()
{
                if(clickCount ==1)
                {
                        document.getElementById("Slider").style.animation = "SlideImagesShow 3s"
                        document.getElementById("Slider").style.left =  "-100%" 
                        document.getElementById("RightButton").disabled = true;
                        document.getElementById("LeftButton").disabled = true;
                        setInterval(ButtonOn,2999);
                }
                if(clickCount == -1)
                {
                        document.getElementById("Slider").style.animation = "SlideImagesHidden 3s"
                        document.getElementById("Slider").style.left =  "0%" 
                        document.getElementById("RightButton").disabled = true;
                        document.getElementById("LeftButton").disabled = true;
                        setInterval(ButtonOn,2999);
                }              
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




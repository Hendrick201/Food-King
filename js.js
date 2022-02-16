function showSocialMedias()
{
        document.getElementById("SocialMediasList").style.top = "60%";
        document.getElementById("MediaLabel").style.color = "#f3f307";
        document.getElementById("SocialMediasList").style.animation = "MediasAnimation 1s";
        document.getElementById("SocialMediasList").style.opacity = "100%";
        document.getElementById("MediasBorder").style.animation = "BorderAnimation 1s";
        document.getElementById("MediasBorder").addEventListener("animationend", function()
        {
                document.getElementById("MediasBorder").style.width = "100%"; 
        })
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
        var w = window.innerWidth;
        if(w >= 745)
        {
                document.getElementById("MenuContainer").style.animation = "MenuAnimHidden 0.8s"
                document.getElementById("MenuContainer").style.top = "-120px" 
                document.getElementById("MenuContainer").style.backgroundColor = "#000000fa"
        }
}

function MenuFixedAnimationShow()
{
        document.getElementById("MenuContainer").style.animation = "MenuAnimShow 0.8s"
        document.getElementById("MenuContainer").style.top = "0%"   
        document.getElementById("MenuContainer").style.backgroundColor = "#000000fa;"
        document.getElementById("MenuContainer").style.height = "110px";
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
       // document.getElementById("RightButton").disabled = true;
     //   document.getElementById("LeftButton").disabled = true;
        ClickCount ++;
}
function ClickTest()
{
        var w = window.innerWidth;
      if(ClickCount ==-1)
      {
              ClickCount = 3;
      }
      if(ClickCount ==0)
      {
      //  document.getElementById("RightButton").disabled = false;
      //  document.getElementById("LeftButton").disabled = false; 
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
                             //   document.getElementById("RightButton").disabled = false;
                               // document.getElementById("LeftButton").disabled = false; 
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
                                     //   document.getElementById("RightButton").disabled = false;
                                      //  document.getElementById("LeftButton").disabled = false;
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
                              //  document.getElementById("RightButton").disabled = false;
                               // document.getElementById("LeftButton").disabled = false;
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
        ClickCount ++;
      //  document.getElementById("RightButton").disabled = true;
       // document.getElementById("LeftButton").disabled = true;

}
function rightClickSlide()  
{
        clearInterval(time);
        time = setInterval(AutoSlide,8000)


}
setInterval(MenuFix,0)
function MenuFix()
{
        var w = window.innerWidth;
        var LeftMenu = document.getElementById("MenuListLeft");
        var RightMenu = document.getElementById("MenuListRight");
        if(w <= 725)
        {
                LeftMenu.style.opacity = "0%";
                RightMenu.style.opacity = "0%";
        }
}
var lastScrollTop = 0;
window.addEventListener("scroll", function()
{
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop)
   {
    //downscroll code
    var firstSectionDistance =  document.getElementById("firstMenuSection").getBoundingClientRect().top;
    var secondSectionDistance = document.getElementById("SecondSection").getBoundingClientRect().top;
    if(firstSectionDistance < 540)
    {
            this.document.getElementById("BurgersAlign").style.animation = "SectionsAnimation1 2s";
            this.document.getElementById("buyDiv").style.animation = "SectionsAnimation1 2s";
            this.document.getElementById("menuSectionTittle").style.animation = "SectionsAnimation2 2s";
            document.getElementById("BurgersAlign").addEventListener("animationend", function()
            {
                    document.getElementById("BurgersAlign").style.opacity = "100%"; 
                    document.getElementById("menuSectionTittle").style.opacity = "100%"; 
            })
    }
    if(secondSectionDistance < 512)
    {
        this.document.getElementById("SecondSectionTittle").style.animation = "SectionsAnimation3 1.5s"; 
        document.getElementById("SecondSectionTittle").addEventListener("animationend", function()
        {
                document.getElementById("SecondSectionTittle").style.opacity = "100%"; 
           
        })
        document.querySelectorAll(".MenuSectionTextContainer")[0].style.animation = "SectionsAnimation1 0.8s 1s";
        document.querySelectorAll(".MenuSectionTextContainer")[0].addEventListener("animationend", function()
        {
                document.querySelectorAll(".MenuSectionTextContainer")[0].style.opacity = "100%";
                document.querySelectorAll(".MenuSectionTextContainer")[1].style.animation = "SectionsAnimation1 0.8s"; 
                document.querySelectorAll(".MenuSectionTextContainer")[1].addEventListener("animationend", function()
                {
                        document.querySelectorAll(".MenuSectionTextContainer")[1].style.opacity = "100%";
                        document.querySelectorAll(".MenuSectionTextContainer")[2].style.animation = "SectionsAnimation1 0.8s"; 
                        document.querySelectorAll(".MenuSectionTextContainer")[2].addEventListener("animationend", function()
                        {
                                document.querySelectorAll(".MenuSectionTextContainer")[2].style.opacity = "100%";
                                document.querySelectorAll(".MenuSectionTextContainer")[3].style.animation = "SectionsAnimation1 0.8s"; 
                                document.querySelectorAll(".MenuSectionTextContainer")[3].addEventListener("animationend", function()
                                {
                                        document.querySelectorAll(".MenuSectionTextContainer")[3].style.opacity = "100%";
                                        document.querySelectorAll(".MenuSectionTextContainer")[4].style.animation = "SectionsAnimation1 0.8s"; 
                                        document.querySelectorAll(".MenuSectionTextContainer")[4].addEventListener("animationend", function()
                                        {
                                                document.querySelectorAll(".MenuSectionTextContainer")[4].style.opacity = "100%";     
                                        })
                                   
                                })
                           
                        })
                       
                   
                })
        })
        document.querySelectorAll(".MenuSectionTextContainer")[5].style.animation = "SectionsAnimation0 0.8s 1s";
        document.querySelectorAll(".MenuSectionTextContainer")[5].addEventListener("animationend", function()
        {
                document.querySelectorAll(".MenuSectionTextContainer")[5].style.opacity = "100%";
                document.querySelectorAll(".MenuSectionTextContainer")[6].style.animation = "SectionsAnimation0 0.8s"; 
                document.querySelectorAll(".MenuSectionTextContainer")[6].addEventListener("animationend", function()
                {
                        document.querySelectorAll(".MenuSectionTextContainer")[6].style.opacity = "100%";
                        document.querySelectorAll(".MenuSectionTextContainer")[7].style.animation = "SectionsAnimation0 0.8s"; 
                        document.querySelectorAll(".MenuSectionTextContainer")[7].addEventListener("animationend", function()
                        {
                                document.querySelectorAll(".MenuSectionTextContainer")[7].style.opacity = "100%";
                                document.querySelectorAll(".MenuSectionTextContainer")[8].style.animation = "SectionsAnimation0 0.8s"; 
                                document.querySelectorAll(".MenuSectionTextContainer")[8].addEventListener("animationend", function()
                                {
                                        document.querySelectorAll(".MenuSectionTextContainer")[8].style.opacity = "100%";
                                        document.querySelectorAll(".MenuSectionTextContainer")[9].style.animation = "SectionsAnimation0 0.8s"; 
                                        document.querySelectorAll(".MenuSectionTextContainer")[9].addEventListener("animationend", function()
                                        {
                                                document.querySelectorAll(".MenuSectionTextContainer")[9].style.opacity = "100%";  
                                        })
                                        document.querySelectorAll(".MenuSectionTextContainer")[10].style.animation = "SectionsAnimation0 0.8s"; 
                                        document.querySelectorAll(".MenuSectionTextContainer")[10].addEventListener("animationend", function()
                                        {
                                                document.querySelectorAll(".MenuSectionTextContainer")[10].style.opacity = "100%";     
                                        })
                                   
                                })
                           
                        })
                       
                   
                })
                document.getElementById("SecondSectionBuyLink").style.animation = "SectionsAnimation3 0.8s 2s"; 
                document.getElementById("SecondSectionBuyLink").addEventListener("animationend", function()
                {
                        document.getElementById("SecondSectionBuyLink").style.opacity = "100%"; 
                })

        })
    }
    var w = window.innerWidth;
    if(w >= 726)
    {
            
        MenuFixedAnimationHidden();
    }
    BottomMenuFixedAnimationShow();

    var LeftMenu = document.getElementById("MenuListLeft");
    var RightMenu = document.getElementById("MenuListRight");
    if(w <= 725)
    {

            LeftMenu.style.opacity = "0%";
            RightMenu.style.opacity = "0%";
            
            if(MenuOn == false)
            {
                document.getElementById("MenuContainer").style.height = "60px";
            }
           
           
    }
   } 
   else 
   {
           //upscroll code
         
                var LeftMenu = document.getElementById("MenuListLeft");
                var RightMenu = document.getElementById("MenuListRight");
                var w = window.innerWidth;
                if(w >= 726)
                {
                        document.getElementsByClassName("MenuLinkList")[0].style.display ="inline-block";
                        document.getElementsByClassName("MenuLinkList")[1].style.display ="inline-block";
                        document.getElementsByClassName("MenuLinkList")[2].style.display ="inline-block";
                        document.getElementsByClassName("MenuLinkList")[3].style.display ="inline-block";
                        LeftMenu.style.opacity = "100%";
                        RightMenu.style.opacity = "100%";
                        MenuFixedAnimationShow();
                        document.getElementById("CellPhoneMenuList").style.opacity = "0%"
                        document.getElementById("CellPhoneMenuList").style.zIndex = "0"
                        document.getElementById("MenuContainer2").style.zIndex = "0"
                }
                BottomMenuFixedAnimationHidden();
        

   }
   if(st == 0)
   {
           //upscroll in top page
           backgroundNone();
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
var MenuOn = false;
function MenuCellPhoneShow()
{
        if(MenuOn ==false)
        {
                document.getElementById("MenuContainer2").style.zIndex = "0"
                var CellPhoneMenu = document.getElementById("CellPhoneMenuList");
                document.getElementsByClassName("LineMenuButton")[0].style.backgroundColor = "#f3f307"
                document.getElementsByClassName("LineMenuButton")[1].style.backgroundColor = "#f3f307"
                document.getElementsByClassName("LineMenuButton")[2].style.backgroundColor = "#f3f307"
                CellPhoneMenu.style.animation = "MenuCellPhoneAnimationShow 1s"
                CellPhoneMenu.style.opacity = "100%";
                CellPhoneMenu.style.zIndex = "4";
                document.getElementById("MenuContainer").style.animation = " MenuIncrease 0.7s"
                document.getElementById("MenuContainer").style.height = "100%"
                CellPhoneMenu.addEventListener("animationend", function()
                {
                       MenuOn = true;
                })
        }
        if(MenuOn ==true)
        {
                var CellPhoneMenu = document.getElementById("CellPhoneMenuList");
                document.getElementsByClassName("LineMenuButton")[0].style.backgroundColor = "#cfcf00"
                document.getElementsByClassName("LineMenuButton")[1].style.backgroundColor = "#cfcf00"
                document.getElementsByClassName("LineMenuButton")[2].style.backgroundColor = "#cfcf00"
                CellPhoneMenu.style.animation = "MenuCellPhoneAnimationHidden 0.7s"
                CellPhoneMenu.style.opacity = "0%";
                document.getElementById("MenuContainer").style.animation = " MenuDecrease 0.7s"
                document.getElementById("MenuContainer").style.height = "60px"
                CellPhoneMenu.addEventListener("animationend", function()
                {
                       MenuOn = false;
                        document.getElementById("MenuContainer2").style.zIndex = "5"
                })
        }

}


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




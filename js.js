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



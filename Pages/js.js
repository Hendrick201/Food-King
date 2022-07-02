var chamadoAllNumber = document.querySelectorAll("#suporte_xchamado");
var login = document.querySelectorAll("#suporte_xlogin");
var Assunto = document.querySelectorAll("#suporte_xassunto");
var Cidade = document.querySelectorAll("#suporte_xramal");
var allName = document.querySelectorAll("#suporte_xnome");
var fatherElement = document.body;
var containerDiv = document.createElement("div");
containerDiv.style.width = "80%";
containerDiv.style.height = "80%";
containerDiv.style.zIndex = "99999";
containerDiv.style.overflowY = "scroll";
containerDiv.style.position = "fixed";
containerDiv.style.left = "50%"
containerDiv.style.top = "50%"
containerDiv.style.transform = "translate(-50%,-50%)";
var tagElement = document.createElement("div");
tagElement.style.position = "relative";
tagElement.style.width = "100%"
tagElement.style.left = "50%"
tagElement.style.boxSizing = "border-box";
tagElement.style.transform = "translate(-50%,0%)";
tagElement.style.backgroundColor = "white";
tagElement.style.borderRadius = "5px"
tagElement.style.zIndex = "5";
var tableElement = document.createElement("table");
tagElement.style.padding = "10px";
var total = allName.length;
var totalTr = document.createElement("tr");
totalTr.textContent = "Total de clientes: "+total;
tableElement.appendChild(totalTr);
tableElement.style.borderSpacing = "10px";
tableElement.style.border = "1px solid black";
tableElement.style.borderCollapse = "collapse";
for(var i = 0; i < allName.length; i++)
{
    var thisChamadoNumber = chamadoAllNumber[i].textContent;
    var thisLogin = login[i].textContent;
    var tdElement = document.createElement("td");
    tdElement.id = "id1"
    tdElement.textContent = allName[i].textContent;
    var tdElement2 = document.createElement("td");
    var tdElement3 = document.createElement("td");
    var tdElement4 = document.createElement("td");
    tdElement4.textContent = Cidade[i].textContent;
    tdElement3.id = "tdBairro";
    tdElement2.textContent = Assunto[i].textContent;
    var trElement = document.createElement("tr");
    tdElement.style.border = "1px solid black";
    tdElement.style.borderCollapse = "collapse";
    tdElement2.style.border = "1px solid black";
    tdElement2.style.borderCollapse = "collapse";
    tdElement3.style.border = "1px solid black";
    tdElement3.style.borderCollapse = "collapse";
    tdElement4.style.border = "1px solid black";
    tdElement4.style.borderCollapse = "collapse";
    trElement.appendChild(tdElement);
    trElement.appendChild(tdElement2);
    trElement.appendChild(tdElement3);
    trElement.appendChild(tdElement4);
    tableElement.appendChild(trElement);
    var link = 'http://172.32.255.2/admin/suporte_info.php?login=' + thisLogin +'&chamado=' + thisChamadoNumber + "";
    tdID = i;
    getBairro(link, tdID);
}
tagElement.appendChild(tableElement);
containerDiv.appendChild(tagElement);
fatherElement.appendChild(containerDiv);
function getBairro(link, tdID)
{
    var http = new XMLHttpRequest();
    console.log(link);
    http.open("GET", link, true);
    http.onreadystatechange = function(){
       if(http.readyState == 4){
          var html = http.responseText;
          html = new DOMParser().parseFromString(html, "text/html");
          document.querySelectorAll('#tdBairro')[tdID].innerHTML = html.getElementsByTagName('td')[13].innerHTML.trim();
        }
    }
    http.send(null);
}

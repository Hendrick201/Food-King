
for(var i = 0; i <= 35; i++)
{
    var Name = document.querySelectorAll("#suporte_xnome")[i].textContent;
    console.log(Name);
}
for(var i2 = 0; i2 <= 35; i2++)
{
    var Assunto = document.querySelectorAll("#suporte_xassunto")[i2].textContent + i2;
    console.log(Assunto);
}




var chamadoAllNumber = document.querySelectorAll("#suporte_xchamado");
var login = document.querySelectorAll("#suporte_xlogin");
var Assunto = document.querySelectorAll("#suporte_xassunto");
var allName = document.querySelectorAll("#suporte_xnome");
var fatherElement = document.body;
var tagElement = document.createElement("div");
tagElement.style.position = "fixed";
tagElement.style.left = "50%"
tagElement.style.top = "50%"
tagElement.style.transform = "translate(-50%,-50%)";
tagElement.style.backgroundColor = "white";
tagElement.style.borderRadius = "5px"
tagElement.style.zIndex = "5";
var tableElement = document.createElement("table");
tagElement.style.padding = "10px";
tagElement.style.width = "80%";
var total = allName.length;
var totalTr = document.createElement("tr");
totalTr.textContent = "Total de clientes: "+total;
tableElement.appendChild(totalTr);

for(var i = 0; i < allName.length; i++)
{
    var thisChamadoNumber = chamadoAllNumber[i].textContent;
    var thisLogin = login[i].textContent;
    var tdElement = document.createElement("td");
    tdElement.id = "id1"
    tdElement.textContent = allName[i].textContent;
    var tdElement2 = document.createElement("td");
    tdElement2.textContent = Assunto[i].textContent;
    var trElement = document.createElement("tr");
    trElement.appendChild(tdElement);
    trElement.appendChild(tdElement2);
    var http = new XMLHttpRequest();
var url_ = 'http://172.32.255.2/admin/suporte_info.php?login=' + thisLogin + '&chamado=' + thisChamadoNumber;
console.log(url_);
http.open("GET", url_, true);
http.onreadystatechange = function(){
   if(http.readyState == 4){
      var html = http.responseText;
      // converte o retorno em elementos HTML
      html = new DOMParser().parseFromString(html, "text/html");
      document.querySelectorAll('#id1')[0].innerHTML = html.getElementsByTagName('td')[13].innerHTML.trim();
   }
}
http.send(null);
    tableElement.appendChild(trElement);
}
tagElement.appendChild(tableElement);
fatherElement.appendChild(tagElement);

var http = new XMLHttpRequest();
var url_ = "http://172.32.255.2/admin/suporte_info.php?login=adrianapl&chamado=30062211540049"; // página de onde virá a div
http.open("GET", url_, true);
http.onreadystatechange = function(){
   if(http.readyState == 4){
      var html = http.responseText;
      // converte o retorno em elementos HTML
      html = new DOMParser().parseFromString(html, "text/html");
      document.querySelectorAll('#id1')[0].innerHTML = html.getElementsByTagName('td')[13].innerHTML.trim();
   }
}
http.send(null);
///td do bairro = 13;
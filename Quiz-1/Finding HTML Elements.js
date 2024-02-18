 // defined the variable
 var element = document.getElementById("myDiv");
 // changed the innerHTML content by accessing it with variablename.HTML
 element.innerHTML = "Changing the line from here inside the script!";
 
 // get from tag name
 var Listitem = document.getElementsByTagName("li");
 for(var i = 0; i<Listitem.length; i++)
 {
     console.log(Listitem[i].innerHTML);
 }

 // get from class name
 var Hitem = document.getElementsByClassName("highlight");
 for(var i = 0; i < Hitem.length; i++)
 {
     console.log(Hitem.innerHTML);
 }

 // get through queryselectorall
 var introParas = document.querySelectorAll("p.intro");
 Array.from(introParas).forEach(function(introPara){
     console.log(introPara.innerHTML);
 })

 function displayFormValues()
 {
     const form = document.forms['frm1'];

     let text = "";

     for(let i = 0; i < form.length; i++)
     {
         text+=form.element[i].value + "<br>";
     }

     document.getElementById("demo").innerHTML = text;
 }


 document.getElementById("Picture").src = "pngwing.com (5).png";
 document.write(Date());
$(document).ready(function()
{
     var d=$("<div/>").appendTo("body");
     d.attr("id","div");
     var i=$("<img/>").appendTo("#div");
     i.attr("src","photos/sonic.jpg");
     i.attr("id","imagesonic");
     var h1=$("<h1/>").appendTo("#div");
     h1.text("START GAME");
     h1.attr("id","startgame");
     var h1=$("<h1/>").appendTo("#div");
     h1.text("OPTIONS");
     h1.attr("id","options");
     var h1=$("<h1/>").appendTo("#div");
     h1.text("PASSWORD");
     h1.attr("id","password");
     var h1=$("<h1/>").appendTo("#div");
     h1.text("CHEATS");
     h1.attr("id","cheats");
     var i=$("<img/>").appendTo("body");
     i.attr("src","photos/volume+.png");
     i.attr("id","img1");
     $("#img1").css({
          'position':'absolute',
          'width':'50px',
          'heigth':'50px',
          'left':'920px',
          'top':'10px'
     });
     var counter=1;
     var clickSound = $("<audio/>").attr("src", "sound/m.mp3").appendTo("body");
     clickSound[0].loop=true;
     clickSound[0].play();
     $("#img1").click(function()
     {
          counter++;
          if(counter%2 == 0){
             clickSound[0].pause();  
             $(this).attr("src", "photos/volume-.png");
          }
          else{
               clickSound[0].play();
               $(this).attr("src", "photos/volume+.png")
          }
     });
     var timeout=$("#startgame");
     timeout.click(changeView);
})
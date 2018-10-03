function changeView()
{
	$("#div").empty();

    var d=$("<div/>").appendTo("#div").attr("id","divstart").css({
    	'width':'5000px',
    	'height':'650px',
    	'border':'2px solid',
        'position':'absolute',
        'top':'0',
        'left':'0'
    });
    /*_______miavorner_ev_ayln_____________*/
    var d2=$("<div/>").appendTo("#div").attr("id","moneydiv").css({
    	'width':'100px',
    	'height':'50px',
    	'border':'2px solid red',
    	'border-radius':'15px',
    	'position':'relative',
    	'top':'40px',
        'left':'10px',
    	'background':'black',
		'display':'inline-block'
    });
    var img1=$("<img/>").appendTo("#moneydiv").attr("id","imgmoney").attr("src","photos/money.gif").css({
    	'width':'30',
    	'height':'40',
    	'position':'absolute',
    	'left':'5px',
    	'margin':'5px'
    });
    var h11=$("<p/>").appendTo("#moneydiv").attr("id","textmoney").text("000").css({
    	'position':'absolute',
    	'left':'35px',
    	'color':'white',
    	'font-size':'35px',
    	'margin':'5px'
    });
    var d3=$("<div/>").appendTo("#div").attr("id","lifediv").css({
    	'width':'100px',
    	'height':'50px',
    	'border':'2px solid red',
    	'border-radius':'15px',
    	'position':'relative',
        'left':'50px',
    	'top':'40px',
    	'background':'black',
        'display':'inline-block'
    });
    var img2=$("<img/>").appendTo("#lifediv").attr("id","imglife").attr("src","photos/soniclife.png").css({
    	'width':'30',
    	'height':'40',
    	'position':'absolute',
    	'left':'5px',
    	'margin':'5px'
    });
    var h12=$("<p/>").appendTo("#lifediv").attr("id","textlife").text("3").css({
    	'position':'absolute',
    	'left':'50px',
    	'color':'white',
    	'font-size':'35px',
    	'margin':'5px'
    });
    var d4=$("<div/>").appendTo("#div").attr("id","timediv").css({
        'width':'200px',
        'height':'50px',
        'border':'2px solid red',
        'border-radius':'15px',
        'position':'absolute',
        'top':'40px',
        'left':'300px',
        'background':'black',
        'display':'inline-block'
    });
    var p3=$("<h1/>,<time/>").appendTo("#timediv").attr("id","texttime").css({
        'position':'absolute',
        'left':'30px',
        'color':'white',
        'font-size':'35px',
        'margin':'5px'
    });

    var h1 = document.getElementsByTagName('h1')[0],
     seconds = 0, minutes = 0, hours = 0,
     t;
     function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
     h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();
    /*________________divs_game_________*/
    var dg1=$("<div/>").appendTo("#divstart").attr("id","divgame1").css({
        'position':'absolute',
        'top':'488px',
        'width':'435px',
        'height':'70px'
    });
    var dg2=$("<div/>").appendTo("#divstart").attr("id","divgame2").css({
        'position':'absolute',
        'top':'488px',
        'left':'532px',
        'width':'95px',
        'height':'70px'
    });
    var dg3=$("<div/>").appendTo("#divstart").attr("id","divgame3").css({
        'position':'absolute',
        'top':'488px',
        'left':'722px',
        'width':'95px',
        'height':'70px'
    });
    var dg4=$("<div/>").appendTo("#divstart").attr("id","divgame4").css({
        'position':'absolute',
        'top':'498px',
        'left':'898px',
        'width':'238px',
        'height':'70px'
    });
    var dg5=$("<div/>").appendTo("#divstart").attr("id","divgame5").css({
        'position':'absolute',
        'top':'513px',
        'left':'1330px',
        'width':'234px',
        'height':'70px'
    });
    var dg6=$("<div/>").appendTo("#divstart").attr("id","divgame6").css({
        'position':'absolute',
        'top':'508px',
        'left':'1767px',
        'width':'227px',
        'height':'70px'
    });
    var dg7=$("<div/>").appendTo("#divstart").attr("id","divgame7").css({
        'position':'absolute',
        'top':'518px',
        'left':'2251px',
        'width':'200px',
        'height':'70px'
    });
    var dg8=$("<div/>").appendTo("#divstart").attr("id","divgame8").css({
        'position':'absolute',
        'top':'528px',
        'left':'2692px',
        'width':'190px',
        'height':'70px'
    });
    var dg9=$("<div/>").appendTo("#divstart").attr("id","divgame9").css({
        'position':'absolute',
        'top':'528px',
        'left':'2980px',
        'width':'100px',
        'height':'70px'
    });
    var dg10=$("<div/>").appendTo("#divstart").attr("id","divgame10").css({
        'position':'absolute',
        'top':'528px',
        'left':'3367px',
        'width':'195px',
        'height':'70px'
    });
    var dg11=$("<div/>").appendTo("#divstart").attr("id","divgame11").css({
        'position':'absolute',
        'top':'488px',
        'left':'3702px',
        'width':'50px',
        'height':'70px'
    });
    var dg12=$("<div/>").appendTo("#divstart").attr("id","divgame12").css({
        'position':'absolute',
        'top':'528px',
        'left':'3797px',
        'width':'50px',
        'height':'70px'
    });
    var dg13=$("<div/>").appendTo("#divstart").attr("id","divgame13").css({
        'position':'absolute',
        'top':'488px',
        'left':'3847px',
        'width':'50px',
        'height':'70px'
    });
    var dg14=$("<div/>").appendTo("#divstart").attr("id","divgame14").css({
        'position':'absolute',
        'top':'438px',
        'left':'3989px',
        'width':'50px',
        'height':'70px'
    });
    var dg15=$("<div/>").appendTo("#divstart").attr("id","divgame15").css({
        'position':'absolute',
        'top':'488px',
        'left':'4087px',
        'width':'50px',
        'height':'70px'
    });
    var dg16=$("<div/>").appendTo("#divstart").attr("id","divgame16").css({
        'position':'absolute',
        'top':'528px',
        'left':'4182px',
        'width':'145px',
        'height':'70px'
    });
    var dg17=$("<div/>").appendTo("#divstart").attr("id","divgame17").css({
        'position':'absolute',
        'top':'528px',
        'left':'4425px',
        'width':'575px',
        'height':'70px'
    });
    /*_________________divs_coins_______________*/
    var dc1=$("<div/>").appendTo("#divstart").attr("id","divcoins1").css({
        'position':'absolute',
        'top':'450px',
        'left':'1000px',
        'width':'50px',
        'height':'50px'
    });
    var ic1=$("<img/>").appendTo("#divcoins1").attr({
        'id':'imgcoins1',
        'src':'photos/money.gif'
    }).css({
        'width':'50px',
        'height':'50px'
    })
    var dc2=$("<div/>").appendTo("#divstart").attr("id","divcoins2").css({
        'position':'absolute',
        'top':'450px',
        'left':'1870px',
        'width':'50px',
        'height':'50px'
    });
    var ic2=$("<img/>").appendTo("#divcoins2").attr({
        'id':'imgcoins2',
        'src':'photos/money.gif'
    }).css({
        'width':'50px',
        'height':'50px'
    })
    var dc31=$("<div/>").appendTo("#divstart").attr("id","divcoins31").css({
        'position':'absolute',
        'top':'450px',
        'left':'3000px',
        'width':'50px',
        'height':'50px'
    });
    var ic31=$("<img/>").appendTo("#divcoins31").attr({
        'id':'imgcoins31',
        'src':'photos/money.gif'
    }).css({
        'width':'50px',
        'height':'50px'
    })
    var dc32=$("<div/>").appendTo("#divstart").attr("id","divcoins32").css({
        'position':'absolute',
        'top':'380px',
        'left':'3000px',
        'width':'50px',
        'height':'50px'
    });
    var ic32=$("<img/>").appendTo("#divcoins32").attr({
        'id':'imgcoins32',
        'src':'photos/money.gif'
    }).css({
        'width':'50px',
        'height':'50px'
    })
    var dc4=$("<div/>").appendTo("#divstart").attr("id","divcoins4").css({
        'position':'absolute',
        'top':'380px',
        'left':'4005px',
        'width':'50px',
        'height':'50px'
    });
    var ic4=$("<img/>").appendTo("#divcoins4").attr({
        'id':'imgcoins4',
        'src':'photos/money.gif'
    }).css({
        'width':'50px',
        'height':'50px'
    })
    var dc5=$("<div/>").appendTo("#divstart").attr("id","divcoins5").css({
        'position':'absolute',
        'top':'450px',
        'left':'4500px',
        'width':'50px',
        'height':'50px'
    });
    var ic5=$("<img/>").appendTo("#divcoins5").attr({
        'id':'imgcoins5',
        'src':'photos/money.gif'
    }).css({
        'width':'50px',
        'height':'50px'
    })
    /*___________flag___________*/
    var df=$("<div/>").appendTo("#divstart").attr("id","divflag").css({
        'position':'absolute',
        'top':'400px',
        'left':'4760px',
        'width':'200px',
        'height':'140px'
    });
    var ifl=$("<img/>").appendTo("#divflag").attr({
        'id':'imgflag',
        'src':'photos/flag.png'
    }).css({
        'width':'200px',
        'height':'140px'
    });
    /*sonic_player*/
    
    var p1 = new Sonic();
    $("html").keyup(p1.stop).keydown(p1.charMovement);
    var interval = setInterval(function(){
        p1.move();
        p1.checkCollision();
        p1.jump();
        p1.checkCollisionCoins();
}
        , 20);
}
 
function Sonic()
{
    this.lives=3;
    this.points=0;
    this.left = 70;
    this.top = 420
    this.name="Sonic";
    this.dp1=$("<div/>").attr("id","divplayer1").appendTo("#div").css({
    'position':'absolute',
    'top':this.top + 'px',
    'left': this.left + 'px',
    'width':'55px',
    'height':'70px',
    'background-image':'url(photos/sonic_1.png)',
    'background-repeat':'no-repeat',
    'background-size':'55px 80px'});

    this.directions={};


    this.speedX=4;
    this.speedY=0;
    this.jumpState=true;
    this.gravity=0.2;
    this.walls = [$("#divgame1"),$("#divgame2"),$("#divgame3"),$("#divgame4"),$("#divgame5"),$("#divgame6"),$("#divgame7"),$("#divgame8"),$("#divgame9"),$("#divgame10"),$("#divgame11"),$("#divgame12"),$("#divgame13"),$("#divgame14"),$("#divgame15"),$("#divgame16"),$("#divgame17")];
    this.coins = [$("#divcoins1"),$("#divcoins2"),$("#divcoins3"),$("#divcoins4"),$("#divcoins5")];

    this.STATIC_HOR_CENTER;
    this.STATIC_VER_CENTER;

    this.WIDTH_DIFFERENCE;
    this.HEIGHT_DIFFERENCE;

    this.DYNAMIC_HOR_CENTER;
    this.DYNAMIC_VER_CENTER;

    var that = this;

    that.charMovement = function (e) {
        that.directions[e.which] = true;
        // console.log(directions);
    }

    that.stop = function  (e) {
        delete that.directions[e.which];
    }

   
    this.checkCollision=function()
    {
        for(var i in that.walls)
        {
            // console.log(that.walls[i]);
            that.STATIC_HOR_CENTER = that.walls[i].position().left+$("#divstart").position().left + that.walls[i].width()/2;
            that.STATIC_VER_CENTER = that.walls[i].position().top;

            that.WIDTH_DIFFERENCE = that.dp1.width()/2 + that.walls[i].width()/2;

            that.DYNAMIC_HOR_CENTER = that.dp1.position().left + that.dp1.width()/2;
            that.DYNAMIC_VER_CENTER = that.dp1.position().top + that.dp1.height();

            if (Math.abs(that.DYNAMIC_HOR_CENTER - that.STATIC_HOR_CENTER) <= that.WIDTH_DIFFERENCE &&
                Math.abs(that.DYNAMIC_VER_CENTER - that.STATIC_VER_CENTER) <= 4)
            {
                $("#status").text("TRUE");
                this.jumpState = false;
                this.dp1.css("top", this.walls[i].position().top - this.dp1.height());
                this.speedY = 8;
                break;
            }
            else
            {
                $("#status").text("FALSE");
                if (this.jumpState == false) 
                {
                    this.speedY = 0;
                    this.jumpState = true;
                }
            }
        }
    }

    this.checkCollisionCoins = function()
    { 
        for (var i in that.coins)
        {   
            //console.log(that.coins[i]);
            that.STATIC_HOR_CENTER = that.coins[i].position().left + that.coins[i].width() / 2;
            that.STATIC_VER_CENTER = that.coins[i].position().top;

            that.WIDTH_DIFFERENCE = that.dp1.width() / 2 + that.coins[i].width() / 2;
            that.HEIGHT_DIFFERENCE = that.dp1.height() / 2 + that.coins[i].height() / 2;

            that.DYNAMIC_HOR_CENTER = that.dp1.position().left + that.dp1.width() / 2;
            that.DYNAMIC_VER_CENTER = that.dp1.position().top + that.dp1.height();

            if (Math.abs(that.DYNAMIC_HOR_CENTER - that.STATIC_HOR_CENTER) <= that.WIDTH_DIFFERENCE &&
            Math.abs(that.DYNAMIC_VER_CENTER - that.STATIC_VER_CENTER) <= that.HEIGHT_DIFFERENCE)
            {
                that.coins[i].remove();  
            }
        }
    }

    this.move=function()
    {
        for(var i in this.directions){
            if (this.dp1.position().left >0 && i == 37)
                if(this.dp1.position().left<300 && $("#divstart").position().left<=0)
                {
                    $("#divstart").css("left",($("#divstart").position().left+this.speedX)+"px")   
                }
                else
                {
                    this.dp1.css("left", (this.dp1.position().left - this.speedX) + "px");
                }
            if (this.dp1.position().left < ($("#divstart").width() - this.dp1.width()) && i == 39) {
                if(this.dp1.position().left>500 && $("#divstart").position().left>-4012)
                {
                    $("#divstart").css("left",($("#divstart").position().left-this.speedX)+"px")
                }
                else if(this.dp1.position().left >= 782 && $("#divstart").position().left <= -4012)
                {
                    $("#divflag").empty();
                    this.speedX=0;
                    this.speedY=0;
                    this.gravity=4;
                    this.dw=$("<div/>").attr("id","divwon").appendTo("#div").css({
                    'position':'absolute',
                    'top': '250px',
                    'left': '350px',
                    'width':'300px',
                    'height':'200px',
                    'background':'black',
                    'border-radius':'10px'
                    });
                    this.tw=$("<h1/>").attr("id","textwon").appendTo("#divwon").css({
                        'position':'absolute',
                        'top':'40px',
                        'left':'50px',
                        'color':'red'
                    }).text("Oh yesss!!!  You won!!!!");
                }
                else
                {
                this.dp1.css("left", (this.dp1.position().left + this.speedX) + "px");
                }
            }
            if (this.dp1.position().top >0 && i == 38 && this.jumpState == false)
            {
                this.jumpState = true;
                this.dp1.css("top",this.dp1.position().top-6);
            }
        }
    }

    this.jump=function()
    {
        if (this.jumpState) 
        {
            if (this.speedY > -9) 
            {
                this.speedY -= this.gravity;
            }
            this.dp1.css("top", this.dp1.position().top - this.speedY);
        }
    }
};
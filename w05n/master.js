var Body ={
    setBackGroundColor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    },
    setColor : function(color){
        document.querySelector('body').style.color=color;
    }
}
var Links = {
    setColor : function(color){
        var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    } 
}
}


function linkssetColor(color){
    
}


function nightDayHandler(self){
    var target = document.querySelector('body');
      if(self.value == 'night'){
        Body.setBackGroundColor("black");
        Body.setColor("white");
        Links.setColor("powderblue");

        self.value = 'day'
        
      } else {
        Body.setBackGroundColor("white");
        Body.setColor("black");
        Links.setColor("blue");
        self.value = 'night'
      }  
    }
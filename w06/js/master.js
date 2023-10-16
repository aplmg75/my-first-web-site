var Body ={
    setBackGroundColor : function(color){
        //$('body').css("color",color)
      document.querySelector('body').style.backgroundColor = color;
      
    },
    setColor : function(color){
       // $('body').css("color",color)
      document.querySelector('body').style.color=color;
    },
    IssueColor : function(color){
      $('#issue').css('color',color)
    },
    BonColor : function(color){
      $('Bon').css('color',color)
    }
}

var Links = {
    setColor : function(color){
      //$('a').css('color', color);
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
      if(self.value == '논란'){
        Body.setBackGroundColor("black");
        Body.setColor("white");
        Links.setColor("powderblue");
        Body.IssueColor("white");
        Body.BonColor('white')
        self.value = '설명'
        
      } else {
        Body.setBackGroundColor("white");
        Body.setColor("black");
        Links.setColor("blue");
        Body.IssueColor("white");
        Body.BonColor('black')
        self.value = '논란'
        
      }  
    }


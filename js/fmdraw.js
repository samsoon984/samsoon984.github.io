var Crawler = require("crawler");

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


var c = new Crawler({
  maxConnections : 10,
  callback : function (error, res, done) {
    if (error) {
      alert('Fail,,');
    } else {
      var $ = res.$;
      alert($("title").text());
    }
  }
})



function goDraw() {
  if (document.getElementById("winner").style.visibility === "hidden") {
    document.getElementById("winner").style.visibility = "visible";
    const url = document.getElementById('urlinput').value;
    c.queue(document.getElementById('urlinput'));
    
    

  }
  
  
}
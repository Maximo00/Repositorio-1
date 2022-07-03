function openPage(pageName, elmnt, color) {
    
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
   
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    
    document.getElementById(pageName).style.display = "block";
  
    
    elmnt.style.backgroundColor = color;
  }
  
  
  document.getElementById("defaultOpen").click();

  google.charts.load('current',{packages:['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
  
  var data = google.visualization.arrayToDataTable([
    ['Meses', 'Numero Ranking ATP'],
    [1,13],[2,16],[3,15],[4,16],[5,15],
    [6,15]
  ]);
  
  var options = {
    title: 'ATP Ranking 2022',
    hAxis: {title: 'Meses'},
    vAxis: {title: 'Numero Ranking ATP'},
    legend: 'none'
  };
 
  var chart = new google.visualization.LineChart(document.getElementById('myChart'));
  chart.draw(data, options);
  }



mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
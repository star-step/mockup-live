let myDoughnutChart1 = document.getElementById("myChart4").getContext('2d');

let chart1 = new Chart(myDoughnutChart1, {
    type: 'doughnut',
    data: {
        labels: ['Average'],
        datasets: [ {
            data: [69, 31],
            backgroundColor: ['#22d6aa', '#d4f7ee'],
            borderWidth:3,
        }]
    },
    options: {        
      cutoutPercentage: 80,
        legend: { 
          position: 'bottom',
          labels:{
            boxWidth:0,
            usePointStyle:true
          },
       },
    }
});

let myDoughnutChart2 = document.getElementById("myChart5").getContext('2d');

let chart2 = new Chart(myDoughnutChart2, {
    type: 'doughnut',
    data: {
        labels: ['Top'],
        datasets: [ {
            data: [95, 5],
            backgroundColor: ['#22d6aa', '#d4f7ee']
        }]
    },
    options: {
      cutoutPercentage: 80,
        legend: { 
          position: 'bottom',
          labels:{
            boxWidth:0,
            usePointStyle:true
          },
       },
    }
});

let myDoughnutChart3 = document.getElementById("myChart6").getContext('2d');

let chart3 = new Chart(myDoughnutChart3, {
    type: 'doughnut',
    data: {
        labels: ['Me'],
        datasets: [ {
            data: [59, 41],
            backgroundColor: ['#22d6aa', '#d4f7ee']
        }]
    },
    options: {
      cutoutPercentage: 80,
      percentageInnerCutout: 80,
        legend: { 
          position: 'bottom',
          labels:{
            boxWidth:0,
            usePointStyle:true
          },
       },
    }
});

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['20', '', '25','','30','','35','','40','','60','','65'],
    datasets: [{
      label: 'Employer K 73,500',
      backgroundColor: "#0800a3",
      data: [10,15,20,25,30,35,40,45,50,55,60,65],
    }, {
      label: 'Employee K 52,500',
      backgroundColor: "#4935ff",
      data: [10,25,30,45,50,65,70,85,90,105,110,125],
    }, {
      label: 'Total Investment K244,313',
      backgroundColor: "#85afff",
      data: [15,25,35,45,55,65,75,85,95,105,115,125],
    }],
  },
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          minRotation: 20
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      }],
      yAxes: [{
        stacked: true,
        gridLines: {
          display: true,
          borderDash:[5,1],
          drawBorder: false,
        },
        ticks: {
            max: 300,
            min: 0,
            stepSize: 100,
        },
        type: 'linear',
      }]
    },
    responsive: false,
    maintainAspectRatio: false,
    aspectRatio:1,
    legend: { 
      position: 'top',
      labels:{
        boxWidth:10,
        usePointStyle:true
      },
   },
  }
});
//range slider js
const settings={
  fill: '#1abc9c',
  background: '#d7dcdf'
}

const sliders = document.querySelectorAll('.range-slider');


Array.prototype.forEach.call(sliders,(slider)=>{
  slider.querySelector('input').addEventListener('input', (event)=>{
    slider.querySelector('span').innerHTML = event.target.value;
    applyFill(event.target);
  });
  applyFill(slider.querySelector('input'));
});

function applyFill(slider) {
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}

//active nav-link js
var btnContainer = document.getElementById("mySidenav");

var btns = btnContainer.getElementsByClassName("nav-link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    content = document.getElementsByClassName("main");
  });
}
var navItems = document.querySelectorAll(".nav-link");
navItems.forEach(function(e, i) {
	e.addEventListener("click", function(e) {
		navItems.forEach(function(e2, i2) {
			e2.classList.remove("active");
		})
		this.classList.add("active");
	});
});
// responsive doughnut chart
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 600) {
      $('.charts').removeClass('row');
      $('.to-be-removed').removeClass('col-sm-4');
      $('.to-be-removed2').removeClass('row');
      $('.to-be-removed3').removeClass('col-sm-8');
      $('.to-be-removed4').removeClass('col-sm-4');
      $('.to-be-removed5').removeClass('pt-4');
    } else if (ww >= 601) {
      $('.charts').addClass('row');
      $('.to-be-removed').addClass('col-sm-4');
      $('.to-be-removed2').addClass('row');
      $('.to-be-removed3').addClass('col-sm-8');
      $('.to-be-removed4').addClass('col-sm-4');
      $('.to-be-removed5').addClass('pt-4');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  alterClass();
});


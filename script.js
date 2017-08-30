


function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "controller.php", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
}

function Render_Graph(){
    var divHeight = $("#chart").parent("div.container").height(); 
    var divWidth  = $("#chart").parent("div.container").width();
    $.jqplot.config.enablePlugins = true;

    var s1 = [2, 6, 7, 10];
    var ticks = ['a', 'b', 'c', 'd'];
         
    var plot1 = $.jqplot('chart', [s1], {
        height: divHeight,
        width: divWidth,
        grid: {
            background: 'rgba(57,57,57,0.0)',
            drawBorder: false,
            shadow: false,
            gridLineColor: '#666',
            gridLineWidth: 2 
        },	    
        seriesDefaults:{
            renderer:$.jqplot.BarRenderer,
            pointLabels: { show: true }
        },
        axes: {
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: ticks,
	        tickOptions:{
                    showGridline: false
                }		
            },
	    yaxis: {}
        },
        highlighter: { show: false }
    });    
}//end Render_Graph()

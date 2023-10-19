var patent = "patent_radar_chart.json";
vegaEmbed("#radar", patent).then(function(result) {

}).catch(console.error);

var charger = "supercharger_dot_map.json";
vegaEmbed("#map", charger).then(function(result) {

}).catch(console.error);

var sales = "sales_area_chart.json";
vegaEmbed("#area_chart", sales).then(function(result) {

}).catch(console.error);
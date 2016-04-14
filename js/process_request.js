 var yahoo_api = "https://query.yahooapis.com/v1/public/yql?q=select%20title%2Cunits.temperature%2Citem%20%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22McLean%2C%20VA%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

  $.getJSON(yahoo_api)
    .done(function(data) {
   	
    	var location ="McLean, VA" ;
    	var temperature= data.query.results.channel.item.condition.temp;
    	var scale= data.query.results.channel.units.temperature;
    	var forecast = data.query.results.channel.item.forecast;
    	var image_file_path = "http://l.yimg.com/a/i/us/we/52/"+data.query.results.channel.item.condition.code+".gif";
    	var image_text= data.query.results.channel.item.condition.text;

    	$('#temperature').attr("src",image_file_path);
    	$('#title').text(location);
    	$('#temp_value').text(temperature + " "+ scale);
		$('#description').text(image_text);
		
    	

    	
		for (i = 0; i < 5; i++) { 
			$('#list_temperature').append('<div class="column">'+forecast[i].day+'<br>'+forecast[i].low +'/'+ forecast[i].high+'</div>');	    
		}    	

      });


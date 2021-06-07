

	$( function() {
		// An array of dates
		var eventDates = [];
		eventDates[ new Date( '06/08/2021' )] = new Date( '06/08/2021' );
		eventDates[ new Date( '06/12/2021' )] = new Date( '06/12/2021' );
		eventDates[ new Date( '06/18/2021' )] = new Date( '06/18/2021' );
		eventDates[ new Date( '06/23/2021' )] = new Date( '06/23/2021' );
		
		var fecha1 = new Date( '06/08/2021' )
		var fecha2 = new Date( '06/12/2021' )
		var fecha3 = new Date( '06/18/2021' )
		var fecha4 = new Date( '06/23/2021' )
		var arregloTest = [fecha1,fecha2,fecha3,fecha4]

		
		
		$.datepicker.setDefaults($.datepicker.regional["es"]);
		// datepicker
		$('#datepicker').datepicker({
			onSelect: function (date) {
				
				
				const fecha = new Date(date)
				for ( let i = 0; i < arregloTest.length;i++){
					if (arregloTest[i].getTime() == fecha.getTime()){
						console.log("hola")
					}	
				}
				},
			beforeShowDay: function( date ) {
				var highlight = eventDates[date];
				if( highlight ) {
					 return [true, "event", 'Tooltip text'];
				} else {
					 return [true, '', ''];
				}
			}
		});
	});

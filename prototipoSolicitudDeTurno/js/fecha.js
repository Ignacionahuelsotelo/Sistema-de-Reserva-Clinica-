

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

		var horario0 = "09:30 am <br> 14:00 pm <br> 17:45 pm"
		var horario1 = "09:00 am <br> 11:15 am <br>  15:50 pm"
		var horario2 = "16:00 pm <br>"
		var horario3 = " 09:30 am <br> 10:20 am <br> 14:00 pm <br> 15: 30 pm <br>17:45 pm "
		

		var horariosDisponibles = [ horario0,horario1,horario2,horario3 ] 
		
		$.datepicker.setDefaults($.datepicker.regional["es"]);
		// datepicker
		$('#datepicker').datepicker({
			onSelect: function (date) {
				
				parrafoCalendario.innerHTML = " "
				var encontrado = false;
				const fecha = new Date(date)
				for ( let i = 0; i < arregloTest.length;i++){
					if (arregloTest[i].getTime() == fecha.getTime()){
						parrafoCalendario.innerHTML = "Horarios disponibles : <br> " + horariosDisponibles[i] 
						var encontrado = true;
					}	
					
				}
				if (encontrado == false){
					parrafoCalendario.innerHTML = "NO hay horarios disponibles"
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

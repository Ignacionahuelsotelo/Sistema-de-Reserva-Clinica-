
var fechaElegida;
var horaElegida;
var horariosDisponibles;
var arregloTest;

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
		
		arregloTest = [fecha1,fecha2,fecha3,fecha4]

		var horario0 = "09:00"
		var horario1 = "10:00"
		var horario2 = "15:00"
		var horario3 = "14:00"
		

		horariosDisponibles = [ horario0,horario1,horario2,horario3 ] 

		
		
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
						fechaElegida = arregloTest[i].getTime()
					}	
					
				}
				if (encontrado == false){
					parrafoCalendario.innerHTML = "NO hay horarios disponibles"
					fechaElegida = ""
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
	})
	

	

	hora.addEventListener("input", function() {
  	//valueSpan.innerText = hora.value;
	  //console.log(hora.value)
		horaElegida = hora.value
	}, false);




	const boton = document.querySelector("#botonConfirmar")

	boton.addEventListener("click", function(evento){
		evento.preventDefault();
		
		console.log(fechaElegida)
		console.log(horaElegida)
		parrafoSubmit.innerHTML = " "

		for ( let i = 0; i < arregloTest.length;i++){
			for ( let j = 0; j < horariosDisponibles.length;j++){
				if (arregloTest[i].getTime() == fechaElegida){
					if (horariosDisponibles[j] == horaElegida && i == j){
						parrafoSubmit.innerHTML = "Turno solicitado exitosamente"
					}
				}
			}
		}
		
		 
	})

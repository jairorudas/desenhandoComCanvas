var lienzo, dibujo;

function inicio()
{
	dibujo = document.getElementById('dibujito');
	lienzo = dibujo.getContext('2d');

	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";
	//arc = ARCO o CIRCULO
	lienzo.arc(150,150,100,(Math.PI*2), false);
	lienzo.closePath();
	lienzo.stroke();

}
function desenharGrilha()
{	
	// espaço entre lineas será em px
	var ancho = 300;
	var alto = 300;
	var numeroLineas;	
	var espacioEntreLineas = ancho/ 10;

	 	for ( numeroLineas = 0; numeroLineas <= ancho; numeroLineas += espacioEntreLineas) 
	 	{	 		 
	 		lienzo.beginPath();
	 		lienzo.strokeStyle = "#055D86";
	 		lienzo.moveTo(numeroLineas, 0);
	 		lienzo.lineTo(numeroLineas, alto);
	 		lienzo.stroke();
	 		lienzo.closePath();
	 	}

	 	for ( numeroLineas = 1; numeroLineas <= alto; numeroLineas += espacioEntreLineas)
	 	{
	 		lienzo.beginPath();
	 		lienzo.strokeStyle = "#0DAD1D";
	 		lienzo.moveTo(numeroLineas,0);
	 		lienzo.lineTo(numeroLineas, numeroLineas);
	 		lienzo.lineTo(ancho, numeroLineas);
	 		lienzo.stroke();
	 		lienzo.closePath();
	 	}

			/*
			lienzo.beginPath();
			lienzo.strokeStyle = "#0DAD1D";
			lienzo.moveTo(0, numero
				Lineas);
			lienzo.lineTo(ancho, numeroLineas);
			lienzo.stroke();
			lienzo.closePath();	 		
	 	}*/ 
	 		/*
			lienzo.beginPath();
			lienzo.strokeStyle = "#0DAD1D";
			lienzo.moveTo(0, numeroLineas);
			lienzo.lineTo(numeroLineas, ancho);
			lienzo.stroke();
			lienzo.closePath();}	*/	
}
/*
	Aqui comçamos a desenhar.
	lienzo.strokeStyle = '000033';	
	lienzo.moveTo(1,1); //este é o ponto de partida
	lienzo.lineTo(1,299);
	lienzo.lineTo(299,299);
	lienzo.lineTo(299,1);
	lienzo.lineTo(1,1);
	lienzo.lineTo(299,299);
	lienzo.moveTo(1,299);
	lienzo.lineTo(299,1);
	lienzo.moveTo(1,150);
	lienzo.lineTo(299, 150);
	lienzo.moveTo(150, 1);
	lienzo.lineTo(150,299);
	lienzo.strokeStyle = '000033';
	lienzo.stroke();*/

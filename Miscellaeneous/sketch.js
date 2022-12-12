/*
doel: functionele buttons met een value counter
*/

/*
1. html framework:

	- !container!
	
	- !plus, min, reset Btn!
	
	- !value counter!
	-- maak er <span> van!!
	
	- order of operation framework: container, plus Btn, value Counter, Min Btn, Reset Btn
	
2. javascript start:

	-buttons definieren met Var 
	--HTML aanroepen met .getElementbyId (geef alles een id!)
		
	-alles wat een waarde moet hebben een waarde geven
	--definieer en de minimum value
	--- definieer de maximum value
	----definieer number !(later nodig om als reverentie te nemen voor de if-statements)!
	
3. 	aparte if-statements maken voor de min en plus button:
	
	-voorbeeld code: 
	
		if (number>min){
           number = number-1; /// Minus 1 of the number
           numberPlace.!!innerText!! = number ; /// Display the value in 
		   
	--doe hetzelfde voor de plus button maar dan met: if( number<max)
	--- GEBRUIK .innerHTML om vanuit javascript HTML aan te spreken zodat de waarde in innerhtml wordt weergegeven.

4.ervoor zorgen dat de waarde wordt weergegeven in de value counter

	-voorbeeld code: numberPlace.!!innerText!! = number ; /// Display the value in place of the number
	-- GEBRUIK .innerHTML om vanuit javascript HTML aan te spreken zodat de waarde in innerhtml wordt weergegeven.
	
5. maak een reset button
	-DOE HIER ZO NODIG RESEARCH VOOR
	-- voorbeeld om het te maken:
		resetBtn.onclick = function(){
			if(number>0){
				number = 0;
				valueCounter.innerHTML = number;
			}
		}
	
*/
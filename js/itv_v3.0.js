// JavaScript Document

////////////////////////////////////////////////////////////////
// Données /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

var categories = {
	FR:{
		1: {name:"Sèche-cheveux"},
		2: {name:"Pinces à lisser"},
		3: {name:"Fers à boucler"},
		4: {name:"VOLARE"},
		5: {name:"BaBylissPRO Academy"},
		6: {name:"Shows"},
		7: {name:"Coupe"}
	},
	EN:{
		1: {name:"Hair dryers"},
		2: {name:"Straighteners"},
		3: {name:"Curling irons"},
		4: {name:"VOLARE"},
		5: {name:"BaBylissPRO Academy"},
		6: {name:"Shows"},
		7: {name:"Grooming"}
	}
}

var films = {
	1: {
	// Sèche-cheveux >>>
		1: {file:"15-rapido",titleFR:"BAB7000IE le sèche-cheveux professionnel haute performance le plus léger au monde !",titleEN:"BAB7000IE lightest high-performance professional dryer in the world!"},
		2: {file:"15-italiabrava",titleFR:"ITALIABRAVA sèche-cheveux professionnel de luxe avec moteur EDM TECHNOLOGY 10.0",titleEN:"ITALIABRAVA professional luxury hair dryer with EDM TECHNOLOGY 10.0 motor"},
		3: {file:"14-italiabrava",titleFR:"ItaliaBrava",titleEN:"ItaliaBrava"},
		4: {file:"12-volare",titleFR:"Volare & Caruso",titleEN:"Volare & Caruso"},
		5: {file:"10-gamme",titleFR:"Gamme Made in Italy",titleEN:"Gamme Made in Italy"},
		6: {file:"10-veneziano",titleFR:"Veneziano (BAB6610INE)",titleEN:"Veneziano (BAB6610INE)"},
		7: {file:"10-caruso",titleFR:"Caruso (BAB6500E & BAB6510IE)",titleEN:"Caruso (BAB6500E & BAB6510IE)"},
		8: {file:"10-murano",titleFR:"Murano (BAB6160INE)",titleEN:"Murano (BAB6160INE)"}
	},
	2: {
	// Pinces à lisser >>>
		1: {file:"16-BAB3000EPE-2",titleFR:"BAB3000EPE Trendy hairstyle by Magda Krawczyk",titleEN:"BAB3000EPE Trendy hairstyle by Magda Krawczyk"},
		2: {file:"16-BAB3000EPE",titleFR:"ELIPSIS3000, styler de luxe et d'exception (BAB3000EPE & BAB3000BEPE)",titleEN:"ELIPSIS3000, exceptional luxury styler"},
		3: {file:"15-ultrasonic",titleFR:"Ultrasonic (BAB2191SEPE)",titleEN:"Ultrasonic (BAB2191SEPE)"},
		4: {file:"11-tuto-BAB2095E",titleFR:"Court funky (BAB2095E)",titleEN:"Court funky (BAB2095E)"},
	 	5: {file:"08-BAB2091E",titleFR:"BAB2091E",titleEN:"BAB2091E"},
	 	6: {file:"09-BAB2071E",titleFR:"Ultra Curl (BAB2071E)",titleEN:"Ultra Curl (BAB2071E)"},
	 	7: {file:"09-BAB2073E",titleFR:"Wet and dry (BAB2073E)",titleEN:"Wet and dry (BAB2073E)"},
	 	8: {file:"09-BAB2655NTE",titleFR:"Nanotitanium (BAB2655NTE)",titleEN:"Nanotitanium (BAB2655NTE)"},
	 	9: {file:"08-BAB2072E",titleFR:"Sleek expert (BAB2072E)",titleEN:"Sleek expert (BAB2072E)"},
	 	10: {file:"07-b9",titleFR:"The straightener (BAB2091E)",titleEN:"The straightener (BAB2091E)"}
	},
	3: {
	// Fers à boucler >>>
		1: {file:"16-BAB1100E",titleFR:"BAB1100E & BAB2191SEPE Glamour hairstyle by Magda Krawczyk",titleEN:"BAB1100E & BAB2191SEPE Glamour hairstyle by Magda Krawczyk"},
		2: {file:"16-BAB3000EPE",titleFR:"ELIPSIS3000, styler de luxe et d'exception (BAB3000EPE & BAB3000BEPE)",titleEN:"ELIPSIS3000, exceptional luxury styler"},
		3: {file:"16-BAB8125EPE-hybrid-styler",titleFR:"Hybrid Styler (BAB8125EPE)",titleEN:"Hybrid Styler (BAB8125EPE)"},
		4: {file:"15-miracurl-steamtech",titleFR:"Miracurl Steamtech (BAB2665SE)",titleEN:"Miracurl Steamtech (BAB2665SE)"},
		5: {file:"13-perfectcurling",titleFR:"Miracurl® the Perfect Curling Machine (BAB2665E)",titleEN:"Miracurl® the Perfect Curling Machine (BAB2665E)"},
	 	6: {file:"12-conismooth",titleFR:"ConiSmooth (BAB2225TTE)",titleEN:"ConiSmooth (BAB2225TTE)"},
	 	7: {file:"11-tuto-BAB2269TTE",titleFR:"Romance (BAB2269TTE)",titleEN:"Romance (BAB2269TTE)"}
	},
	4: {
	// Volare >>>
		1: {file:"14-volare-europe-tradeshow",titleFR:"VOLARE X2 Tondeuse de coupe professionnelle de luxe",titleEN:"VOLARE X2 Luxury professional clipper"},
		2: {file:"13-FX811E",titleFR:"VOLARE X2 (FX811E)",titleEN:"VOLARE X2 (FX811E)"},
		3: {file:"10-volare",titleFR:"VOLARE",titleEN:"VOLARE"},
		4: {file:"10-mo_volare",titleFR:"Making of shooting VOLARE 2010",titleEN:"Making of shooting VOLARE 2010"}
	},
	5: {
	// BaByliss PRO academy >>>
		1: {file:"16-training-session-poland",titleFR:"Training session in Poznan (Poland) with Igor Kim and Adam Lukaszczyk",titleEN:"Training session in Poznan (Poland) with Igor Kim and Adam Lukaszczyk"},
		2: {file:"11-tuto-BAB2269TTE",titleFR:"Romance (BAB2269TTE)",titleEN:"Romance (BAB2269TTE)"},
		3: {file:"08-BAB2091E",titleFR:"BAB2091E",titleEN:"BAB2091E"},
		4: {file:"07-b4",titleFR:"Urban style (BAB5586E)",titleEN:"Urban style (BAB5586E)"},
		5: {file:"07-b10",titleFR:"Str8 (BAB2091E)",titleEN:"Str8 (BAB2091E)"},
		6: {file:"07-b11",titleFR:"Sleak and fresh",titleEN:"Sleak and fresh"},
		7: {file:"07-b12",titleFR:"Tribal style (FX770E)",titleEN:"Tribal style (FX770E)"},
		8: {file:"07-b13",titleFR:"Dessin sur cheveux (FX770E)",titleEN:"Dessin sur cheveux (FX770E)"}
	},
	6: {
	// Shows >>>
		1: {file:"16-cosmoprof-bologna",titleFR:"Cosmoprof Bologna 2016",titleEN:"Cosmoprof Bologna 2016"},
		2: {file:"15-mercedes-fashion-week-moscow",titleFR:"2015 Mercedes Fashion Week Moscow",titleEN:"2015 Mercedes Fashion Week Moscow"},
		3: {file:"15-cosmoprof",titleFR:"Cosmoprof Bologna 2015 BaBylissPRO™ show",titleEN:"Cosmoprof Bologna 2015 BaBylissPRO™ show"},
	 	4: {file:"14-history",titleFR:"BaBylissPRO™ history",titleEN:"BaBylissPRO™ history"},
		5: {file:"14-mercedes-week",titleFR:"2014 Moscow Mercedes Fashion Week",titleEN:"2014 Moscow Mercedes Fashion Week"},
		6: {file:"13-cosmoprof",titleFR:"Cosmoprof Bologna 2013 BaBylissPRO™ show",titleEN:"Cosmoprof Bologna 2013 BaBylissPRO™ show"},
		7: {file:"13-intercharm-ukr",titleFR:"Intercharm Ukraine 2013",titleEN:"Intercharm Ukraine 2013"},
		8: {file:"13-mercedez-fashion-week",titleFR:"2013 Mercedes Fashion Week (Moscow - Russia) Part 1",titleEN:"2013 Mercedes Fashion Week (Moscow - Russia) Part 1"},
	 	9: {file:"13-mercedez-fashion-week-2",titleFR:"2013 Mercedes Fashion Week (Moscow - Russia) Part 2",titleEN:"2013 Mercedes Fashion Week (Moscow - Russia) Part 2"},
	 	10: {file:"12-intercharm",titleFR:"Intercharm Russia 2012",titleEN:"Intercharm Russia 2012"}
	},
	7: {
	// Coupe >>>
		1: {file:"16-FX880E",titleFR:"Barber Life - Featuring the FX880E",titleEN:"Barber Life - Featuring the FX880E"},
		2: {file:"16-adam-1",titleFR:"Une coupe tendance réalisée en toute facilité avec les ciseaux BaBylissPRO®",titleEN:"Trendy hair cut easily with BaBylissPRO® shears"},
		3: {file:"16-adam-2",titleFR:"L'esprit barbier",titleEN:"Barber's spirit"}
	}
};

////////////////////////////////////////////////////////////////
// Initialisation des var //////////////////////////////////////
////////////////////////////////////////////////////////////////

var nb_movie = 4;
var current_categ = 0;
var first_thumb = 1;
var current_movie = 0;
var current_moviecat = 0;

////////////////////////////////////////////////////////////////
// Fonctions ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// Change de vidéo >>>
function changeMovie(id){
	var video = document.getElementsByTagName('video')[0];
    var sources = video.getElementsByTagName('source');
    sources[0].src = 'http://www.babylisspro.tv/mp4-webm/'+films[current_categ][id].file+'.mp4';
    sources[1].src = 'http://www.babylisspro.tv/mp4-webm/'+films[current_categ][id].file+'.webm';
    video.load();
	// Affichage bouton download >>>
	current_movie = id;
	current_moviecat = current_categ;
	showDownload(id);
	showListe(id);
}

// Affichage bouton download >>>
function showDownload(id){
	if (language=="FR") document.getElementById('div_download').innerHTML = '<a href="http://babylisspro.tv/download/dl.php?movie='+films[current_categ][id].file+'">T&eacute;l&eacute;charger<br />la vid&eacute;o en HD</a>';
	else document.getElementById('div_download').innerHTML = '<a href="http://babylisspro.tv/download/dl.php?movie='+films[current_categ][id].file+'" target="_blank">Download<br />HD movie</a>';
}

// Change de catégorie >>>
function changeCateg(id){
	current_categ = id;
	first_thumb = 1;
	showCateg(id);
	showListe(first_thumb);
}

// Bascule les miniatures en ON/OFF >>>
function miniatOnOff(id){
	current_movie = id;
	current_moviecat = current_categ;
	showListe(first_thumb);
}

// Affiche le titre de la vidéo >>>
function showInfo(id){
	var title;
	if (language == "FR") title = films[current_categ][id].titleFR;
	else title = films[current_categ][id].titleEN;
	document.getElementById('div_title').innerHTML = '<table class="titleTab" border="0"><tbody><tr><td>'+title+'</td></tr></tbody></table>';
}

// Affiche les catégories >>>
function showCateg(id){  
	current_categ = id;
	var liste = "";
	var listeMobile = "<li>MENU</li>";
	for (var i=1; i<=Object.keys(categories.FR).length; i++){
		listeMobile += '<li><a href="#miniatContainer" onclick="changeCateg('+i+');">';
		liste += '<a href="#social" onclick="changeCateg('+i+');">';
		if (language!="EN") liste += categories.FR[i].name;
		else liste += categories.EN[i].name;
		if (language!="EN") listeMobile += categories.FR[i].name;
		else listeMobile += categories.EN[i].name;
		liste += '</a>';
		listeMobile += '</li>';
	}
	if (language!="EN") liste += '<a href="http://www.babylisspro.com/fr-fr/">Retour &Agrave; BaBylissPRO.com</a>';
	else liste += '<a href="http://www.babylisspro.com/en-us/">Back to BaBylissPRO.com</a>';
	if (language!="EN") listeMobile += '<li><a href="http://www.babylisspro.com/fr-fr/">Retour &Agrave; BaBylissPRO.com</a></li>';
	else listeMobile += '<li><a href="http://www.babylisspro.com/en-us/">Back to BaBylissPRO.com</a></li>';
	
	document.getElementById('div_categ').innerHTML = liste;
	document.getElementById('mobileNav').innerHTML = '<ul>'+listeMobile+'</ul>';
}

// Cherche à quelle page est listé le film >>>
function getThumb(movie){
	for (var i=1; i<=Object.keys(films).length; i++){
		for (var j=1; j<=Object.keys(films[i]).length; j++){
			if (movie == films[i][j].file){
				current_movie = j;
				return Math.ceil(j);
			}
		}
	}
	return 0;
}

// Cherche à quelle catégorie appartient le film >>>
function getCateg(movie){
	for (var i=1; i<=Object.keys(films).length; i++){
		for (var j=1; j<=Object.keys(films[i]).length; j++){
			if (movie == films[i][j].file){
				current_categ = i;
				current_moviecat = i;
				return i;
			}
		}
	}
	return 0;
}

// Affiche la liste des vidéos >>>
function showListe(thumb){
	first_thumb++;
	var films_categ = films[current_categ];
	var films_length = Object.keys(films[current_categ]).length;
	var liste = "";
	var end = thumb+2;		// Numéro de la dernière miniature
	for (var i=thumb,count=0; i<=end && count<=3; i++,count++){
		// Boucle infinie >>>
		if (i<=films_length) num = i;
		else {
			num = i - films_length;
			if (num > 2) first_thumb = 2;
		}
		var title;
		if (language == "FR") title = films[current_categ][num].titleFR;
		else title = films[current_categ][num].titleEN;
		liste += '<div id="miniatContainer" class="miniatContainer">';
		if (current_moviecat!=current_categ || current_movie!=num) liste += '<a href="#player" class="info_bulle" target="_self" onclick="showInfo('+num+'); changeMovie('+num+');">';
		liste += '<img src="images/'+films[current_categ][num].file+'.jpg" class="miniature" border="0" id="miniat'+num+'" />';
		// Info-bulle >>>
		if (current_moviecat!=current_categ || current_movie!=num) liste += '<span class="miniatCaption"><table width="100%" height="100%" border="0"><tbody><tr><td>'+title+'</td></tr></tbody></table></span>';
		else liste += '<span class="miniatCaption"><table width="100%" height="100%" border="0"><tbody><tr><td>'+title+'</td></tr></tbody></table></span>';
		if (current_moviecat!=current_categ || current_movie!=num) liste += '</a>';
		liste += "</div>";
	}
	liste += '<div class="fleche" onclick="showListe(first_thumb);" style="cursor:pointer;"><img src="images/fleche208.png" /></div>';
	document.getElementById('div_movieliste').innerHTML = liste;
}
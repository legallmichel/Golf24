.map{
	width:1000px;
	height:547px;
	background:url(map.png) left top no-repeat;
	position:relative;
}
.map .overlay{
	width:1000px;
	height:547px;
	background:url(map.png) left top no-repeat;
	position:absolute;
	z-index:1;
}
.map img{
	position:absolute;
	top:0;
	left:0;
	z-index:2;
}
.mon_image {
float: left;
}

countdownHolder{
…
font: 40px/1.5 ‘Open Sans Condensed’,sans-serif;
…
}

.digit.static {
// Permet d’ajouter une ombre portée sur n’importe quel élément HTML
box-shadow:1px 1px 1px rgba(4, 4, 4, 0.35);
// La valeur linear-gradient de la propriété background-image permet de générer
// des arrière-plans de couleur dégradée, d’une couleur à l’autre ou via plusieurs
// couleurs intermédiaires
// La notation est la suivante : (orientation du dégradé (top/right/bottom/left),
//	couleurs (position en %))
background-image: linear-gradient(bottom, #3A3A3A 50%, #444444 50%);
background-image: -o-linear-gradient(bottom, #3A3A3A 50%, #444444 50%);
background-image: -moz-linear-gradient(bottom, #3A3A3A 50%, #444444 50%);
background-image: -webkit-linear-gradient(bottom, #3A3A3A 50%, #444444 50%);
background-image: -ms-linear-gradient(bottom, #3A3A3A 50%, #444444 50%);

background-image: -webkit-gradient(
linear,
left bottom,
left top,
color-stop(0.5, #3A3A3A),
color-stop(0.5, #444444)
);
}

.digit{
position:absolute;
display:block;
width:1em;
background-color:#444;
border-radius:0.2em;
text-align:center;
// couleur des chiffres
color:#fff;
letter-spacing:-1px;
}
 

function carregarInfo( banda ) {
xmlHttp = getXmlHttpRequest();

url_servidor = "http://localhost/";

url = url_servidor + "xml.php";

url = url + "?id=" + Math.random();

xmlHttp.open( "GET", url + "&banda=" + banda , true);

xmlHttp.onreadystatechange = xmlPronto;

xmlHttp.send("");
document.getElementById( 'titulo_info' ).innerHTML = '<img src="loading.gif">';
}

function xmlPronto() {

if ( xmlHttp.readyState == 4 ) {
		window.alert( xmlHttp.responseText );
	}
}

if ( xmlHttp.readyState == 4 ) {

xml = getXmlDoc( xmlHttp.responseText );

banda = xml.getElementsByTagName( "banda" )[0];

nome = banda.childNodes[1].childNodes[0].nodeValue;

musico = banda.getElementsByTagName( "integrantes" )[0].childNodes[1].childNodes[1].childNodes[0].nodeValue;

album = banda.getElementsByTagName( "discografia" )[0].childNodes[1].childNodes[1].childNodes[0].nodeValue;

document.getElementById( 'nome' ).innerHTML = nome;
document.getElementById( 'integrantes' ).innerHTML = musico;
document.getElementById( 'discografia' ).innerHTML = album;
document.getElementById( 'titulo_info' ).innerHTML = '<b><i>info</i></b>';
}
}
carregarInfo( 'Angra' );

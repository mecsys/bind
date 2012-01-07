function carregarInfo( banda ) {
xmlHttp = getXmlHttpRequest();

url_servidor = "";

url = url_servidor + "xml.php";

url = url + "?id=" + Math.random();

xmlHttp.open( "GET", url + "&banda=" + banda , true);

xmlHttp.onreadystatechange = xmlPronto;

xmlHttp.send("");
document.getElementById( 'titulo_info' ).innerHTML = '<img src="loading.gif">';
}

function xmlPronto() {

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

function postDados( termometro ) {
	xmlHttpPost = getXmlHttpRequest();
	url_servidor = "";
	url = url_servidor + "relatorio.php";
	xmlHttpPost.open("POST",url,true);
	xmlHttpPost.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlHttpPost.setRequestHeader("Content-length","termometro.length");
	xmlHttpPost.setRequestHeader("Connection","close");
	xmlHttpPost.onreadystatechange = dadosEnviados;
	xmlHttpPost.send( "termometro="+termometro );
	document.getElementById('term_info').innerHTML = 'Aguarde enquanto computamos seu voto...';
}

function dadosEnviados() {
	document.getElementById('term_info').innerHTML = xmlHttpPost.responseText;
}

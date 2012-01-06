function getXmlHttpRequest() {
var xmlHttp = null;
try {
xmlHttp = new XMLHttpRequest();
}
catch(e) {
try {
xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
}
catch(e) {
xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
}
}
return xmlHttp;
}

function getXmlDoc( xml ) {
if (window.DOMParser) {
parser = new DOMParser();
xmlDoc = parser.parseFromString( xml , "text/xml" );
return xmlDoc;
}
else {
xmlDoc = new ActiveXObject( "Microsoft.XMLDOM" );
xmlDoc.async= "false";
xmlDoc.loadXML( text );
return xmlDoc;
}
}

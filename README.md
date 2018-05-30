# Birrafilia
Web de noticias sobre la cerveza

CORRECIONES:
- Quitar los botones de leer más.
Arreglo: suprimir los botones.
- El título sea el enlace con la noticia.
Arreglo: hacer un "a href" en la etiqueta del titulo.
- Publicidad en versión móvil debidamente implementada.
Arreglo: recoger bien el tamaño del contenedor y poner espacio al final de la web para que la publicidad no tape el video.
- Javascript

OBJETIVO

El objetivo de esta pagina web, es albergar noticias sobre el mundo de la cerveza.

ESPECIFICACIONES DEL CLIENTE

- La maquetació (layer design) ha de deixar 336px d'espai a la dreta de la pantalla per publicitat si la pantalla és suficientment ample. La resta del disseny és de lliure elecció. ---> HECHO 
- Per dispositius mòbils, la publicitat anirà fixada a la part inferior (sempre visible) o bé només es mostrarà a la part superior (i desapareixerà en fer scroll) amb un alt de 90px. ---> HECHO
- Les dades per cada noticia son: title (entorn a 8 paraules), imgbig (és una url o relative path a la imatge emmagatzemada a /img), imgmid (igual que imgbig però enllaça una imatge de menor resolució), description (mínim de 300 caràcters), datetime (date i hora).---> HECHO
- Crear dues plantilles o tipus de pàgines html, la plantilla de veure tot o portada i la plantilla de veure una sola noticia. ---> HECHO 

ELEMENTOS Y DESCRIPCIÓN

- TÍTULO: elemento que contiene el titulo del website y una imagen descriptiva
- FOTO: foto descriptiva de la noticia
- PESTAÑAS: elementos de guiá a través de la web
- DESCRIPCIÓN DE LA NOTICIA: introducción breve de la noticia 
- PUBLICIDAD: elemento visual que contiene publicidad
- MÁS: botón de carga de mas noticias

![Maqueta para escritorio](https://rawgit.com/RaulNinoSalas/Birrafilia/master/Pliego/Maqueta%20Escritorio.png)

El diseño final ha cambiado.</n>
Hay un carrusel en el principio de la pagina para poner diferentes imagenes. Una solución para dar mas información visual con un acabado mas curioso para el usuario.</n>
El menú es simple y muy practico. El logo del cliente, diferentes enlaces y un Inicar Sesion para el registro de usuarios.
La publicidad en versión deskop, es un carrusel. Así aumentamos la posibilidad de ingresos. Además, al ser dinamico el usuario tiene un punto donde prestar atención.</n>
Debajo de la publicidad, hay un espacio para poner información de segundo nivel (enlaces a noticias propias o enlaces a webs amigas o cualquier otro tipo de idea que tenga el cliente se puede implementar en este espacio), hemos optado por enlaces a noticias propias.
Las pestañas para compartir la web estan fijas a la derecha de la pantalla.

![Maqueta para movile](https://rawgit.com/RaulNinoSalas/Birrafilia/master/Pliego/Maqueta%20Movil.png)

El menú se esconde tras un boton que despliega las pestañas para su uso.

Tasques:

- Realitza la maquetació o layer design del projecte. Entrega un breu document amb l'anàlisi i la planificació al README.md (valen fotos d'esquemes del quadern) ---> HECHO
- Presenta news.html, la portada, amb 3 notícies (ja escrites al html) ---> HECHO
- Emmagatzema 6 noticies més en dos fitxers, data/1.json data/2.json per ser carregades amb js. ---> HECHO
- Codifica news.js en jQuery per fer: "botó carregar més notícies" i l'event "scroll bottom" que, en ser activat qualsevol d'ells, faci una càrrega i presentació de més dades (fins a dues vegades 1.json, 2.json)
- Inclou rss.xml (especificat al tema 7) ---> HECHO
- Codifica news1.html i news2.html, pàgines que corresponen a les dues primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html ens va a news2.html (no és necessari fer-ne més, aquesta tasca es pot automatitzar amb codi de servidor que es veurà a segon curs). ---> HECHO
- La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) ha de contenir una imatge i un vídeo de Youtube responsive. ---> HECHO
- Cada pàgina ha de contenir les etiquetes meta (amb open graph) per compartir a Facebook el títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina. ---> HECHO

Cada apartat val 1 punt, a on es sumarà 2 punts de presentació i adaptabilitat a tot tipus de dispositiu.


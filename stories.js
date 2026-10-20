// Каталог историй в порядке книги (7 штук). Чтобы добавить готовую историю: положите картинки и mp3
// в stories/<id>/ и заполните у её записи audio и pages. Записи без pages показываются на полке как «Próximamente».
// title виден на полке; subtitle — только на обложке внутри книги.
// Каждая страница = картинка (слева) + текст (справа).
window.STORIES = [
  {
    id: "piel-de-foca",
    title: "Piel de foca",
    subtitle: "Reconozco mi naturaleza",
    audio: "stories/piel-de-foca/piel-de-foca.mp3",
    pages: [
      {
        img: "stories/piel-de-foca/1.jpg",
        text: `Le quitó su piel de foca
Mi padre, a mi mamá
le escondió su piel de foca.
Pero yo la supe encontrar,
la encontré.
Le devolví su piel de foca.
Se la puso y se fue al mar,
ella con su piel de foca.
Sé que un día yo también
Iré al mar.`
      }
    ]
  },
  {
    id: "vasalisa",
    title: "Vasalisa",
    subtitle: "Escucho mi intuición y decido",
    audio: "stories/vasalisa/vasalisa.mp3",
    pages: [
      {
        img: "stories/vasalisa/1.jpg",
        text: `Antes de morir, la madre le dio una muñeca a su niña Vasalisa.
Le dijo que siempre cuidara a su muñeca, pasara lo que pasara.
Le dijo que si alguna vez necesitaba ayuda,
le preguntara a la muñeca lo que hacer.
Que la guardara siempre, y que todos los días la alimentara,
que la muñeca nunca estuviera hambrienta.
Esta fue su última promesa.`
      },
      {
        img: "stories/vasalisa/2.jpg",
        text: `Pasaron los años y la niña tenía una madrastra y dos hermanastras.
En un arrebato cruel contra Vasalisa apagaron el fuego de la casa.
La mandaron al bosque a buscar a Baba Yagá para pedirle que volviera a iluminarlas.
Y así, la niña fue, alimentando a la muñeca que le orientaba.
Llegó a la casa de Baba Yagá, que le puso tres pruebas imposibles, asegurándose de que nunca las pasara.
Pero las tres veces la niña pidió ayuda a su muñeca, la alimentó y se fue a la cama.
Y mientras la niña dormía, de superar las pruebas la muñeca se ocupaba.`
      },
      {
        img: "stories/vasalisa/3.jpg",
        text: `Al final a la bruja no le quedó otra opción que darle el fuego a la niña, se vio vencida Baba Yagá.
Se lo dio dentro de una calavera que, por el bosque con un palo, la niña llevó hasta su casa.
La madrastra y las hermanas vieron un resplandor en el bosque por la ventana.
Cuando vieron que era Vasalisa, corrieron a su encuentro diciendo que desde que se fue, el fuego siempre se les apagaba.
Vasalisa entró triunfante para encenderles la lumbre y todas las luces de la casa.
Pero la calavera lo sabía todo sobre sus hermanas y la madrastra,
sus malas intenciones al mandarla a Baba Yagá.
Así que, desde lo alto del palo, la calavera las abrasó con sus llamas,
y convirtió en cenizas a la madre y las hermanas.`
      }
    ]
  },
  {
    id: "barba-azul",
    title: "Barba Azul",
    subtitle: "Veo lo que tiene que morir o lo que me hace daño",
    audio: "stories/barba-azul/barba-azul.mp3",
    pages: [
      {
        img: "stories/barba-azul/1.jpg",
        text: `Una barba asoma en el castillo
De un azul oscuro, como de tul
como el de un lago helado.
Es de un mago frustrado
Aficionado a mujeres,
al que llaman Barba Azul.
Engatusó a tres hermanas
Su barba les daba miedo
Y al mismo tiempo, embaucaba.
Las mayores sospecharon
la pequeña no veía a su barba tan azul
Aceptó su matrimonio
Y fue con él al castillo,
donde él sola la dejó.
Le dejó todas las llaves,
salvo la de una puerta.
La puerta más importante,
ella no la podía abrir.
Pero la joven curiosa
no quiso quedarse quieta
Buscó la llave secreta
Hasta que la puerta abrió.`
      },
      {
        img: "stories/barba-azul/2.jpg",
        text: `Estaba llena de sangre,
Tenía huesos apilados
Calaveras ya oscuras,
como pilas de manzanas
por todas partes
cadáveres y moho.
Sacó rápido la llave
De la que brotaba sangre
Y entre ropa la escondió.
Cuando volvió Barba Azul
Vio la sangre en la ropa
Él le preguntó “¿Qué has hecho?
No me mientas, esposa infiel”
Barba Azul quería matarla
Pero ella llamó a sus hermanas
Y también a sus hermanos
vio hacia el castillo correr.
Barba Azul venía a buscarla
Le rodearon con sus espadas
Y dieron muerte al rey.`
      }
    ]
  },
  {
    id: "huesera",
    title: "La huesera",
    subtitle: "Recupero lo que hay en mí abandonado, mi fuerza, mi enfado, mi risa, en libertad",
    audio: "stories/huesera/huesera.mp3",
    pages: [
      {
        img: "stories/huesera/3.jpg",
        text: `Una vieja vive en un escondrijo
En el alma. Todos lo saben,
nadie lo ha visto.
Vive esperando los perdidos,
ella espera a los perdidos,
los perdidos van a verla.
Es peluda y regordeta
Y no quiere compañía,
Cacarea, cual gallina.
La llaman la Huesera o la Loba, la trapera.
Ella recoge huesos, es su única tarea,
huesos de lo que está casi perdido.
Los recoge los conserva
se los lleva a su cueva.`
      },
      {
        img: "stories/huesera/2.jpg",
        text: `Su cueva llena de huesos
de animales de desierto,
Y los junta y los ordena.
Junta el esqueleto de un lobo, todo entero,
Y se sienta junto al fuego y sus huesos
Y los piensa, piensa en qué canción cantar.
A los huesos con los brazos sobre ellos.
Que se cubren de carne
y la carne, de pelo.`
      },
      {
        img: "stories/huesera/1.jpg",
        text: `Sigue cantando la Loba
Y el Animal cobra vida
Se curva hacia arriba su cola
Y empieza a respirar.
Abre los ojos y escapa
Por la luna o por el agua
Se transforma en mujer.
Que corriendo hacia la nada
Va riendo a carcajadas
Porque ella no estaba muerta,
Tenía que renacer
Y corriendo hacia la nada
va riendo a carcajadas.
Una Loba, que es mujer.`
      }
    ]
  },
  {
    id: "nina-ciega",
    title: "Niña ciega",
    subtitle: "Integro esta nueva forma de ver",
    cover: "framed",
    coverImg: "stories/nina-ciega/cover.jpg",
    audio: "stories/nina-ciega/nina-ciega-v2.mp3",
    pages: [
      {
        img: "stories/nina-ciega/1.jpg",
        text: `Hoy hacia el anochecer
me adentré un poco con la niña ciega
en el bosque donde todo es
sombra y oscuridad.
La acompañé hacia una sombra
que venía a nuestro encuentro.
Le acarició las mejillas
con sus dedos de terciopelo
y ahora a ella también
le gustan las sombras.
Y el miedo que tenía se ha ido.`
      }
    ]
  },
  {
    id: "doncella-manca",
    title: "Doncella manca",
    subtitle: "Acepto el trabajo de reconstrucción que conlleva lo que reconocí",
    audio: "stories/doncella-manca/doncella-manca.mp3",
    pages: [
      {
        img: "stories/doncella-manca/1.jpg",
        text: `Una doncella manca se marchó
Su padre había hecho un pacto
Con el diablo y le cortó sus manos…`
      },
      {
        img: "stories/doncella-manca/2.jpg",
        text: `Comió de un peral y el rey la vio.
Después de su viaje, la doncella no era de este mundo.
Ni era del de arriba, ni tampoco era del de abajo.
Después de su viaje la doncella era de los dos mundos, después de su viaje ella conocía los dos.
Tuvo un hijo, y todos la amaron.`
      },
      {
        img: "stories/doncella-manca/3.jpg",
        text: `Y la doncella manca volvió
A su lugar más deseado
Le volvieron a crecer las manos,
Tras recorrer la oscuridad
Ella ahora es de aquí
Y de un mundo más.`
      }
    ]
  },
  {
    id: "mujer-esqueleto",
    title: "Mujer esqueleto",
    subtitle: "Me puedo relacionar hacia afuera sin negar mi vulnerabilidad",
    audio: "stories/mujer-esqueleto/mujer-esqueleto.mp3",
    pages: [
      {
        img: "stories/mujer-esqueleto/1.jpg",
        text: `No recuerda por qué
su padre la tiró al océano
y allí yació la mujer.
Los peces se comieron su piel,
su esqueleto bailaba con las corrientes.
Hasta que un pescador
que quería un pez,
enganchó en su anzuelo
los huesos de la mujer.
El pescador, muy contento decía
“¡Qué pez!”
Mientras sacaba los huesos arriba
“¡Es el más grande que nunca pesqué!”`
      },
      {
        img: "stories/mujer-esqueleto/2.jpg",
        text: `Pero cuando vio la verdad
Salió huyendo de ella
Sin darse cuenta de que la mujer
estaba enredada en el sedal,
y adonde él corría
ella iba detrás.`
      },
      {
        img: "stories/mujer-esqueleto/3.jpg",
        text: `Dentro de la casa del pescador,
mirando los huesos en el rincón,
la mujer esqueleto le dio compasión.
Y con cuidadito sus huesos ordenó.
La tapó con pieles
para que entrara en calor.`
      },
      {
        img: "stories/mujer-esqueleto/4.jpg",
        text: `Y se fue a dormir,
y en sueños lloró.
La mujer esqueleto, su lágrima vio
Y con sed de hace siglos,
bebió y bebió.
De la lágrima río su sed sació
Y en el pecho del hombre golpeó
Cantando, “¡carne, carne, carne, carne!
Hasta que otra vez le creció.`
      },
      {
        img: "stories/mujer-esqueleto/5.jpg",
        text: `Y así ambos despertaron
Abrazados, enredados
Y fueron por siempre felices,
nunca les faltó ni amor ni bocado.`
      }
    ]
  }
];

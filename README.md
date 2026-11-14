# Misión Luna

Juego corto para aprender a cuidar una base lunar. En cada uno de los siete días, el jugador elige una de dos acciones. Cada acción cambia el aire, la energía o la protección del refugio. La misión termina si uno de esos recursos llega a cero.

## Abrir el juego

Abre `index.html` en un navegador. No necesita instalar programas, crear una cuenta ni tener conexión para jugar. Los enlaces a las fuentes sí necesitan conexión. El botón **ES / EN** cambia todo el juego entre español e inglés, incluso durante una partida. Los audios empiezan al pulsar **Empezar la misión** y el botón 🔊 permite silenciarlos en cualquier momento.

## ¿Dónde puede ayudar cada niño?

| Archivo | Qué contiene | Cambio fácil |
| --- | --- | --- |
| `index.html` | Estructura de las pantallas | Agregar una sección o imagen |
| `style.css` | Colores, tamaños y dibujos hechos con CSS | Cambiar los colores en `:root` |
| `game.js` | Traducciones, siete días y decisiones | Cambiar una historia o una opción en `DAYS` |
| `solar-event.js` | Copia pequeña de un evento real de DONKI | Ver los datos usados en la alerta |
| `space-weather.js` | Hasta siete boletines públicos guardados de DONKI | Ver qué registro usa cada día |
| `assets/icons/` | Dibujos originales de aire, energía y refugio | Cambiar el color o las formas de un SVG |
| `assets/audio/` | Tres clips históricos de NASA | Escuchar los momentos de despegue, radio y aterrizaje |
| `assets/` | Imágenes de Mayito, su equipo y el logo oficial del reto | Sustituir una imagen conservando su nombre |

En `game.js`, `change:{energy:-2,science:1}` significa que la decisión usa dos puntos de energía y suma un descubrimiento. Para cambiar un texto de una misión, escribe las dos versiones: `es` y `en`. Los puntos son **reglas del juego**, no cantidades reales de oxígeno, electricidad ni radiación. El máximo de aire, energía y refugio es 10. Cada día la base gasta un punto de aire y uno de energía. Esto representa consumo diario, no una noche lunar: en la Luna, día y noche duran aproximadamente dos semanas terrestres cada uno ([NASA](https://science.nasa.gov/moon/moonlight/)).

Los iconos de las opciones están en `CHOICE_ICONS`, al comienzo de la lógica del juego. Cada pareja representa las dos opciones de un día. Las tarjetas repiten los iconos originales de aire, energía y refugio del panel para mostrar cómo cambian al final del día.

Las ilustraciones de Mayito, Violeta y Rocco provienen de [Mi Superpoder es la Programación](https://misuperpodereslaprogramacion.com/). Mayito guía cada día; Violeta y Rocco aparecen en la historia.

## Sonidos e iconos

Los clips de despegue y aterrizaje de Apollo 11, y la señal de radio Quindar, provienen de [Historical Sounds de NASA](https://www.nasa.gov/historical-sounds/). El audio original está en inglés. Se oye al iniciar, al llegar a la comunicación con la Tierra y al completar la misión. El aviso en pantalla identifica cada clip. Los efectos breves de las decisiones se generan con JavaScript y son creación del proyecto. Se puede jugar con todo el sonido apagado. Al terminar, el juego entrega una insignia según los descubrimientos para animar a probar otra estrategia.

El [logotipo de NASA Space Apps Challenge](https://www.spaceappschallenge.org/brand/) aparece únicamente en la tarjeta que enlaza al reto. Los iconos de aire, energía y refugio son dibujos originales del equipo para este juego. Este proyecto educativo es independiente; NASA no lo patrocina.

## Dato real que inspiró el juego

Consultamos la [API DONKI/SEP de NASA](https://api.nasa.gov/) y guardamos en `solar-event.js` la fecha, hora, tipo, instrumento y enlace de un evento real de partículas solares. El juego muestra esos datos en la alerta del día 4. La copia inicial corresponde al [evento del 10 de septiembre de 2017](https://ccmc.gsfc.nasa.gov/DONKI/view/SEP/13101/-1); si la API ofrece un evento SEP en los últimos 30 días, el actualizador guarda el más reciente. **No** es una medida de radiación dentro de una base lunar ni una predicción para la Luna. El cambio de puntos por reforzar o no el refugio es una simplificación educativa creada para este juego.

Para actualizar las copias, guarda tu clave en `.env.local` como `NASA_API_KEY=tu_clave` y ejecuta `python3 scripts/update_donki.py`. El script usa la clave solo para la consulta y escribe únicamente datos públicos en `solar-event.js` y `space-weather.js`. Si no hay registros nuevos, conserva los datos ya guardados. `.env.local` está excluido de Git. El juego no consulta la API cuando un niño juega y funciona sin conexión.

El mismo script guarda hasta siete avisos públicos de los últimos 30 días en `space-weather.js`. El juego selecciona avisos solares (SEP, CME o FLR) para los días 1, 4 y 6, y explica qué registró NASA y cómo se relaciona con la decisión. En los días 1 y 6 el simulador cobra **1 punto extra de refugio** por la opción expuesta; ese costo aparece antes de elegir en la vista previa. La alerta del día 4 incluye su boletín guardado y el evento SEP histórico de 2017. Es una regla educativa creada por el equipo, **no** una medida del riesgo dentro de la base lunar ni una conversión científica de la API. Si hay pocos avisos solares, el juego reutiliza los disponibles; si no hay ninguno, usa el evento SEP histórico. Si la consulta falla, la copia anterior permite seguir jugando.

En GitHub, el flujo `.github/workflows/update-donki.yml` consulta DONKI cada día y también puede ejecutarse manualmente. Usa el secreto `NASA_API_KEY` si está configurado en el repositorio; mientras tanto, usa `DEMO_KEY` de NASA. No publica ninguna clave. Si encuentra otro evento, guarda la nueva copia mediante un commit automático.

La [ficha oficial del reto](https://www.spaceappschallenge.org/2026/challenges/junior-astronaut-mission-trainer/?tab=details) pide enseñar decisiones reales mediante un prototipo interactivo para niños de 7 a 12 años. Su [pestaña de recursos](https://www.spaceappschallenge.org/2026/challenges/junior-astronaut-mission-trainer/?tab=resources) incluye DONKI.

La sección **Recursos del proyecto** dentro de la página enumera estas fuentes y otras referencias usadas para explicar la protección lunar, el reciclaje de aire, la comunicación Tierra–Luna y la producción de comida. También identifica qué parte es simulada. La paleta visual del juego (azul marino, celeste, naranja y blanco) se inspira en el afiche local `20261113_Programacion NSAC2026.pdf` proporcionado por el equipo.

Las decisiones también dejan huella: si se inicia el huerto en el día 2, las semillas aportan un descubrimiento en el día 6; si se envía un mensaje a la Tierra en el día 3, una recomendación aparece en el día 5. Ambas consecuencias y los cambios de las barras están escritos en español e inglés.

## Guardar versiones con Git

Git guarda el historial de cambios. Antes de modificar una misión, usa `git status` para ver qué archivos cambiaron. Después de revisar el juego, guarda una versión con `git add .` y `git commit -m "Describe el cambio"`. El repositorio público es [alexlondon07/mision-luna-mayito](https://github.com/alexlondon07/mision-luna-mayito).

## Probarlo con otros niños

Pide a un niño que juegue sin explicarle qué elegir. Al terminar, pregúntale: «¿Qué ganaste y qué perdiste con una decisión?». Si no puede responder, cambien juntos el texto de la tarjeta hasta que se entienda.

# Misión Luna

Juego corto para aprender a cuidar una base lunar. En cada uno de los siete días, el jugador elige una de dos acciones. Cada acción cambia el aire, la energía o la protección del refugio. La misión termina si uno de esos recursos llega a cero.

## Abrir el juego

Abre `index.html` en un navegador. No necesita instalar programas, crear una cuenta ni tener conexión para jugar. Los enlaces a las fuentes sí necesitan conexión. El botón **ES / EN** cambia todo el juego entre español e inglés, incluso durante una partida.

## ¿Dónde puede ayudar cada niño?

| Archivo | Qué contiene | Cambio fácil |
| --- | --- | --- |
| `index.html` | Estructura de las pantallas | Agregar una sección o imagen |
| `style.css` | Colores, tamaños y dibujos hechos con CSS | Cambiar los colores en `:root` |
| `game.js` | Traducciones, siete días y decisiones | Cambiar una historia o una opción en `DAYS` |
| `assets/` | Imágenes de Mayito y su equipo | Sustituir una imagen conservando su nombre |

En `game.js`, `change:{energy:-2,science:1}` significa que la decisión usa dos puntos de energía y suma un descubrimiento. Para cambiar un texto de una misión, escribe las dos versiones: `es` y `en`. Los puntos son **reglas del juego**, no cantidades reales de oxígeno, electricidad ni radiación. El máximo de aire, energía y refugio es 10. Cada noche se gasta un punto de aire y uno de energía.

Los iconos de las opciones están en `CHOICE_ICONS`, al comienzo de la lógica del juego. Cada pareja representa las dos opciones de un día. Las tarjetas repiten los iconos de aire, energía y refugio del panel para mostrar cómo cambian después de la noche.

Las ilustraciones de Mayito, Violeta y Rocco provienen de [Mi Superpoder es la Programación](https://misuperpodereslaprogramacion.com/). Mayito guía cada día; Violeta y Rocco aparecen en la historia.

## Dato real que inspiró el juego

NASA registró un [evento de partículas solares el 10 de septiembre de 2017 en DONKI](https://ccmc.gsfc.nasa.gov/DONKI/view/SEP/13101/1). Ese registro inspira la alerta del día 4. **No** es una medida de radiación dentro de una base lunar ni una predicción para la Luna. El cambio de puntos por reforzar o no el refugio es una simplificación educativa creada para este juego.

La [ficha oficial del reto](https://www.spaceappschallenge.org/2026/challenges/junior-astronaut-mission-trainer/?tab=details) pide enseñar decisiones reales mediante un prototipo interactivo para niños de 7 a 12 años. Su [pestaña de recursos](https://www.spaceappschallenge.org/2026/challenges/junior-astronaut-mission-trainer/?tab=resources) incluye DONKI.

La sección **Recursos del proyecto** dentro de la página enumera estas fuentes y otras referencias usadas para explicar la protección lunar, el reciclaje de aire y la producción de comida. También identifica qué parte es simulada.

## Guardar versiones con Git

Git guarda el historial de cambios. Antes de modificar una misión, usa `git status` para ver qué archivos cambiaron. Después de revisar el juego, guarda una versión con `git add .` y `git commit -m "Describe el cambio"`. El repositorio local no tiene remoto configurado.

## Probarlo con otros niños

Pide a un niño que juegue sin explicarle qué elegir. Al terminar, pregúntale: «¿Qué ganaste y qué perdiste con una decisión?». Si no puede responder, cambien juntos el texto de la tarjeta hasta que se entienda.

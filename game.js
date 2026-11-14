// Misión Luna: puntos de juego, no unidades físicas reales.
// Cada día ofrece dos decisiones. Los textos están en español e inglés.
const TEXT = {
  es: {
    brandTitle:"MISIÓN LUNA", brandBy:"con Mayito",
    resourcesNav:"Recursos del proyecto", resourcesEyebrow:"DE DÓNDE SALE CADA IDEA", resourcesHeading:"Recursos del proyecto",
    resourcesLead:"Estas fuentes nos ayudaron a crear la historia y explicar las decisiones. Los puntos de las barras son reglas educativas inventadas para el juego.",
    resourceChallengeTitle:"Reto oficial", resourceChallengeText:"Define el objetivo: un juego para niños que muestre los costos de mantener una base lunar o marciana.", resourceChallengeLink:"Leer el reto ↗",
    challengeDays:"días de misión", challengeResources:"recursos vitales",
    resourceDonkiTitle:"Evento solar real · NASA DONKI", resourceDonkiText:"Consultamos la API de DONKI y guardamos un evento real de partículas solares. Este registro inspira la alerta del día 4; los puntos son reglas educativas.", resourceDonkiLink:"Ver el registro ↗", donkiRecord:"Registro NASA",
    resourceWeatherTitle:"Boletines reales · NASA DONKI", resourceWeatherText:"Usamos avisos solares reales en los días 1, 4 y 6. Su fecha y enlace vienen de DONKI; el costo de refugio es una regla del juego.", resourceWeatherLink:"Ver boletín ↗",
    realDataBadge:"RETO CON DATO NASA", weatherTitle:"¿Qué nos cuenta el Sol?", weatherDisclaimer:"Registro real guardado; no mide el peligro en nuestra base.", weatherRule:"🎮 Si eliges la tarea expuesta, gastarás 1 punto extra de refugio. Mira el cambio en las opciones.", weatherAction:"🎮 Hoy debes decidir si refuerzas el refugio o sigues investigando. El aviso inspira este simulacro; no calcula el riesgo lunar.", weatherMeaningCME:"NASA registró una expulsión de material del Sol.", weatherMeaningSEP:"NASA registró partículas energéticas del Sol.", weatherMeaningFLR:"NASA registró una llamarada solar.", weatherResult:"Por el simulacro del boletín solar, esta acción también costó 1 punto de refugio.", weatherLink:"Abrir registro NASA ↗", weatherSEP:"Partículas solares", weatherCME:"Expulsión solar", weatherFLR:"Fulguración solar", weatherReport:"Informe espacial", weatherOther:"Boletín {type}",
    weatherDayStory:"Mayito lee el boletín guardado de NASA: {type}, publicado el {date}. Es una observación espacial, no una medida del peligro aquí. Nos recuerda que debemos planear cómo proteger la base. ¿Reforzamos el refugio o seguimos investigando?", weatherDaySource:"Boletín DONKI: {type}, {date}. El evento SEP de 2017 inspira el ejercicio de protección. Los puntos son reglas del juego; ninguno de estos registros mide nuestra base lunar.", weatherRecentLink:"Ver boletín reciente ↗",
    resourceMoonTitle:"El ambiente lunar · NASA", resourceMoonText:"Explica por qué la Luna necesita protección frente a la radiación espacial y temperaturas extremas.", resourceMoonLink:"Explorar la ciencia ↗",
    resourceLifeTitle:"Soporte vital · NASA", resourceLifeText:"Nos ayudó a explicar por qué el aire y el reciclaje son tareas esenciales para la tripulación.", resourceLifeLink:"Leer sobre soporte vital ↗",
    resourceFoodTitle:"Comida espacial · CSA", resourceFoodText:"La guía educativa de la Agencia Espacial Canadiense inspiró la decisión sobre el huerto y las reservas de comida.", resourceFoodLink:"Ver la guía ↗",
    resourceCharactersTitle:"Mayito y sus amigos", resourceCharactersText:"Las ilustraciones de Mayito, Violeta y Rocco vienen de Mi Superpoder es la Programación.", resourceCharactersLink:"Conocer el proyecto ↗",
    resourceAudioTitle:"Voces y radio de NASA", resourceAudioText:"Audios históricos de Apollo 11 y una señal de radio Quindar. Se reproducen en momentos del juego; los efectos cortos son nuestros.", resourceAudioLink:"Escuchar la colección ↗",
    resourceCommTitle:"Mensajes Tierra–Luna · NASA", resourceCommText:"Una señal directa tarda alrededor de 1,3 segundos por trayecto. En el juego, pedir ayuda a la Tierra usa energía y tiempo de revisión.", resourceCommLink:"Leer la explicación ↗",
    logReply:"📡 La Tierra revisó nuestro mensaje: recomienda comprobar primero el reciclador de aire.", logNoReply:"📡 Aún no enviamos los datos: hoy debemos decidir sin la recomendación de la Tierra.", logGarden:"🌱 Las semillas del huerto brotaron. La observación sumará 1 descubrimiento hoy.", logNoGarden:"🌱 El huerto quedó pendiente; hoy no tendremos una observación de las semillas.", gardenBonus:"¡Brotaron las semillas! Ganamos 1 descubrimiento por el experimento que iniciamos antes.", commFact:"Una señal directa entre la Tierra y la Luna tarda alrededor de 1,3 segundos por trayecto. Revisar los datos en la Tierra puede tardar más.", commLink:"Explicación NASA ↗",
    sourceDisclaimer:"Proyecto educativo independiente del equipo. Los logotipos y audios se muestran con atribución; NASA no patrocina este juego.",
    soundOn:"Sonido activado", soundOff:"Sin sonido", muteSound:"Silenciar sonidos", unmuteSound:"Activar sonidos", audioIntro:"🎧 La misión incluye audios históricos de NASA en inglés y efectos del juego. Puedes silenciarlos cuando quieras.",
    clipLaunch:"Audio NASA · despegue de Apollo 11 (inglés)", clipRadio:"Audio NASA · señal de radio Quindar", clipLanded:"Audio NASA · aterrizaje del Apollo 11 (inglés)",
    buildNote:"🧩 Hecho con HTML, CSS y JavaScript. Usamos Git para guardar las versiones del proyecto.",
    introBadge:"7 días · 1 misión", introEyebrow:"UNA AVENTURA PARA DECIDIR",
    introTitle:"¡Mayito necesita tu ayuda en la Luna!",
    introLead:"Mayito, Violeta y Rocco vivirán 7 días en una base lunar. Tú decidirás cómo cuidar el aire, la energía y el refugio.",
    introSays:"«Cada decisión ayuda en algo, pero también cuesta algo. ¡Pensemos antes de elegir!»",
    howTitle:"¿Cómo se juega?", howOne:"Lee el problema del día.",
    howTwo:"Mira qué gana y qué pierde cada opción.",
    howThree:"Elige una. Llega al día 7 sin agotar los recursos.",
    start:"¡Empezar la misión!", restart:"Empezar de nuevo",
    missionGoal:"🎯 Meta: terminar 7 días con aire, energía y refugio por encima de cero.",
    resourcesTitle:"Recursos de la base", resourcesIntro:"Si una barra llega a cero, la misión termina.",
    oxygenName:"Aire", oxygenHelp:"Lo que respiramos",
    energyName:"Energía", energyHelp:"Enciende las máquinas",
    shieldName:"Refugio", shieldHelp:"Nos protege",
    nightCost:"Cada día la base usa 1 aire y 1 energía.",
    discoveries:"Descubrimientos", mayitoSays:"MAYITO DICE",
    chooseTitle:"¿Qué harías tú?", choiceHelp:"Mira cómo quedaría la base al final del día.",
    day:"DÍA", of:"DE", afterNight:"Al final del día",
    cost:"Costo", danger:"¡Cuidado! Un recurso llegaría a cero.",
    whatHappened:"¿Qué pasó?", learnWhy:"Aprendiste que...",
    next:"Ir al día siguiente", seeResult:"Ver resultado",
    sourceLead:"Datos reales de NASA", sourceBody:"DONKI registró partículas solares el {date} a las {time} UTC. Este evento inspira la alerta del juego. Los puntos de refugio son reglas educativas, no una medición lunar.",
    sourceLink:"Ver evento SEP de 2017 ↗", missionEnd:"FIN DE LA MISIÓN",
    winTitle:"¡Misión cumplida, equipo!", winText:"Mayito y sus amigos completaron los 7 días. Descubrimientos: ",
    loseTitle:"¡Mayito quiere intentarlo otra vez!", loseText:"La misión terminó en el día ",
    because:" porque ", reasonOxygen:"se acabó el aire", reasonEnergy:"se agotó la energía", reasonShield:"el refugio quedó sin protección",
    winLearning:"¡Buen trabajo! Una base necesita equilibrio: la mejor decisión cambia según lo que falta.",
    loseLearning:"Probemos otra estrategia. Mira las barras antes de elegir y recuerda el consumo de cada día.",
    badgeGuardian:"Insignia: Guardianes de la base", badgeExplorer:"Insignia: Exploradores lunares", badgeScientist:"Insignia: Equipo científico", badgeTryAgain:"Entrenamiento de misión: ¡inténtalo de nuevo!",
    again:"¡Jugar otra vez!", footerNote:"Los puntos son reglas educativas, no medidas reales de una base lunar.",
    charactersSource:"Personajes: Mi Superpoder es la Programación ↗", nasaSource:"Evento solar: NASA DONKI ↗"
  },
  en: {
    brandTitle:"MOON MISSION", brandBy:"with Mayito",
    resourcesNav:"Project resources", resourcesEyebrow:"WHERE EACH IDEA CAME FROM", resourcesHeading:"Project resources",
    resourcesLead:"These sources helped us write the story and explain each decision. The bars use learning rules created for this game, not real measurements.",
    resourceChallengeTitle:"Official challenge", resourceChallengeText:"Sets the goal: a game for children that shows the trade-offs of running a lunar or Martian base.", resourceChallengeLink:"Read the challenge ↗",
    challengeDays:"mission days", challengeResources:"vital resources",
    resourceDonkiTitle:"Real solar event · NASA DONKI", resourceDonkiText:"We queried the DONKI API and saved a real solar particle event. This record inspires the day 4 alert; points are learning rules.", resourceDonkiLink:"See the record ↗", donkiRecord:"NASA record",
    resourceWeatherTitle:"Real bulletins · NASA DONKI", resourceWeatherText:"Real solar bulletins appear on days 1, 4 and 6. Their dates and links come from DONKI; the shelter cost is a game rule.", resourceWeatherLink:"See bulletin ↗",
    realDataBadge:"NASA DATA CHALLENGE", weatherTitle:"What is the Sun telling us?", weatherDisclaimer:"Saved real record; it does not measure danger at our base.", weatherRule:"🎮 If you choose the exposed task, you spend 1 extra shelter point. Check the choice preview.", weatherAction:"🎮 Today you decide whether to strengthen the shelter or keep exploring. The bulletin inspires this drill; it does not calculate lunar risk.", weatherMeaningCME:"NASA recorded material erupting from the Sun.", weatherMeaningSEP:"NASA recorded energetic particles from the Sun.", weatherMeaningFLR:"NASA recorded a solar flare.", weatherResult:"Because of the solar bulletin drill, this action also cost 1 shelter point.", weatherLink:"Open NASA record ↗", weatherSEP:"Solar particles", weatherCME:"Solar eruption", weatherFLR:"Solar flare", weatherReport:"Space report", weatherOther:"{type} bulletin",
    weatherDayStory:"Mayito reads NASA's saved bulletin: {type}, issued on {date}. It is a space observation, not a measurement of danger here. It reminds us to plan how to protect the base. Should we strengthen the shelter or keep exploring?", weatherDaySource:"Recent DONKI record: {type}, {date}. A 2017 SEP event inspires this protection exercise. The points are game rules; neither record measures our lunar base.", weatherRecentLink:"See recent bulletin ↗",
    resourceMoonTitle:"The lunar environment · NASA", resourceMoonText:"Explains why people on the Moon need protection from space radiation and extreme temperatures.", resourceMoonLink:"Explore the science ↗",
    resourceLifeTitle:"Life support · NASA", resourceLifeText:"Helped us explain why breathable air and recycling are essential for a crew.", resourceLifeLink:"Read about life support ↗",
    resourceFoodTitle:"Food in space · CSA", resourceFoodText:"The Canadian Space Agency's educational toolkit inspired the garden and stored-food choice.", resourceFoodLink:"See the toolkit ↗",
    resourceCharactersTitle:"Mayito and friends", resourceCharactersText:"Illustrations of Mayito, Violeta, and Rocco come from Mi Superpoder es la Programación.", resourceCharactersLink:"Meet the project ↗",
    resourceAudioTitle:"NASA voices and radio", resourceAudioText:"Historic Apollo 11 audio and a Quindar radio tone play during the game; we made the short game effects.", resourceAudioLink:"Hear NASA's collection ↗",
    resourceCommTitle:"Earth–Moon messages · NASA", resourceCommText:"A direct signal takes about 1.3 seconds each way. In the game, asking Earth for help uses power and review time.", resourceCommLink:"Read the explanation ↗",
    logReply:"📡 Earth reviewed our message: check the air recycler first.", logNoReply:"📡 We have not sent the data, so we must decide without Earth's recommendation today.", logGarden:"🌱 The garden seeds sprouted. The observation will add 1 discovery today.", logNoGarden:"🌱 The garden was postponed; we have no seed observation today.", gardenBonus:"The seeds sprouted! We earned 1 discovery from the experiment started earlier.", commFact:"A direct signal between Earth and the Moon takes about 1.3 seconds each way. Reviewing data on Earth can take longer.", commLink:"NASA explanation ↗",
    sourceDisclaimer:"An independent educational team project. Logos and audio are credited; NASA does not sponsor this game.",
    soundOn:"Sound on", soundOff:"Sound off", muteSound:"Mute sounds", unmuteSound:"Turn on sounds", audioIntro:"🎧 This mission includes historic NASA audio in English and game effects. You can mute them at any time.",
    clipLaunch:"NASA audio · Apollo 11 liftoff", clipRadio:"NASA audio · Quindar radio tone", clipLanded:"NASA audio · Apollo 11 landing",
    buildNote:"🧩 Built with HTML, CSS, and JavaScript. We use Git to save project versions.",
    introBadge:"7 days · 1 mission", introEyebrow:"AN ADVENTURE IN DECISION MAKING",
    introTitle:"Mayito needs your help on the Moon!",
    introLead:"Mayito, Violeta, and Rocco will spend 7 days in a lunar base. You decide how to protect their air, power, and shelter.",
    introSays:"“Every choice helps with something, but it also has a cost. Let's think before we choose!”",
    howTitle:"How do you play?", howOne:"Read the day's problem.",
    howTwo:"See what each choice gains and loses.",
    howThree:"Choose one. Reach day 7 without running out of resources.",
    start:"Start the mission!", restart:"Start over",
    missionGoal:"🎯 Goal: finish 7 days with air, power, and shelter above zero.",
    resourcesTitle:"Base resources", resourcesIntro:"If any bar reaches zero, the mission ends.",
    oxygenName:"Air", oxygenHelp:"What we breathe",
    energyName:"Power", energyHelp:"Runs the machines",
    shieldName:"Shelter", shieldHelp:"Keeps us safe",
    nightCost:"Each day the base uses 1 air and 1 power.",
    discoveries:"Discoveries", mayitoSays:"MAYITO SAYS",
    chooseTitle:"What would you do?", choiceHelp:"See how the base would look at the end of the day.",
    day:"DAY", of:"OF", afterNight:"At the end of the day",
    cost:"Cost", danger:"Watch out! A resource would reach zero.",
    whatHappened:"What happened?", learnWhy:"You learned that...",
    next:"Go to the next day", seeResult:"See result",
    sourceLead:"Real NASA data", sourceBody:"DONKI recorded solar particles on {date} at {time} UTC. This event inspires the game alert. Shelter points are learning rules, not a lunar measurement.",
    sourceLink:"See 2017 SEP event ↗", missionEnd:"END OF MISSION",
    winTitle:"Mission complete, team!", winText:"Mayito and friends completed all 7 days. Discoveries: ",
    loseTitle:"Mayito wants to try again!", loseText:"The mission ended on day ",
    because:" because ", reasonOxygen:"the base ran out of air", reasonEnergy:"the base ran out of power", reasonShield:"the shelter lost its protection",
    winLearning:"Great work! A base needs balance. The best choice changes with what the team needs.",
    loseLearning:"Let's try another strategy. Check the bars before choosing, and remember each day's consumption.",
    badgeGuardian:"Badge: Base guardians", badgeExplorer:"Badge: Lunar explorers", badgeScientist:"Badge: Science crew", badgeTryAgain:"Mission training: try again!",
    again:"Play again!", footerNote:"Points are learning rules, not real measurements of a lunar base.",
    charactersSource:"Characters: Mi Superpoder es la Programación ↗", nasaSource:"Solar event: NASA DONKI ↗"
  }
};

const DAYS = [
  {
    icon:"🔧",
    title:{es:"La base despierta",en:"The base wakes up"},
    story:{es:"¡Llegamos! Los paneles solares tienen polvo y la reserva de aire es pequeña. Solo hay tiempo para arreglar una cosa. ¿Cuál eliges?",en:"We made it! The solar panels are dusty and the air supply is small. There is time to fix only one thing. Which will you choose?"},
    choices:[
      {title:{es:"Limpiar los paneles",en:"Clean the panels"},detail:{es:"La luz del Sol ayudará a cargar las baterías.",en:"Sunlight will help charge the batteries."},change:{energy:2,oxygen:-1},result:{es:"Mayito limpió los paneles. La caminata usó aire del traje.",en:"Mayito cleaned the panels. The walk used air from the suit."},why:{es:"Los paneles convierten luz solar en electricidad. Trabajar afuera requiere recursos.",en:"Solar panels turn sunlight into electricity. Working outside uses resources."}},
      {title:{es:"Reparar el reciclador",en:"Fix the air recycler"},detail:{es:"La máquina recuperará aire para respirar.",en:"The machine will recover air to breathe."},change:{oxygen:2,energy:-2},result:{es:"El aire subió, pero la máquina gastó energía.",en:"Air increased, but the machine used power."},why:{es:"Mantener aire respirable también necesita electricidad.",en:"Keeping air breathable also needs electricity."}}
    ]
  },
  {
    icon:"🌱",
    title:{es:"El huerto de Violeta",en:"Violeta's garden"},
    story:{es:"Violeta trajo semillas para probar si pueden crecer en la base. El huerto necesita luz. También hay comida guardada. ¿Qué hacemos?",en:"Violeta brought seeds to test whether they can grow in the base. The garden needs light. There is stored food too. What should we do?"},
    choices:[
      {title:{es:"Encender el huerto",en:"Turn on the garden"},detail:{es:"Probamos cómo cultivar comida. Usa electricidad.",en:"Test how to grow food. It uses power."},change:{energy:-2,science:1},result:{es:"¡Las semillas tienen luz! Violeta anota un descubrimiento.",en:"The seeds have light! Violeta records a discovery."},why:{es:"Cultivar comida lejos de la Tierra necesita luz, agua y energía.",en:"Growing food far from Earth needs light, water, and power."}},
      {title:{es:"Comer de las reservas",en:"Eat stored food"},detail:{es:"Mientras comemos, cargamos baterías. El cultivo espera.",en:"While we eat, we charge the batteries. The garden waits."},change:{energy:3},cost:{es:"Sin experimento de cultivo",en:"No garden experiment"},result:{es:"Comimos de las reservas y cargamos las baterías. No probamos el huerto.",en:"We ate stored food and charged the batteries. We did not test the garden."},why:{es:"La comida almacenada ayuda hoy, pero no enseña a producir comida para una misión larga.",en:"Stored food helps today, but it does not teach us to grow food for a long mission."}}
    ]
  },
  {
    icon:"📡", communication:true,
    title:{es:"Un mensaje para la Tierra",en:"A message to Earth"},
    story:{es:"Rocco quiere contarle a la Tierra lo que aprendimos. La radio usa energía y la respuesta tarda un poquito. ¿Enviamos el mensaje ahora?",en:"Rocco wants to tell Earth what we learned. The radio uses power, and the reply takes a little time. Should we send the message now?"},
    choices:[
      {title:{es:"Enviar el mensaje",en:"Send the message"},detail:{es:"Compartimos los resultados con la Tierra.",en:"Share our results with Earth."},change:{energy:-2,science:1},result:{es:"¡Mensaje enviado! La señal llegó en segundos; la Tierra revisará nuestros datos.",en:"Message sent! The signal arrived in seconds; Earth will review our data."},why:{es:"La radio necesita energía. La señal tarda segundos; revisar los datos lleva más tiempo.",en:"The radio needs power. The signal takes seconds; reviewing data takes longer."}},
      {title:{es:"Cargar baterías primero",en:"Charge batteries first"},detail:{es:"La Tierra esperará nuestros resultados.",en:"Earth will wait for our results."},change:{energy:3},cost:{es:"Mensaje retrasado",en:"Delayed message"},result:{es:"Tenemos más energía, pero la Tierra aún no conoce los resultados.",en:"We have more power, but Earth does not know the results yet."},why:{es:"Ahorrar energía puede retrasar una tarea importante de la misión.",en:"Saving power can delay an important mission task."}}
    ]
  },
  {
    icon:"☀️", nasa:true,
    title:{es:"¡Alerta del Sol!",en:"Solar alert!"},
    story:{es:"Mayito recibe una alerta inspirada en un evento solar real registrado por NASA. Las partículas del Sol pueden ser peligrosas. ¿Preparamos mejor el refugio o seguimos investigando?",en:"Mayito receives an alert inspired by a real solar event recorded by NASA. Particles from the Sun can be dangerous. Should we improve the shelter or keep exploring?"},
    choices:[
      {title:{es:"Reforzar el refugio",en:"Strengthen the shelter"},detail:{es:"Protegemos mejor al equipo. Usamos energía.",en:"Protect the team better. Use power."},change:{shield:2,energy:-2},result:{es:"Mayito y Violeta mejoraron el refugio.",en:"Mayito and Violeta improved the shelter."},why:{es:"La protección reduce riesgos, pero construirla necesita recursos.",en:"Protection reduces risk, but building it needs resources."}},
      {title:{es:"Seguir investigando",en:"Keep exploring"},detail:{es:"Logramos un descubrimiento, con menos protección.",en:"Make a discovery with less protection."},change:{shield:-2,science:1},result:{es:"El equipo investigó, pero quedó menos protegido durante la alerta.",en:"The team explored, but had less protection during the alert."},why:{es:"Una misión científica debe equilibrar descubrimientos y seguridad.",en:"A science mission must balance discoveries and safety."}}
    ]
  },
  {
    icon:"🫧",
    title:{es:"El aire está bajando",en:"Air is running low"},
    story:{es:"¡Bip, bip! El reciclador de aire necesita una reparación. Los paneles también pueden producir más energía. Hoy solo podemos atender uno.",en:"Beep, beep! The air recycler needs a repair. The panels can also produce more power. Today we can work on only one."},
    choices:[
      {title:{es:"Arreglar el aire",en:"Fix the air system"},detail:{es:"Recuperamos aire. La reparación usa energía.",en:"Recover air. The repair uses power."},change:{oxygen:5,energy:-2},result:{es:"El reciclador funciona otra vez. ¡Qué alivio!",en:"The recycler works again. What a relief!"},why:{es:"El aire de una base debe mantenerse y reciclarse continuamente.",en:"The air in a base must be maintained and recycled continuously."}},
      {title:{es:"Cuidar los paneles",en:"Care for the panels"},detail:{es:"Ganamos energía. La caminata usa aire.",en:"Gain power. The walk uses air."},change:{energy:5,oxygen:-2},result:{es:"Las baterías se cargaron, pero gastamos aire afuera.",en:"The batteries charged, but we used air outside."},why:{es:"Incluso conseguir más energía puede consumir otro recurso.",en:"Even getting more power can use another resource."}}
    ]
  },
  {
    icon:"🛡️",
    title:{es:"¿Refugio o ciencia?",en:"Shelter or science?"},
    story:{es:"Violeta ve que una pared protectora necesita mejoras. Rocco ve algo interesante en el cielo. ¿A qué dedicamos el día?",en:"Violeta sees that a protective wall needs work. Rocco spots something interesting in the sky. What should we spend the day on?"},
    choices:[
      {title:{es:"Mejorar el refugio",en:"Improve the shelter"},detail:{es:"La base será más segura. Usa energía.",en:"The base will be safer. It uses power."},change:{shield:2,energy:-2},result:{es:"El equipo reparó la pared protectora.",en:"The team repaired the protective wall."},why:{es:"Cuidar a la tripulación es parte de planear la misión.",en:"Caring for the crew is part of mission planning."}},
      {title:{es:"Observar el cielo",en:"Observe the sky"},detail:{es:"Aprendemos algo nuevo, con menos protección.",en:"Learn something new with less protection."},change:{science:1,shield:-1},result:{es:"Rocco registró una observación, pero el refugio quedó más débil.",en:"Rocco recorded an observation, but the shelter became weaker."},why:{es:"La investigación puede competir por tiempo y materiales con la seguridad.",en:"Research can compete with safety for time and materials."}}
    ]
  },
  {
    icon:"🚀",
    title:{es:"¡Último día en la base!",en:"Last day at the base!"},
    story:{es:"¡Ya casi lo logramos! Antes de terminar, Mayito puede hacer una última investigación o asegurar el aire para el último día.",en:"We are almost there! Before the mission ends, Mayito can do one last experiment or secure air for the final day."},
    choices:[
      {title:{es:"Hacer el experimento",en:"Do the experiment"},detail:{es:"Un descubrimiento más. Cuesta energía.",en:"One more discovery. It costs power."},change:{science:1,energy:-2},result:{es:"¡Experimento terminado! Ahora comprobemos si la base sigue segura.",en:"Experiment complete! Now let's check whether the base is still safe."},why:{es:"Completar objetivos científicos importa, pero la tripulación debe poder volver a casa.",en:"Science goals matter, but the crew must remain safe."}},
      {title:{es:"Asegurar el aire",en:"Secure the air"},detail:{es:"Guardamos aire para terminar la misión.",en:"Save air to finish the mission."},change:{oxygen:2,energy:-1},result:{es:"Mayito dejó aire listo para terminar la misión.",en:"Mayito saved air to finish the mission."},why:{es:"Una misión también debe reservar recursos para terminar con seguridad.",en:"A mission must also reserve resources for a safe finish."}}
    ]
  }
];

const NASA_URL = NASA_EVENT.link;
const NASA_COMM_URL = "https://www.nasa.gov/podcasts/nasa-in-silicon-valley/nasa-in-silicon-valley-live-episode-01-were-going-back-to-the-moon/";
// Cada pareja corresponde a las dos opciones de un día.
const CHOICE_ICONS = [
  ["⚡", "🫧"], ["🌱", "🥫"], ["📡", "🔋"], ["🛡️", "🔭"],
  ["🫧", "⚡"], ["🛡️", "🔭"], ["🔬", "🫧"]
];
const RESOURCE_ICONS = {oxygen:"assets/icons/air.svg", energy:"assets/icons/energy.svg", shield:"assets/icons/shelter.svg"};
const $ = id => document.getElementById(id);
let language = "es";
let state = null;
let soundEnabled = true;
let currentAudio = null;
let currentClip = null;
let audioContext = null;
let captionTimer = null;
let radioTimer = null;

const AUDIO_CLIPS = {
  launch:{file:"assets/audio/apollo11-liftoff.mp3", caption:"clipLaunch"},
  radio:{file:"assets/audio/quindar.mp3", caption:"clipRadio"},
  landed:{file:"assets/audio/apollo11-landed.mp3", caption:"clipLanded"}
};

function translate(value) {
  return typeof value === "string" ? value : value[language];
}
function label(key) {
  return TEXT[language][key];
}
function updateSoundButton() {
  const button = $("sound-toggle");
  button.setAttribute("aria-pressed", String(soundEnabled));
  button.setAttribute("aria-label", label(soundEnabled ? "muteSound" : "unmuteSound"));
  button.firstChild.textContent = soundEnabled ? "🔊 " : "🔇 ";
  button.querySelector("span").textContent = label(soundEnabled ? "soundOn" : "soundOff");
}
function stopAudio() {
  clearTimeout(radioTimer);
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  currentClip = null;
  clearTimeout(captionTimer);
  $("audio-caption").classList.add("hidden");
}
function playNASA(name) {
  if (!soundEnabled) return;
  stopAudio();
  const clip = AUDIO_CLIPS[name];
  const audio = new Audio(clip.file);
  audio.volume = name === "radio" ? 0.35 : 0.55;
  currentAudio = audio;
  currentClip = name;
  const caption = $("audio-caption");
  caption.textContent = "🎙️ " + label(clip.caption);
  caption.classList.remove("hidden");
  captionTimer = setTimeout(() => caption.classList.add("hidden"), 5000);
  if (name === "radio") radioTimer = setTimeout(() => { audio.pause(); if (currentAudio === audio) { currentAudio = null; currentClip = null; } }, 2200);
  audio.addEventListener("ended", () => { if (currentAudio === audio) { currentAudio = null; currentClip = null; } });
  audio.play().catch(() => { if (currentAudio === audio) stopAudio(); });
}
function playEffect(kind) {
  if (!soundEnabled) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") audioContext.resume();
    const now = audioContext.currentTime;
    const notes = kind === "warning" ? [420, 310] : kind === "discovery" ? [500, 660, 850] : [520, 690];
    notes.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = now + index * 0.12;
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.09, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.16);
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.17);
    });
  } catch (_) { /* El juego funciona aunque el navegador no ofrezca audio. */ }
}
function donkiDate() {
  const date = new Date(NASA_EVENT.eventTime);
  return new Intl.DateTimeFormat(language === "es" ? "es-CO" : "en-US", {day:"numeric", month:"long", year:"numeric", timeZone:"UTC"}).format(date);
}
function currentWeather() {
  const solar = SPACE_WEATHER_EVENTS.filter(item => ["SEP", "CME", "FLR"].includes(item.type));
  const index = state?.day === 3 ? 1 : state?.day === 5 ? 2 : 0;
  return solar[index % solar.length] || {type:"SEP", issued:NASA_EVENT.eventTime, link:NASA_EVENT.link};
}
function solarDrill() {
  return state && [0, 5].includes(state.day);
}
function exposedChoice(choice) {
  return solarDrill() && ((state.day === 0 && choice === DAYS[0].choices[0]) || (state.day === 5 && choice === DAYS[5].choices[1]));
}
function renderWeather() {
  const visible = state && [0, 3, 5].includes(state.day);
  $("weather-strip").classList.toggle("hidden", !visible);
  if (!visible) return;
  const bulletin = currentWeather();
  const date = new Intl.DateTimeFormat(language === "es" ? "es-CO" : "en-US", {day:"numeric", month:"long", year:"numeric", timeZone:"UTC"}).format(new Date(bulletin.issued));
  $("weather-meaning").textContent = label("weatherMeaning" + bulletin.type);
  $("weather-details").textContent = weatherType() + " · " + date + " · " + bulletin.issued.slice(11, 16) + " UTC";
  $("weather-link").href = bulletin.link;
  $("resource-weather-link").href = SPACE_WEATHER_EVENTS.find(item => ["SEP", "CME", "FLR"].includes(item.type))?.link || NASA_EVENT.link;
  $("weather-rule").classList.toggle("hidden", !solarDrill());
  $("weather-action").classList.toggle("hidden", state.day !== 3);
}
function weatherType() {
  const type = currentWeather().type;
  return ["SEP", "CME", "FLR", "Report"].includes(type) ? label("weather" + type) : label("weatherOther").replace("{type}", type);
}
function weatherDate() {
  return new Intl.DateTimeFormat(language === "es" ? "es-CO" : "en-US", {day:"numeric", month:"long", year:"numeric", timeZone:"UTC"}).format(new Date(currentWeather().issued));
}
function fillWeatherTemplate(key) {
  return label(key).replace("{type}", weatherType().toLowerCase()).replace("{date}", weatherDate());
}
function renderDonkiCard() {
  const time = NASA_EVENT.eventTime.slice(11, 16);
  $("donki-record").textContent = label("donkiRecord") + ": SEP · " + donkiDate() + " · " + time + " UTC";
  $("donki-record-link").href = NASA_URL;
}
function show(screen) {
  for (const id of ["intro", "play", "ending"]) $(id).classList.toggle("hidden", id !== screen);
}
function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.title = language === "es" ? "Misión Luna con Mayito" : "Moon Mission with Mayito";
  for (const element of document.querySelectorAll("[data-i18n]")) {
    element.textContent = label(element.dataset.i18n);
  }
  updateSoundButton();
  if (currentClip) $("audio-caption").textContent = "🎙️ " + label(AUDIO_CLIPS[currentClip].caption);
  renderDonkiCard();
  renderWeather();
  $("lang-es").setAttribute("aria-pressed", language === "es");
  $("lang-en").setAttribute("aria-pressed", language === "en");
  $("progress").setAttribute("aria-label", language === "es" ? "Progreso de la misión" : "Mission progress");
  document.querySelector(".status-card").setAttribute("aria-label", language === "es" ? "Recursos de la base" : "Base resources");
  if (state) {
    if (state.ended) renderEnding();
    else renderDay();
  }
}
function startGame() {
  state = {day:0, oxygen:8, energy:8, shield:4, science:0, garden:false, sentMessage:false, selected:null, ended:false};
  show("play");
  renderDay();
  playNASA("launch");
  window.scrollTo(0, 0);
}
function afterChoice(choice) {
  const after = {
    oxygen: state.oxygen,
    energy: state.energy,
    shield: state.shield,
    science: state.science
  };
  for (const [key, amount] of Object.entries(choice.change)) {
    after[key] = key === "science" ? after[key] + amount : Math.min(10, after[key] + amount);
  }
  after.oxygen -= 1;
  after.energy -= 1;
  if (exposedChoice(choice)) after.shield -= 1;
  if (state.day === 5 && state.garden) after.science += 1;
  return after;
}
function renderResources() {
  for (const key of ["oxygen", "energy", "shield"]) {
    const value = Math.max(0, state[key]);
    $(key + "-value").textContent = value + "/10";
    $(key + "-bar").style.width = (value * 10) + "%";
    $(key + "-bar").classList.toggle("low", value <= 2);
  }
  $("science-value").textContent = state.science;
}
function renderProgress() {
  $("progress").replaceChildren();
  for (let day = 0; day < DAYS.length; day++) {
    const dot = document.createElement("span");
    dot.className = "day-dot" + (day < state.day ? " done" : day === state.day ? " current" : "");
    dot.textContent = String(day + 1);
    dot.setAttribute("aria-label", label("day") + " " + (day + 1));
    $("progress").append(dot);
  }
}
function renderSource(event) {
  const box = $("event-source");
  box.classList.toggle("hidden", !event.nasa && !event.communication);
  box.replaceChildren();
  if (!event.nasa && !event.communication) return;
  const strong = document.createElement("strong");
  strong.textContent = label(event.nasa ? "sourceLead" : "resourceCommTitle") + ": ";
  const body = event.nasa ? fillWeatherTemplate("weatherDaySource") : label("commFact");
  const words = document.createTextNode(body + " ");
  const link = document.createElement("a");
  link.href = event.nasa ? NASA_URL : NASA_COMM_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label(event.nasa ? "sourceLink" : "commLink");
  box.append(strong, words, link);
  if (event.nasa) {
    const recent = document.createElement("a");
    recent.href = currentWeather().link;
    recent.target = "_blank";
    recent.rel = "noopener noreferrer";
    recent.textContent = label("weatherRecentLink");
    recent.style.marginLeft = "10px";
    box.append(recent);
  }
}
function renderMissionLog() {
  const box = $("mission-log");
  const key = state.day === 4 ? state.sentMessage ? "logReply" : "logNoReply" : state.day === 5 ? state.garden ? "logGarden" : "logNoGarden" : null;
  box.classList.toggle("hidden", !key);
  box.textContent = key ? label(key) : "";
}
function resourceName(key) {
  return label(key + "Name");
}
function renderChoices(event) {
  const box = $("choices");
  box.replaceChildren();
  for (let i = 0; i < event.choices.length; i++) {
    const choice = event.choices[i];
    const forecast = afterChoice(choice);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    const heading = document.createElement("div");
    heading.className = "choice-heading";
    const symbol = document.createElement("span");
    symbol.className = "choice-symbol";
    symbol.setAttribute("aria-hidden", "true");
    symbol.textContent = CHOICE_ICONS[state.day][i];
    const title = document.createElement("strong");
    title.textContent = translate(choice.title);
    heading.append(symbol, title);
    const detail = document.createElement("span");
    detail.className = "choice-detail";
    detail.textContent = translate(choice.detail);
    const preview = document.createElement("div");
    preview.className = "choice-preview";
    const previewLabel = document.createElement("span");
    previewLabel.className = "preview-label";
    previewLabel.textContent = label("afterNight") + ":";
    preview.append(previewLabel);
    for (const key of ["oxygen", "energy", "shield"]) {
      if (forecast[key] === state[key]) continue;
      const chip = document.createElement("span");
      chip.className = "preview-chip " + key + (forecast[key] <= 0 ? " danger" : forecast[key] > state[key] ? " up" : " down");
      const icon = document.createElement("img");
      icon.className = "preview-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.src = RESOURCE_ICONS[key];
      icon.alt = "";
      const values = document.createElement("span");
      values.textContent = resourceName(key) + " " + state[key] + "→" + Math.max(0, forecast[key]);
      chip.append(icon, values);
      preview.append(chip);
    }
    if (forecast.science > state.science) {
      const discovery = document.createElement("span");
      discovery.className = "preview-chip discovery";
      discovery.textContent = "⭐ +" + (forecast.science - state.science) + " " + label("discoveries");
      preview.append(discovery);
    }
    button.append(heading, detail, preview);
    if (choice.cost) {
      const cost = document.createElement("small");
      cost.className = "choice-cost";
      cost.textContent = label("cost") + ": " + translate(choice.cost);
      button.append(cost);
    }
    if (forecast.oxygen <= 0 || forecast.energy <= 0 || forecast.shield <= 0) {
      const warning = document.createElement("small");
      warning.className = "choice-warning";
      warning.textContent = label("danger");
      button.append(warning);
    }
    button.addEventListener("click", () => choose(i));
    box.append(button);
  }
}
function renderDay() {
  const event = DAYS[state.day];
  $("day-label").textContent = label("day") + " " + (state.day + 1) + " " + label("of") + " " + DAYS.length;
  $("event-title").textContent = translate(event.title);
  $("event-story").textContent = event.nasa ? fillWeatherTemplate("weatherDayStory") : translate(event.story);
  renderMissionLog();
  renderSource(event);
  renderResources();
  renderWeather();
  renderProgress();
  const chosen = state.selected !== null;
  $("choice-area").classList.toggle("hidden", chosen);
  $("result").classList.toggle("hidden", !chosen);
  if (chosen) renderResult();
  else renderChoices(event);
}
function choose(index) {
  const choice = DAYS[state.day].choices[index];
  const after = afterChoice(choice);
  const gainedScience = after.science > state.science;
  if (state.day === 1 && index === 0) state.garden = true;
  if (state.day === 2 && index === 0) state.sentMessage = true;
  state.oxygen = after.oxygen;
  state.energy = after.energy;
  state.shield = after.shield;
  state.science = after.science;
  state.selected = index;
  playEffect(failed() ? "warning" : gainedScience ? "discovery" : "choice");
  renderDay();
  $("result").scrollIntoView({behavior:"smooth", block:"nearest"});
}
function failed() {
  return state.oxygen <= 0 || state.energy <= 0 || state.shield <= 0;
}
function renderResult() {
  const choice = DAYS[state.day].choices[state.selected];
  const box = $("result");
  box.replaceChildren();
  const title = document.createElement("h2");
  title.textContent = label("whatHappened");
  const message = document.createElement("p");
  message.textContent = translate(choice.result);
  const why = document.createElement("p");
  why.className = "why";
  why.textContent = label("learnWhy") + " " + translate(choice.why);
  const gardenBonus = document.createElement("p");
  gardenBonus.className = "garden-bonus";
  gardenBonus.textContent = label("gardenBonus");
  const next = document.createElement("button");
  next.className = "primary";
  next.type = "button";
  next.textContent = failed() || state.day === DAYS.length - 1 ? label("seeResult") + " →" : label("next") + " →";
  next.addEventListener("click", nextDay);
  box.append(title, message);
  if (exposedChoice(choice)) {
    const drill = document.createElement("p");
    drill.className = "weather-result";
    drill.textContent = label("weatherResult");
    box.append(drill);
  }
  if (state.day === 5 && state.garden) box.append(gardenBonus);
  box.append(why, next);
}
function nextDay() {
  if (failed() || state.day === DAYS.length - 1) {
    state.ended = true;
    show("ending");
    renderEnding();
    if (failed()) { stopAudio(); playEffect("warning"); }
    else playNASA("landed");
  } else {
    state.day += 1;
    state.selected = null;
    renderDay();
    if (state.day === 2) playNASA("radio");
    if (state.day === 3) playEffect("warning");
  }
  window.scrollTo({top:0, behavior:"smooth"});
}
function renderEnding() {
  const lost = failed();
  document.querySelector(".ending-card").classList.toggle("win", !lost);
  const badge = lost ? "badgeTryAgain" : state.science >= 3 ? "badgeScientist" : state.science >= 1 ? "badgeExplorer" : "badgeGuardian";
  $("achievement").textContent = (lost ? "🚀 " : "🏅 ") + label(badge);
  $("ending-title").textContent = label(lost ? "loseTitle" : "winTitle");
  if (lost) {
    const reason = state.oxygen <= 0 ? "reasonOxygen" : state.energy <= 0 ? "reasonEnergy" : "reasonShield";
    $("ending-text").textContent = label("loseText") + (state.day + 1) + label("because") + label(reason) + ".";
  } else {
    $("ending-text").textContent = label("winText") + state.science + ".";
  }
  $("ending-learning").textContent = label(lost ? "loseLearning" : "winLearning");
}

$("start").addEventListener("click", startGame);
$("restart").addEventListener("click", startGame);
$("again").addEventListener("click", startGame);
$("sound-toggle").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  if (!soundEnabled) stopAudio();
  else playEffect("choice");
  updateSoundButton();
});
$("lang-es").addEventListener("click", () => setLanguage("es"));
$("lang-en").addEventListener("click", () => setLanguage("en"));
setLanguage("es");

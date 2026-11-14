// Misión Luna: puntos de juego, no unidades físicas reales.
// Cada día ofrece dos decisiones. Los textos están en español e inglés.
const TEXT = {
  es: {
    brandTitle:"MISIÓN LUNA", brandBy:"con Mayito",
    resourcesNav:"Recursos del proyecto", resourcesEyebrow:"DE DÓNDE SALE CADA IDEA", resourcesHeading:"Recursos del proyecto",
    resourcesLead:"Estas fuentes nos ayudaron a crear la historia y explicar las decisiones. Los puntos de las barras son reglas educativas inventadas para el juego.",
    resourceChallengeTitle:"Reto oficial", resourceChallengeText:"Define el objetivo: un juego para niños que muestre los costos de mantener una base lunar o marciana.", resourceChallengeLink:"Leer el reto ↗",
    resourceDonkiTitle:"Evento solar real · NASA DONKI", resourceDonkiText:"Consultamos la API de DONKI y guardamos un evento real de partículas solares. Este registro inspira la alerta del día 4; los puntos son reglas educativas.", resourceDonkiLink:"Ver el registro ↗", donkiRecord:"Registro NASA",
    resourceMoonTitle:"El ambiente lunar · NASA", resourceMoonText:"Explica por qué la Luna necesita protección frente a la radiación espacial y temperaturas extremas.", resourceMoonLink:"Explorar la ciencia ↗",
    resourceLifeTitle:"Soporte vital · NASA", resourceLifeText:"Nos ayudó a explicar por qué el aire y el reciclaje son tareas esenciales para la tripulación.", resourceLifeLink:"Leer sobre soporte vital ↗",
    resourceFoodTitle:"Comida espacial · CSA", resourceFoodText:"La guía educativa de la Agencia Espacial Canadiense inspiró la decisión sobre el huerto y las reservas de comida.", resourceFoodLink:"Ver la guía ↗",
    resourceCharactersTitle:"Mayito y sus amigos", resourceCharactersText:"Las ilustraciones de Mayito, Violeta y Rocco vienen de Mi Superpoder es la Programación.", resourceCharactersLink:"Conocer el proyecto ↗",
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
    sourceLead:"Dato real de NASA", sourceBody:"DONKI registró partículas solares el {date} a las {time} UTC. Este evento inspira la alerta del juego. Los puntos de refugio son reglas educativas, no una medición lunar.",
    sourceLink:"Ver registro DONKI ↗", missionEnd:"FIN DE LA MISIÓN",
    winTitle:"¡Misión cumplida, equipo!", winText:"Mayito y sus amigos completaron los 7 días. Descubrimientos: ",
    loseTitle:"¡Mayito quiere intentarlo otra vez!", loseText:"La misión terminó en el día ",
    because:" porque ", reasonOxygen:"se acabó el aire", reasonEnergy:"se agotó la energía", reasonShield:"el refugio quedó sin protección",
    winLearning:"¡Buen trabajo! Una base necesita equilibrio: la mejor decisión cambia según lo que falta.",
    loseLearning:"Probemos otra estrategia. Mira las barras antes de elegir y recuerda el consumo de cada día.",
    again:"¡Jugar otra vez!", footerNote:"Los puntos son reglas educativas, no medidas reales de una base lunar.",
    charactersSource:"Personajes: Mi Superpoder es la Programación ↗", nasaSource:"Evento solar: NASA DONKI ↗"
  },
  en: {
    brandTitle:"MOON MISSION", brandBy:"with Mayito",
    resourcesNav:"Project resources", resourcesEyebrow:"WHERE EACH IDEA CAME FROM", resourcesHeading:"Project resources",
    resourcesLead:"These sources helped us write the story and explain each decision. The bars use learning rules created for this game, not real measurements.",
    resourceChallengeTitle:"Official challenge", resourceChallengeText:"Sets the goal: a game for children that shows the trade-offs of running a lunar or Martian base.", resourceChallengeLink:"Read the challenge ↗",
    resourceDonkiTitle:"Real solar event · NASA DONKI", resourceDonkiText:"We queried the DONKI API and saved a real solar particle event. This record inspires the day 4 alert; points are learning rules.", resourceDonkiLink:"See the record ↗", donkiRecord:"NASA record",
    resourceMoonTitle:"The lunar environment · NASA", resourceMoonText:"Explains why people on the Moon need protection from space radiation and extreme temperatures.", resourceMoonLink:"Explore the science ↗",
    resourceLifeTitle:"Life support · NASA", resourceLifeText:"Helped us explain why breathable air and recycling are essential for a crew.", resourceLifeLink:"Read about life support ↗",
    resourceFoodTitle:"Food in space · CSA", resourceFoodText:"The Canadian Space Agency's educational toolkit inspired the garden and stored-food choice.", resourceFoodLink:"See the toolkit ↗",
    resourceCharactersTitle:"Mayito and friends", resourceCharactersText:"Illustrations of Mayito, Violeta, and Rocco come from Mi Superpoder es la Programación.", resourceCharactersLink:"Meet the project ↗",
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
    sourceLink:"See the DONKI record ↗", missionEnd:"END OF MISSION",
    winTitle:"Mission complete, team!", winText:"Mayito and friends completed all 7 days. Discoveries: ",
    loseTitle:"Mayito wants to try again!", loseText:"The mission ended on day ",
    because:" because ", reasonOxygen:"the base ran out of air", reasonEnergy:"the base ran out of power", reasonShield:"the shelter lost its protection",
    winLearning:"Great work! A base needs balance. The best choice changes with what the team needs.",
    loseLearning:"Let's try another strategy. Check the bars before choosing, and remember each day's consumption.",
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
    icon:"📡",
    title:{es:"Un mensaje para la Tierra",en:"A message to Earth"},
    story:{es:"Rocco quiere contarle a la Tierra lo que aprendimos. La radio usa energía y la respuesta tarda un poquito. ¿Enviamos el mensaje ahora?",en:"Rocco wants to tell Earth what we learned. The radio uses power, and the reply takes a little time. Should we send the message now?"},
    choices:[
      {title:{es:"Enviar el mensaje",en:"Send the message"},detail:{es:"Compartimos los resultados con la Tierra.",en:"Share our results with Earth."},change:{energy:-2,science:1},result:{es:"¡Mensaje enviado! Esperaremos un momento para recibir la respuesta.",en:"Message sent! We must wait a moment for the reply."},why:{es:"Las señales de radio no viajan de forma instantánea y los equipos necesitan energía.",en:"Radio signals do not travel instantly, and the equipment needs power."}},
      {title:{es:"Cargar baterías primero",en:"Charge batteries first"},detail:{es:"La Tierra esperará nuestros resultados.",en:"Earth will wait for our results."},change:{energy:3},cost:{es:"Mensaje retrasado",en:"Delayed message"},result:{es:"Tenemos más energía, pero la Tierra aún no conoce los resultados.",en:"We have more power, but Earth does not know the results yet."},why:{es:"Ahorrar energía puede retrasar una tarea importante de la misión.",en:"Saving power can delay an important mission task."}}
    ]
  },
  {
    icon:"☀️", nasa:true,
    title:{es:"¡Alerta del Sol!",en:"Solar alert!"},
    story:{es:"Mayito recibe una alerta inspirada en un evento solar real de 2017. Las partículas del Sol pueden ser peligrosas. ¿Preparamos mejor el refugio o seguimos investigando?",en:"Mayito receives an alert inspired by a real solar event from 2017. Particles from the Sun can be dangerous. Should we improve the shelter or keep exploring?"},
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
// Cada pareja corresponde a las dos opciones de un día.
const CHOICE_ICONS = [
  ["⚡", "🫧"], ["🌱", "🥫"], ["📡", "🔋"], ["🛡️", "🔭"],
  ["🫧", "⚡"], ["🛡️", "🔭"], ["🔬", "🫧"]
];
const RESOURCE_ICONS = {oxygen:"🫧", energy:"⚡", shield:"🛡️"};
const $ = id => document.getElementById(id);
let language = "es";
let state = null;

function translate(value) {
  return typeof value === "string" ? value : value[language];
}
function label(key) {
  return TEXT[language][key];
}
function donkiDate() {
  const date = new Date(NASA_EVENT.eventTime);
  return new Intl.DateTimeFormat(language === "es" ? "es-CO" : "en-US", {day:"numeric", month:"long", year:"numeric", timeZone:"UTC"}).format(date);
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
  renderDonkiCard();
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
  state = {day:0, oxygen:8, energy:8, shield:4, science:0, selected:null, ended:false};
  show("play");
  renderDay();
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
  box.classList.toggle("hidden", !event.nasa);
  box.replaceChildren();
  if (!event.nasa) return;
  const strong = document.createElement("strong");
  strong.textContent = label("sourceLead") + ": ";
  const words = document.createTextNode(label("sourceBody").replace("{date}", donkiDate()).replace("{time}", NASA_EVENT.eventTime.slice(11, 16)) + " ");
  const link = document.createElement("a");
  link.href = NASA_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label("sourceLink");
  box.append(strong, words, link);
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
      const icon = document.createElement("span");
      icon.className = "preview-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = RESOURCE_ICONS[key];
      const values = document.createElement("span");
      values.textContent = resourceName(key) + " " + state[key] + "→" + Math.max(0, forecast[key]);
      chip.append(icon, values);
      preview.append(chip);
    }
    if (choice.change.science) {
      const discovery = document.createElement("span");
      discovery.className = "preview-chip discovery";
      discovery.textContent = "⭐ +1 " + label("discoveries");
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
  $("event-story").textContent = translate(event.story);
  renderSource(event);
  renderResources();
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
  state.oxygen = after.oxygen;
  state.energy = after.energy;
  state.shield = after.shield;
  state.science = after.science;
  state.selected = index;
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
  const next = document.createElement("button");
  next.className = "primary";
  next.type = "button";
  next.textContent = failed() || state.day === DAYS.length - 1 ? label("seeResult") + " →" : label("next") + " →";
  next.addEventListener("click", nextDay);
  box.append(title, message, why, next);
}
function nextDay() {
  if (failed() || state.day === DAYS.length - 1) {
    state.ended = true;
    show("ending");
    renderEnding();
  } else {
    state.day += 1;
    state.selected = null;
    renderDay();
  }
  window.scrollTo({top:0, behavior:"smooth"});
}
function renderEnding() {
  const lost = failed();
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
$("lang-es").addEventListener("click", () => setLanguage("es"));
$("lang-en").addEventListener("click", () => setLanguage("en"));
setLanguage("es");

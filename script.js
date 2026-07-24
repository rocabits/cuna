// ========== CONSTANTS ==========
var APP_ID = 'cuna';
var STORAGE_KEY = 'cuna-data';
var CACHE_KEY = 'cuna-cache';

var WELCOME_KEY = 'cuna-welcome-shown';
var ADMIN_EMAIL = 'roca.jlr@gmail.com';

// ========== CONTENT DATA ==========
var CUENTOS = [
  {
    id: 'tres-cerditos',
    title: 'Los tres cerditos',
    type: 'cuento',
    cover: 'cuento',
    text: 'Hab\u00EDa una vez tres peque\u00F1os cerditos que viv\u00EDan felices en el campo, cerca del bosque. Cada uno decidi\u00F3 construir su propia casa. El primer cerdito, que era muy juguet\u00F3n, hizo su casa de paja. \u2014\u00A1Ya est\u00E1 lista!\u2014 dijo contento, y se puso a bailar. El segundo cerdito, un poco m\u00E1s cuidadoso, construy\u00F3 su casa de madera. \u2014\u00A1Qu\u00E9 bonita me qued\u00F3!\u2014 dijo, y se sent\u00F3 a descansar. El tercer cerdito, que era muy trabajador y paciente, construy\u00F3 su casa de ladrillos. \u2014Una casa fuerte y segura\u2014 dijo mientras colocaba \u00FAltimo ladrillo.\n\nUna noche, mientras la luna brillaba en lo alto, el lobo asom\u00F3 por el bosque. Pero no era un lobo feroz, sino un lobo solitario que buscaba un lugar donde calentarse. Al ver la casita de paja, llam\u00F3 a la puerta. El cerdito, asustado, no quiso abrir. El lobo suspir\u00F3 y sopl\u00F3 suavemente, solo un poco, y la paja vol\u00F3 por los aires. El cerdito corri\u00F3 a la casa de madera de su hermano.\n\nEl lobo lleg\u00F3 hasta la casa de madera. Llam\u00F3 de nuevo, con voz tranquila. \u2014Solo busco un sitio donde descansar\u2014 dijo. Pero los cerditos no abrieron. El lobo suspir\u00F3 otra vez, y sopl\u00F3 con un poco m\u00E1s de fuerza. La madera cruji\u00F3 y se desmoron\u00F3. Los dos cerditos corrieron a la casa de ladrillos de su hermano mayor.\n\nCuando el lobo lleg\u00F3 a la casa de ladrillos, llam\u00F3 a la puerta con suavidad. Los tres cerditos, temblando, no abrieron. El lobo sopl\u00F3 y sopl\u00F3 con todas sus fuerzas, pero la casa de ladrillos no se movi\u00F3. El lobo se sent\u00F3 en el suelo, cansado y triste. Entonces el tercer cerdito, que ten\u00EDa un coraz\u00F3n bondadoso, abri\u00F3 la puerta.\n\n\u2014Entra, lobo. Fuera hace fr\u00EDo y todos merecemos un hogar\u2014 dijo el cerdito.\n\nEl lobo entr\u00F3 agradecido. Los otros cerditos, al ver que el lobo solo necesitaba compa\u00F1\u00EDa, prepararon una sopa caliente. Esa noche, los tres cerditos y el lobo compartieron la cena junto a la chimenea, mientras la luna brillaba sobre el tejado de ladrillos. Y desde aquel d\u00EDa, todos comprendieron que un hogar no es solo un lugar hecho de paredes firmes, sino un sitio donde el coraz\u00F3n encuentra refugio. Fin.',
    duration: 240,
    illustration: 'house'
  },
  {
    id: 'estrella-dormir',
    title: 'La estrella que no quer\u00EDa dormir',
    type: 'cuento',
    cover: 'cuento',
    text: 'En lo m\u00E1s alto del cielo, all\u00ED donde las nubes se convierten en algod\u00F3n, viv\u00EDa una peque\u00F1a estrella llamada Luminita. Luminita ten\u00EDa un brillo especial, un resplandor dorado que iluminaba todo a su alrededor. Pero Luminita ten\u00EDa un secreto: no quer\u00EDa dormir nunca.\n\nCada noche, cuando el sol se escond\u00EDa tras las monta\u00F1as y la luna comenzaba su paseo plateado, todas las estrellas del cielo se preparaban para descansar. Se acurrucaban en sus nubes, cerraban sus ojitos de luz y se mec\u00EDan con el viento. Pero Luminita no. Ella segu\u00EDa brillando con todas sus fuerzas.\n\n\u2014Luminita, es hora de dormir\u2014 le dec\u00EDa suavemente la luna, con su voz de plata.\n\n\u2014No quiero\u2014 respond\u00EDa la peque\u00F1a estrella\u2014. Me encanta brillar, me encanta ver el mundo desde aqu\u00ED arriba. Si me duermo, me perder\u00E9 algo bonito.\n\nLa luna sonri\u00F3 con ternura. \u2014Querida Luminita, descansar tambi\u00E9n es parte de la magia. Cuando duermes, tus sue\u00F1os se convierten en luz para otros.\n\nPero Luminita no entend\u00EDa. Sigui\u00F3 brillando toda la noche, hasta que sus rayos empezaron a titilar d\u00E9bilmente. Estaba agotada, pero no quer\u00EDa rendirse.\n\nEntonces ocurri\u00F3 algo maravilloso. Un ni\u00F1o que estaba en su cama, mirando por la ventana, vi\u00F3 a Luminita y susurr\u00F3: \u2014Mira, mam\u00E1, hay una estrella que no se duerme. Me har\u00E1 compa\u00F1\u00EDa mientras sue\u00F1o.\n\nAl escuchar aquellas palabras, Luminita sinti\u00F3 una calidez en su coraz\u00F3n de luz. Comprendi\u00F3 que no necesitaba estar despierta para acompa\u00F1ar a los ni\u00F1os. Pod\u00EDa brillar en sus sue\u00F1os, ser la luz que guiara sus aventuras mientras dorm\u00EDan.\n\n\u2014Est\u00E1 bien\u2014 dijo Luminita bostezando\u2014. Esta noche voy a dormir, y ma\u00F1ana ser\u00E9 la estrella m\u00E1s brillante para ti.\n\nY la luna arrop\u00F3 a Luminita con un manto de nubes suaves. La peque\u00F1a estrella cerr\u00F3 sus ojitos y, por primera vez, se durmi\u00F3 profundamente. Esa noche, todos los ni\u00F1os que miraron al cielo vieron un brillo especial en sus sue\u00F1os: era Luminita, que hab\u00EDa aprendido que descansar tambi\u00E9n es una forma de brillar. Fin.',
    duration: 300,
    illustration: 'star'
  },
  {
    id: 'conejo-luna',
    title: 'El conejo y la luna',
    type: 'cuento',
    cover: 'cuento',
    text: 'Hab\u00EDa una vez un conejito blanco llamado Copito que viv\u00EDa en una madriguera bajo un gran \u00E1rbol. Copito era un conejo curioso y juguet\u00F3n, pero cuando llegaba la noche, algo cambiaba. El peque\u00F1o conejo no pod\u00EDa dormir.\n\nSe daba vueltas en su camita de hojas secas, contaba ovejas, contaba flores, pero el sue\u00F1o no llegaba. \u2014\u00BFQu\u00E9 pasa, Copito?\u2014 le preguntaba su mam\u00E1 coneja, acarici\u00E1ndole las orejas con suavidad.\n\n\u2014No lo s\u00E9, mam\u00E1. Intento dormir, pero algo me lo impide\u2014 respond\u00EDa el conejito con los ojitos muy abiertos.\n\nUna noche, Copito decidi\u00F3 salir de la madriguera. La luna estaba llena, grande y brillante, cubriendo el campo con su luz plateada. Copito se sent\u00F3 sobre una piedra y mir\u00F3 hacia arriba.\n\n\u2014Se\u00F1ora Luna\u2014 dijo en voz baja\u2014, \u00BFt\u00FA tambi\u00E9n tienes problemas para dormir?\n\nPara su sorpresa, la luna parpade\u00F3. Y luego, con una voz suave como la brisa, le respondi\u00F3: \u2014Querido Copito, yo nunca duermo, pero no porque no pueda. Es porque tengo un trabajo muy importante: velar por todos los que sue\u00F1an. T\u00FA no tienes que velar por nadie. T\u00FA solo tienes que dejarte llevar.\n\n\u2014\u00BFDejarme llevar?\u2014 pregunt\u00F3 el conejito.\n\n\u2014S\u00ED\u2014 dijo la luna\u2014. Cierra tus ojitos y piensa en algo bonito. Puede ser el campo lleno de flores, el r\u00EDo que canta al pasar, o el abrazo calientito de tu mam\u00E1. No intentes dormir. Solo piensa en cosas bonitas y d\u00E9jate mecer por la noche.\n\nCopito cerr\u00F3 los ojos. Pens\u00F3 en el campo de margaritas donde jugaba con sus amigos. Pens\u00F3 en el r\u00EDo que bajaba cantando desde la monta\u00F1a. Pens\u00F3 en el abrazo de su mam\u00E1, tan caliente y tan suave. Y sin darse cuenta, el sue\u00F1o lleg\u00F3, silencioso como una mariposa.\n\nCuando la mam\u00E1 coneja sali\u00F3 a buscarlo, encontr\u00F3 a Copito dormido sobre la piedra, con una sonrisa en su carita blanca. La luna lo cubr\u00EDa con su manto plateado.\n\n\u2014Gracias, Se\u00F1ora Luna\u2014 susurr\u00F3 la mam\u00E1 coneja.\n\nY desde aquella noche, Copito descubri\u00F3 que dormir no es olvidar el d\u00EDa, sino guardar los momentos bonitos en el coraz\u00F3n para que los sue\u00F1os los hagan crecer. Fin.',
    duration: 270,
    illustration: 'rabbit'
  }
];

var NANAS = [
  {
    id: 'luna-llego',
    title: 'La luna ya lleg\u00F3',
    type: 'nana',
    cover: 'nana',
    lyrics: 'La luna ya lleg\u00F3\ncon su manto de plata\ncierra los ojitos\nque la noche te canta.\n\nDuerme mi peque\u00F1o\nque el viento ya se fue\nla luna te acaricia\ncon un rayo de miel.\n\nEstrellas centellean\nen el cielo al pasar\nmientras t\u00FA descansas\nsin nada que pensar.\n\nCierra suavemente\nlos ojitos al dormir\nque la luna vela\ntu sue\u00F1o hasta el fin.\n\nLa luna ya lleg\u00F3\ncon su manto de plata\nbuenas noches, mi vida\nque la noche te canta.',
    duration: 90,
    illustration: 'moon',
    melody: 'C4 D4 E4 G4 A4 G4 E4 D4 C4'
  },
  {
    id: 'duerme-tesoro',
    title: 'Duerme, mi tesoro',
    type: 'nana',
    cover: 'nana',
    lyrics: 'Duerme mi tesoro\nque la noche est\u00E1 en calma\nlas estrellas te vigilan\ncon su luz en el alma.\n\nEl viento susurra\nuna dulce canci\u00F3n\nque mece tu cunita\ncon mucho coraz\u00F3n.\n\nCierra tus ojitos\nd\u00E9jate llevar\nla noche es un sue\u00F1o\nque debes abrazar.\n\nDuerme, duerme\nque la luna te ve\nduerme, duerme\nque ma\u00F1ana amanecer\u00E9.\n\nDuerme mi tesoro\nque la noche est\u00E1 en calma\nque tus sue\u00F1os sean\nun abrazo en el alma.',
    duration: 85,
    illustration: 'moon',
    melody: 'E4 F4 G4 A4 C5 A4 G4 F4 E4'
  },
  {
    id: 'estrellas-mar',
    title: 'Estrellas en el mar',
    type: 'nana',
    cover: 'nana',
    lyrics: 'Estrellas en el mar\nreflejos de cristal\nla luna baila suave\nsobre el agua al pasar.\n\nLas olas susurran\nuna dulce canci\u00F3n\nque acuna tus sue\u00F1os\ncon mucho amor.\n\nUn pez de colores\nnada hacia el coral\ndonde los sue\u00F1os duermen\nen un lecho de sal.\n\nCierra los ojitos\nsi\u00E9ntete flotar\ncomo una pluma suave\nque viaja por el mar.\n\nEstrellas en el mar\nreflejos de cristal\nbuenas noches, peque\u00F1o\nque la paz te venga a buscar.',
    duration: 80,
    illustration: 'moon',
    melody: 'D4 E4 F4 G4 A4 G4 F4 E4 D4'
  }
];

var CUNA_VOICE_LINES = {
  welcome: 'Hola. Soy Cuna. Me alegra mucho que est\u00E9s aqu\u00ED. Ponte c\u00F3modo, porque esta noche vamos a compartir una bonita historia antes de dormir.',
  preStory: 'Esta noche he elegido una historia muy especial para ti. Espero que la disfrutes.',
  postStory: 'Ha sido un placer acompa\u00F1arte. Ahora descansa, sue\u00F1a bonito\u2026 y recuerda que ma\u00F1ana volver\u00E9 con nuevas historias. Buenas noches.',
  preNana: 'Ahora, para cerrar la noche, voy a cantar una nana. Deja que la m\u00FAsica te lleve mientras cierras los ojos.',
  farewell: 'Gracias por compartir esta noche conmigo. Que tengas dulces sue\u00F1os. Hasta ma\u00F1ana.',
  postStoryWithNana: 'El cuento ha terminado, pero la noche sigue. Ahora escuchemos una nana juntos.'
};

// ========== STATE ==========
var supabaseClient = null;
var supabaseChannel = null;
var currentUserEmail = null;
var currentView = 'home';
var currentPlaying = null;
var isPlaying = false;
var isPaused = false;
var favorites = [];
var listenHistory = [];
var settings = {
  welcomeVoice: true,
  autoNana: true
};
var welcomeShown = false;

// Audio state
var speechSynth = window.speechSynthesis;
var currentUtterance = null;
var audioContext = null;
var audioGain = null;
var audioOscillators = [];
var audioReverb = null;
var audioPlaying = false;
var playerTimer = null;
var playerProgress = 0;
var playerTextIndex = 0;
// ========== STORAGE ==========
function loadData() {
  try {
    var s = localStorage.getItem(STORAGE_KEY);
    if (s) {
      var d = JSON.parse(s);
      favorites = d.favorites || [];
      listenHistory = d.listenHistory || [];
    }
  } catch(e) {}
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      favorites: favorites,
      listenHistory: listenHistory
    }));
  } catch(e) {}
}

function cacheData(data) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch(e) {}
}

function loadCached() {
  try { var s = localStorage.getItem(CACHE_KEY); return s ? JSON.parse(s) : null; } catch(e) { return null; }
}

function loadWelcomeFlag() {
  try {
    return localStorage.getItem(WELCOME_KEY) === 'true';
  } catch(e) { return false; }
}

function setWelcomeShown() {
  try {
    localStorage.setItem(WELCOME_KEY, 'true');
  } catch(e) {}
}

// ========== SUPABASE ==========
function initSupabase() {
  if (typeof supabase !== 'undefined' && supabase.createClient) {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
}

function handleGoogleLogin() {
  if (!supabaseClient) return;
  var btn = document.getElementById('btnGoogleLogin');
  btn.disabled = true;
  btn.innerHTML = '<svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2v4"/></svg> Iniciando sesi\u00F3n\u2026';
  supabaseClient.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin + window.location.pathname }
  });
}

function checkSession() {
  if (!supabaseClient) return Promise.resolve(null);
  return supabaseClient.auth.getSession().then(function(result) {
    var session = result.data ? result.data.session : null;
    if (!session) return null;
    return supabaseClient.from('allowed_emails')
      .select('email').in('app_id', [APP_ID, 'fifty', 'all'])
      .eq('email', session.user.email).maybeSingle()
      .then(function(res) {
        if (res.data) {
          currentUserEmail = session.user.email;
          return session.user.email;
        }
        supabaseClient.auth.signOut();
        showToast('No tienes permiso para acceder');
        return null;
      }).catch(function() {
        currentUserEmail = session.user.email;
        return session.user.email;
      });
  }).catch(function() { return null; });
}

function supabaseSave(data) {
  if (!supabaseClient || !currentUserEmail) return Promise.resolve();
  return supabaseClient.from('app_data').upsert({
    app_id: APP_ID,
    data: data,
    updated_at: new Date().toISOString()
  }).then(function(res) {
    if (res.error) throw res.error;
  });
}

function supabaseLoad() {
  if (!supabaseClient || !currentUserEmail) return Promise.resolve(null);
  return supabaseClient.from('app_data')
    .select('data').eq('app_id', APP_ID).maybeSingle()
    .then(function(res) {
      if (res.data && res.data.data) return res.data.data;
      return null;
    }).catch(function() { return null; });
}

function supabaseOnChange(payload) {
  if (!payload.new || !payload.new.data) return;
  var incoming = payload.new.data;
  if (!incoming.favorites) return;
  favorites = incoming.favorites || [];
  listenHistory = incoming.listenHistory || [];
  cacheData(incoming);
  refreshCurrentView();
}

function supabaseSubscribe() {
  if (!supabaseClient || !currentUserEmail) return;
  supabaseChannel = supabaseClient.channel('cuna-changes')
    .on('postgres_changes',
      { event: '*', schema: 'public', table: 'app_data', filter: 'app_id=eq.' + APP_ID },
      supabaseOnChange
    )
    .subscribe();
}

function supabaseUnsubscribe() {
  if (supabaseChannel) {
    supabaseClient.removeChannel(supabaseChannel);
    supabaseChannel = null;
  }
}

// ========== DATA LOADING ==========
function loadAppData() {
  return supabaseLoad().then(function(data) {
    if (data) {
      favorites = data.favorites || [];
      listenHistory = data.listenHistory || [];
      cacheData(data);
      return true;
    }
    var cached = loadCached();
    if (cached) {
      favorites = cached.favorites || [];
      listenHistory = cached.listenHistory || [];
      return true;
    }
    return true;
  });
}

function saveToSupabase() {
  cacheData({ favorites: favorites, listenHistory: listenHistory });
  saveData();
  return supabaseSave({ favorites: favorites, listenHistory: listenHistory });
}

// ========== CUNA VOICE (TTS) ==========
function cunaSpeak(text, callback) {
  if (!window.speechSynthesis) {
    if (callback) callback();
    return;
  }

  stopSpeech();

  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-ES';
  utterance.rate = 0.85;
  utterance.pitch = 1.1;
  utterance.volume = 1;

  var voices = window.speechSynthesis.getVoices();
  var spanishVoice = null;
  for (var i = 0; i < voices.length; i++) {
    if (voices[i].lang.startsWith('es')) {
      spanishVoice = voices[i];
      break;
    }
  }
  if (spanishVoice) utterance.voice = spanishVoice;

  currentUtterance = utterance;

  if (callback) {
    utterance.onend = callback;
    utterance.onerror = callback;
  }

  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  currentUtterance = null;
}

function speakWelcome() {
  if (!settings.welcomeVoice) return;
  if (welcomeShown) return;
  setWelcomeShown();
  setTimeout(function() {
    cunaSpeak(CUNA_VOICE_LINES.welcome);
  }, 500);
}

// ========== MUSIC PLAYER (Web Audio API) ==========
function initAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

function playNote(freq, startTime, duration, gainValue) {
  if (!audioContext) return null;
  var osc = audioContext.createOscillator();
  var gain = audioContext.createGain();

  osc.type = 'sine';
  osc.frequency.value = freq;

  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(gainValue || 0.12, startTime + 0.05);
  gain.gain.setValueAtTime(gainValue || 0.12, startTime + duration - 0.15);
  gain.gain.linearRampToValueAtTime(0, startTime + duration);

  osc.connect(gain);
  gain.connect(audioContext.destination);

  osc.start(startTime);
  osc.stop(startTime + duration);

  audioOscillators.push({ osc: osc, gain: gain, stopTime: startTime + duration });
  return { osc: osc, gain: gain };
}

function noteToFreq(note) {
  var notes = { 'C': 261.63, 'D': 293.66, 'E': 329.63, 'F': 349.23, 'G': 392.00, 'A': 440.00, 'B': 493.88 };
  var octave = parseInt(note.slice(-1));
  var name = note.slice(0, -1);
  var baseFreq = notes[name] || 261.63;
  return baseFreq * Math.pow(2, octave - 4);
}

function playLullaby(melodyStr) {
  stopMusic();

  initAudioContext();

  var notes = melodyStr.split(' ');
  var noteDuration = 0.55;
  var gap = 0.05;
  var totalDuration = notes.length * (noteDuration + gap);
  var now = audioContext.currentTime;

  for (var i = 0; i < notes.length; i++) {
    var freq = noteToFreq(notes[i]);
    var start = now + i * (noteDuration + gap);
    // Add gentle vibrato effect using a second oscillator slightly detuned
    playNote(freq, start, noteDuration * 0.9, 0.10);
    playNote(freq * 1.005, start, noteDuration * 0.9, 0.05);
    // Soft harmony (3rd above) on some notes
    if (i % 3 === 0) {
      playNote(freq * 1.25, start, noteDuration * 0.7, 0.04);
    }
  }

  audioPlaying = true;

  // Schedule stop
  var stopTime = totalDuration * 1000 + 500;
  if (playerTimer) clearTimeout(playerTimer);
  playerTimer = setTimeout(function() {
    audioPlaying = false;
  }, stopTime);

  return totalDuration;
}

function stopMusic() {
  for (var i = 0; i < audioOscillators.length; i++) {
    try {
      if (audioOscillators[i].osc) {
        audioOscillators[i].osc.stop();
        audioOscillators[i].osc.disconnect();
      }
      if (audioOscillators[i].gain) {
        audioOscillators[i].gain.disconnect();
      }
    } catch(e) {}
  }
  audioOscillators = [];
  audioPlaying = false;
  if (playerTimer) {
    clearTimeout(playerTimer);
    playerTimer = null;
  }
}

function togglePlayPause() {
  if (!currentPlaying) return;
  if (currentPlaying.type === 'cuento') {
    toggleStoryPlayback();
  } else {
    toggleNanaPlayback();
  }
}

// ========== STORY PLAYER ==========
var storyParagraphs = [];
var currentParagraphIndex = 0;
var storyTimer = null;

function startStory(content) {
  currentPlaying = content;
  storyParagraphs = content.text.split('\n').filter(function(p) { return p.trim(); });
  currentParagraphIndex = 0;
  playerProgress = 0;
  isPlaying = true;
  isPaused = false;
  playerTextIndex = 0;

  renderPlayer(content);

  // Speak pre-story message
  cunaSpeak(CUNA_VOICE_LINES.preStory, function() {
    if (isPlaying && !isPaused) {
      speakNextParagraph();
    }
  });
}

function speakNextParagraph() {
  if (!isPlaying || isPaused) return;
  if (currentParagraphIndex >= storyParagraphs.length) {
    finishStory();
    return;
  }

  var paragraph = storyParagraphs[currentParagraphIndex].trim();
  if (!paragraph) {
    currentParagraphIndex++;
    speakNextParagraph();
    return;
  }

  highlightText(currentParagraphIndex);

  var duration = Math.max(paragraph.length * 0.07, 3);
  cunaSpeak(paragraph, function() {
    currentParagraphIndex++;
    updateProgress();
    if (isPlaying && !isPaused) {
      speakNextParagraph();
    }
  });

  updateProgress();
}

function highlightText(index) {
  var container = document.getElementById('playerTextContainer');
  if (!container) return;

  var paragraphs = container.querySelectorAll('p');
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.remove('highlight');
  }
  if (paragraphs[index]) {
    paragraphs[index].classList.add('highlight');
    paragraphs[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function updateProgress() {
  if (!currentPlaying) return;
  var total = storyParagraphs.length;
  var current = currentParagraphIndex;
  playerProgress = total > 0 ? (current / total) * 100 : 0;
  updateProgressBar();
}

function finishStory() {
  isPlaying = false;
  updateProgressBar();

  cunaSpeak(CUNA_VOICE_LINES.postStory, function() {
    if (settings.autoNana && NANAS.length > 0) {
      // Play first nana automatically
      cunaSpeak(CUNA_VOICE_LINES.postStoryWithNana, function() {
        var firstNana = NANAS[0];
        startNana(firstNana);
      });
    } else {
      setTimeout(function() {
        switchView('home');
      }, 2000);
    }
  });
}

function toggleStoryPlayback() {
  if (!currentPlaying || currentPlaying.type !== 'cuento') return;
  if (isPaused) {
    isPaused = false;
    if (currentParagraphIndex < storyParagraphs.length) {
      speakNextParagraph();
    }
    updatePlayButton();
  } else {
    isPaused = true;
    stopSpeech();
    updatePlayButton();
  }
}

// ========== NANA PLAYER ==========
function startNana(content) {
  currentPlaying = content;
  isPlaying = true;
  isPaused = false;
  playerProgress = 0;

  renderPlayer(content);

  var melodyDuration = 0;
  if (content.melody) {
    melodyDuration = playLullaby(content.melody);
  }

  cunaSpeak(content.lyrics, function() {
    // Nana finished
  });

  // Progress simulation for nana
  var totalDuration = melodyDuration > 0 ? melodyDuration * 1000 : content.duration * 1000;
  if (playerTimer) clearTimeout(playerTimer);
  var startTime = Date.now();
  playerTimer = setInterval(function() {
    var elapsed = Date.now() - startTime;
    playerProgress = Math.min((elapsed / totalDuration) * 100, 100);
    updateProgressBar();
    if (elapsed >= totalDuration) {
      clearInterval(playerTimer);
      playerTimer = null;
      isPlaying = false;
      finishNana();
    }
  }, 200);
}

function finishNana() {
  isPlaying = false;
  updateProgressBar();
  cunaSpeak(CUNA_VOICE_LINES.farewell, function() {
    setTimeout(function() {
      switchView('home');
    }, 2000);
  });
}

function toggleNanaPlayback() {
  if (isPaused) {
    isPaused = false;
    updatePlayButton();
    if (currentPlaying && currentPlaying.type === 'nana') {
      cunaSpeak(currentPlaying.lyrics);
    }
  } else {
    isPaused = true;
    stopSpeech();
    stopMusic();
    if (playerTimer) {
      clearInterval(playerTimer);
      playerTimer = null;
    }
    updatePlayButton();
  }
}

function stopAllAudio() {
  stopSpeech();
  stopMusic();
  isPlaying = false;
  isPaused = false;
  if (playerTimer) {
    clearInterval(playerTimer);
    playerTimer = null;
  }
  if (storyTimer) {
    clearTimeout(storyTimer);
    storyTimer = null;
  }
  updatePlayButton();
}

// ========== PLAYER UI ==========
function renderPlayer(content) {
  document.getElementById('headerTitle').textContent = content.type === 'cuento' ? 'Escuchando cuento' : 'Escuchando nana';

  var container = document.getElementById('playerContent');
  var coverClass = content.type === 'cuento' ? 'cuento-cover' : 'nana-cover';
  var typeName = content.type === 'cuento' ? 'Cuento' : 'Nana';

  var displayText = '';
  if (content.type === 'cuento') {
    var pars = content.text.split('\n');
    for (var i = 0; i < pars.length; i++) {
      if (pars[i].trim()) {
        displayText += '<p>' + pars[i].trim() + '</p>';
      }
    }
  } else {
    var lines = content.lyrics.split('\n');
    for (var j = 0; j < lines.length; j++) {
      displayText += '<p>' + lines[j] + '</p>';
    }
  }

  container.innerHTML =
    '<div class="player-container">' +
      '<div class="player-cover ' + coverClass + '">' +
        getCoverSVG(content.illustration) +
        '<div class="playing-indicator" id="playingIndicator">' +
          '<span></span><span></span><span></span><span></span>' +
        '</div>' +
      '</div>' +
      '<h2 class="player-title">' + escapeHtml(content.title) + '</h2>' +
      '<p class="player-type">' + typeName + '</p>' +
      '<div class="player-text" id="playerTextContainer">' + displayText + '</div>' +
      '<div class="player-progress">' +
        '<div class="progress-bar" id="progressBar">' +
          '<div class="progress-fill" id="progressFill"></div>' +
        '</div>' +
        '<div class="progress-time">' +
          '<span id="progressCurrent">0:00</span>' +
          '<span id="progressTotal">' + formatTime(content.duration) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="player-controls">' +
        '<button class="player-btn player-btn-secondary" id="btnStop" aria-label="Detener">' +
          '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>' +
        '</button>' +
        '<button class="player-btn player-btn-play" id="btnPlayPause" aria-label="Reproducir">' +
          '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" id="playIcon">' +
            '<polygon points="6 3 20 12 6 21 6 3"/>' +
          '</svg>' +
        '</button>' +
      '</div>' +
    '</div>';

  // Bind events
  setTimeout(function() {
    var btnPlay = document.getElementById('btnPlayPause');
    var btnStop = document.getElementById('btnStop');

    if (btnPlay) btnPlay.addEventListener('click', togglePlayPause);
    if (btnStop) btnStop.addEventListener('click', function() {
      stopAllAudio();
      var target = currentPlaying && currentPlaying.type === 'cuento' ? 'cuentos' : 'nanas';
      switchView(target);
    });
  }, 50);

  switchView('player');
}

function updatePlayButton() {
  var icon = document.getElementById('playIcon');
  if (!icon) return;
  if (isPaused || !isPlaying) {
    icon.innerHTML = '<polygon points="6 3 20 12 6 21 6 3"/>';
  } else {
    icon.innerHTML = '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>';
  }
}

function updateProgressBar() {
  var fill = document.getElementById('progressFill');
  var current = document.getElementById('progressCurrent');
  if (!fill) return;
  fill.style.width = playerProgress + '%';
  if (current) {
    var totalSeconds = Math.floor((playerProgress / 100) * (currentPlaying ? currentPlaying.duration : 0));
    current.textContent = formatTime(totalSeconds);
  }
}

function formatTime(seconds) {
  var m = Math.floor(seconds / 60);
  var s = Math.floor(seconds % 60);
  return m + ':' + (s < 10 ? '0' : '') + s;
}

// ========== COVER ILLUSTRATIONS (SVG) ==========
function getCoverSVG(type) {
  switch(type) {
    case 'house':
      return '<svg viewBox="0 0 100 100" fill="none"><rect x="22" y="40" width="56" height="45" rx="3" fill="white" stroke="#2ecc71" stroke-width="2"/><polygon points="10,45 50,15 90,45" fill="#2ecc71" stroke="#27ae60" stroke-width="2"/><rect x="40" y="60" width="20" height="25" rx="2" fill="white" opacity="0.8"/><circle cx="36" cy="30" r="3" fill="white" opacity="0.6"/><circle cx="42" cy="24" r="2" fill="white" opacity="0.5"/><circle cx="60" cy="18" r="2.5" fill="white" opacity="0.7"/><circle cx="72" cy="28" r="1.5" fill="white" opacity="0.5"/></svg>';
    case 'star':
      return '<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="#f0fdf4"/><polygon points="50,8 60,30 85,35 65,52 70,78 50,64 30,78 35,52 15,35 40,30" fill="white" stroke="#27ae60" stroke-width="1.5"/><circle cx="22" cy="22" r="2" fill="white" opacity="0.6"/><circle cx="78" cy="18" r="1.5" fill="white" opacity="0.5"/><circle cx="80" cy="70" r="2" fill="white" opacity="0.7"/><circle cx="18" cy="72" r="1.5" fill="white" opacity="0.5"/><path d="M30 85 Q50 90 70 85" stroke="#d4f5e0" stroke-width="1.5" fill="none"/></svg>';
    case 'rabbit':
      return '<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="#f0fdf4"/><circle cx="50" cy="60" r="20" fill="white" stroke="#2ecc71" stroke-width="1.5"/><ellipse cx="42" cy="38" rx="8" ry="18" fill="white" stroke="#2ecc71" stroke-width="1.5"/><ellipse cx="58" cy="38" rx="8" ry="18" fill="white" stroke="#2ecc71" stroke-width="1.5"/><circle cx="44" cy="56" r="2" fill="#2d3436"/><circle cx="56" cy="56" r="2" fill="#2d3436"/><ellipse cx="50" cy="62" rx="3" ry="2" fill="white"/><circle cx="38" cy="36" r="3" fill="#f8d7da"/><circle cx="62" cy="36" r="3" fill="#f8d7da"/><path d="M50 48 L50 54" stroke="#2d3436" stroke-width="1.5"/><circle cx="50" cy="46" r="1.5" fill="white"/></svg>';
    case 'moon':
    default:
      return '<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="#f0fdf4"/><polygon points="50,8 61,36 92,36 67,55 77,87 50,68 23,87 33,55 8,36 39,36" fill="white" stroke="#27ae60" stroke-width="1.5"/></svg>';
  }
}

function getSmallCoverSVG(type) {
  if (type === 'cuento') {
    return '<svg viewBox="0 0 100 100" fill="none"><rect x="22" y="25" width="18" height="18" rx="3" fill="#2ecc71" opacity="0.3"/><rect x="44" y="25" width="18" height="18" rx="3" fill="#2ecc71" opacity="0.5"/><rect x="66" y="25" width="18" height="18" rx="3" fill="#2ecc71" opacity="0.7"/><rect x="28" y="50" width="18" height="18" rx="3" fill="#2ecc71" opacity="0.4"/><rect x="50" y="50" width="18" height="18" rx="3" fill="#2ecc71" opacity="0.6"/><rect x="38" y="40" width="18" height="18" rx="3" fill="#27ae60"/></svg>';
  }
  return '<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="35" fill="white" opacity="0.8"/><path d="M30 80 Q50 86 70 80" stroke="#d4f5e0" stroke-width="2" fill="none"/></svg>';
}

// ========== RENDER: HOME ==========
function renderHome() {
  var container = document.getElementById('homeContent');
  var greeting = welcomeShown ? 'Bienvenido de nuevo.' : CUNA_VOICE_LINES.welcome.split('. ').slice(0,2).join('. ') + '.';

  container.innerHTML =
    '<div class="home-welcome">' +

      '<p class="welcome-greeting">' + escapeHtml(greeting) + '</p>' +
      '<p class="welcome-question">\u00BFQu\u00E9 historia quieres compartir esta noche?</p>' +
      '<div class="home-options">' +
        '<button class="home-option-btn" id="btnGoCuentos">' +
          '<div class="option-icon cuentos">' +
            '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>' +
          '</div>' +
          '<div class="option-text">' +
            '<div class="option-title">Cuentos</div>' +
            '<div class="option-desc">' + CUENTOS.length + ' historias para so&ntilde;ar</div>' +
          '</div>' +
          '<svg class="option-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>' +
        '</button>' +
        '<button class="home-option-btn" id="btnGoNanas">' +
          '<div class="option-icon nanas">' +
            '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>' +
          '</div>' +
          '<div class="option-text">' +
            '<div class="option-title">Nanas</div>' +
            '<div class="option-desc">' + NANAS.length + ' canciones para arrullar</div>' +
          '</div>' +
          '<svg class="option-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>' +
        '</button>' +
      '</div>' +
    '</div>';

  setTimeout(function() {
    var btnCuentos = document.getElementById('btnGoCuentos');
    var btnNanas = document.getElementById('btnGoNanas');
    if (btnCuentos) btnCuentos.addEventListener('click', function() { switchView('cuentos'); });
    if (btnNanas) btnNanas.addEventListener('click', function() { switchView('nanas'); });
  }, 50);
}

// ========== RENDER: CUENTOS ==========
function renderCuentos() {
  var container = document.getElementById('cuentosList');
  var html = '<div class="content-list">';

  for (var i = 0; i < CUENTOS.length; i++) {
    var c = CUENTOS[i];
    html += '<div class="content-card" data-id="' + c.id + '" data-type="cuento" style="animation-delay:' + (i * 0.06) + 's">' +
      '<div class="content-card-inner">' +
        '<div class="content-cover cuento-cover">' + getCoverSVG(c.illustration) + '</div>' +
        '<div class="content-info">' +
          '<div class="content-title">' + escapeHtml(c.title) + '</div>' +
          '<div class="content-meta">' + formatTime(c.duration) + ' de cuento</div>' +
          '<div><span class="content-badge badge-cuento">Cuento</span></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  html += '</div>';
  container.innerHTML = html;
}

// ========== RENDER: NANAS ==========
function renderNanas() {
  var container = document.getElementById('nanasList');
  var html = '<div class="content-list">';

  for (var i = 0; i < NANAS.length; i++) {
    var n = NANAS[i];
    html += '<div class="content-card" data-id="' + n.id + '" data-type="nana" style="animation-delay:' + (i * 0.06) + 's">' +
      '<div class="content-card-inner">' +
        '<div class="content-cover nana-cover">' + getSmallCoverSVG('nana') + '</div>' +
        '<div class="content-info">' +
          '<div class="content-title">' + escapeHtml(n.title) + '</div>' +
          '<div class="content-meta">' + formatTime(n.duration) + ' de nana</div>' +
          '<div><span class="content-badge badge-nana">Nana</span></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  html += '</div>';
  container.innerHTML = html;
}

// ========== RENDER: USERS ==========
function renderUsuarios() {
  if (!supabaseClient) return;
      supabaseClient.from('allowed_emails').select('email').eq('app_id', 'fifty').then(function(res) {
    var total = res.data ? res.data.length : 0;
    document.getElementById('headerTitle').textContent = 'CUNA: Usuarios (' + total + ')';
    var html = '';
    if (res.data) {
      var filtered = res.data.filter(function(r) { return r.email !== currentUserEmail; });
      for (var i = 0; i < filtered.length; i++) {
        html += '<div class="player-card">' +
          '<div class="player-info"><div class="player-name">' + escapeHtml(filtered[i].email) + '</div></div>' +
          '<button class="btn-edit" data-email="' + escapeHtml(filtered[i].email) + '" aria-label="Editar usuario">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>' +
          '</button>' +
          '<button class="btn-delete" data-email="' + escapeHtml(filtered[i].email) + '" aria-label="Eliminar usuario">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>' +
          '</button></div>';
      }
    }
    document.getElementById('usuariosList').innerHTML = html || '<div class="empty-content" style="padding:48px 0;text-align:center"><p style="font-size:16px;color:var(--text-light)">No hay usuarios</p><p style="font-size:14px;color:var(--text-muted);margin-top:4px">A\u00F1ade el primer email</p></div>';
  });
}

// ========== NAVIGATION ==========
function switchView(view) {
  currentView = view;

  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function(item) {
    item.classList.toggle('active', item.dataset.view === view);
  });

  var views = ['viewHome', 'viewCuentos', 'viewNanas', 'viewPlayer', 'viewUsuarios'];
  views.forEach(function(v) {
    document.getElementById(v).classList.remove('active');
  });

  var filterBar = document.getElementById('filterBar');

  if (view === 'home') {
    document.getElementById('viewHome').classList.add('active');
    document.getElementById('bottomNav').style.display = 'flex';
    document.getElementById('btnBack').classList.remove('visible');
    document.getElementById('fabAdd').style.display = 'none';
    document.getElementById('headerTitle').textContent = 'CUNA';
    renderHome();
  } else if (view === 'cuentos') {
    document.getElementById('viewCuentos').classList.add('active');
    document.getElementById('bottomNav').style.display = 'flex';
    document.getElementById('btnBack').classList.remove('visible');
    document.getElementById('fabAdd').style.display = 'none';
    document.getElementById('headerTitle').textContent = 'Cuentos';
    renderCuentos();
  } else if (view === 'nanas') {
    document.getElementById('viewNanas').classList.add('active');
    document.getElementById('bottomNav').style.display = 'flex';
    document.getElementById('btnBack').classList.remove('visible');
    document.getElementById('fabAdd').style.display = 'none';
    document.getElementById('headerTitle').textContent = 'Nanas';
    renderNanas();
  } else if (view === 'player') {
    document.getElementById('viewPlayer').classList.add('active');
    document.getElementById('bottomNav').style.display = 'none';
    document.getElementById('btnBack').classList.add('visible');
    document.getElementById('fabAdd').style.display = 'none';
  } else if (view === 'usuarios') {
    document.getElementById('viewUsuarios').classList.add('active');
    document.getElementById('bottomNav').style.display = 'none';
    document.getElementById('btnBack').classList.add('visible');
    document.getElementById('fabAdd').style.display = '';
    renderUsuarios();
  }
}

function refreshCurrentView() {
  if (currentView === 'home') renderHome();
  else if (currentView === 'cuentos') renderCuentos();
  else if (currentView === 'nanas') renderNanas();
}

// ========== TOAST ==========
var toastTimeout;
function showToast(msg) {
  var toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(function() { toast.classList.remove('show'); }, 2500);
}

// ========== CONFIRM ==========
var confirmCallback = null;

function showConfirm(message, onConfirm, buttonText) {
  confirmCallback = onConfirm;
  document.getElementById('confirmText').textContent = message;
  document.getElementById('btnConfirmOk').textContent = buttonText || 'Eliminar';
  if (buttonText === 'Crear') {
    document.getElementById('confirmIcon').innerHTML = '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#5B7DB1" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
  } else {
    document.getElementById('confirmIcon').innerHTML = '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
  }
  document.getElementById('modalConfirm').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeConfirm() {
  confirmCallback = null;
  document.getElementById('modalConfirm').classList.remove('open');
  document.body.style.overflow = '';
}

// ========== ESCAPE HTML ==========
function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// ========== SETTINGS ==========
// ========== USER MANAGEMENT ==========
function openUsuarioModal(email) {
  document.getElementById('inviteEmail').value = email || '';
  document.getElementById('editUsuarioEmail').value = email || '';
  document.getElementById('usuarioModalTitle').textContent = email ? 'Editar usuario' : 'Nuevo usuario';
  document.getElementById('modalUsuario').classList.add('open');
  setTimeout(function() { document.getElementById('inviteEmail').focus(); }, 350);
}

function closeUsuarioModal() {
  document.getElementById('modalUsuario').classList.remove('open');
  document.getElementById('editUsuarioEmail').value = '';
}

function saveUsuario() {
  var input = document.getElementById('inviteEmail');
  var email = input.value.trim();
  if (!email || email.indexOf('@') === -1) {
    showToast('Email no v\u00E1lido');
    return;
  }
  if (!supabaseClient) return;
  var oldEmail = document.getElementById('editUsuarioEmail').value;
  var doInsert = function() {
    supabaseClient.from('allowed_emails').insert({ app_id: 'fifty', email: email }).then(function(res) {
      if (res.error) {
        showToast('Error al guardar: ' + res.error.message);
      } else {
        closeUsuarioModal();
        renderUsuarios();
        showToast(oldEmail ? 'Usuario actualizado' : 'Usuario a\u00F1adido');
      }
    });
  };
  if (oldEmail && oldEmail !== email) {
    supabaseClient.from('allowed_emails').delete().eq('app_id', 'fifty').eq('email', oldEmail).then(function(res) {
      if (res.error) {
        showToast('Error al actualizar');
      } else {
        doInsert();
      }
    });
  } else {
    doInsert();
  }
}

function removeUsuario(email) {
  showConfirm('\u00BF Eliminar a ' + email + '?', function() {
    supabaseClient.from('allowed_emails').delete().eq('app_id', 'fifty').eq('email', email).then(function(res) {
      if (res.error) {
        showToast('Error al eliminar');
      } else {
        renderUsuarios();
        showToast('Usuario eliminado');
      }
    });
  });
}

function logout() {
  supabaseUnsubscribe();
  stopAllAudio();
  if (supabaseClient) {
    supabaseClient.auth.signOut();
  }
  currentUserEmail = null;
  showLogin();
}

// ========== AUTH UI ==========
function showLogin() {
  document.getElementById('viewLogin').classList.remove('hidden');
  document.getElementById('viewApp').classList.add('hidden');
  document.getElementById('bottomNav').style.display = 'none';
}

function hideLogin() {
  document.getElementById('viewLogin').classList.add('hidden');
  document.getElementById('viewApp').classList.remove('hidden');
}

// ========== SERVICE WORKER ==========
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function(reg) {
    reg.addEventListener('updatefound', function() {
      var nuevo = reg.installing;
      if (nuevo) {
        nuevo.addEventListener('statechange', function() {
          if (this.state === 'installed' && navigator.serviceWorker.controller) {
            showToast('Nueva versi\u00F3n disponible');
            this.postMessage({ action: 'skipWaiting' });
          }
        });
      }
    });
  }).catch(function(e) {
    console.error('SW registration failed:', e);
  });

  var refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}

// ========== INIT ==========
function init() {
  initSupabase();

  // Load data from localStorage first
  loadData();
  welcomeShown = loadWelcomeFlag();

  // Build voice list (pre-warm)
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function() {
      window.speechSynthesis.getVoices();
    };
  }

  var fabAdd = document.getElementById('fabAdd');
  if (fabAdd) fabAdd.style.display = 'none';

  checkSession().then(function(email) {
    if (email) {
      currentUserEmail = email;

      loadAppData().then(function() {
        supabaseSubscribe();
        hideLogin();
        switchView('home');
        document.getElementById('bottomNav').style.display = 'flex';

        // Speak welcome if first time
        if (!welcomeShown) {
          speakWelcome();
        }

        // Logo -> admin (like FIFTY)
        document.getElementById('btnLogo').addEventListener('click', function() {
          if (email !== ADMIN_EMAIL) return;
          if (currentView === 'usuarios') {
            switchView('home');
          } else {
            switchView('usuarios');
          }
        });

        // Nav items
        document.querySelectorAll('.nav-item').forEach(function(item) {
          item.addEventListener('click', function() {
            if (isPlaying) {
              stopAllAudio();
            }
            switchView(this.dataset.view);
          });
        });

        // Back button
        document.getElementById('btnBack').addEventListener('click', function() {
          if (currentView === 'player') {
            stopAllAudio();
            var target = currentPlaying && currentPlaying.type === 'cuento' ? 'cuentos' : 'nanas';
            switchView(target);
          } else if (currentView === 'usuarios') {
            switchView('home');
          }
        });

        // FAB -> add user
        document.getElementById('fabAdd').addEventListener('click', function() {
          if (currentView === 'usuarios') {
            openUsuarioModal();
          }
        });

        // Content card clicks (delegated)
        document.getElementById('cuentosList').addEventListener('click', function(e) {
          var card = e.target.closest('.content-card');
          if (!card) return;
          var id = card.dataset.id;
          var type = card.dataset.type;
          if (isPlaying) stopAllAudio();
          for (var i = 0; i < CUENTOS.length; i++) {
            if (CUENTOS[i].id === id) {
              startStory(CUENTOS[i]);
              break;
            }
          }
        });

        document.getElementById('nanasList').addEventListener('click', function(e) {
          var card = e.target.closest('.content-card');
          if (!card) return;
          var id = card.dataset.id;
          if (isPlaying) stopAllAudio();
          for (var i = 0; i < NANAS.length; i++) {
            if (NANAS[i].id === id) {
              startNana(NANAS[i]);
              break;
            }
          }
        });

        // User management
        document.getElementById('modalUsuarioClose').addEventListener('click', closeUsuarioModal);
        document.getElementById('modalUsuarioOverlay').addEventListener('click', closeUsuarioModal);
        document.getElementById('usuariosList').addEventListener('click', function(e) {
          if (e.target.closest('.btn-delete')) {
            removeUsuario(e.target.closest('.btn-delete').dataset.email);
          } else if (e.target.closest('.btn-edit')) {
            openUsuarioModal(e.target.closest('.btn-edit').dataset.email);
          }
        });
        document.getElementById('usuarioForm').addEventListener('submit', function(e) {
          e.preventDefault();
          saveUsuario();
        });

        // Confirm modal
        document.getElementById('btnConfirmOk').addEventListener('click', function() {
          if (confirmCallback) confirmCallback();
          closeConfirm();
        });
        document.getElementById('btnConfirmCancel').addEventListener('click', closeConfirm);
        document.getElementById('modalConfirmOverlay').addEventListener('click', closeConfirm);

      });
    } else {
      showLogin();
      document.getElementById('btnGoogleLogin').addEventListener('click', handleGoogleLogin);
    }
  });
}

document.addEventListener('DOMContentLoaded', init);

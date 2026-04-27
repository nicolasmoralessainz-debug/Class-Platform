// ============================================================
//  CREATURE CLASSROOM — CONFIG FILE
//  Edit this file to update content each unit.
//  Do NOT edit index.html unless you know what you're doing.
// ============================================================

const CONFIG = {

  // ── SCHOOL INFO ────────────────────────────────────────────
  schoolName: "Creature Classroom",
  teacherName: "Nicolas",
  currentUnit: "Unit 1 — Traveling",

  // ── EVOLUTION THRESHOLDS ───────────────────────────────────
  stage1Points: 40,
  stage2Points: 100,

  // ── POINT ACTIONS ──────────────────────────────────────────
  // These appear as buttons when you tap a student to award points.
  // Add or remove actions here. "value" = points awarded.
  pointActions: [
    { label: "Homework completed",        value: 2 },
    { label: "Correct answer",            value: 1 },
    { label: "Volunteered / raised hand", value: 1 },
    { label: "Respectful behaviour",      value: 1 },
    { label: "Helped a classmate",        value: 1 },
    { label: "Exceptional work",          value: 2 },
    { label: "Duel participation (loss)", value: 1 },
    { label: "Duel win",                  value: 3 },
    { label: "Seasonal event bonus",      value: 3 },
  ],

  // ── STUDENTS ───────────────────────────────────────────────
  // One entry per student.
  // "id"     : unique short identifier, no spaces or accents
  // "name"   : display name shown on screen
  // "stages" : paths to the 3 PNG images for this creature
  //            Place your images inside the "creatures/" folder
  //            and reference them as "creatures/filename.png"
  students: [
    { id: "sofia",   name: "Sofía",    stages: ["creatures/sofia_0.png",   "creatures/sofia_1.png",   "creatures/sofia_2.png"]   },
    { id: "mateo",   name: "Mateo",    stages: ["creatures/mateo_0.png",   "creatures/mateo_1.png",   "creatures/mateo_2.png"]   },
    { id: "camila",  name: "Camila",   stages: ["creatures/camila_0.png",  "creatures/camila_1.png",  "creatures/camila_2.png"]  },
    { id: "lucas",   name: "Lucas",    stages: ["creatures/lucas_0.png",   "creatures/lucas_1.png",   "creatures/lucas_2.png"]   },
    { id: "valentina",name:"Valentina",stages: ["creatures/valentina_0.png","creatures/valentina_1.png","creatures/valentina_2.png"]},
    // ── Add all 29 students following the same format above ──
  ],

  // ── CHALLENGE CARDS ────────────────────────────────────────
  // These appear in the Duel screen and Cards reference screen.
  // "type" options: "fill-blank", "error-correction", "transform"
  // Replace these with your actual unit's grammar focus.
  challengeCards: [
    { type: "fill-blank",        sentence: 'She _____ (go) to school every day.',           answer: "goes"         },
    { type: "fill-blank",        sentence: 'They _____ (not / like) vegetables.',            answer: "don't like"   },
    { type: "fill-blank",        sentence: 'He _____ (have) a dog and two cats.',            answer: "has"          },
    { type: "error-correction",  sentence: 'She don\'t like apples.',                        answer: "doesn't like" },
    { type: "error-correction",  sentence: 'He go to the park on Saturdays.',                answer: "goes"         },
    { type: "transform",         sentence: 'I like cats. (negative)',                         answer: "I don't like cats." },
    { type: "transform",         sentence: 'She plays football. (question)',                  answer: "Does she play football?" },
    { type: "fill-blank",        sentence: 'My mum _____ (work) at a hospital.',             answer: "works"        },
    { type: "error-correction",  sentence: 'Do he have a sister?',                            answer: "Does he have" },
    { type: "transform",         sentence: 'They watch TV every night. (negative)',           answer: "They don't watch TV every night." },
  ],

  // ── VOCABULARY LIST ────────────────────────────────────────
  // Words shown on the Vocabulary screen for the current unit.
  vocabulary: [
    "school", "teacher", "homework", "book", "pencil",
    "friend", "game", "every day", "sometimes", "always",
    "family", "weekend", "morning", "afternoon", "evening",
  ],

  // ── ACCESSORIES ────────────────────────────────────────────
  // Accessories students can unlock using their reward points.
  // Set "seasonal: true" to mark limited-time accessories.
  // "cost" = points required to unlock.
  // "emoji" = shown as the accessory icon (no image needed).
  accessories: [
    { id: "hat_wizard",  label: "Wizard Hat",    emoji: "🧙",  cost: 5,  seasonal: false },
    { id: "hat_crown",   label: "Crown",          emoji: "👑",  cost: 5,  seasonal: false },
    { id: "wings_fairy", label: "Fairy Wings",    emoji: "🧚",  cost: 5,  seasonal: false },
    { id: "cape_hero",   label: "Hero Cape",      emoji: "🦸",  cost: 5,  seasonal: false },
    { id: "glasses",     label: "Star Glasses",   emoji: "🕶️",  cost: 5,  seasonal: false },
    { id: "sword",       label: "Sword",          emoji: "⚔️",  cost: 7,  seasonal: false },
    { id: "wand",        label: "Magic Wand",     emoji: "🪄",  cost: 7,  seasonal: false },
    { id: "shield",      label: "Shield",         emoji: "🛡️",  cost: 7,  seasonal: false },
    { id: "hat_pumpkin", label: "Pumpkin Hat 🎃", emoji: "🎃",  cost: 4,  seasonal: true  },
    { id: "hat_santa",   label: "Santa Hat 🎅",   emoji: "🎅",  cost: 4,  seasonal: true  },
    { id: "flower",      label: "Spring Flower 🌸",emoji: "🌸", cost: 4,  seasonal: true  },
  ],

  // ── REWARD CATALOG ─────────────────────────────────────────
  // Rewards students can redeem. You can edit costs here.
  // These do NOT change per unit — edit them as needed across the year.
  rewards: [
    // Tier 1
    { id: "sticker",      label: "Sticker on notebook",              cost: 3,  tier: 1 },
    { id: "nickname",     label: "Give creature a nickname",         cost: 3,  tier: 1 },
    { id: "sit_friend",   label: "Sit next to a friend (1 activity)",cost: 4,  tier: 1 },
    { id: "candy",        label: "Piece of candy or snack",          cost: 5,  tier: 1 },
    { id: "remark",       label: "Positive remark in teacher's book",cost: 5,  tier: 1 },
    { id: "board_week",   label: "Creature on classroom board (1 wk)",cost: 5, tier: 1 },
    // Tier 2
    { id: "warmup_game",  label: "Choose the warm-up game",          cost: 7,  tier: 2 },
    { id: "duel_token",   label: "Challenge Token (start a Duel)",   cost: 7,  tier: 2 },
    { id: "prize_box",    label: "Small prize from prize box",        cost: 8,  tier: 2 },
    { id: "duel_shield",  label: "Shield — immune to challenge (2 classes)", cost: 8, tier: 2 },
    { id: "no_cold_call", label: "No cold-calling (1 class)",        cost: 9,  tier: 2 },
    { id: "skip_hw",      label: "Skip one homework",                 cost: 9,  tier: 2 },
    { id: "helper",       label: "Be teacher's helper",              cost: 9,  tier: 2 },
    { id: "music",        label: "Choose music during activity",     cost: 10, tier: 2 },
    // Tier 3
    { id: "shiny",        label: "Shiny creature variant",           cost: 13, tier: 3 },
    { id: "choose_act",   label: "Choose class activity/game",       cost: 15, tier: 3 },
    { id: "sit_free",     label: "Sit anywhere for whole class",     cost: 15, tier: 3 },
    { id: "champion",     label: "Champion title on display (2 wks)",cost: 18, tier: 3 },
    { id: "show_tell",    label: "Show & Tell in English (2–3 mins)",cost: 18, tier: 3 },
    { id: "free_choice",  label: "Free choice reward (negotiate!)",  cost: 20, tier: 3 },
  ],
};

// ═══════════════════════════════════════════════════════════
//  CREATURE SPECIES — Edit freely. Each species needs:
//  id, name, emoji, element (must match an ELEMENTS id),
//  description, habitat, diet, passive (short text shown on profile)
// ═══════════════════════════════════════════════════════════
const SPECIES = [
  { id:'flamewing',  name:'Flamewing',  emoji:'🔥', element:'fire',   description:'A swift, hot-tempered creature born from volcanic geysers.',  habitat:'Volcanoes', diet:'Embers & lava rock', passive:'Burns through wrong answers — immune to first HP loss per duel' },
  { id:'stoneback',  name:'Stoneback',  emoji:'🪨', element:'earth',  description:'A slow but nearly indestructible creature of ancient mountains.', habitat:'Mountains', diet:'Minerals & moss', passive:'Rocky hide — starts every duel with +1 bonus HP' },
  { id:'voidfin',    name:'Voidfin',    emoji:'🌀', element:'shadow', description:'A silent, mysterious creature that slips between shadows.',     habitat:'Deep caves', diet:'Darkness & silence', passive:'Shadow step — can peek at the answer for 1s before the clock starts' },
  { id:'breezekit',  name:'Breezekit',  emoji:'💨', element:'air',    description:'A playful, fast creature that rides the winds.',               habitat:'Cloudtops', diet:'Wind currents & sunlight', passive:'Swift wings — always goes first in a duel round' },
  { id:'tideclaw',   name:'Tideclaw',   emoji:'🌊', element:'water',  description:'A calm, wise creature that lives beneath deep ocean currents.', habitat:'Ocean', diet:'Fish & coral', passive:'Tidal surge — recovers 1 HP if they answer correctly two rounds in a row' },
  { id:'thornvine',  name:'Thornvine',  emoji:'🌿', element:'earth',  description:'A gentle but fierce creature woven from living forest vines.',  habitat:'Forest', diet:'Sunlight & rainwater', passive:'Thorns — opponent loses 1 extra HP on a wrong answer when facing this creature' },
  { id:'sparkfang',  name:'Sparkfang',  emoji:'⚡', element:'air',    description:'An electric creature that crackles with unspent energy.',      habitat:'Stormclouds', diet:'Lightning bolts', passive:'Static charge — awards +1 bonus point on duel win' },
  { id:'frostmane',  name:'Frostmane',  emoji:'❄️', element:'water',  description:'A regal, icy creature from the polar reaches of the world.',   habitat:'Tundra', diet:'Snowflakes & frozen berries', passive:'Blizzard — freezes opponent animations during duel' },
];

// ═══════════════════════════════════════════════════════════
//  CREATURE ELEMENTS — Edit freely.
//  Each element needs: id, name, emoji, color (CSS hex),
//  strongAgainst (array of element ids), weakAgainst (array)
// ═══════════════════════════════════════════════════════════
const ELEMENTS = [
  { id:'fire',   name:'Fire',   emoji:'🔥', color:'#e05c2a', strongAgainst:['earth'], weakAgainst:['water'] },
  { id:'water',  name:'Water',  emoji:'🌊', color:'#3a9fd4', strongAgainst:['fire'],  weakAgainst:['air']   },
  { id:'earth',  name:'Earth',  emoji:'🪨', color:'#8b6b2a', strongAgainst:['air'],   weakAgainst:['fire']  },
  { id:'air',    name:'Air',    emoji:'💨', color:'#a0c8e0', strongAgainst:['water'], weakAgainst:['earth'] },
  { id:'shadow', name:'Shadow', emoji:'🌑', color:'#6a3dbf', strongAgainst:['air','fire'], weakAgainst:['light'] },
  { id:'light',  name:'Light',  emoji:'✨', color:'#f5c842', strongAgainst:['shadow'], weakAgainst:['earth'] },
];

// ═══════════════════════════════════════════════════════════
//  PERSONALITY TRAITS — Assigned randomly on first evolution.
//  Add or edit freely. Just needs: id, name, emoji, desc
// ═══════════════════════════════════════════════════════════
const TRAITS = [
  { id:'brave',      name:'Brave',      emoji:'🦁', desc:'Charges into duels without hesitation' },
  { id:'cunning',    name:'Cunning',    emoji:'🦊', desc:'Always finds a clever way through problems' },
  { id:'gentle',     name:'Gentle',     emoji:'🕊️', desc:'Kind-hearted and always helps classmates' },
  { id:'fierce',     name:'Fierce',     emoji:'🐯', desc:'Intense focus and never gives up' },
  { id:'mysterious', name:'Mysterious', emoji:'🌙', desc:'Nobody quite knows what they\'re thinking' },
  { id:'cheerful',   name:'Cheerful',   emoji:'☀️', desc:'Brightens every session with energy' },
  { id:'wise',       name:'Wise',       emoji:'🦉', desc:'Thinks carefully before every answer' },
  { id:'playful',    name:'Playful',    emoji:'🎉', desc:'Turns every challenge into a game' },
  { id:'stubborn',   name:'Stubborn',   emoji:'🐂', desc:'Never backs down from a challenge' },
  { id:'creative',   name:'Creative',   emoji:'🎨', desc:'Always finds unexpected solutions' },
];

// ═══════════════════════════════════════════════════════════
//  BEHAVIOUR BADGES — Awarded directly to students on profile.
//  Add or edit freely. Needs: id, emoji, name, desc
// ═══════════════════════════════════════════════════════════
const BADGES = [
  { id:'good_behaviour',  emoji:'😇', name:'Good Behaviour',    desc:'Exemplary conduct in class' },
  { id:'works_in_class',  emoji:'📚', name:'Works in Class',    desc:'Consistently on task and engaged' },
  { id:'team_player',     emoji:'🤝', name:'Team Player',       desc:'Outstanding collaboration' },
  { id:'creative_thinker',emoji:'💡', name:'Creative Thinker',  desc:'Original and inventive ideas' },
  { id:'most_improved',   emoji:'📈', name:'Most Improved',     desc:'Remarkable growth this unit' },
  { id:'helping_hand',    emoji:'🙋', name:'Helping Hand',      desc:'Always ready to help others' },
  { id:'brave_speaker',   emoji:'🎤', name:'Brave Speaker',     desc:'Speaks English with confidence' },
  { id:'homework_hero',   emoji:'✅', name:'Homework Hero',     desc:'Never misses a homework' },
  { id:'duel_legend',     emoji:'⚔️', name:'Duel Legend',       desc:'Dominant performance in duels' },
  { id:'vocab_master',    emoji:'📖', name:'Vocab Master',      desc:'Outstanding vocabulary knowledge' },
  { id:'class_champion',  emoji:'🏆', name:'Class Champion',    desc:'Top performer of the unit' },
  { id:'comeback_kid',    emoji:'🔄', name:'Comeback Kid',      desc:'Remarkable recovery after a slow start' },
];

// ═══════════════════════════════════════════════════════════
//  AMBIENT SOUNDS — Background soundscapes.
//  url: path or URL to audio file (mp3/ogg). Leave '' to skip.
// ═══════════════════════════════════════════════════════════
const AMBIENTS = [
  { id:'none',    name:'None',          emoji:'🔇', url:'' },
  { id:'forest',  name:'Forest',        emoji:'🌲', url:'https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8a73467.mp3' },
  { id:'rain',    name:'Rain',          emoji:'🌧️', url:'https://cdn.pixabay.com/audio/2022/05/13/audio_0e2c9e9e1c.mp3' },
  { id:'ocean',   name:'Ocean Waves',   emoji:'🌊', url:'https://cdn.pixabay.com/audio/2022/03/24/audio_a9c6170bf0.mp3' },
  { id:'fire',    name:'Fireplace',     emoji:'🔥', url:'https://cdn.pixabay.com/audio/2022/11/22/audio_0d7a806c4b.mp3' },
  { id:'cafe',    name:'Café Buzz',     emoji:'☕', url:'https://cdn.pixabay.com/audio/2022/10/30/audio_946b0939c2.mp3' },
  { id:'space',   name:'Space Hum',     emoji:'🚀', url:'https://cdn.pixabay.com/audio/2023/01/04/audio_754e04e1c2.mp3' },
];

// ═══════════════════════════════════════════════════════════
//  DUEL ARENA BACKGROUNDS — Add new ones here freely.
//  gradient: CSS gradient string for sky/ground split
//  groundColor: colour of the ground strip
// ═══════════════════════════════════════════════════════════
const ARENA_BACKGROUNDS = [
  { id:'meadow',   name:'Meadow',      emoji:'🌿', gradient:'linear-gradient(180deg,#87ceeb 0%,#87ceeb 55%,#5a8a3c 55%,#4a7a2c 100%)' },
  { id:'dungeon',  name:'Dungeon',     emoji:'🏰', gradient:'linear-gradient(180deg,#1a0a2e 0%,#1a0a2e 55%,#2d1040 55%,#1a0820 100%)' },
  { id:'space',    name:'Space',       emoji:'🚀', gradient:'linear-gradient(180deg,#050810 0%,#050810 55%,#0a1530 55%,#050810 100%)' },
  { id:'ocean',    name:'Ocean',       emoji:'🌊', gradient:'linear-gradient(180deg,#071525 0%,#071525 55%,#0a2040 55%,#051020 100%)' },
  { id:'forest',   name:'Forest',      emoji:'🌲', gradient:'linear-gradient(180deg,#0d1f10 0%,#0d1f10 55%,#1a3a10 55%,#0d2008 100%)' },
  { id:'volcano',  name:'Volcano',     emoji:'🌋', gradient:'linear-gradient(180deg,#2a0a00 0%,#4a1500 55%,#8b2500 55%,#5a1500 100%)' },
  { id:'snow',     name:'Snowfield',   emoji:'❄️', gradient:'linear-gradient(180deg,#c8e8f8 0%,#dff0fa 55%,#e8f4fc 55%,#c8e0f0 100%)' },
  { id:'desert',   name:'Desert',      emoji:'🏜️', gradient:'linear-gradient(180deg,#f5a623 0%,#e8922a 55%,#c8700a 55%,#a05010 100%)' },
  { id:'crystal',  name:'Crystal Cave',emoji:'💎', gradient:'linear-gradient(180deg,#0a1a3a 0%,#1a2a5a 55%,#2a3a7a 55%,#0a1a4a 100%)' },
  { id:'sakura',   name:'Sakura',      emoji:'🌸', gradient:'linear-gradient(180deg,#ffe0f0 0%,#ffc8e8 55%,#e8a0c8 55%,#d080b0 100%)' },
  { id:'storm',    name:'Thunderstorm',emoji:'⛈️', gradient:'linear-gradient(180deg,#1a1a2e 0%,#16213e 55%,#0f3460 55%,#0a2040 100%)' },
  { id:'rainbow',  name:'Rainbow',     emoji:'🌈', gradient:'linear-gradient(180deg,#a0c8ff 0%,#c8a0ff 30%,#ffa0c8 55%,#90c878 55%,#78b060 100%)' },
];

// ═══════════════════════════════════════════════════════════
//  BOSS BATTLE CONFIG
// ═══════════════════════════════════════════════════════════

// Boss skins — add your own! Use a URL or local path for img.
// Leave img:'' for the default emoji fallback.
const BOSS_SKINS = [
  { id:'dark_prof',   name:'Professor Dark',    emoji:'😈', img:'', title:'Master of Grammar' },
  { id:'dragon',      name:'Grammar Dragon',    emoji:'🐉', img:'', title:'The Conjugation Beast' },
  { id:'robot',       name:'Robo-Teacher 3000', emoji:'🤖', img:'', title:'Syntax Terminator' },
  { id:'wizard',      name:'The Vocab Wizard',  emoji:'🧙', img:'', title:'Keeper of Words' },
  { id:'ghost',       name:'Ghost Teacher',     emoji:'👻', img:'', title:'The Silent Corrector' },
  { id:'kraken',      name:'Grammar Kraken',    emoji:'🦑', img:'', title:'Deep Sea Destroyer' },
  { id:'phoenix',     name:'Blaze Phoenix',     emoji:'🔥', img:'', title:'The Fiery Examiner' },
  { id:'ice_queen',   name:'Ice Queen',         emoji:'❄️', img:'', title:'Frozen Grammar Empress' },
];

// Boss arena backgrounds — separate from duel arenas
const BOSS_ARENAS = [
  { id:'throne',   name:'Throne Room',   emoji:'👑', gradient:'linear-gradient(180deg,#1a0828 0%,#1a0828 50%,#2d0a3c 50%,#1a0520 100%)' },
  { id:'volcano',  name:'Volcano Lair',   emoji:'🌋', gradient:'linear-gradient(180deg,#2a0a00 0%,#3a1200 50%,#6b1a00 50%,#3a0a00 100%)' },
  { id:'forest',   name:'Dark Forest',    emoji:'🌲', gradient:'linear-gradient(180deg,#060d08 0%,#0a1a0d 50%,#152a10 50%,#0a1408 100%)' },
  { id:'space',    name:'Space Station',  emoji:'🚀', gradient:'linear-gradient(180deg,#020408 0%,#050a18 50%,#0a1530 50%,#030810 100%)' },
  { id:'ocean',    name:'Ocean Depths',   emoji:'🌊', gradient:'linear-gradient(180deg,#040a18 0%,#081428 50%,#0a1a38 50%,#060e20 100%)' },
  { id:'ice',      name:'Frozen Cavern',  emoji:'❄️', gradient:'linear-gradient(180deg,#d8eaf8 0%,#c0d8f0 50%,#a8c8e8 50%,#90b8d8 100%)' },
  { id:'shadow',   name:'Shadow Realm',   emoji:'🌑', gradient:'linear-gradient(180deg,#0a0a0a 0%,#141414 50%,#1e1e1e 50%,#0a0a0a 100%)' },
  { id:'crystal',  name:'Crystal Palace', emoji:'💎', gradient:'linear-gradient(180deg,#0a1a3a 0%,#1a2a5a 50%,#2a3a7a 50%,#0a1a4a 100%)' },
];

// Boss loot table — what the class gets for winning.
// type: 'badge' (random badge to random student) or 'class_reward' (everyone gets it)
const BOSS_LOOT = [
  { type:'class_reward', label:'+3 bonus points for everyone!',         action:'points', value:3 },
  { type:'class_reward', label:'+1 bonus point for everyone!',          action:'points', value:1 },
  { type:'class_reward', label:'Free homework pass (next class)!',      action:'announce', value:'🎫 Free homework pass!' },
  { type:'class_reward', label:'5 minutes free time next class!',       action:'announce', value:'⏰ 5 minutes free time!' },
  { type:'class_reward', label:'Choose the warm-up game next class!',   action:'announce', value:'🎮 You choose the warm-up!' },
  { type:'class_reward', label:'Music during work time next class!',    action:'announce', value:'🎵 Music during work time!' },
  { type:'badge',        label:'Random student gets a badge!',          badgePool:['class_champion','brave_speaker','duel_legend'] },
  { type:'badge',        label:'MVP gets the Duel Legend badge!',       badgePool:['duel_legend'] },
];

// Boss taunt lines — said between rounds
const BOSS_TAUNTS = [
  "Is that all you've got? 😈",
  "Grammar is MY superpower!",
  "You'll never conjugate your way out of this!",
  "Hahaha! Try again, little creatures!",
  "Your vocabulary is no match for mine!",
  "I've eaten harder sentences for breakfast!",
  "Foolish creatures… I AM the curriculum!",
  "Your English is weak! Show me more!",
  "Not bad… but not good enough!",
  "I barely felt that! Hit harder!",
];

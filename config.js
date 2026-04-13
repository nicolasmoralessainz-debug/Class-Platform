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

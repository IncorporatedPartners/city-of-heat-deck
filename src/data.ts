export const FLOW = [
  { path: '/', name: 'COVER', page: 'PAGE_01 // COVER' },
  { path: '/trailer', name: 'TRAILER', page: 'PAGE_02 // TRAILER' },
  { path: '/synopsis', name: 'SYNOPSIS', page: 'PAGE_03 // SYNOPSIS' },
  { path: '/vibe-neon', name: 'NEON NOIR', page: 'PAGE_04 // VISUAL' },
  { path: '/roster', name: 'OPERATIVE ROSTER', page: 'PAGE_05 // ENSEMBLE' },
  { path: '/vibe-street', name: 'STREET CODE', page: 'PAGE_06 // VISUAL' },
  { path: '/arc', name: 'STORY ARC', page: 'PAGE_07 // NARRATIVE' },
  { path: '/franchise', name: 'FRANCHISE VISION', page: 'PAGE_08 // UNIVERSE' },
  { path: '/vibe-city', name: 'THE CITY', page: 'PAGE_09 // VISUAL' },
  { path: '/stills-hustle', name: 'THE HUSTLE', page: 'PAGE_10 // STILLS' },
  { path: '/stills-cost', name: 'THE COST', page: 'PAGE_11 // STILLS' },
  { path: '/dossier', name: 'IMAGE DOSSIER', page: 'PAGE_12 // ARCHIVE' },
  { path: '/capital', name: 'CAPITAL REQUEST', page: 'PAGE_13 // CAPITAL' },
  { path: '/ancillary', name: 'ANCILLARY PROTOCOL', page: 'PAGE_14 // PROTOCOL' },
  { path: '/contact', name: 'NEXT STEPS', page: 'PAGE_15 // CLOSE' },
];

// Primary cast — top row, larger cards
export const CAST_PRIMARY = [
  {
    id: 'malik',
    actor: 'JAMAL LYNCH',
    name: 'MALIK',
    codename: 'THE ARCHITECT',
    role: 'SYSTEM STRATEGIST',
    loyalty: 15,
    network: 92,
    desc: "A disciplined street strategist navigating loyalty, economics, and fatherhood while operating within Miami's underground drug network.",
    status: 'ATTACHED',
    image: '/Jamal Lynch.jpeg',
  },
  {
    id: 'itchy',
    actor: 'JAY COBIAN',
    name: 'ITCHY',
    codename: 'THE CONNECTOR',
    role: 'DISTRIBUTION OPS',
    loyalty: 68,
    network: 98,
    desc: "Malik's right-hand and distribution operator. Quick-witted, street-savvy, and fiercely loyal.",
    status: 'IN NEGOTIATIONS',
    image: '/Jay Cobian.jpeg',
  },
  {
    id: 'bree',
    actor: 'SADE JAMES',
    name: 'BREE',
    codename: 'THE ANCHOR',
    role: 'FAMILY / STABILITY',
    loyalty: 95,
    network: 58,
    desc: "Malik's baby mother and an aspiring singer determined to build stability for her child while the realities of the street threaten her future.",
    status: 'ATTACHED',
    image: '/Sada James.jpeg',
  },
  {
    id: 'cujo',
    actor: 'SAM SMITH',
    name: 'CUJO',
    codename: 'THE PREDATOR',
    role: 'PRIMARY THREAT',
    loyalty: 0,
    network: 42,
    desc: "Impulsive, volatile, and dangerous. The embodiment of chaos thriving inside the power vacuum — a relentless predator who becomes Malik's most personal adversary.",
    status: 'ATTACHED',
    image: '/Samuel Smith.jpg',
  },
  {
    id: 'baybay',
    actor: 'AKILI MCDOWELL',
    name: 'BAY BAY',
    codename: 'THE WILDCARD',
    role: 'VOLATILE ALLY',
    loyalty: 88,
    network: 65,
    desc: "Malik's volatile best friend and Ms. Lisa's son. Fearless and emotional, often driven by pride and impulse.",
    status: 'ATTACHED',
    image: '/Akili Mcdowell.jpg',
  },
];

// Supporting cast — bottom row, compact cards
export const CAST_SUPPORTING = [
  {
    id: 'tonio',
    actor: 'SHARIF EARP',
    name: 'TONIO',
    role: 'ORG STRUCTURE',
    desc: "Malik's half-brother and a respected street figure whose influence anchors the organization.",
    status: 'ATTACHED',
    image: '/Shariff Earp.jpg',
  },
  {
    id: 'fernandez',
    actor: 'JD PARDO',
    name: 'DET. FERNANDEZ',
    role: 'THE SYSTEM',
    desc: "Strategic and politically aware. Sees opportunity within instability and understands that power extends beyond the badge.",
    status: 'WISH LIST',
    image: '/JD Pardo.jpg',
  },
  {
    id: 'laguna',
    actor: 'TBD',
    name: 'LAGUNA',
    role: 'THE INFRASTRUCTURE',
    desc: "A quiet, ruthless power broker who controls critical supply routes along the Miami River. Seasoned and strategic, he respects ambition — but only in those disciplined enough to earn it.",
    status: 'CASTING',
    image: '/Maimi_xM2HAjTzuYE63EUEVQVq.jpeg',
  },
  {
    id: 'macho',
    actor: 'TBD',
    name: 'MACHO',
    role: 'THE STREETS',
    desc: "Established, territorial, and calculating. A man who built his position through fear and strategy — now fighting to maintain control in a destabilized environment.",
    status: 'CASTING',
    image: '/Maimi_FP3ZMDYJx9sPWmqdJ4Yn.jpeg',
  },
  {
    id: 'tonyray',
    actor: 'CLIFTON POWELL',
    name: 'TONY RAY',
    role: 'POWER BROKER',
    desc: "A seasoned nightclub owner and street veteran navigating legitimacy while maintaining deep influence.",
    status: 'ATTACHED',
    image: '/Clifton Powell.jpg',
  },
  {
    id: 'boone',
    actor: 'DENNIS L.A. WHITE',
    name: 'BOONE',
    role: 'INNER CIRCLE',
    desc: "Tony Ray's loyal right-hand — disciplined, dependable, and protective of the inner circle.",
    status: 'ATTACHED',
    image: '/Dennis White.jpeg',
  },
  {
    id: 'mslisa',
    actor: 'TORI HART',
    name: 'MS. LISA',
    role: 'FAMILY SPINE',
    desc: "The emotional backbone of the family, protective of her son and granddaughter as violence escalates.",
    status: 'ATTACHED',
    image: '/Torrei Hart.jpeg',
  },
  {
    id: 'hb',
    actor: 'BOBBY SHMURDA',
    name: 'HAITIAN BENNY',
    role: 'SUPPLY ACCESS',
    desc: "A flashy yet calculated Haitian network distributor with Zoe Pound ties and Caribbean supply access.",
    status: 'IN NEGOTIATIONS',
    image: '/Bobby Shmurda.jpeg',
  },
];

export const ARC = [
  { act: 'ACT I // INCITING INCIDENT', title: 'THE DROUGHT', desc: "Malik and Itchy are building momentum in Miami's underground economy under Cuban wholesaler Macho — until a robbery attempt goes wrong and an act of mistaken identity ignites a war.", image: '/Maimi_smNcpmEcTnUZWZFtaOlx.jpeg' },
  { act: 'ACT IIA // RISING ACTION', title: 'THE FRACTURE', desc: "That single mistake fractures alliances across Miami. A ruthless predator named Cujo seeks revenge. Corrupt detective Fernandez manipulates both sides. Power brokers Tony Ray and Laguna move strategically behind the scenes.", image: '/Maimi_lU0WQIKJYbWddxKU69GG.jpeg' },
  { act: 'ACT IIB // MIDPOINT TO CRISIS', title: 'BLEEDING OUT', desc: "As violence escalates, the consequences ripple into the homes of those closest to Malik — especially Bree, the mother of his child, and Ms. Lisa, the emotional spine of the family.", image: '/Maimi_37gHq2R1ghvNZ2Lb3isI.jpeg' },
  { act: 'ACT III // CLIMAX & RESOLUTION', title: 'CITY OF HEAT', desc: "Season One culminates in betrayal, kidnapping, and near execution — severing Malik's relationship with his plug and leaving him exposed at the worst possible time: the beginning of a citywide drought.", image: '/Maimi_YGNEp82YZr0xZac4X9Rb.jpeg' },
];

export const FINANCIALS = [
  { name: 'POST-PRODUCTION COMPLETION', value: 180000 },
  { name: 'COLOR + SOUND DESIGN', value: 95000 },
  { name: 'MUSIC LICENSING', value: 75000 },
  { name: 'FINAL MASTERING', value: 65000 },
  { name: 'FESTIVAL POSITIONING', value: 50000 },
  { name: 'MARKETING ASSETS', value: 35000 },
];

export const BACKDROPS = {
  cover: '/Maimi_Bdmb7mlgbzjDYvFgJ3RD.jpeg',
  synopsis: '/Maimi_vIlY6YZmDmH4TwQZpSmI.png',
  roster: '/Maimi_cCl1nFsVkbSVULaJxUHC.jpeg',
  arc: '/Maimi_0rdjMFzZF6TvRqb2pSAf.jpeg',
  dossier: '/Maimi_miuGj7PmFCuCfjzWdjne.jpeg',
  capital: '/Maimi_IjcDd3EMeUOyAtSjpgT2.png',
  ancillary: '/Maimi_qeKiEXBlHLDCyCU9zhDb.jpeg',
  projections: '/Maimi_VK86lvUPFa0uzkaWjB8N.jpeg',
  contact: '/Maimi_mMLhoQnjBxC9pe1dehPq.jpeg',
};

export const GALLERY = [
  { src: '/Maimi_Bdmb7mlgbzjDYvFgJ3RD.jpeg', label: 'MIAMI_CORE_EXT', sub: 'SC_04 // 40MM ANAMORPHIC', span: 'col-span-2 row-span-2' },
  { src: '/Maimi_nBGCcu5F7jW1aBi4hYP5.jpeg', label: null, sub: null, span: 'col-span-1 row-span-1' },
  { src: '/Maimi_OSRgtsHTvouPvAbJVxXI.jpeg', label: null, sub: null, span: 'col-span-1 row-span-1' },
  { src: '/Maimi_i3MaWmgrdLZac9JllQkX.jpeg', label: 'NIGHTLIFE_INT', sub: null, span: 'col-span-2 row-span-1' },
  { src: '/Maimi_XJbwLZ2qMIsDruGUTEgW.jpeg', label: null, sub: null, span: 'col-span-1 row-span-1' },
  { src: '/Maimi_awQjwwef0GoX0xyBUyu5.jpeg', label: null, sub: null, span: 'col-span-1 row-span-1' },
  { src: '/Maimi_8h5K495A9PXIuUxT3tAP.jpeg', label: 'VEHICLE_CONVOY_01', sub: null, span: 'col-span-2 row-span-1' },
];

export const TONE_COMPS = [
  { title: 'SNOWFALL', aspect: 'Emotional Realism' },
  { title: 'POWER', aspect: 'Street Authenticity' },
  { title: 'THE WIRE', aspect: 'Political Undercurrent' },
  { title: 'NARCOS', aspect: 'Cinematic Tension' },
];

export const THEMES = [
  'LOYALTY VS. SURVIVAL',
  'ECONOMICS OF THE STREET',
  'CORRUPTION INSIDE LAW ENFORCEMENT',
  'FAMILY IMPACT OF VIOLENCE',
  'THE ILLUSION OF CONTROL',
];

export const CORE_ARCHETYPES = [
  {
    title: 'THE RISING ENTREPRENEUR',
    desc: 'Driven, strategic, and ambitious. Determined to build something legitimate while navigating a system designed to pull him back into the streets.',
  },
  {
    title: 'THE LOYAL OPERATOR',
    desc: "Calculated and observant. The balance between risk and reality. Loyalty is his strength — and his vulnerability.",
  },
  {
    title: 'THE HEART & STAKES',
    desc: "Grounded and forward-thinking. Represents what's truly at risk when ambition outpaces stability.",
  },
];

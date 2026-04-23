// lib/constants.ts

// ── Class X subject codes ────────────────────────────────────────────────────
export const SUBJECT_NAMES_CLASS_X: Record<string, string> = {
  "001": "Hindi Course A",
  "002": "Hindi Course B",
  "003": "Urdu Course A",
  "004": "Urdu Course B",
  "015": "Kannada",
  "016": "Malayalam",
  "017": "Tamil",
  "018": "Telugu",
  "020": "German",
  "021": "Russian",
  "022": "Sanskrit",
  "023": "Persian",
  "024": "Nepali",
  "025": "Limboo",
  "026": "Lepcha",
  "041": "Mathematics Standard",
  "241": "Mathematics Basic",
  "085": "Hindi (Elective)",
  "086": "Science",
  "087": "Social Science",
  "101": "English Communicative",
  "184": "English Language and Literature",
  "402": "Information Technology",
  "403": "Security",
  "404": "Automotive",
  "405": "Introduction to Financial Markets",
  "406": "Introduction to Tourism",
  "407": "Beauty & Wellness",
  "408": "Agriculture",
  "409": "Food Production",
  "410": "Front Office Operations",
  "411": "Banking & Insurance",
  "412": "Marketing & Sales",
  "413": "Health Care",
  "414": "Apparel",
  "415": "Multi Skill Foundation Course",
  "049": "Physical Education",
};

// ── Class XII subject codes ──────────────────────────────────────────────────
export const SUBJECT_NAMES_CLASS_XII: Record<string, string> = {
  "001": "Hindi Elective",
  "002": "Hindi Core",
  "003": "Urdu Elective",
  "022": "Sanskrit Elective",
  "027": "History",
  "028": "Political Science",
  "029": "Geography",
  "030": "Economics",
  "041": "Mathematics",
  "042": "Physics",
  "043": "Chemistry",
  "044": "Biology",
  "048": "Physical Education",
  "049": "Painting",
  "050": "Graphics",
  "051": "Sculpture",
  "052": "Applied Arts",
  "054": "Business Studies",
  "055": "Accountancy",
  "056": "Kathak Dance",
  "057": "Bharatanatyam Dance",
  "058": "Kuchipudi Dance",
  "059": "Manipuri Dance",
  "060": "Odissi Dance",
  "061": "Hindustani Music Vocal",
  "062": "Hindustani Music Melodic Instruments",
  "063": "Hindustani Music Percussion",
  "064": "Carnatic Music Vocal",
  "065": "Carnatic Music Melodic Instruments",
  "066": "Carnatic Music Percussion",
  "067": "Entrepreneurship",
  "068": "Engineering Graphics",
  "069": "Agriculture",
  "070": "Knowledge Traditions and Practices of India",
  "071": "Mass Media Studies",
  "072": "Home Science",
  "073": "Retail",
  "074": "Human Rights and Gender Studies",
  "075": "Library and Information Science",
  "076": "National Cadet Corps (NCC)",
  "078": "Theatre Studies",
  "079": "Geospatial Technology",
  "080": "Electronics Technology",
  "083": "Computer Science",
  "104": "Punjabi",
  "105": "Bengali",
  "106": "Tamil",
  "107": "Telugu",
  "108": "Sindhi",
  "109": "Marathi",
  "110": "Gujarati",
  "111": "Manipuri",
  "112": "Malayalam",
  "113": "Odia",
  "114": "Assamese",
  "118": "French",
  "120": "German",
  "121": "Russian",
  "301": "English Core",
  "302": "English Elective",
};

/** Resolve a subject code to its display name for the given class level. */
export function getSubjectName(
  code: string,
  classLevel: "X" | "XII" = "X",
): string {
  const map = classLevel === "XII" ? SUBJECT_NAMES_CLASS_XII : SUBJECT_NAMES_CLASS_X;
  return map[code] ?? `Sub-${code}`;
}

/** @deprecated Use getSubjectName() instead. Kept for any legacy callers. */
export const SUBJECT_NAMES: Record<string, string> = SUBJECT_NAMES_CLASS_X;

export const XI_CATALOG: Record<string, string> = {
  PHY:"Physics", CHE:"Chemistry", BIO:"Biology", MAT:"Mathematics",
  AMAT:"Applied Mathematics", CS:"Computer Science", IP:"Informatics Practices",
  ACC:"Accountancy", BST:"Business Studies", ECO:"Economics",
  HIS:"History", GEO:"Geography", POL:"Political Science", SOC:"Sociology",
  PSY:"Psychology", PHI:"Philosophy", ENG:"English (Core)", HIN:"Hindi (Core)",
  URD:"Urdu", SAN:"Sanskrit", PE:"Physical Education", FA:"Fine Arts",
  MUS:"Music", NCC_XI:"NCC",
};

export const XI_STREAM_CORE: Record<string, string[]> = {
  PCM:              ["PHY","CHE","MAT"],
  PCB:              ["PHY","CHE","BIO"],
  "PCB+Applied":    ["PHY","CHE","BIO","AMAT"],
  Commerce_Math:    ["ACC","BST","ECO","MAT"],
  Commerce_Applied: ["ACC","BST","ECO","AMAT"],
  Commerce_NoMath:  ["ACC","BST","ECO"],
  Humanities:       ["HIS","GEO","ECO"],
};

export const STREAM_CRITERIA: Record<string, {
  sci_min: number | null;
  math_min: number | null;
  math_type: "standard" | null;
  overall_min: number | null;
  desc: string;
}> = {
  PCM:              { sci_min:60, math_min:60, math_type:"standard", overall_min:60, desc:"Science≥60, Math(Std)≥60, Overall≥60%" },
  PCB:              { sci_min:60, math_min:50, math_type:null,       overall_min:60, desc:"Science≥60, Math≥50, Overall≥60%" },
  "PCB+Applied":    { sci_min:60, math_min:55, math_type:null,       overall_min:60, desc:"Science≥60, Math≥55, Overall≥60%" },
  Commerce_Math:    { sci_min:null, math_min:60, math_type:null,     overall_min:50, desc:"Math≥60, Overall≥50%" },
  Commerce_Applied: { sci_min:null, math_min:55, math_type:null,     overall_min:50, desc:"Math≥55, Overall≥50%" },
  Commerce_NoMath:  { sci_min:null, math_min:45, math_type:null,     overall_min:50, desc:"Math≥45, Overall≥50%" },
  Humanities:       { sci_min:null, math_min:null, math_type:null,   overall_min:null, desc:"Open for all" },
};

export const STREAM_ORDER = [
  "PCM","PCB","PCB+Applied",
  "Commerce_Math","Commerce_Applied","Commerce_NoMath","Humanities",
] as const;

export const MAX_RELAXATION = 5;
export const BONUS_NATIONAL  = 3;
export const BONUS_STATE     = 2;

export const BAND_DEFS: Array<[string, number, number]> = [
  ["95-100", 95, 100],
  ["90-94",  90,  94],
  ["75-89",  75,  89],
  ["60-74",  60,  74],
  ["33-59",  33,  59],
  ["0-32",    0,  32],
];

export const LANG_OPTIONS = [
  { code:"ENG", name:"English (Core)" },
  { code:"HIN", name:"Hindi (Core)" },
  { code:"URD", name:"Urdu" },
  { code:"SAN", name:"Sanskrit" },
];

export const ALL_SUBJECT_OPTIONS = [
  { code:"HIN",    name:"Hindi (Core)" },
  { code:"ENG",    name:"English (Core)" },
  { code:"URD",    name:"Urdu" },
  { code:"SAN",    name:"Sanskrit" },
  { code:"PHY",    name:"Physics" },
  { code:"CHE",    name:"Chemistry" },
  { code:"BIO",    name:"Biology" },
  { code:"MAT",    name:"Mathematics" },
  { code:"AMAT",   name:"Applied Mathematics" },
  { code:"ACC",    name:"Accountancy" },
  { code:"BST",    name:"Business Studies" },
  { code:"ECO",    name:"Economics" },
  { code:"HIS",    name:"History" },
  { code:"GEO",    name:"Geography" },
  { code:"POL",    name:"Political Science" },
  { code:"SOC",    name:"Sociology" },
  { code:"PSY",    name:"Psychology" },
  { code:"PHI",    name:"Philosophy" },
  { code:"CS",     name:"Computer Science" },
  { code:"IP",     name:"Informatics Practices" },
  { code:"PE",     name:"Physical Education" },
  { code:"FA",     name:"Fine Arts" },
  { code:"MUS",    name:"Music" },
  { code:"NCC_XI", name:"NCC" },
];

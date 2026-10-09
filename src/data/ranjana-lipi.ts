export type LetterType = 'vowel' | 'consonant';

/**
 * Structural categories from Ranjana Lipi calligraphy practice.
 * These govern how matras and conjuncts attach to a letter.
 */
export type LetterTrait = 'normal' | 'headless' | 'hand-down' | 'hand-up';

export type LipiLetter = {
  id: string;
  /** Devanagari codepoint rendered as Ranjana via Nithya Ranjana */
  char: string;
  roman: string;
  type: LetterType;
  trait: LetterTrait;
};

export type MatraForm = {
  id: string;
  vowelLabel: string;
  mark: string;
  romanPattern: string;
  romanStandalone: string;
};

export const letterTraits: Record<
  LetterTrait,
  {
    id: LetterTrait;
    label: string;
    nepalBhasa: string;
    short: string;
    matraTip: string;
    /** Tailwind text class for the Ranjana glyph */
    glyphClass: string;
    /** Dot / accent color for legend */
    swatchClass: string;
    ringClass: string;
  }
> = {
  normal: {
    id: 'normal',
    label: 'Normal letters',
    nepalBhasa: 'सामान्य आख:',
    short: 'Standard head & body',
    matraTip:
      'Matras follow the usual pattern: ā to the right of the stem, i/ī along the head-line, u/ū under the body, and e/ai/o/au on the head corners.',
    glyphClass: 'text-gray-900 dark:text-white',
    swatchClass: 'bg-gray-900 dark:bg-white',
    ringClass: 'ring-gray-400/50',
  },
  headless: {
    id: 'headless',
    label: 'Headless letters',
    nepalBhasa: 'छ्वं मदुगु आख:',
    short: 'No top bar (shirorekha)',
    matraTip:
      'These letters have no head-line. Matras for i/ī arch over the open top, and e/ai sit on the top tip of the stroke instead of a full bar.',
    glyphClass: 'text-red-600 dark:text-red-400',
    swatchClass: 'bg-red-600 dark:bg-red-400',
    ringClass: 'ring-red-500/40',
  },
  'hand-down': {
    id: 'hand-down',
    label: 'Hand-down letters',
    nepalBhasa: 'ल्हा क्वे पिहाँवगु आख:',
    short: 'Stroke extends downward',
    matraTip:
      'The right-side “hand” hangs down. Long ā often merges with that hand; u/ū attach under the center, not on the hanging stroke.',
    glyphClass: 'text-emerald-700 dark:text-emerald-400',
    swatchClass: 'bg-emerald-600 dark:bg-emerald-400',
    ringClass: 'ring-emerald-500/40',
  },
  'hand-up': {
    id: 'hand-up',
    label: 'Hand-up letters',
    nepalBhasa: 'ल्हा च्वे पिहाँवगु आख:',
    short: 'Stroke extends upward',
    matraTip:
      'The right-side “hand” lifts up. Long ā is drawn as a separate bar to the right of that hand; u/ū sit under the main stem.',
    glyphClass: 'text-blue-600 dark:text-blue-400',
    swatchClass: 'bg-blue-600 dark:bg-blue-400',
    ringClass: 'ring-blue-500/40',
  },
};

const N: LetterTrait = 'normal';
const H: LetterTrait = 'headless';
const D: LetterTrait = 'hand-down';
const U: LetterTrait = 'hand-up';

/** Independent vowels — all normal (black/white) */
export const vowels: LipiLetter[] = [
  { id: 'om', char: 'ॐ', roman: 'om', type: 'vowel', trait: N },
  { id: 'a', char: 'अ', roman: 'a', type: 'vowel', trait: N },
  { id: 'aa', char: 'आ', roman: 'aa', type: 'vowel', trait: N },
  { id: 'i', char: 'इ', roman: 'i', type: 'vowel', trait: N },
  { id: 'ii', char: 'ई', roman: 'ii', type: 'vowel', trait: N },
  { id: 'u', char: 'उ', roman: 'u', type: 'vowel', trait: N },
  { id: 'uu', char: 'ऊ', roman: 'uu', type: 'vowel', trait: N },
  { id: 'ri', char: 'ऋ', roman: 'ri', type: 'vowel', trait: N },
  { id: 'rii', char: 'ॠ', roman: 'rii', type: 'vowel', trait: N },
  { id: 'li', char: 'ऌ', roman: 'li', type: 'vowel', trait: N },
  { id: 'lii', char: 'ॡ', roman: 'lii', type: 'vowel', trait: N },
  { id: 'e', char: 'ए', roman: 'e', type: 'vowel', trait: N },
  { id: 'ai', char: 'ऐ', roman: 'ai', type: 'vowel', trait: N },
  { id: 'o', char: 'ओ', roman: 'o', type: 'vowel', trait: N },
  { id: 'au', char: 'औ', roman: 'au', type: 'vowel', trait: N },
  { id: 'am', char: 'अं', roman: 'am', type: 'vowel', trait: N },
  { id: 'ah', char: 'अः', roman: 'ah', type: 'vowel', trait: N },
];

/**
 * Consonants with calligraphy traits from the Callijatra Ranjana chart.
 * Headless (red): ख ग ञ ठ ण थ ध श
 * Hand-down (green): क ज ह क्ष ज्ञ
 * Hand-up (blue): ङ झ ट ढ फ
 */
export const consonants: LipiLetter[] = [
  { id: 'ka', char: 'क', roman: 'ka', type: 'consonant', trait: D },
  { id: 'kha', char: 'ख', roman: 'kha', type: 'consonant', trait: H },
  { id: 'ga', char: 'ग', roman: 'ga', type: 'consonant', trait: H },
  { id: 'gha', char: 'घ', roman: 'gha', type: 'consonant', trait: N },
  { id: 'nga', char: 'ङ', roman: 'nga', type: 'consonant', trait: U },
  { id: 'cha', char: 'च', roman: 'cha', type: 'consonant', trait: N },
  { id: 'chha', char: 'छ', roman: 'chha', type: 'consonant', trait: N },
  { id: 'ja', char: 'ज', roman: 'ja', type: 'consonant', trait: D },
  { id: 'jha', char: 'झ', roman: 'jha', type: 'consonant', trait: U },
  { id: 'yna', char: 'ञ', roman: 'ña', type: 'consonant', trait: H },
  { id: 'tta', char: 'ट', roman: 'ṭa', type: 'consonant', trait: U },
  { id: 'ttha', char: 'ठ', roman: 'ṭha', type: 'consonant', trait: H },
  { id: 'dda', char: 'ड', roman: 'ḍa', type: 'consonant', trait: N },
  { id: 'ddha', char: 'ढ', roman: 'ḍha', type: 'consonant', trait: U },
  { id: 'nna', char: 'ण', roman: 'ṇa', type: 'consonant', trait: H },
  { id: 'ta', char: 'त', roman: 'ta', type: 'consonant', trait: N },
  { id: 'tha', char: 'थ', roman: 'tha', type: 'consonant', trait: H },
  { id: 'da', char: 'द', roman: 'da', type: 'consonant', trait: N },
  { id: 'dha', char: 'ध', roman: 'dha', type: 'consonant', trait: H },
  { id: 'na', char: 'न', roman: 'na', type: 'consonant', trait: N },
  { id: 'pa', char: 'प', roman: 'pa', type: 'consonant', trait: N },
  { id: 'pha', char: 'फ', roman: 'pha', type: 'consonant', trait: U },
  { id: 'ba', char: 'ब', roman: 'ba', type: 'consonant', trait: N },
  { id: 'bha', char: 'भ', roman: 'bha', type: 'consonant', trait: N },
  { id: 'ma', char: 'म', roman: 'ma', type: 'consonant', trait: N },
  { id: 'ya', char: 'य', roman: 'ya', type: 'consonant', trait: N },
  { id: 'ra', char: 'र', roman: 'ra', type: 'consonant', trait: N },
  { id: 'la', char: 'ल', roman: 'la', type: 'consonant', trait: N },
  { id: 'wa', char: 'व', roman: 'wa', type: 'consonant', trait: N },
  { id: 'sha', char: 'श', roman: 'sha', type: 'consonant', trait: H },
  { id: 'ssa', char: 'ष', roman: 'ṣa', type: 'consonant', trait: N },
  { id: 'sa', char: 'स', roman: 'sa', type: 'consonant', trait: N },
  { id: 'ha', char: 'ह', roman: 'ha', type: 'consonant', trait: D },
  { id: 'ksha', char: 'क्ष', roman: 'ksha', type: 'consonant', trait: D },
  { id: 'tra', char: 'त्र', roman: 'tra', type: 'consonant', trait: N },
  { id: 'gya', char: 'ज्ञ', roman: 'gya', type: 'consonant', trait: D },
];

export const allLetters: LipiLetter[] = [...vowels, ...consonants];

export const matras: MatraForm[] = [
  { id: 'a', vowelLabel: 'अ', mark: '', romanPattern: '{c}', romanStandalone: 'a' },
  { id: 'aa', vowelLabel: 'आ', mark: 'ा', romanPattern: '{c}a', romanStandalone: 'aa' },
  { id: 'i', vowelLabel: 'इ', mark: 'ि', romanPattern: '{stem}i', romanStandalone: 'i' },
  { id: 'ii', vowelLabel: 'ई', mark: 'ी', romanPattern: '{stem}ii', romanStandalone: 'ii' },
  { id: 'u', vowelLabel: 'उ', mark: 'ु', romanPattern: '{stem}u', romanStandalone: 'u' },
  { id: 'uu', vowelLabel: 'ऊ', mark: 'ू', romanPattern: '{stem}uu', romanStandalone: 'uu' },
  { id: 'ri', vowelLabel: 'ऋ', mark: 'ृ', romanPattern: '{stem}ri', romanStandalone: 'ri' },
  { id: 'e', vowelLabel: 'ए', mark: 'े', romanPattern: '{stem}e', romanStandalone: 'e' },
  { id: 'ai', vowelLabel: 'ऐ', mark: 'ै', romanPattern: '{stem}ai', romanStandalone: 'ai' },
  { id: 'o', vowelLabel: 'ओ', mark: 'ो', romanPattern: '{stem}o', romanStandalone: 'o' },
  { id: 'au', vowelLabel: 'औ', mark: 'ौ', romanPattern: '{stem}au', romanStandalone: 'au' },
  { id: 'am', vowelLabel: 'अं', mark: 'ं', romanPattern: '{c}m', romanStandalone: 'am' },
  { id: 'ah', vowelLabel: 'अः', mark: 'ः', romanPattern: '{c}h', romanStandalone: 'ah' },
];

export function consonantStem(roman: string): string {
  if (roman.endsWith('a') && roman.length > 1) return roman.slice(0, -1);
  return roman;
}

export function syllableFor(consonant: LipiLetter, matra: MatraForm): {
  glyph: string;
  roman: string;
  vowelLabel: string;
} {
  const stem = consonantStem(consonant.roman);
  const roman = matra.romanPattern
    .replace('{c}', consonant.roman)
    .replace('{stem}', stem);
  return {
    glyph: consonant.char + matra.mark,
    roman,
    vowelLabel: matra.vowelLabel,
  };
}

export const learnTopics = [
  {
    id: 'ranjana',
    label: 'Learn Ranjana Lipi',
    description: 'Explore letters and matras',
    available: true,
  },
  {
    id: 'nepal-lipi',
    label: 'Learn Nepal Lipi',
    description: 'Coming soon',
    available: false,
  },
  {
    id: 'calligraphy-pen',
    label: 'Craft a calligraphy pen',
    description: 'Coming soon',
    available: false,
  },
] as const;

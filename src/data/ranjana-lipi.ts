export type LetterType = 'vowel' | 'consonant';

export type LipiLetter = {
  id: string;
  /** Devanagari codepoint rendered as Ranjana via Nithya Ranjana */
  char: string;
  roman: string;
  type: LetterType;
};

export type MatraForm = {
  id: string;
  /** Independent vowel label (Devanagari) for the matra row header context */
  vowelLabel: string;
  /** Combining mark appended to a consonant base; empty string = inherent अ */
  mark: string;
  /** Roman suffix pattern; `{c}` is replaced with consonant roman stem */
  romanPattern: string;
  romanStandalone: string;
};

/** Independent vowels */
export const vowels: LipiLetter[] = [
  { id: 'a', char: 'अ', roman: 'a', type: 'vowel' },
  { id: 'aa', char: 'आ', roman: 'aa', type: 'vowel' },
  { id: 'i', char: 'इ', roman: 'i', type: 'vowel' },
  { id: 'ii', char: 'ई', roman: 'ii', type: 'vowel' },
  { id: 'u', char: 'उ', roman: 'u', type: 'vowel' },
  { id: 'uu', char: 'ऊ', roman: 'uu', type: 'vowel' },
  { id: 'ri', char: 'ऋ', roman: 'ri', type: 'vowel' },
  { id: 'e', char: 'ए', roman: 'e', type: 'vowel' },
  { id: 'ai', char: 'ऐ', roman: 'ai', type: 'vowel' },
  { id: 'o', char: 'ओ', roman: 'o', type: 'vowel' },
  { id: 'au', char: 'औ', roman: 'au', type: 'vowel' },
  { id: 'am', char: 'अं', roman: 'am', type: 'vowel' },
  { id: 'ah', char: 'अः', roman: 'ah', type: 'vowel' },
];

/** Consonants (standard Devanagari / Nepali order) */
export const consonants: LipiLetter[] = [
  { id: 'ka', char: 'क', roman: 'ka', type: 'consonant' },
  { id: 'kha', char: 'ख', roman: 'kha', type: 'consonant' },
  { id: 'ga', char: 'ग', roman: 'ga', type: 'consonant' },
  { id: 'gha', char: 'घ', roman: 'gha', type: 'consonant' },
  { id: 'nga', char: 'ङ', roman: 'nga', type: 'consonant' },
  { id: 'cha', char: 'च', roman: 'cha', type: 'consonant' },
  { id: 'chha', char: 'छ', roman: 'chha', type: 'consonant' },
  { id: 'ja', char: 'ज', roman: 'ja', type: 'consonant' },
  { id: 'jha', char: 'झ', roman: 'jha', type: 'consonant' },
  { id: 'yna', char: 'ञ', roman: 'yna', type: 'consonant' },
  { id: 'ta', char: 'ट', roman: 'ṭa', type: 'consonant' },
  { id: 'tha', char: 'ठ', roman: 'ṭha', type: 'consonant' },
  { id: 'da', char: 'ड', roman: 'ḍa', type: 'consonant' },
  { id: 'dha', char: 'ढ', roman: 'ḍha', type: 'consonant' },
  { id: 'na', char: 'ण', roman: 'ṇa', type: 'consonant' },
  { id: 'ta2', char: 'त', roman: 'ta', type: 'consonant' },
  { id: 'tha2', char: 'थ', roman: 'tha', type: 'consonant' },
  { id: 'da2', char: 'द', roman: 'da', type: 'consonant' },
  { id: 'dha2', char: 'ध', roman: 'dha', type: 'consonant' },
  { id: 'na2', char: 'न', roman: 'na', type: 'consonant' },
  { id: 'pa', char: 'प', roman: 'pa', type: 'consonant' },
  { id: 'pha', char: 'फ', roman: 'pha', type: 'consonant' },
  { id: 'ba', char: 'ब', roman: 'ba', type: 'consonant' },
  { id: 'bha', char: 'भ', roman: 'bha', type: 'consonant' },
  { id: 'ma', char: 'म', roman: 'ma', type: 'consonant' },
  { id: 'ya', char: 'य', roman: 'ya', type: 'consonant' },
  { id: 'ra', char: 'र', roman: 'ra', type: 'consonant' },
  { id: 'la', char: 'ल', roman: 'la', type: 'consonant' },
  { id: 'wa', char: 'व', roman: 'wa', type: 'consonant' },
  { id: 'sha', char: 'श', roman: 'sha', type: 'consonant' },
  { id: 'ssa', char: 'ष', roman: 'ṣa', type: 'consonant' },
  { id: 'sa', char: 'स', roman: 'sa', type: 'consonant' },
  { id: 'ha', char: 'ह', roman: 'ha', type: 'consonant' },
  { id: 'ksha', char: 'क्ष', roman: 'ksha', type: 'consonant' },
  { id: 'tra', char: 'त्र', roman: 'tra', type: 'consonant' },
  { id: 'gya', char: 'ज्ञ', roman: 'gya', type: 'consonant' },
];

export const allLetters: LipiLetter[] = [...vowels, ...consonants];

/**
 * Matra forms applied to a consonant base.
 * `mark` is empty for inherent अ (the bare consonant already includes -a).
 */
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

/** Strip trailing inherent -a from consonant roman for matra stems (ka → k) */
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

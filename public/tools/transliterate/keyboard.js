(function() {
    'use strict';

    // Devanagari to Newa Unicode Converter
    var fp = String.fromCodePoint;
    var multiCharMap = {};
    multiCharMap["\u0919\u094D\u0939"] = fp(0x11413);
    multiCharMap["\u091E\u094D\u0939"] = fp(0x11419);
    multiCharMap["\u0930\u094D\u0939"] = fp(0x1142D);

    var newaMap = {};
    newaMap["\u0905"]=fp(0x11400); newaMap["\u0906"]=fp(0x11401); newaMap["\u0907"]=fp(0x11402);
    newaMap["\u0908"]=fp(0x11403); newaMap["\u0909"]=fp(0x11404); newaMap["\u090A"]=fp(0x11405);
    newaMap["\u090B"]=fp(0x11406); newaMap["\u090C"]=fp(0x11408); newaMap["\u090F"]=fp(0x1140A);
    newaMap["\u0910"]=fp(0x1140B); newaMap["\u0913"]=fp(0x1140C); newaMap["\u0914"]=fp(0x1140D);
    newaMap["\u0915"]=fp(0x1140E); newaMap["\u0916"]=fp(0x1140F); newaMap["\u0917"]=fp(0x11410);
    newaMap["\u0918"]=fp(0x11411); newaMap["\u0919"]=fp(0x11412); newaMap["\u091A"]=fp(0x11414);
    newaMap["\u091B"]=fp(0x11415); newaMap["\u091C"]=fp(0x11416); newaMap["\u091D"]=fp(0x11417);
    newaMap["\u091E"]=fp(0x11418); newaMap["\u091F"]=fp(0x1141A); newaMap["\u0920"]=fp(0x1141B);
    newaMap["\u0921"]=fp(0x1141C); newaMap["\u0922"]=fp(0x1141D); newaMap["\u0923"]=fp(0x1141E);
    newaMap["\u0924"]=fp(0x1141F); newaMap["\u0925"]=fp(0x11420); newaMap["\u0926"]=fp(0x11421);
    newaMap["\u0927"]=fp(0x11422); newaMap["\u0928"]=fp(0x11423); newaMap["\u092A"]=fp(0x11425);
    newaMap["\u092B"]=fp(0x11426); newaMap["\u092C"]=fp(0x11427); newaMap["\u092D"]=fp(0x11428);
    newaMap["\u092E"]=fp(0x11429); newaMap["\u092F"]=fp(0x1142B); newaMap["\u0930"]=fp(0x1142C);
    newaMap["\u0932"]=fp(0x1142E); newaMap["\u0935"]=fp(0x11430); newaMap["\u0936"]=fp(0x11431);
    newaMap["\u0937"]=fp(0x11432); newaMap["\u0938"]=fp(0x11433); newaMap["\u0939"]=fp(0x11434);
    newaMap["\u0933"]=fp(0x1142F);
    newaMap["\u093E"]=fp(0x11435); newaMap["\u093F"]=fp(0x11436); newaMap["\u0940"]=fp(0x11437);
    newaMap["\u0941"]=fp(0x11438); newaMap["\u0942"]=fp(0x11439); newaMap["\u0943"]=fp(0x1143A);
    newaMap["\u0947"]=fp(0x1143E); newaMap["\u0948"]=fp(0x1143F); newaMap["\u094B"]=fp(0x11440);
    newaMap["\u094C"]=fp(0x11441); newaMap["\u094D"]=fp(0x11442); newaMap["\u0901"]=fp(0x11443);
    newaMap["\u0902"]=fp(0x11444); newaMap["\u0903"]=fp(0x11445); newaMap["\u093C"]=fp(0x11446);
    newaMap["\u0950"]=fp(0x11449); newaMap["\u0964"]=fp(0x1144B); newaMap["\u0965"]=fp(0x1144C);
    newaMap["\u0966"]=fp(0x11450); newaMap["\u0967"]=fp(0x11451); newaMap["\u0968"]=fp(0x11452);
    newaMap["\u0969"]=fp(0x11453); newaMap["\u096A"]=fp(0x11454); newaMap["\u096B"]=fp(0x11455);
    newaMap["\u096C"]=fp(0x11456); newaMap["\u096D"]=fp(0x11457); newaMap["\u096E"]=fp(0x11458);
    newaMap["\u096F"]=fp(0x11459);

    function devaToNewa(text) {
      var result = [], i = 0, n = text.length;
      while (i < n) {
        if (i + 2 < n) {
          var tri = text.substring(i, i + 3);
          if (multiCharMap.hasOwnProperty(tri)) { result.push(multiCharMap[tri]); i += 3; continue; }
        }
        var ch = text.charAt(i);
        result.push(newaMap.hasOwnProperty(ch) ? newaMap[ch] : ch);
        i++;
      }
      return result.join('');
    }

    var reverseNewaMap = {};
    for (var dKey in newaMap) reverseNewaMap[newaMap[dKey]] = dKey;
    var reverseMultiCharMap = {};
    for (var mKey in multiCharMap) reverseMultiCharMap[multiCharMap[mKey]] = mKey;

    function newaToDeva(text) {
      var chars = Array.from(text);
      var result = [];
      for (var i = 0; i < chars.length; i++) {
        var ch = chars[i];
        if (reverseMultiCharMap.hasOwnProperty(ch)) result.push(reverseMultiCharMap[ch]);
        else if (reverseNewaMap.hasOwnProperty(ch)) result.push(reverseNewaMap[ch]);
        else result.push(ch);
      }
      return result.join('');
    }

    var CONSONANT = 1, VOWEL = 2, DIACRITIC = 3;

    var mappings = [
      { roman: 'ksh', deva: '\u0915\u094D\u0937', type: CONSONANT },
      { roman: 'Ksh', deva: '\u0915\u094D\u0937', type: CONSONANT },
      { roman: 'chh', deva: '\u091B', type: CONSONANT },
      { roman: 'kh', deva: '\u0916', type: CONSONANT },
      { roman: 'Kh', deva: '\u0916', type: CONSONANT },
      { roman: 'gh', deva: '\u0918', type: CONSONANT },
      { roman: 'Gh', deva: '\u0918', type: CONSONANT },
      { roman: 'Ch', deva: '\u091B', type: CONSONANT },
      { roman: 'ch', deva: '\u091A', type: CONSONANT },
      { roman: 'jh', deva: '\u091D', type: CONSONANT },
      { roman: 'Jh', deva: '\u091D', type: CONSONANT },
      { roman: 'Th', deva: '\u0920', type: CONSONANT },
      { roman: 'Dh', deva: '\u0922', type: CONSONANT },
      { roman: 'th', deva: '\u0925', type: CONSONANT },
      { roman: 'dh', deva: '\u0927', type: CONSONANT },
      { roman: 'ph', deva: '\u092B', type: CONSONANT },
      { roman: 'Ph', deva: '\u092B', type: CONSONANT },
      { roman: 'bh', deva: '\u092D', type: CONSONANT },
      { roman: 'Bh', deva: '\u092D', type: CONSONANT },
      { roman: 'Sh', deva: '\u0937', type: CONSONANT },
      { roman: 'sh', deva: '\u0936', type: CONSONANT },
      { roman: 'nh', deva: '\u091E', type: CONSONANT },
      { roman: 'Nh', deva: '\u091E', type: CONSONANT },
      { roman: 'ng', deva: '\u0919', type: CONSONANT },
      { roman: 'Ng', deva: '\u0919', type: CONSONANT },
      { roman: 'hm', deva: '\u0939\u094D\u092E', type: CONSONANT },
      { roman: 'hn', deva: '\u0939\u094D\u0928', type: CONSONANT },
      { roman: 'lh', deva: '\u0933', type: CONSONANT },
      { roman: 'Lh', deva: '\u0933', type: CONSONANT },
      { roman: 'tr', deva: '\u0924\u094D\u0930', type: CONSONANT },
      { roman: 'Tr', deva: '\u0924\u094D\u0930', type: CONSONANT },
      { roman: 'gn', deva: '\u091C\u094D\u091E', type: CONSONANT },
      { roman: 'Gn', deva: '\u091C\u094D\u091E', type: CONSONANT },
      { roman: 'aa', deva: '\u0906', type: VOWEL },
      { roman: 'ii', deva: '\u0908', type: VOWEL },
      { roman: 'uu', deva: '\u090A', type: VOWEL },
      { roman: 'ai', deva: '\u0910', type: VOWEL },
      { roman: 'au', deva: '\u0914', type: VOWEL },
      { roman: 'ri', deva: '\u090B', type: VOWEL },
      { roman: 'ee', deva: '\u0908', type: VOWEL },
      { roman: 'oo', deva: '\u090A', type: VOWEL },
      { roman: 'T', deva: '\u091F', type: CONSONANT },
      { roman: 'D', deva: '\u0921', type: CONSONANT },
      { roman: 'N', deva: '\u0923', type: CONSONANT },
      { roman: 'F', deva: '\u092B', type: CONSONANT },
      { roman: 'X', deva: '\u0915\u094D\u0937', type: CONSONANT },
      { roman: 'Z', deva: '\u091C\u094D\u091E', type: CONSONANT },
      { roman: 'Q', deva: '\u0915\u094D\u0935', type: CONSONANT },
      { roman: 'C', deva: '\u091B', type: CONSONANT },
      { roman: 'B', deva: '\u092D', type: CONSONANT },
      { roman: 'L', deva: '\u0933', type: CONSONANT },
      { roman: 'k', deva: '\u0915', type: CONSONANT },
      { roman: 'g', deva: '\u0917', type: CONSONANT },
      { roman: 'c', deva: '\u091A', type: CONSONANT },
      { roman: 'j', deva: '\u091C', type: CONSONANT },
      { roman: 't', deva: '\u0924', type: CONSONANT },
      { roman: 'd', deva: '\u0926', type: CONSONANT },
      { roman: 'n', deva: '\u0928', type: CONSONANT },
      { roman: 'p', deva: '\u092A', type: CONSONANT },
      { roman: 'b', deva: '\u092C', type: CONSONANT },
      { roman: 'm', deva: '\u092E', type: CONSONANT },
      { roman: 'y', deva: '\u092F', type: CONSONANT },
      { roman: 'r', deva: '\u0930', type: CONSONANT },
      { roman: 'l', deva: '\u0932', type: CONSONANT },
      { roman: 'v', deva: '\u0935', type: CONSONANT },
      { roman: 'w', deva: '\u0935', type: CONSONANT },
      { roman: 's', deva: '\u0938', type: CONSONANT },
      { roman: 'S', deva: '\u0938', type: CONSONANT },
      { roman: 'h', deva: '\u0939', type: CONSONANT },
      { roman: 'f', deva: '\u092B', type: CONSONANT },
      { roman: 'x', deva: '\u0915\u094D\u0937', type: CONSONANT },
      { roman: 'z', deva: '\u091D', type: CONSONANT },
      { roman: 'A', deva: '\u0906', type: VOWEL },
      { roman: 'I', deva: '\u0908', type: VOWEL },
      { roman: 'U', deva: '\u090A', type: VOWEL },
      { roman: 'E', deva: '\u0910', type: VOWEL },
      { roman: 'O', deva: '\u0914', type: VOWEL },
      { roman: 'a', deva: '\u0905', type: VOWEL },
      { roman: 'i', deva: '\u0907', type: VOWEL },
      { roman: 'u', deva: '\u0909', type: VOWEL },
      { roman: 'e', deva: '\u090F', type: VOWEL },
      { roman: 'o', deva: '\u0913', type: VOWEL },
      { roman: 'M', deva: '\u0902', type: DIACRITIC },
      { roman: 'H', deva: '\u0903', type: DIACRITIC },
      { roman: '~', deva: '\u0901', type: DIACRITIC },
      { roman: '|', deva: '\u094D', type: DIACRITIC },
    ];

    var matraMap = {
      '\u0905': '', '\u0906': '\u093E', '\u0907': '\u093F', '\u0908': '\u0940',
      '\u0909': '\u0941', '\u090A': '\u0942', '\u090F': '\u0947', '\u0910': '\u0948',
      '\u0913': '\u094B', '\u0914': '\u094C', '\u090B': '\u0943',
    };

    var VIRAMA = '\u094D';
    var digits = { '0':'\u0966','1':'\u0967','2':'\u0968','3':'\u0969','4':'\u096A','5':'\u096B','6':'\u096C','7':'\u096D','8':'\u096E','9':'\u096F' };
    var punctuation = { '..':'\u0965', '.':'\u0964', ',':',', '!':'!', '?':'?', '(':'(', ')':')', '-':'-', "'":'\u093D' };

    function findMatch(input, pos) {
      for (var i = 0; i < mappings.length; i++) {
        var m = mappings[i];
        if (input.substring(pos, pos + m.roman.length) === m.roman) return m;
      }
      return null;
    }

    function transliterate(input) {
      var result = '', i = 0, prevConsonant = false;
      while (i < input.length) {
        var m = findMatch(input, i);
        if (!m) { result += input[i]; prevConsonant = false; i++; continue; }
        if (m.type === CONSONANT) {
          if (prevConsonant) result += VIRAMA;
          result += m.deva;
          prevConsonant = true;
        } else if (m.type === VOWEL) {
          if (prevConsonant) {
            var matra = matraMap[m.deva];
            if (matra) result += matra;
          } else {
            result += m.deva;
          }
          prevConsonant = false;
        } else {
          result += m.deva;
          prevConsonant = false;
        }
        i += m.roman.length;
      }
      return result;
    }

    var neDictWords = (typeof NE_DICTIONARY !== 'undefined') ? NE_DICTIONARY : [];
    var newDictWords = (typeof NEW_DICTIONARY !== 'undefined') ? NEW_DICTIONARY : [];

    function buildPrefixIndexFor(words) {
      var index = {};
      for (var i = 0; i < words.length; i++) {
        var w = words[i];
        for (var plen = 1; plen <= Math.min(3, w.length); plen++) {
          var pfx = w.substring(0, plen);
          if (!index[pfx]) index[pfx] = [];
          if (index[pfx].length < 30) index[pfx].push(w);
        }
      }
      return index;
    }

    var nePrefixIndex = buildPrefixIndexFor(neDictWords);
    var newPrefixIndex = buildPrefixIndexFor(newDictWords);

    function findDictWords(prefix, useNewaDict) {
      var searchPrefix = prefix;
      if (searchPrefix.endsWith(VIRAMA)) searchPrefix = searchPrefix.slice(0, -1);
      var newaVirama = String.fromCodePoint(0x11442);
      if (searchPrefix.endsWith(newaVirama)) searchPrefix = searchPrefix.slice(0, -newaVirama.length);
      if (!searchPrefix) return [];

      var index = useNewaDict ? newPrefixIndex : nePrefixIndex;
      var chars = Array.from(searchPrefix);
      var key = chars.slice(0, Math.min(3, chars.length)).join('');
      while (key.length > 0) {
        var bucket = index[key];
        if (bucket) {
          var results = [];
          for (var i = 0; i < bucket.length; i++) {
            if (bucket[i].indexOf(searchPrefix) === 0 && bucket[i] !== searchPrefix) {
              results.push(bucket[i]);
            }
          }
          if (results.length > 0) return results.slice(0, 8);
        }
        var keyChars = Array.from(key);
        keyChars.pop();
        key = keyChars.join('');
      }
      return [];
    }

    function getSuggestions(buffer) {
      if (!buffer || buffer.length === 0) return [];
      var suggestions = [], seen = {}, main = transliterate(buffer);

      function addUnique(text, hint, isNative) {
        if (!seen[text]) {
          seen[text] = true;
          suggestions.push({ text: text, hint: hint || '', isNative: !!isNative });
        }
      }

      addUnique(main, buffer, false);

      if (isNewaMode) {
        var newaPrefix = devaToNewa(main);
        var dictMatches = findDictWords(newaPrefix, true);
        for (var di = 0; di < dictMatches.length; di++) addUnique(dictMatches[di], '', true);
      } else {
        var dictMatches = findDictWords(main, false);
        for (var di = 0; di < dictMatches.length; di++) addUnique(dictMatches[di], '', true);
      }

      var withVirama = transliterate(buffer + '|');
      if (withVirama !== main) addUnique(withVirama, buffer + '|', false);

      var lastCh = buffer[buffer.length - 1];
      if ('nmNM'.indexOf(lastCh) >= 0) {
        var base = buffer.slice(0, -1);
        var baseT = transliterate(base);
        if (baseT.endsWith(VIRAMA)) baseT = baseT.slice(0, -1);
        addUnique(baseT + '\u0902', base + 'M', false);
      }

      if (lastCh === 'n' || lastCh === 'N') {
        var base2 = buffer.slice(0, -1);
        var base2T = transliterate(base2);
        if (base2T.endsWith(VIRAMA)) base2T = base2T.slice(0, -1);
        addUnique(base2T + '\u0901', base2 + '~', false);
      }

      var vowelAlts = {
        'a': 'aa', 'i': 'ii', 'u': 'uu', 'e': 'ai', 'o': 'au',
        'aa': 'a', 'ii': 'i', 'uu': 'u', 'ai': 'e', 'au': 'o',
      };
      for (var vk in vowelAlts) {
        if (buffer.endsWith(vk)) {
          var altBuf = buffer.slice(0, -vk.length) + vowelAlts[vk];
          var altResult = transliterate(altBuf);
          addUnique(altResult, altBuf, false);
        }
      }

      return suggestions.slice(0, 9);
    }

    var textarea = document.getElementById('devanagari-output');
    var suggestionBar = document.getElementById('suggestion-bar');
    var editorArea = document.getElementById('editor-area');
    var btnDeva = document.getElementById('btn-devanagari');
    var btnNewa = document.getElementById('btn-newa');
    var scriptLabel = document.getElementById('script-label');
    var btnCopy = document.getElementById('btn-copy');
    var btnClear = document.getElementById('btn-clear');
    var keyboardContainer = document.getElementById('keyboard-container');
    var keyboardToggle = document.getElementById('keyboard-toggle');
    var keyboardTitle = document.getElementById('keyboard-title');
    var helpSection = document.getElementById('help-section');

    var isNewaMode = false;
    var romanBuffer = '';
    var selectedSuggestion = 0;
    var keyboardVisible = true;
    var devanagariText = '';

    function showSuggestions() {
      var suggestions = getSuggestions(romanBuffer);
      if (suggestions.length === 0 || romanBuffer.length === 0) {
        hideSuggestionBar();
        return;
      }
      selectedSuggestion = 0;
      suggestionBar.innerHTML = '';
      suggestionBar.className = 'suggestion-bar' + (isNewaMode ? ' newa-mode' : '');
      suggestions.forEach(function(s, idx) {
        var div = document.createElement('div');
        div.className = 'suggestion-item' + (idx === 0 ? ' selected' : '');

        var indexSpan = document.createElement('span');
        indexSpan.className = 'index-hint';
        indexSpan.textContent = (idx + 1);
        div.appendChild(indexSpan);

        if (isNewaMode) {
          var group = document.createElement('span');
          group.className = 'suggestion-text-group';

          var mainSpan = document.createElement('span');
          mainSpan.className = 'main-text';
          mainSpan.style.fontFamily = "'Noto Sans Newa', sans-serif";
          mainSpan.textContent = s.isNative ? s.text : devaToNewa(s.text);
          group.appendChild(mainSpan);

          var devaBelow = document.createElement('span');
          devaBelow.className = 'suggestion-deva-below';
          devaBelow.textContent = s.isNative ? newaToDeva(s.text) : s.text;
          group.appendChild(devaBelow);

          div.appendChild(group);
        } else {
          var mainSpan = document.createElement('span');
          mainSpan.className = 'main-text';
          mainSpan.textContent = s.text;
          div.appendChild(mainSpan);
        }

        div.addEventListener('mousedown', function(e) {
          e.preventDefault();
          acceptSuggestion(idx);
        });
        suggestionBar.appendChild(div);
      });

      suggestionBar.style.display = 'block';
      editorArea.classList.add('has-suggestions');
    }

    function hideSuggestionBar() {
      suggestionBar.style.display = 'none';
      editorArea.classList.remove('has-suggestions');
      romanBuffer = '';
    }

    function hideSuggestionsOnly() {
      suggestionBar.style.display = 'none';
      editorArea.classList.remove('has-suggestions');
    }

    function acceptSuggestion(idx) {
      var suggestions = getSuggestions(romanBuffer);
      if (idx < 0 || idx >= suggestions.length) idx = 0;
      var chosen = suggestions[idx];

      var val = textarea.value;
      var cursorPos = textarea.selectionStart;
      var bufStart = cursorPos - romanBuffer.length;

      var finalText = isNewaMode ? (chosen.isNative ? chosen.text : devaToNewa(chosen.text)) : chosen.text;
      textarea.value = val.substring(0, bufStart) + finalText + val.substring(cursorPos);
      var newPos = bufStart + finalText.length;
      textarea.selectionStart = textarea.selectionEnd = newPos;

      if (isNewaMode) {
        var devBefore = devanagariText.substring(0, bufStart);
        devanagariText = devBefore + chosen.text;
      } else {
        devanagariText = textarea.value;
      }

      romanBuffer = '';
      hideSuggestionsOnly();
      textarea.focus();
    }

    function handleNumberShortcut(num) {
      if (suggestionBar.style.display === 'block' && romanBuffer.length > 0) {
        var suggestions = getSuggestions(romanBuffer);
        var idx = num - 1;
        if (idx >= 0 && idx < suggestions.length) {
          acceptSuggestion(idx);
          return true;
        }
      }
      return false;
    }

    textarea.addEventListener('keydown', function(e) {
      if (suggestionBar.style.display === 'block' && romanBuffer.length > 0) {
        if (e.key >= '1' && e.key <= '9' && !e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault();
          handleNumberShortcut(parseInt(e.key));
          return;
        }
      }

      if (suggestionBar.style.display === 'block') {
        var suggestions = getSuggestions(romanBuffer);
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          selectedSuggestion = Math.min(selectedSuggestion + 1, suggestions.length - 1);
          updateSuggestionHighlight();
          return;
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          selectedSuggestion = Math.max(selectedSuggestion - 1, 0);
          updateSuggestionHighlight();
          return;
        }
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Tab') {
          if (romanBuffer.length > 0) {
            e.preventDefault();
            acceptSuggestion(selectedSuggestion);
            if (e.key === ' ') {
              var pos = textarea.selectionStart;
              textarea.value = textarea.value.substring(0, pos) + ' ' + textarea.value.substring(pos);
              textarea.selectionStart = textarea.selectionEnd = pos + 1;
              if (!isNewaMode) devanagariText = textarea.value;
            }
            if (e.key === 'Enter') {
              var pos2 = textarea.selectionStart;
              textarea.value = textarea.value.substring(0, pos2) + '\n' + textarea.value.substring(pos2);
              textarea.selectionStart = textarea.selectionEnd = pos2 + 1;
              if (!isNewaMode) devanagariText = textarea.value;
            }
            return;
          }
        }
        if (e.key === 'Escape') {
          var pos3 = textarea.selectionStart;
          var bufStart = pos3 - romanBuffer.length;
          textarea.value = textarea.value.substring(0, bufStart) + textarea.value.substring(pos3);
          textarea.selectionStart = textarea.selectionEnd = bufStart;
          romanBuffer = '';
          hideSuggestionsOnly();
          return;
        }
      }

      if (e.key === 'Backspace' && romanBuffer.length > 0) {
        e.preventDefault();
        romanBuffer = romanBuffer.slice(0, -1);
        var pos4 = textarea.selectionStart;
        textarea.value = textarea.value.substring(0, pos4 - 1) + textarea.value.substring(pos4);
        textarea.selectionStart = textarea.selectionEnd = pos4 - 1;
        if (romanBuffer.length > 0) showSuggestions();
        else hideSuggestionsOnly();
        return;
      }
    });

    textarea.addEventListener('keypress', function(e) {
      var ch = e.key;
      if (ch.length !== 1) return;

      if (/[a-zA-Z~|]/.test(ch)) {
        e.preventDefault();
        romanBuffer += ch;
        var pos = textarea.selectionStart;
        textarea.value = textarea.value.substring(0, pos) + ch + textarea.value.substring(pos);
        textarea.selectionStart = textarea.selectionEnd = pos + 1;
        showSuggestions();
        return;
      }

      if (digits.hasOwnProperty(ch)) {
        if (romanBuffer.length > 0) acceptSuggestion(selectedSuggestion);
        e.preventDefault();
        var devDigit = isNewaMode ? devaToNewa(digits[ch]) : digits[ch];
        var pos2 = textarea.selectionStart;
        textarea.value = textarea.value.substring(0, pos2) + devDigit + textarea.value.substring(pos2);
        textarea.selectionStart = textarea.selectionEnd = pos2 + devDigit.length;
        if (!isNewaMode) devanagariText = textarea.value;
        return;
      }

      if (punctuation.hasOwnProperty(ch)) {
        if (romanBuffer.length > 0) acceptSuggestion(selectedSuggestion);
        e.preventDefault();
        var punct = isNewaMode ? devaToNewa(punctuation[ch]) : punctuation[ch];
        var pos3 = textarea.selectionStart;
        textarea.value = textarea.value.substring(0, pos3) + punct + textarea.value.substring(pos3);
        textarea.selectionStart = textarea.selectionEnd = pos3 + punct.length;
        if (!isNewaMode) devanagariText = textarea.value;
        return;
      }
    });

    textarea.addEventListener('paste', function() {
      if (romanBuffer.length > 0) acceptSuggestion(selectedSuggestion);
      setTimeout(function() { if (!isNewaMode) devanagariText = textarea.value; }, 0);
    });

    function updateSuggestionHighlight() {
      var items = suggestionBar.querySelectorAll('.suggestion-item');
      items.forEach(function(item, idx) {
        item.classList.toggle('selected', idx === selectedSuggestion);
      });
      if (items[selectedSuggestion]) {
        items[selectedSuggestion].scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    }

    btnDeva.addEventListener('click', function() {
      if (!isNewaMode) return;
      isNewaMode = false;
      btnDeva.classList.add('active');
      btnNewa.classList.remove('active');
      scriptLabel.textContent = 'Devanagari';
      textarea.classList.remove('newa-script');
      textarea.value = devanagariText;
      buildKeyboard();
      buildHelpSection();
    });

    btnNewa.addEventListener('click', function() {
      if (isNewaMode) return;
      if (romanBuffer.length > 0) acceptSuggestion(selectedSuggestion);
      isNewaMode = true;
      btnNewa.classList.add('active');
      btnDeva.classList.remove('active');
      scriptLabel.textContent = 'Nepal Lipi (Newa)';
      textarea.classList.add('newa-script');
      devanagariText = textarea.value;
      textarea.value = devaToNewa(devanagariText);
      buildKeyboard();
      buildHelpSection();
    });

    btnCopy.addEventListener('click', function() {
      navigator.clipboard.writeText(textarea.value).then(function() {
        var orig = btnCopy.textContent;
        btnCopy.textContent = 'Copied!';
        setTimeout(function() { btnCopy.textContent = orig; }, 1500);
      });
    });

    btnClear.addEventListener('click', function() {
      textarea.value = '';
      devanagariText = '';
      romanBuffer = '';
      hideSuggestionsOnly();
      textarea.focus();
    });

    var layoutToggle = document.getElementById('layout-toggle');
    var currentLayout = 'phonetic';

    var phoneticLayout = [
      [
        { label: '\u091F', sub: 'T', roman: 'T' }, { label: '\u0920', sub: 'Th', roman: 'Th' },
        { label: '\u0921', sub: 'D', roman: 'D' }, { label: '\u0922', sub: 'Dh', roman: 'Dh' },
        { label: '\u0923', sub: 'N', roman: 'N' }, { label: '\u0905', sub: 'a', roman: 'a' },
        { label: '\u0906', sub: 'aa', roman: 'aa' }, { label: '\u0907', sub: 'i', roman: 'i' },
        { label: '\u0908', sub: 'ii', roman: 'ii' }, { label: '\u0909', sub: 'u', roman: 'u' },
        { label: '\u090A', sub: 'uu', roman: 'uu' }, { label: '\u090F', sub: 'e', roman: 'e' },
        { label: '\u0910', sub: 'ai', roman: 'ai' }, { label: '\u0913', sub: 'o', roman: 'o' },
        { label: '\u0914', sub: 'au', roman: 'au' },
      ],
      [
        { label: '\u0915', sub: 'ka', roman: 'ka' }, { label: '\u0916', sub: 'kha', roman: 'kha' },
        { label: '\u0917', sub: 'ga', roman: 'ga' }, { label: '\u0918', sub: 'gha', roman: 'gha' },
        { label: '\u0919', sub: 'ng', roman: 'ng' }, { label: '\u091A', sub: 'cha', roman: 'cha' },
        { label: '\u091B', sub: 'chha', roman: 'chha' }, { label: '\u091C', sub: 'ja', roman: 'ja' },
        { label: '\u091D', sub: 'jha', roman: 'jha' }, { label: '\u091E', sub: 'nh', roman: 'nh' },
      ],
      [
        { label: '\u0924', sub: 'ta', roman: 'ta' }, { label: '\u0925', sub: 'tha', roman: 'tha' },
        { label: '\u0926', sub: 'da', roman: 'da' }, { label: '\u0927', sub: 'dha', roman: 'dha' },
        { label: '\u0928', sub: 'na', roman: 'na' }, { label: '\u092A', sub: 'pa', roman: 'pa' },
        { label: '\u092B', sub: 'pha', roman: 'pha' }, { label: '\u092C', sub: 'ba', roman: 'ba' },
        { label: '\u092D', sub: 'bha', roman: 'bha' }, { label: '\u092E', sub: 'ma', roman: 'ma' },
      ],
      [
        { label: '\u092F', sub: 'ya', roman: 'ya' }, { label: '\u0930', sub: 'ra', roman: 'ra' },
        { label: '\u0932', sub: 'la', roman: 'la' }, { label: '\u0935', sub: 'wa', roman: 'wa' },
        { label: '\u0936', sub: 'sha', roman: 'sha' }, { label: '\u0937', sub: 'Sha', roman: 'Sha' },
        { label: '\u0938', sub: 'sa', roman: 'sa' }, { label: '\u0939', sub: 'ha', roman: 'ha' },
        { label: '\u0915\u094D\u0937', sub: 'ksha', roman: 'ksha' }, { label: '\u091C\u094D\u091E', sub: 'gn', roman: 'gn' },
      ],
      [
        { label: '\u0902', sub: 'M', roman: 'M' }, { label: '\u0903', sub: 'H', roman: 'H' },
        { label: '\u0901', sub: '~', roman: '~' }, { label: '\u090B', sub: 'ri', roman: 'ri' },
        { label: '\u0964', sub: '.', roman: '.' }, { label: ' ', sub: 'Space', roman: ' ', wide: 'space' },
        { label: '\u232B', sub: '', roman: null, wide: 'backspace' },
      ]
    ];

    var bakamaanLayout = [
      [
        { label: '\u091F', sub: 'T', roman: 'T' }, { label: '\u0927', sub: 'dha', roman: 'dha' },
        { label: '\u092D', sub: 'bha', roman: 'bha' }, { label: '\u091A', sub: 'cha', roman: 'cha' },
        { label: '\u0924', sub: 'ta', roman: 'ta' }, { label: '\u0925', sub: 'tha', roman: 'tha' },
        { label: '\u0917', sub: 'ga', roman: 'ga' }, { label: '\u0937', sub: 'Sha', roman: 'Sha' },
        { label: '\u092F', sub: 'ya', roman: 'ya' }, { label: '\u0909', sub: 'u', roman: 'u' },
        { label: '\u0942', sub: 'uu', roman: 'uu' }, { label: '\u0947', sub: 'e', roman: 'e' },
        { label: '\u0930', sub: 'ra', roman: 'ra' },
      ],
      [
        { label: '\u092C', sub: 'ba', roman: 'ba' }, { label: '\u0915', sub: 'ka', roman: 'ka' },
        { label: '\u092E', sub: 'ma', roman: 'ma' }, { label: '\u093E', sub: 'aa', roman: 'aa' },
        { label: '\u0928', sub: 'na', roman: 'na' }, { label: '\u091C', sub: 'ja', roman: 'ja' },
        { label: '\u0935', sub: 'wa', roman: 'wa' }, { label: '\u092A', sub: 'pa', roman: 'pa' },
        { label: '\u093F', sub: 'i', roman: 'i' }, { label: '\u0932', sub: 'la', roman: 'la' },
        { label: '\u0938', sub: 'sa', roman: 'sa' }, { label: '\u0941', sub: 'u-m', roman: 'u' },
        { label: '\u0940', sub: 'ii', roman: 'ii' },
      ],
      [
        { label: '\u0936', sub: 'sha', roman: 'sha' }, { label: '\u0939', sub: 'ha', roman: 'ha' },
        { label: '\u0905', sub: 'a', roman: 'a' }, { label: '\u0916', sub: 'kha', roman: 'kha' },
        { label: '\u0926', sub: 'da', roman: 'da' }, { label: '\u0921', sub: 'D', roman: 'D' },
        { label: '\u0918', sub: 'gha', roman: 'gha' }, { label: '\u092B', sub: 'pha', roman: 'pha' },
        { label: '\u0923', sub: 'N', roman: 'N' }, { label: '\u091D', sub: 'jha', roman: 'jha' },
        { label: '\u091E', sub: 'nh', roman: 'nh' },
      ],
      [
        { label: '\u0919', sub: 'ng', roman: 'ng' }, { label: '\u091B', sub: 'chha', roman: 'chha' },
        { label: '\u0920', sub: 'Th', roman: 'Th' }, { label: '\u0922', sub: 'Dh', roman: 'Dh' },
        { label: '\u0948', sub: 'ai', roman: 'ai' }, { label: '\u094B', sub: 'o', roman: 'o' },
        { label: '\u094C', sub: 'au', roman: 'au' }, { label: '\u0915\u094D\u0937', sub: 'ksha', roman: 'ksha' },
        { label: '\u091C\u094D\u091E', sub: 'gn', roman: 'gn' }, { label: '\u094D', sub: '|', roman: '|' },
      ],
      [
        { label: '\u0902', sub: 'M', roman: 'M' }, { label: '\u0903', sub: 'H', roman: 'H' },
        { label: '\u0901', sub: '~', roman: '~' }, { label: '\u090B', sub: 'ri', roman: 'ri' },
        { label: '\u0964', sub: '.', roman: '.' }, { label: ' ', sub: 'Space', roman: ' ', wide: 'space' },
        { label: '\u232B', sub: '', roman: null, wide: 'backspace' },
      ]
    ];

    function getActiveLayout() { return currentLayout === 'bakamaan' ? bakamaanLayout : phoneticLayout; }
    function displayText(devaText) { return isNewaMode ? devaToNewa(devaText) : devaText; }

    function buildKeyboard() {
      var layout = getActiveLayout();
      keyboardContainer.innerHTML = '';
      layout.forEach(function(row) {
        var rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        row.forEach(function(keyDef) {
          var btn = document.createElement('button');
          btn.className = 'key';
          if (keyDef.wide) btn.classList.add(keyDef.wide);
          if (isNewaMode && !keyDef.wide) btn.classList.add('newa-key');
          btn.type = 'button';

          if (keyDef.wide === 'space') {
            btn.textContent = 'Space';
          } else if (keyDef.wide === 'backspace') {
            btn.innerHTML = keyDef.label;
          } else {
            var mainSpan = document.createElement('span');
            mainSpan.textContent = isNewaMode ? devaToNewa(keyDef.label) : keyDef.label;
            btn.appendChild(mainSpan);
            if (isNewaMode) {
              var devaSpan = document.createElement('span');
              devaSpan.className = 'deva-sub';
              devaSpan.textContent = keyDef.label;
              btn.appendChild(devaSpan);
            } else if (keyDef.sub) {
              var subSpan = document.createElement('span');
              subSpan.className = 'sub';
              subSpan.textContent = keyDef.sub;
              btn.appendChild(subSpan);
            }
          }

          btn.tabIndex = -1;
          btn.addEventListener('mousedown', function(e) { e.preventDefault(); e.stopPropagation(); });
          btn.addEventListener('click', function(e) { e.preventDefault(); handleKeyPress(keyDef); });
          rowDiv.appendChild(btn);
        });
        keyboardContainer.appendChild(rowDiv);
      });
      keyboardTitle.textContent = isNewaMode ? 'Nepal Lipi Keyboard' : 'Devanagari Keyboard';
      layoutToggle.textContent = currentLayout === 'bakamaan' ? 'Phonetic' : '\u092C\u0915\u092E\u093E\u0928';
    }

    function buildHelpSection() {
      var d = function(t) { return displayText(t); };
      var newaClass = isNewaMode ? ' style="font-family:\'Noto Sans Newa\', sans-serif;"' : '';
      var scriptName = isNewaMode ? 'Nepal Lipi (Newa)' : 'Devanagari';

      var html = '<h3>How to Type ' + scriptName + '</h3>';
      html += '<div class="help-columns"><div>';
      html += '<table class="help-table"><thead><tr><th>Type</th><th>Get</th><th>Example</th></tr></thead><tbody>';

      var vowelRows = [
        ['a', '\u0905', 'ama', '\u0905\u092E'], ['aa / A', '\u0906', 'Ama', '\u0906\u092E'],
        ['i', '\u0907', 'iha', '\u0907\u0939'], ['ii / I', '\u0908', 'biimaa', '\u092C\u0940\u092E\u093E'],
        ['u', '\u0909', 'uba', '\u0909\u092C'], ['uu / U', '\u090A', 'guu', '\u0917\u0942'],
        ['e', '\u090F', 'ek', '\u090F\u0915\u094D'], ['ai / E', '\u0910', 'aich', '\u0910\u091A\u094D'],
        ['o', '\u0913', 'ok', '\u0913\u0915\u094D'], ['au / O', '\u0914', 'aur', '\u0914\u0930\u094D'],
      ];
      vowelRows.forEach(function(r) {
        html += '<tr><td>' + r[0] + '</td><td' + newaClass + '>' + d(r[1]) + '</td><td>' + r[2] + ' → <span' + newaClass + '>' + d(r[3]) + '</span></td></tr>';
      });
      html += '</tbody></table></div><div>';

      html += '<table class="help-table"><thead><tr><th>Type</th><th>Get</th><th>Note</th></tr></thead><tbody>';
      var consRows = [
        ['ka', '\u0915', ''], ['kha', '\u0916', ''], ['ga', '\u0917', ''], ['gha', '\u0918', ''],
        ['cha', '\u091A', ''], ['chha / Cha', '\u091B', ''], ['Ta', '\u091F', 'Capital T = retroflex'],
        ['ta', '\u0924', 'Lowercase t = dental'], ['Da', '\u0921', 'Capital D = retroflex'],
        ['da', '\u0926', 'Lowercase d = dental'],
      ];
      consRows.forEach(function(r) {
        html += '<tr><td>' + r[0] + '</td><td' + newaClass + '>' + d(r[1]) + '</td><td>' + r[2] + '</td></tr>';
      });
      html += '</tbody></table></div></div>';

      helpSection.innerHTML = html;
    }

    function handleKeyPress(keyDef) {
      textarea.focus();
      if (keyDef.wide === 'backspace') {
        var pos = textarea.selectionStart;
        if (pos > 0) {
          if (romanBuffer.length > 0) {
            romanBuffer = romanBuffer.slice(0, -1);
            textarea.value = textarea.value.substring(0, pos - 1) + textarea.value.substring(pos);
            textarea.selectionStart = textarea.selectionEnd = pos - 1;
            if (romanBuffer.length > 0) showSuggestions();
            else hideSuggestionsOnly();
          } else {
            textarea.value = textarea.value.substring(0, pos - 1) + textarea.value.substring(pos);
            textarea.selectionStart = textarea.selectionEnd = pos - 1;
            if (!isNewaMode) devanagariText = textarea.value;
          }
        }
        return;
      }

      if (keyDef.wide === 'space') {
        if (romanBuffer.length > 0) acceptSuggestion(selectedSuggestion);
        var pos2 = textarea.selectionStart;
        textarea.value = textarea.value.substring(0, pos2) + ' ' + textarea.value.substring(pos2);
        textarea.selectionStart = textarea.selectionEnd = pos2 + 1;
        if (!isNewaMode) devanagariText = textarea.value;
        return;
      }

      var roman = keyDef.roman || keyDef.sub;
      if (roman) {
        var cursorPos = textarea.selectionStart;
        var before = textarea.value.substring(0, cursorPos);
        var after = textarea.value.substring(cursorPos);
        romanBuffer += roman;
        textarea.value = before + roman + after;
        textarea.selectionStart = textarea.selectionEnd = cursorPos + roman.length;
        showSuggestions();
      }
    }

    keyboardToggle.addEventListener('click', function() {
      keyboardVisible = !keyboardVisible;
      keyboardContainer.style.display = keyboardVisible ? '' : 'none';
      keyboardToggle.textContent = keyboardVisible ? 'Hide Keyboard' : 'Show Keyboard';
    });

    layoutToggle.addEventListener('click', function() {
      currentLayout = (currentLayout === 'phonetic') ? 'bakamaan' : 'phonetic';
      buildKeyboard();
      textarea.focus();
    });

    document.addEventListener('click', function(e) {
      if (!textarea.contains(e.target) && !suggestionBar.contains(e.target) && !keyboardContainer.contains(e.target)) {
        if (romanBuffer.length > 0) acceptSuggestion(selectedSuggestion);
        hideSuggestionsOnly();
      }
    });

    buildKeyboard();
    buildHelpSection();

  })();

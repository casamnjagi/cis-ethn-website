"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { kiembuDocumentDictionary } from "../../data/kiembuDocumentDictionary";

type Suggestion = {
  kiembu: string;
  english: string;
};

const SPECIAL_CHARACTERS = ["ĩ", "ũ", "Ĩ", "Ũ"];

const MORPHEMES = ["Ki", "Gi", "Mu", "Mũ", "Gĩ", "Kĩ"];

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export default function KiembuKeyboardPage() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isUpperCase, setIsUpperCase] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /*
   * ---------------------------------------------------------
   * PREPARE THE KĨEMBU DICTIONARY
   * ---------------------------------------------------------
   *
   * Your kiembuDocumentDictionary.ts contains:
   *
   * {
   *   english: "Tea",
   *   kiembu: "caai"
   * }
   *
   * Therefore we can directly use:
   *
   * entry.kiembu
   * entry.english
   */
  const dictionary = useMemo(() => {
    return kiembuDocumentDictionary
      .filter(
        (entry) =>
          typeof entry.kiembu === "string" &&
          entry.kiembu.trim().length > 0
      )
      .map((entry) => ({
        kiembu: entry.kiembu.trim(),
        english: entry.english?.trim() || "",
      }));
  }, []);

  /*
   * ---------------------------------------------------------
   * NORMALIZE TEXT
   * ---------------------------------------------------------
   *
   * This keeps accented Kĩembu characters intact.
   */
  const normalize = (value: string) => {
    return value
      .normalize("NFC")
      .toLocaleLowerCase("en-US")
      .trim();
  };

  /*
   * ---------------------------------------------------------
   * GET CURRENT WORD
   * ---------------------------------------------------------
   */
  const getCurrentWord = (value: string) => {
    const parts = value.split(/\s+/);

    return parts[parts.length - 1] || "";
  };

  /*
   * ---------------------------------------------------------
   * UPDATE PREDICTIVE SUGGESTIONS
   * ---------------------------------------------------------
   */
  const updateSuggestions = (value: string) => {
    setText(value);

    const currentWord = getCurrentWord(value);

    if (!currentWord) {
      setSuggestions([]);
      return;
    }

    const prefix = normalize(currentWord);

    if (prefix.length === 0) {
      setSuggestions([]);
      return;
    }

    const matches = dictionary
      .filter((entry) =>
        normalize(entry.kiembu).startsWith(prefix)
      )
      .slice(0, 8);

    setSuggestions(matches);
  };

  /*
   * ---------------------------------------------------------
   * INSERT TEXT AT CURSOR POSITION
   * ---------------------------------------------------------
   */
  const insertAtCursor = (value: string) => {
    const textarea = textareaRef.current;

    if (!textarea) {
      updateSuggestions(text + value);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const newText =
      text.substring(0, start) +
      value +
      text.substring(end);

    updateSuggestions(newText);

    requestAnimationFrame(() => {
      textarea.focus();

      const newCursorPosition = start + value.length;

      textarea.setSelectionRange(
        newCursorPosition,
        newCursorPosition
      );
    });
  };

  /*
   * ---------------------------------------------------------
   * INSERT A NORMAL KEYBOARD CHARACTER
   * ---------------------------------------------------------
   */
  const handleCharacter = (character: string) => {
    const value = isUpperCase
      ? character.toUpperCase()
      : character.toLowerCase();

    insertAtCursor(value);
  };

  /*
   * ---------------------------------------------------------
   * SPECIAL CHARACTER
   * ---------------------------------------------------------
   */
  const handleSpecialCharacter = (character: string) => {
    insertAtCursor(character);
  };

  /*
   * ---------------------------------------------------------
   * MORPHEME
   * ---------------------------------------------------------
   */
  const handleMorpheme = (morpheme: string) => {
    insertAtCursor(morpheme);
  };

  /*
   * ---------------------------------------------------------
   * SPACE
   * ---------------------------------------------------------
   */
  const handleSpace = () => {
    insertAtCursor(" ");
    setSuggestions([]);
  };

  /*
   * ---------------------------------------------------------
   * ENTER
   * ---------------------------------------------------------
   */
  const handleEnter = () => {
    insertAtCursor("\n");
    setSuggestions([]);
  };

  /*
   * ---------------------------------------------------------
   * BACKSPACE
   * ---------------------------------------------------------
   */
  const handleBackspace = () => {
    const textarea = textareaRef.current;

    if (!textarea) {
      updateSuggestions(text.slice(0, -1));
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === 0 && end === 0) {
      return;
    }

    let newText = text;
    let newCursorPosition = start;

    if (start !== end) {
      newText =
        text.substring(0, start) +
        text.substring(end);

      newCursorPosition = start;
    } else {
      newText =
        text.substring(0, start - 1) +
        text.substring(start);

      newCursorPosition = start - 1;
    }

    updateSuggestions(newText);

    requestAnimationFrame(() => {
      textarea.focus();

      textarea.setSelectionRange(
        newCursorPosition,
        newCursorPosition
      );
    });
  };

  /*
   * ---------------------------------------------------------
   * CLEAR
   * ---------------------------------------------------------
   */
  const clearText = () => {
    setText("");
    setSuggestions([]);

    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  };

  /*
   * ---------------------------------------------------------
   * AUTOCOMPLETE
   * ---------------------------------------------------------
   *
   * Replaces the current partial word with the selected
   * dictionary word.
   */
  const selectSuggestion = (suggestion: Suggestion) => {
    const currentWord = getCurrentWord(text);

    const startIndex =
      text.length - currentWord.length;

    const newText =
      text.substring(0, startIndex) +
      suggestion.kiembu +
      " ";

    setText(newText);
    setSuggestions([]);

    requestAnimationFrame(() => {
      textareaRef.current?.focus();

      const position = newText.length;

      textareaRef.current?.setSelectionRange(
        position,
        position
      );
    });
  };

  /*
   * ---------------------------------------------------------
   * PHYSICAL KEYBOARD
   * ---------------------------------------------------------
   */
  useEffect(() => {
    const handlePhysicalKeyboard = (event: KeyboardEvent) => {
      /*
       * Do not interfere when the textarea itself is receiving
       * normal keyboard input.
       */
      if (
        document.activeElement === textareaRef.current
      ) {
        return;
      }

      if (event.key === "Backspace") {
        event.preventDefault();
        handleBackspace();
        return;
      }

      if (event.key === " ") {
        event.preventDefault();
        handleSpace();
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        handleEnter();
        return;
      }

      if (event.key.length === 1) {
        event.preventDefault();

        insertAtCursor(
          event.shiftKey
            ? event.key.toUpperCase()
            : event.key.toLowerCase()
        );
      }
    };

    window.addEventListener(
      "keydown",
      handlePhysicalKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handlePhysicalKeyboard
      );
    };
  }, [text, isUpperCase]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <header className="mb-8 text-center">

          <div className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
            CIS-ETHN • Indigenous Language Technology
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-green-900 md:text-5xl">
            KĩembuKey
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            An indigenous digital keyboard designed to make
            Kĩembu typing easier, faster and more orthographically
            accurate.
          </p>

        </header>

        {/* =====================================================
            TEXT EDITOR
        ====================================================== */}
        <section className="mb-8 overflow-hidden rounded-3xl border border-green-100 bg-white shadow-xl">

          <div className="border-b border-gray-100 bg-green-900 px-5 py-4">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h2 className="text-xl font-bold text-white">
                  Kĩembu Writing Area
                </h2>

                <p className="text-sm text-green-100">
                  Type using your computer keyboard or the
                  KĩembuKey virtual keyboard.
                </p>
              </div>

              <div className="flex gap-2">

                <button
                  onClick={clearText}
                  className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-50"
                >
                  Clear
                </button>

              </div>

            </div>

          </div>

          <div className="p-5">

            <textarea
              ref={textareaRef}
              value={text}
              onChange={(event) =>
                updateSuggestions(event.target.value)
              }
              placeholder="Andika Kĩembu hano..."
              className="min-h-[180px] w-full resize-y rounded-2xl border-2 border-green-100 bg-green-50/50 p-5 text-xl leading-9 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
              spellCheck={false}
            />

            {/* =================================================
                AUTOCOMPLETE
            ================================================== */}
            {suggestions.length > 0 && (

              <div className="mt-5">

                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />

                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Kĩembu Suggestions
                  </span>
                </div>

                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

                  {suggestions.map(
                    (suggestion, index) => (

                      <button
                        key={`${suggestion.kiembu}-${index}`}
                        onClick={() =>
                          selectSuggestion(suggestion)
                        }
                        className="rounded-2xl border border-green-200 bg-green-50 p-3 text-left transition hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-100"
                      >

                        <div className="font-bold text-green-900">
                          {suggestion.kiembu}
                        </div>

                        {suggestion.english && (
                          <div className="mt-1 text-xs text-gray-500">
                            {suggestion.english}
                          </div>
                        )}

                      </button>

                    )
                  )}

                </div>

              </div>

            )}

          </div>

        </section>

        {/* =====================================================
            SPECIAL CHARACTERS
        ====================================================== */}
        <section className="mb-6 rounded-3xl border border-green-100 bg-white p-5 shadow-lg">

          <div className="mb-5">

            <h2 className="text-2xl font-bold text-green-900">
              Indigenous Orthographic Support
            </h2>

            <p className="mt-1 text-gray-600">
              Direct access to Kĩembu characters that are
              difficult to access on standard keyboards.
            </p>

          </div>

          <div className="grid grid-cols-4 gap-3 md:max-w-2xl">

            {SPECIAL_CHARACTERS.map((character) => (

              <button
                key={character}
                onClick={() =>
                  handleSpecialCharacter(character)
                }
                className="flex h-20 items-center justify-center rounded-2xl border-2 border-green-200 bg-green-50 text-4xl font-bold text-green-900 shadow-sm transition hover:-translate-y-1 hover:border-green-500 hover:bg-green-100 hover:shadow-md active:scale-95"
              >
                {character}
              </button>

            ))}

          </div>

        </section>

        {/* =====================================================
            MORPHEMES
        ====================================================== */}
        <section className="mb-8 rounded-3xl border border-amber-100 bg-white p-5 shadow-lg">

          <div className="mb-5">

            <h2 className="text-2xl font-bold text-amber-900">
              Repetitive Morpheme Optimization
            </h2>

            <p className="mt-1 text-gray-600">
              Frequently occurring Kĩembu morphemes are
              positioned here for rapid access.
            </p>

          </div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">

            {MORPHEMES.map((morpheme) => (

              <button
                key={morpheme}
                onClick={() =>
                  handleMorpheme(morpheme)
                }
                className="rounded-2xl border-2 border-amber-200 bg-amber-50 py-5 text-xl font-bold text-amber-900 transition hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-100 hover:shadow-md active:scale-95"
              >
                {morpheme}
              </button>

            ))}

          </div>

        </section>

        {/* =====================================================
            VIRTUAL KEYBOARD
        ====================================================== */}
        <section className="mb-10 rounded-3xl bg-gray-950 p-4 shadow-2xl sm:p-6">

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="text-2xl font-bold text-white">
                KĩembuKey Keyboard
              </h2>

              <p className="text-sm text-gray-400">
                Full virtual keyboard with indigenous
                orthographic characters.
              </p>
            </div>

            <button
              onClick={() =>
                setIsUpperCase(!isUpperCase)
              }
              className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
                isUpperCase
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {isUpperCase ? "ABC" : "abc"}
            </button>

          </div>

          {/* STANDARD KEYS */}
          <div className="space-y-2">

            {KEYBOARD_ROWS.map(
              (row, rowIndex) => (

                <div
                  key={rowIndex}
                  className="flex justify-center gap-1.5 sm:gap-2"
                >

                  {row.map((key) => (

                    <button
                      key={key}
                      onClick={() =>
                        handleCharacter(key)
                      }
                      className="h-12 min-w-0 flex-1 rounded-xl border border-gray-700 bg-gray-800 text-sm font-bold text-white shadow-sm transition hover:border-gray-500 hover:bg-gray-700 active:scale-95 sm:h-14 sm:max-w-[75px] sm:text-base"
                    >
                      {isUpperCase
                        ? key
                        : key.toLowerCase()}
                    </button>

                  ))}

                </div>

              )
            )}

          </div>

          {/* SPECIAL KEYS */}
          <div className="mt-3 flex flex-wrap justify-center gap-2">

            {SPECIAL_CHARACTERS.map(
              (character) => (

                <button
                  key={character}
                  onClick={() =>
                    handleSpecialCharacter(character)
                  }
                  className="h-14 min-w-[60px] rounded-xl border-2 border-green-600 bg-green-800 px-4 text-2xl font-bold text-white transition hover:bg-green-700 active:scale-95"
                >
                  {character}
                </button>

              )
            )}

          </div>

          {/* CONTROL ROW */}
          <div className="mt-3 grid grid-cols-4 gap-2">

            <button
              onClick={handleBackspace}
              className="h-14 rounded-xl bg-red-900 px-2 text-sm font-bold text-white transition hover:bg-red-800 active:scale-95 sm:text-base"
            >
              ← Backspace
            </button>

            <button
              onClick={handleSpace}
              className="h-14 rounded-xl bg-gray-800 font-bold text-white transition hover:bg-gray-700 active:scale-95"
            >
              Space
            </button>

            <button
              onClick={handleEnter}
              className="h-14 rounded-xl bg-gray-800 font-bold text-white transition hover:bg-gray-700 active:scale-95"
            >
              Enter
            </button>

            <button
              onClick={clearText}
              className="h-14 rounded-xl bg-gray-800 font-bold text-white transition hover:bg-gray-700 active:scale-95"
            >
              Clear
            </button>

          </div>

        </section>

        {/* =====================================================
            KEY FEATURES
        ====================================================== */}
        <section>

          <div className="mb-8 text-center">

            <div className="mb-2 text-sm font-bold uppercase tracking-widest text-green-700">
              KĩembuKey
            </div>

            <h2 className="text-3xl font-extrabold text-green-900">
              Key Features
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Designed to support Kĩembu digital communication,
              documentation and language preservation within
              the CIS-ETHN platform.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <Feature
              number="01"
              title="Indigenous Orthographic Support"
              text="Direct access to ĩ, ũ, Ĩ and Ũ improves orthographic correctness and typing efficiency."
            />

            <Feature
              number="02"
              title="Predictive Typing"
              text="KĩembuKey searches the Kĩembu document dictionary as the user types a word prefix and provides matching Kĩembu vocabulary."
            />

            <Feature
              number="03"
              title="Repetitive Morpheme Optimization"
              text="Frequently occurring morphemes such as Ki, Gi, Mu, Mũ, Gĩ and Kĩ have dedicated rapid-access buttons."
            />

            <Feature
              number="04"
              title="Autocomplete"
              text="The dictionary-powered suggestion system displays matching Kĩembu words together with their English meanings."
            />

            <Feature
              number="05"
              title="Cross-Platform Accessibility"
              text="The keyboard is implemented as a responsive Next.js interface and can be accessed through the CIS-ETHN website on desktop, tablet and mobile devices."
            />

            <Feature
              number="06"
              title="Kĩembu Language Preservation"
              text="KĩembuKey provides a practical digital mechanism for using indigenous orthography and incorporating documented Kĩembu vocabulary into modern digital communication."
            />

          </div>

        </section>

        {/* =====================================================
            FOOTER
        ====================================================== */}
        <footer className="mt-12 rounded-3xl bg-green-900 p-8 text-center text-white">

          <div className="text-2xl font-bold">
            Kĩembu • Culture • Technology
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-green-100">
            KĩembuKey is part of the CIS-ETHN digital
            language infrastructure for indigenous language
            documentation, accessibility and preservation.
          </p>

        </footer>

      </div>
    </main>
  );
}

/*
 * ============================================================
 * FEATURE COMPONENT
 * ============================================================
 */

function Feature({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      <div className="mb-5 flex items-center gap-4">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 font-bold text-green-800">
          {number}
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>

      </div>

      <p className="leading-7 text-gray-600">
        {text}
      </p>

    </article>
  );
}
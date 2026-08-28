type Props = {
  onCharacter: (character: string) => void;
};

const characters = [
  "ĩ",
  "Ĩ",
  "ũ",
  "Ũ",
];

export default function KiembuKeyboard({
  onCharacter,
}: Props) {

  return (
    <div className="kiembu-keyboard">

      <div className="keyboard-title">
        Kiembu characters
      </div>

      <div className="keyboard-buttons">

        {characters.map(character => (

          <button
            key={character}
            type="button"
            onClick={() => onCharacter(character)}
            className="kiembu-key"
          >
            {character}
          </button>

        ))}

      </div>

    </div>
  );
}
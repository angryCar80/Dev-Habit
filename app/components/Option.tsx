export enum OptionState {
  On,
  Off,
}
export interface OptionProps {
  option: string;
  optionState: OptionState;

  createOption: (option: string) => void;
  onToggle?: (state: OptionState) => void;
}

export default function Option({
  optionState,
  option,
  createOption,
  onToggle,
}: OptionProps) {

  const handleToggle = () => {
    const newState =
      optionState === OptionState.On ? OptionState.Off : OptionState.On;
    onToggle?.(newState);
  };

  return (

    <div className="flex items-center justify-between p-4 border border-subtle rounded-lg bg-surface">
      <label className="text-lg font-medium text-primary">
        {option}
      </label>
      <button
        onClick={handleToggle}
        className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent overflow-hidden ${
          optionState === OptionState.On
            ? "bg-accent"
            : "bg-muted"
        }`}
        role="switch"
        aria-checked={optionState === OptionState.On}
      >
        <span
          className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-sm ${
            optionState === OptionState.On ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

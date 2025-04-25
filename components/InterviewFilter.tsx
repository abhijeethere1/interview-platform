interface InterviewFilterProps {
    selected: string;
    onChange: (value: string) => void;
    options: string[]; // Ensure this is expecting an array of strings
  }
  
  export const InterviewFilter = ({ selected, onChange, options }: InterviewFilterProps) => {
    return (
      <div>
        <label htmlFor="interview-filter">Filter Options</label>
        <select
          id="interview-filter"
          value={selected}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
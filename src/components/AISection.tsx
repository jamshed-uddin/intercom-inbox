import React from "react";

interface AISectionProps {
  toggleSection: () => void;
  openAISection: boolean;
}

const AISection = ({ toggleSection, openAISection }: AISectionProps) => {
  return (
    <div className="">
      <h1>AI chat</h1>
      <button onClick={toggleSection} className="">
        Close
      </button>
    </div>
  );
};

export default AISection;

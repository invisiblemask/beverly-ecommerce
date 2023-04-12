import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SortAccordion({
  title,
  children,
  className,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <div className="sort-accordion">
        <div className="accordion-header" onClick={toggleAccordion}>
          <h3>{title}</h3>
          {isOpen ? (
            <IoIosArrowUp className="accordion-icon" />
          ) : (
            <IoIosArrowDown className="accordion-icon" />
          )}
          {/* <span
            className={`accordion-icon ${isOpen ? "open" : "closed"}`}
          ></span> */}
        </div>
        <div
          className={`accordion-content ${
            isOpen ? "open underline" : "closed"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

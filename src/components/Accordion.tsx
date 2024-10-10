// src/components/Accordion.tsx

import React, { useState } from 'react';
import styled from 'styled-components';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const AccordionHeader = styled.div<{ isOpen: boolean }>`
  background: ${({ isOpen }) => (isOpen ? '#f0f0f0' : '#fff')};
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionContent = styled.div`
  padding: 15px;
  border-top: 1px solid #ccc;
`;

const Icon = styled.span<{ isOpen: boolean }>`
  transition: transform 0.2s;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion} isOpen={isOpen}>
        <h3>{title}</h3>
        <Icon isOpen={isOpen}>▼</Icon>
      </AccordionHeader>
      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionContainer>
  );
};

export default Accordion;

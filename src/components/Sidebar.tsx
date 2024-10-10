// src/components/Sidebar.tsx

import React from 'react';
import styled from 'styled-components';

interface SidebarProps {
  isOpen: boolean;
  providers: string[];
  onClose: () => void;
  onSelectProvider: (providerName: string) => void;
}

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #ddd;
  box-shadow: ${({ isOpen }) => (isOpen ? '2px 0 5px rgba(0, 0, 0, 0.1)' : 'none')};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease;
  z-index: 1000;
`;

const CloseButton = styled.button`
  margin: 10px;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
`;

const ProviderList = styled.ul`
  list-style-type: none;
  padding: 10px;
`;

const ProviderItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Sidebar: React.FC<SidebarProps> = ({ isOpen, providers, onClose, onSelectProvider }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={onClose}>Close</CloseButton>
      <ProviderList>
        {providers.map((provider) => (
          <ProviderItem key={provider} onClick={() => onSelectProvider(provider)}>
            {provider}
          </ProviderItem>
        ))}
      </ProviderList>
    </SidebarContainer>
  );
};

export default Sidebar;

// src/components/ApiProviderList.tsx

import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

interface ApiProvider {
  name: string;
  apis: string[];
}

interface ApiProviderListProps {
  providers: ApiProvider[];
  onSelectProvider: (providerName: string) => void;
}

const ProviderListContainer = styled.div`
  margin: 20px;
`;

const ProviderItem = styled.div`
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #eee;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const ApiProviderList: React.FC<ApiProviderListProps> = ({ providers, onSelectProvider }) => {
  return (
    <ProviderListContainer>
      {providers.map((provider) => (
        <Accordion key={provider.name} title={provider.name}>
          {provider.apis.length > 0 ? (
            provider.apis.map((api) => (
              <ProviderItem key={api} onClick={() => onSelectProvider(api)}>
                {api}
              </ProviderItem>
            ))
          ) : (
            <div>No APIs available</div>
          )}
        </Accordion>
      ))}
    </ProviderListContainer>
  );
};

export default ApiProviderList;

// src/components/ApiDetails.tsx

import React from 'react';
import styled from 'styled-components';

interface ApiInfo {
  title: string;
  description: string;
  version: string;
  contact: {
    name: string;
    email: string;
    url: string;
  };
  logoUrl: string;
}

interface ApiDetailsProps {
  api: ApiInfo | null;
}

const DetailsContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const ApiTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ApiDescription = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
`;

const ApiVersion = styled.p`
  font-weight: bold;
`;

const ContactInfo = styled.div`
  margin-top: 15px;
`;

const Logo = styled.img`
  max-width: 100px;
  margin-bottom: 15px;
`;

const ApiDetails: React.FC<ApiDetailsProps> = ({ api }) => {
  if (!api) {
    return <div>No API selected</div>;
  }

  return (
    <DetailsContainer>
      <Logo src={api.logoUrl} alt={`${api.title} logo`} />
      <ApiTitle>{api.title}</ApiTitle>
      <ApiDescription>{api.description}</ApiDescription>
      <ApiVersion>Version: {api.version}</ApiVersion>
      <ContactInfo>
        <h4>Contact:</h4>
        <p>Name: {api.contact.name}</p>
        <p>Email: {api.contact.email}</p>
        <p>
          Website: <a href={api.contact.url} target="_blank" rel="noopener noreferrer">{api.contact.url}</a>
        </p>
      </ContactInfo>
    </DetailsContainer>
  );
};

export default ApiDetails;

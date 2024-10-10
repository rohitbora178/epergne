import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import styled from 'styled-components';
import useFetchApis from '../hooks/useFetchApis';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

// Define the ApiEntry type
interface ApiEntry {
  title: string;
  description: string;
  contact?: {
    name?: string;
    email?: string;
    url?: string;
  };
  version: string;
  endpoints: {
    method: string;
    path: string;
    description: string;
  }[];
}

const ApiDetailsPage: React.FC = () => {
  const { providerName, apiName } = useParams<{ providerName: string; apiName: string }>();
  const { apis, loading, error } = useFetchApis(providerName || '');

  const apiDetail = apis.find((api): api is ApiEntry => api.name === apiName);

  useEffect(() => {
    // You can handle additional side effects or data fetching if needed
  }, [providerName]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error loading API details: {error}</p>;
  }

  if (!apiDetail) {
    return <p>API not found.</p>;
  }

  return (
    <Container>
      <Title>{apiDetail.title}</Title>
      <Description>{apiDetail.description}</Description>
      <h2>Contact Information</h2>
      {apiDetail.contact && (
        <div>
          {apiDetail.contact.name && <p>Name: {apiDetail.contact.name}</p>}
          {apiDetail.contact.email && <p>Email: {apiDetail.contact.email}</p>}
          {apiDetail.contact.url && (
            <p>
              Website: <a href={apiDetail.contact.url}>{apiDetail.contact.url}</a>
            </p>
          )}
        </div>
      )}
      <h2>API Version</h2>
      <p>{apiDetail.version}</p>
      <h2>Endpoints</h2>
      {apiDetail.endpoints.map((endpoint) => (
        <div key={endpoint.path}>
          <h3>
            {endpoint.method.toUpperCase()} {endpoint.path}
          </h3>
          <p>{endpoint.description}</p>
        </div>
      ))}
    </Container>
  );
};

export default ApiDetailsPage;

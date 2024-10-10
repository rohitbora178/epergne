
import React from 'react';
import { useApiContext } from '../contexts/ApiContext';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';
import Loader from '../components/Loader';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const HomePage: React.FC = () => {
  const { providers, loading, setSelectedProvider } = useApiContext();

  const handleProviderSelect = (provider: string) => {
    setSelectedProvider(provider);
  };

  return (
    <Container>
      <Sidebar providers={providers} onProviderSelect={handleProviderSelect} />
      <Content>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <h1>Welcome to the API Explorer</h1>
            <p>Select an API provider from the sidebar to view available APIs.</p>
            <Button onClick={() => console.log("Button Clicked!")}>Explore APIs</Button>
          </div>
        )}
      </Content>
    </Container>
  );
};

export default HomePage;

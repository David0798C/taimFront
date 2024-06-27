import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background);
  color: var(--primary-foreground);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardContainer = styled.div`
  max-width: 24rem;
  background-color: var(--card);
  color: var(--card-foreground);
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 1rem;

  .profile-image {
    border-radius: 50%;
    height: 6rem;
    width: 6rem;
  }

  .name {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .role {
    color: var(--secondary);
  }
`;

export const Button = styled.button`
  background-color: var(--primary);
  color: var(--primary-foreground);
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primary) / 80%;
  }
`;

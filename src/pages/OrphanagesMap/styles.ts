import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.main`
  display: flex;

  width: 100vw;
  height: 100vh;

  position: relative;
`;

export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 440px;
  padding: 80px;
  background: ${({ theme }) => theme.backgrounds.primaryGradient};

  > header {
    > h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    > p {
      line-height: 28px;
      margin-top: 24px;
    }
  }

  > footer {
    display: flex;
    flex-direction: column;

    line-height: 24px;

    > strong {
      font-weight: 800;
    }
  }
`;

export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.texts.primary};

  z-index: 500;

  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

  transition: background-color 200ms ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const OrphanageLink = styled(RouterLink)``;

import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.backgrounds.primaryGradient};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  position: relative;
  padding: 16px;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;
`;

export const Children = styled.img`
  position: absolute;
  right: 10%;
`;

export const Content = styled.main`
  max-width: 350px;
  z-index: 2;

  > h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  > p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 16px;
  right: 16px;

  font-size: 24px;
  line-height: 34px;
  text-align: right;
  z-index: 2;

  > strong {
    font-weight: 800;
  }
`;

export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 2;

  width: 80px;
  height: 80px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.accent};

  transition: background-color 200ms ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

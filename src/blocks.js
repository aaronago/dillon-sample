import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.5rem;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #2ecc71;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #27ae60;
  }
`;

export const CenteredContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  margin: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0px 3px 14px -2px rgba(0, 0, 0, 0.75);
  background-color: #111;
  text-align: center;
  overflow: hidden;
`;

export const MoviePoster = styled.img`
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const MovieInfo = styled.div`
  max-width: 270px;
`;

export const TilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

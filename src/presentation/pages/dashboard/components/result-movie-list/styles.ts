import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  max-width: var(--max-width);
  margin: auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 24px;
    font-weight: 700px;
    margin-bottom: 5px;
  }
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  max-width: var(--max-width);
`;

export const Button = styled.button`
  visibility: hidden;
`;

export const Card = styled.div`
  background: var(--clr-grey-9);
  border-radius: 5px;
  color: #363F5F;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }

  &:hover {
    opacity: 0.7;
    background: #ffbf0b;
    cursor: pointer;
  }
`;

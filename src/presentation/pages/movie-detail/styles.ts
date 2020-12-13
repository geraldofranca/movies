import styled from 'styled-components';

export const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Aside = styled.aside`
  width: 320px;
  padding: 30px 20px;
  margin-top: 15px;
`;

export const Main = styled.main`
  flex: 1;
  padding: 30px 10px;
  margin-top: 10px;
`;

export const MovieInfo = styled.div`
  span {
    font-size: 18px;
    color: var(--clr-grey-4);
    margin-top: 5px;
  }

  ul {
    margin-top: 10px;
  }

  li {
    margin-bottom: 5px;
    font-size: 16px;
    color: var(--clr-grey-3);

    strong {
      font-weight: 700;
    }
  }
`;

export const ContainerSimilar = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 20px;

  h1 {
    font-weight: 700;
  }
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  max-width: var(--max-width);
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

export const Back = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  span {
    font-weight: 700;
  }
`;

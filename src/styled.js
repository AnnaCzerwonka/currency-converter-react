import styled from "styled-components";

export const AppWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 30px ${({ theme }) => theme.colors.deepTeal};
  border-radius: 10px;
  flex-basis: 460px;
  margin: 20px;
  padding: 40px;
`;




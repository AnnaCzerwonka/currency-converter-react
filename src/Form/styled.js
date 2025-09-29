import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 400px;
  max-width: 400px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

export const Fieldset = styled.fieldset`
  border: 2px solid ${({ theme }) => theme.colors.requiredBorder};
  border-radius: 10px;
  padding: 10px 12px;
`;

export const Legend = styled.legend`
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 10px;
  display: inline-block;
  text-align: center;
  font-weight: bold;
`;

export const LabelText = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-family: 'Lato', sans-serif;
`;

export const InputField = styled.input`
  padding: 5px;
  border-radius: 5px;

  &:required {
    border-color: ${({ theme }) => theme.colors.requiredBorder};
  }

  &:invalid {
    background-color: ${({ theme }) => theme.colors.invalidBackground};
  }
`;

export const SelectField = styled.select`
  padding: 5px;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.teal};
  font-family: 'Lato', sans-serif;
  padding: 5px;
  margin: 5px;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.deepTeal};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.coral};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.crimson};
    color: ${({ theme }) => theme.colors.white};
    outline: none;
  }
`;

export const Loading = styled.p`
  color: ${({ theme }) => theme.colors.teal};
`;

export const Failure = styled.p`
  color: ${({ theme }) => theme.colors.crimson};
`;

export const Info = styled.p`
  font-size: 0.8em;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
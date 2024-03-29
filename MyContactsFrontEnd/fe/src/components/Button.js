import styled, { css } from 'styled-components'

export default styled.button`
  height: 52px;
  padding: 0 16px;

  border:none;
  border-radius: 4px;

  background: ${({ theme }) => theme.colors.primary.main};

  font-size:16px;
  font-weight: bold;
  color: #fff;

  box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
  transition: all 0.2s ease-in-out;

  &:hover{
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active{
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: not-allowed;
  }

${({ theme, danger }) => (
  danger && css`
    background: ${theme.colors.danger.main};

  &:hover{
    background: ${theme.colors.danger.light};
  }

  &:active{
    background:  ${theme.colors.danger.dark};
  }
  `
)}

`

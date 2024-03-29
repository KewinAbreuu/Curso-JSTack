import styled from 'styled-components'

export default styled.select`
  width:100%;
  height: 52px;
  background: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
  outline: none;
  padding: 0 12px;
  font-size: 16px;
  transition: border-color 0.2s ease-in-out;

  &:focus{
    border-color: ${({ theme }) => theme.colors.primary.main}
  }
`

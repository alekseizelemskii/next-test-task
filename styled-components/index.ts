import styled from "styled-components";

export const Collection = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 3rem 0;
    margin-bottom: 2rem;
`;

export const Card = styled.li`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
    border-radius: 5px;
    text-align: center;
    padding: 1rem 1rem;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
`;


export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  padding: 3rem 0;
`;

export const Input = styled.input`
  display: block;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 0.5rem 1rem;
  border: 1px solid #000;
  line-height: 1em;
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 2rem;
  width: 40%;
  outline: none;
`;

export const Button = styled.button`
  display: block;
  background: #313b3f;
  opacity: 0.8;
  padding: 0.7rem 1rem;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 20px;
  font-size: 20px;
  width: 20%;
  outline: none;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
    
  &:hover {
    opacity: 1;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
`;


export const Nav = styled.nav`
    background: lightgray;
    padding: 17px 0;

`;

export const NavbarItem = styled.div`
    position: relative;    
`

export const Logo = styled.a`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: black;
    cursor: pointer;
`;
export const AddPostBtn = styled.a`
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    background: #67BFFF;
    box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
    border-radius: 25px;
    position: absolute;
    width: 139px;
    height: 30px;
    left: 50%;
    top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%);
    cursor: pointer;
`;

export const Wrapper = styled.div`
  background: #EE5FF;
  min-height: 100vh;
  width: 100%
  `
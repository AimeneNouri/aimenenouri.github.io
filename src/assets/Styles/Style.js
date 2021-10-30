import styled from "styled-components";

export const HS = styled.section`
  
`;

export const HomeContainer = styled.div`
 //
`;

export const HomeInfo = styled.div`

  @media screen and (min-width: 800px) {
    display: none !important;
    padding: 6rem 0;
  }

  @media screen and (max-width: 800px) {
    padding: 7rem 0;
  }

  @media screen and (max-width: 640px) {
    padding: 6rem 0;
  }

  @media screen and (max-width: 480px) {
    padding: 7rem 0;
  }

  @media screen and (max-height: 700px) {
    padding: 4rem 0;
  }
`;

export const HomeSub = styled.div`
  color: #fa1e4e;
  font-size: clamp(15px, 5vw, 17px);
  padding: 0 7px;
  font-family: monospace;
  font-weight: 400;
`;

export const HomeTitle = styled.h1`
  font-size: 2.1rem;
  color: #fafaff;
  padding: 0 7px;

  @media only screen and (max-width: 800px) {
    font-size: 1.8rem;
    color: #fafaff;
  }
`;

export const HomeDetails = styled.div`
  color: #8892b0;
  font-size: 16px;
  padding: 0 7px;

  @media only screen and (max-width: 800px) {
    color: #fafaff;
  }
`;

export const HomeSpan = styled.span`
  text-shadow: 0 20px 25px rgba(0, 0, 0, 0.5);
`;

export const HomeBottom = styled.div`
  @media screen and (max-height: 560px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HomeScroll = styled.div`
  /* margin-top: 2rem; */
  position: absolute;
  bottom: 0;
  padding-bottom: 10px;
  -webkit-animation: bounce 2s infinite 2s;
  animation: bounce 2s infinite 2s;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  transform: scale(1);

  @media screen and (min-width: 800px) {
    display: none !important;
  }

  @media screen and (min-width: 700px) {
    margin-top: 4rem;
  }

  @media screen and (max-height: 560px) {
    position: relative;
  }

  @keyframes bounce {
    0%,
    100%,
    20%,
    50%,
    80% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      transform: translateY(-10px);
    }
    60% {
      -webkit-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      transform: translateY(-5px);
    }
  }
`;

export const HomeScrollLink = styled.a`
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  color: #fa1e4e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 225px;

  @media screen and (min-width: 800px) {
    display: none !important;
  }

  @media screen and (max-width: 480px) {
    width: 160px;
  }

  @media screen and (max-height: 560px) {
    position: relative;
  }
`;

export const ConsoleContainer = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 200px);
  justify-content: center;

  @media only screen and (max-width: 800px) {
    display: none !important;
  }
`;

export const Console = styled.div`
  border-radius: 10px;
  color: whitesmoke;
  font-family: "Anonymous Pro", monospace;
  height: 77%;
  min-height: 390px;
  width: 45%;
  overflow: hidden;
  background-color: rgb(40, 44, 52);
  text-align: left;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.288);
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.288);
  -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.288);

  @media screen and (max-width: 1200px) {
    width: 55%;
  }

  @media screen and (device-width: 1024px) {
    width: 95%;
  }


  @media screen and (max-width: 968px) {
    width: 70%;
  }
`;

export const ConsoleHeader = styled.div`
  align-items: center;
  display: flex;
  height: 10%;
  justify-content: flex-start;
  max-height: 40px;
  width: 100%;
`;

export const DotRed = styled.span`
  border-radius: 50%;
  height: 12px;
  margin-left: 15px;
  margin-top: 10px;
  width: 12px;
  background-color: #fa1e4e;
`;

export const DotYellow = styled.span`
  border-radius: 50%;
  height: 12px;
  margin-left: 15px;
  margin-top: 10px;
  width: 12px;
  background-color: #ffd60a;
`;

export const DotGreen = styled.span`
  border-radius: 50%;
  height: 12px;
  margin-left: 15px;
  margin-top: 10px;
  width: 12px;
  background-color: #32d74b;
`;

export const ConsoleBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  padding: 2%;
  width: auto;
`;

export const TerminalOutput = styled.div`
  overflow-y: hidden;
  overflow: auto;
`;

export const TerminalLine = styled.div`
  font-size: 2vh;
  position: relative;
`;

export const ConsoleInput = styled.input`
  opacity: 0;
  width: 100px;
  filter: alpha(opacity=0);
`;


export const Header = styled.div`
  height: 80px;
  top: 0;
  font-size: 1rem;
  position: sticky;
  z-index: 999;
  -webkit-appearance: none;

  @media screen and (max-width: 1090px) {
    transition: 0.8s all ease;
    top: 0;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    height: 0;
  }
`;

export const Container = styled.div`
  height: 100px;
  float:right;
`;

export const SocialMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 0 2rem;

  @media screen and (max-width: 800px) {
    display: none !important;
  }
`;

export const SocialItem = styled.li`
  height: 80px;
`;

export const SocialLinks = styled.a`
  color: #fa1e4e;
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  padding: 0 1rem;
  outline: none;
  height: 100%;
  //cursor: pointer;
  padding: 0 1rem;
  
  @media screen and (max-width: 1124px) {
    font-size: 15px;
  }
`;

// export const ToggleButton = styled.div`
//   transform: rotate(0);
//   display: flex;
//   align-items: center;
// `;

// export const Sun = styled.svg`
// `;

// export const Moon = styled.svg`
// `;

// export const Path = styled.path`
// //
// `;
// export const Label = styled.label`
//   position: relative;
//   display: inline-block; 
//   width: 60px;
//   height: 25px;
// `;

// export const Slider = styled.span`
//   position: absolute;
//   cursor: pointer;
//   top: 0;
//   left: 5px;
//   right: 5px;
//   bottom: 0;
//   background-color: #ccc;
//   transition: .3s;
//   border-radius: 34px;

//   &:before{
//     position: absolute;
//     content: '';
//     width: 19px;
//     height: 19px;
//     left: calc(15% - 5px);
//     top: 3px;
//     bottom: 3px;
//     border-radius: 50%;
//     background-color: #fff;
//     transition: .3s;
//   }
// `;

// export const Input = styled.input`
//   opacity: 0;
//   width: 0; 
//   height: 0;

//   &:checked + ${Slider}{
//     background-color: #bae67e;
//   }

//   &:checked + ${Slider}:before{
//     transform: translateX(26px);
//   }
// `;

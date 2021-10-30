import React, { useEffect, useRef, useState } from "react";
import logo from "./assets/img/mylogo.png";
import {
  HS,
  HomeContainer,
  HomeInfo,
  HomeSub,
  HomeTitle,
  HomeSpan,
  HomeDetails,
  ConsoleContainer,
  Console,
  ConsoleHeader,
  DotRed,
  DotYellow,
  DotGreen,
  ConsoleBody,
  TerminalLine,
  TerminalOutput,
  HomeScroll,
  HomeScrollLink,
  HomeImg,
  ConsoleInput,
  Header,
  Container,
  SocialMenu,
  SocialItem,
  SocialLinks,
  HomeBottom,
} from "./assets/Styles/Style";
import { FaArrowUp } from "react-icons/fa";
import { Data } from "./data";
import social from "./assets/social";

const App = () => {
  const inputRef = useRef();
  // Console Code
  const KEY_CODES = [38];
  let userInput, terminalOutput;

  useEffect(() => {
    userInput = document.getElementById("terminalInput");
    terminalOutput = document.getElementById("terminalOutput");
    const key = (e) => {
      const input = userInput.innerHTML;

      if (KEY_CODES.includes(e.keyCode)) {
        return;
      }

      if (e.key === "Enter") {
        if(input.length === 0){
          let output = `<div> $ ${input}</div>`;
          terminalOutput.innerHTML = `${terminalOutput.innerHTML} <div class="terminal-line">${output}</div>`;
        }
        executeCommand(input);
        userInput.innerHTML = "";
        return;
      }
      userInput.innerHTML =  input + e.key;
    };

    const executeCommand = (input) => {
      let output;
      input = input.toLowerCase();
      if (input.length === 0) {
        return;
      }
      output = `<div> $ ${input}</div>`;
      if (input === "clear") {
        terminalOutput.innerHTML = `<span style="font-size: 2vh">Hey 👋 Welcome, these are the supported commands:<br/>
          about, experience, education, skills, contact, projects, cv, socials </span>`;
        return;
      } else if (!Data.hasOwnProperty(input)) {
        output += `
          <span style='font-size: 2vh'> command not found: <span style='color:yellow'>${input}</span>
          <br />Supported commands: about, experience, education, skills, contact, projects, cv, socials </span>
        `;
      } else {
        output += Data[input];
      }

      terminalOutput.innerHTML = `${terminalOutput.innerHTML} <div class="terminal-line">${output}</div>`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    };

    const backspace = (e) => {
      if (e.keyCode !== 8 && e.keyCode !== 46) {
        return;
      }
      userInput.innerHTML = userInput.innerHTML.slice(
        0,
        userInput.innerHTML.length - 1
      );
    };

    document.addEventListener("keypress", key);
    document.addEventListener("keydown", backspace);
  });

  return (
    <>
      <Header>
        <Container>
          <SocialMenu>
            {/* {social.map(({ name, path, icon }) => (
              <SocialItem key={name}>
                <SocialLinks href={path}>{name} </SocialLinks>
              </SocialItem>
            ))} */}
          </SocialMenu>
        </Container>
      </Header>
      <HS id="home">
        <HomeContainer className="bd-grid">
          <HomeInfo>
            <HomeSub>Hi, my name is</HomeSub>
            <HomeTitle>
              <HomeSpan>Aimene Nouri</HomeSpan>
            </HomeTitle>
            <HomeDetails>
              I am a Software Engineering Student Based in Morocco. focused on
              building and designing beautiful web apps & mobile apps 👨‍💻,
              <br />
              You can also find me on <a href="https://twitter.com/nouri_aimene" className="social">Twitter</a> and <a href="https://linkedin.com/in/aimene-nouri/" className="social">LinkedIn</a>.
              <br />
              When I'm not in front of a computer screen, I'm probably playing
              video games, having fun with friends. 
            </HomeDetails>
          </HomeInfo>
          <ConsoleContainer>
            <Console>
              <ConsoleHeader>
                <DotRed></DotRed>
                <DotYellow></DotYellow>
                <DotGreen></DotGreen>
              </ConsoleHeader>
              <ConsoleBody onClick={() => inputRef.current.focus()}>
                <TerminalOutput id="terminalOutput">
                  <TerminalLine>
                    <span>
                      Hey 👋 Welcome, these are the supported commands:
                      <br />
                      about, experience, education, skills, contact, projects,
                      cv, socials{" "}
                    </span>
                  </TerminalLine>
                </TerminalOutput>
                <TerminalLine>
                  <span>{" $ "}</span>
                  <span id="terminalInput" style={{color:'yellow'}}></span>
                  <ConsoleInput type="text" ref={inputRef} />
                </TerminalLine>
              </ConsoleBody>
            </Console>
          </ConsoleContainer>
          <HomeBottom>
            <HomeScroll>
              <HomeScrollLink
                href="https://github.com/AimeneNouri?tab=repositories"
                rel="noreferrer"
                target="_blank"
              >
                <FaArrowUp style={{ fontSize: "11px" }} />
                See my Work
              </HomeScrollLink>
            </HomeScroll> 
            <HomeImg src={logo} alt="Aimene_logo" />
          </HomeBottom>
        </HomeContainer>
      </HS>
    </>
  );
};

export default App;

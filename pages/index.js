import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const [name, setNane] = useState('');
  const router = useRouter();

  function handleOnSubmit(ev) {
    ev.preventDefault();
    router.push(`/qiz?Name=${name}`);
  }

  function handleOnChange(ev) {
    const newName = ev.target.value;
    setNane(newName);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(ev) => handleOnSubmit(ev)}>
              <input
                placeholder="Digite o seu nome"
                value={name}
                onChange={(ev) => handleOnChange(ev)}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar  {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quiz da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet consectetur adiHic op</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}

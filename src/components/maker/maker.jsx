import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Hochul',
      company: 'Anonymous',
      theme: 'light',
      title: 'title',
      email: 'email',
      message: 'message',
      fileName: 'file_name',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Hochul',
      company: 'Anonymous',
      theme: 'colorful',
      title: 'title',
      email: 'email',
      message: 'message',
      fileName: 'file_name',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'Hochul',
      company: 'Anonymous',
      theme: 'dark',
      title: 'title',
      email: 'email',
      message: 'message',
      fileName: 'file_name',
      fileURL: null,
    },
    4: {
      id: '4',
      name: 'Hochul',
      company: 'Anonymous',
      theme: 'light',
      title: 'title',
      email: 'email',
      message: 'message',
      fileName: 'file_name',
      fileURL: null,
    },
  });
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <div className={styles.content}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Maker;

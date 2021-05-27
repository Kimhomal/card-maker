import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
    {
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
  ]);
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <div className={styles.content}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Maker;

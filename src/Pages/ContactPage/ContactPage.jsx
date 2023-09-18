import React from 'react';
import { Headline } from '../../components/Headline/Headline'
import style from './ContactPage.module.scss'
import { OnClickButton } from '../../components/OnClickButton/OnClickButton';

export const ContactPage = () => {
  return (
    <div className={style.contactStyle}>
      <Headline>Kontakt os</Headline>
      <div >

        <form action="">
          <label htmlFor="">Dit navn </label>
          <input type="name" placeholder='' />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder='' />

          <label htmlFor="">Din Besked</label>
          <textarea name="comment" id="" cols="50" rows="10"></textarea>
          <OnClickButton>Send</OnClickButton>

        </form>
      </div>
    </div>
  );
}



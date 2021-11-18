import React from "react";

import './NotFoundPage.css';
import {useHistory} from "react-router";

function NotFoundPage() {
  const history = useHistory();

  return (
    <section className='nfpage'>
      <div className='nfpage__content'>
        <h1 className='nfpage__code'>404</h1>
        <h2 className='nfpage__message'>Страница не найдена</h2>
      </div>
      <button className='nfpage__back' onClick={history.goBack}>Назад</button>
    </section>
  )
}

export default NotFoundPage;

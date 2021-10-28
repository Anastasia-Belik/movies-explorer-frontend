import React from "react";

import './NotFoundPage.css';
import {Link} from "react-router-dom";

function NotFoundPage() {
  return(
    <section className='nfpage'>
      <div className='nfpage__content'>
        <h1 className='nfpage__code'>404</h1>
        <h2 className='nfpage__message'>Страница не найдена</h2>
      </div>
      <Link to='/' className='nfpage__back'>Назад</Link>
    </section>
  )
}

export default NotFoundPage;

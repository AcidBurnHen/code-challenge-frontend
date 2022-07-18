import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import '../styles/encode-page.scss';
import '../styles/btn.scss';

function EncodePage({ isLoggedIn, authToken }) {
  /* Using onChange event to to store text in state before sending an API request */
  const [text, setText] = useState('');
  /* Saving the encoded text from the API response in here so I can display it to the user */
  const [encodedText, setEncodedText] = useState('');
  const [errMsg, setErrMsg] = useState();

  /* Checking to see if the user is logged in */
  if (isLoggedIn) {
    async function handleSubmit(e) {
      e.preventDefault();

      /* Frontend validation to show the user error message, same thing is checked on the server */
      if (!/^[a-zA-Z\s.,]+$/.test(text)) {
        setErrMsg(
          'Text for encoding should only contain alphabetic characters'
        );
        return;
      }

      /* Passing the token to the request headers as it is expected in the authorization middleware */
      const config = {
        headers: {
          authorization: 'xyz0987654321',
        },
      };

      try {
        const res = await axios.post('/encode', { text }, config);
        /* If the api responds with a success I store the response in state */
        if (res.status === 200) setEncodedText(res.data.encodedString);
        setErrMsg();
      } catch (err) {
        console.log(err);
      }
    }

    return (
      <div className='encode-page'>
        <ErrorMessage errMsg={errMsg} />
        <form className='encode-page__form' onSubmit={handleSubmit}>
          <h2 className='encode-page__title'>Encode Some Text</h2>

          <input
          className="encode-page__input"
            onChange={(e) => setText(e.target.value)}
            type='text'
            id='text'
            name='text'
          />

          <button className='btn'>Encode</button>
        </form>

        
          {
            /* If the api returns encoded text it will be shown, otherwise user won't see anything */
            encodedText !== '' ? (
              <p className="encode-page__result">Result: {encodedText}</p>) : ''
          }

      </div>
    );
  }

  /* If user somehow navigates to this page before logging in, they will see this instead of the encode form */
  return (
    <div className='encode-page'>
      <p className='encode-page__no-login'>
        Please{' '}
        <Link className='encode-page__link' to='/'>
          log in
        </Link>{' '}
        to view this page
      </p>
    </div>
  );
}

export default EncodePage;

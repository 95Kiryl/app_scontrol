import { FC, useState } from 'react';
import styles from './ContactPage.module.css';

const ContactPage: FC = () => {
  const [isName, setName] = useState<string>('');
  const [isMail, setMail] = useState<string>('');
  const [isText, setText] = useState<string>('');
  interface IUserObjParse {
    name: string;
    mail: string;
    text: string;
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isName && isMail && isText) {
      const userObj = {
        name: isName,
        mail: isMail,
        text: isText,
      };
      const userObjJson: string = JSON.stringify(userObj);
      console.log(userObjJson);
      setName('');
      setMail('');
      setText('');
      const userObjParse: IUserObjParse = JSON.parse(userObjJson);
      console.log(userObjParse);
    }
  };

  return (
    <div className={styles.field}>
      <form className={styles.form} method="GET" onSubmit={handleFormSubmit}>
        <label className={styles.label}>
          Имя:
          <input
            type="text"
            name="name"
            className={styles.input}
            value={isName}
            onChange={(e) => setName(e.target.value)}
          />
          {!isName.length ? (
            <div className={styles.message}>Введите данные</div>
          ) : (
            <div className={styles.messageGood}>Отлично!</div>
          )}
        </label>
        <label className={styles.label}>
          Электронная почта:
          <input
            type="email"
            name="mail"
            className={styles.input}
            value={isMail}
            onChange={(e) => setMail(e.target.value)}
          />
          {!isMail.length ? (
            <div className={styles.message}>Введите данные</div>
          ) : (
            <div className={styles.messageGood}>Отлично!</div>
          )}
        </label>
        <label htmlFor="text" className={styles.label}>
          Сообщение:
        </label>
        <textarea
          id="text"
          name="text"
          className={styles.input}
          value={isText}
          onChange={(e) => setText(e.target.value)}
        />
        {!isText.length ? (
          <div className={styles.message}>Введите данные</div>
        ) : (
          <div className={styles.messageGood}>Отлично!</div>
        )}
        <br />
        <button type="submit" className={styles.btn}>
          Отправить
        </button>
      </form>
    </div>
  );
};
export default ContactPage;

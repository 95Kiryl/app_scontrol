import { FC, useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { newEditUser } from '../../Redux/Slices/userSlice';
import styles from './ModalEdit.module.css';
import { removeUserEditDate } from '../../Redux/Slices/userEditSlice';
import { openModalEdit } from '../../Redux/Slices/modalEditSlice';

interface IUser {
  id: string;
  name: string;
  status: string;
  date: string;
}

const ModalEdit: FC = () => {
  const [isNameTask, setNameTask] = useState<string>('');
  const [isSelectTask, setSelectTask] = useState<string>('');
  const [isDateTask, setDateTask] = useState<string>('');
  const isModalOpen: boolean = false;
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.modalEditOpen);
  const userEditData = useAppSelector((state) => state.userEdit.listEdit);
  const modalEditOpen: boolean = true;

  useEffect(() => {
    if (userEditData.length) {
      setNameTask(userEditData[0].name);
      setSelectTask(userEditData[0].status);
      setDateTask(userEditData[0].date);
      dispatch(openModalEdit(modalEditOpen));
    }
  }, [userEditData]);

  const handelModalOpen = () => {
    dispatch(openModalEdit(isModalOpen));
    dispatch(removeUserEditDate());
    setNameTask('');
    setDateTask('');
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isNameTask && isSelectTask && isDateTask) {
      const editUser: IUser = {
        id: userEditData[0].id,
        name: isNameTask,
        status: isSelectTask,
        date: isDateTask,
      };
      dispatch(newEditUser(editUser));
      setNameTask('');
      setSelectTask('');
      setDateTask('');
      handelModalOpen();
    }
  };
  return (
    <div className={open ? styles.modalEdit : styles.disabled}>
      <form className={styles.form} method="GET" onSubmit={handleFormSubmit}>
        <label className={styles.label}>
          Название задачи:
          <input
            type="text"
            name="name"
            className={styles.input}
            value={isNameTask}
            onChange={(e) => setNameTask(e.target.value)}
          />
          {!isNameTask.length ? (
            <div className={styles.message}>Введите данные</div>
          ) : (
            <div className={styles.messageGood}>Отлично!</div>
          )}
        </label>
        <div className={styles.label}>
          <label htmlFor="task-select" className={styles.label}>
            Статус:
          </label>
          <select
            name="task"
            id="task-select"
            className={styles.input}
            value={isSelectTask}
            onChange={(e) => setSelectTask(e.target.value)}
          >
            <option>Выберите статус</option>
            <option>Новая</option>
            <option>В работе</option>
            <option>Завершена</option>
          </select>
          {!isSelectTask.length ? (
            <div className={styles.message}>Введите данные</div>
          ) : (
            <div className={styles.messageGood}>Отлично!</div>
          )}
        </div>
        <label className={styles.label}>
          Дата:
          <input
            type="date"
            name="date"
            className={styles.input}
            value={isDateTask}
            onChange={(e) => setDateTask(e.target.value)}
          />
          {!isDateTask.length ? (
            <div className={styles.message}>Введите данные</div>
          ) : (
            <div className={styles.messageGood}>Отлично!</div>
          )}
        </label>
        <div className={styles.btnWrapp}>
          <button type="submit" className={styles.btn}>
            Изменить
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={handelModalOpen}
          >
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalEdit;

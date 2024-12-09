import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { openModalDelete } from '../../Redux/Slices/modalDeleteSlice';
import { setId } from '../../Redux/Slices/idSlice';
import { removeUser } from '../../Redux/Slices/userSlice';
import styles from './ModalDelete.module.css';

const ModalDelete: FC = () => {
  const isModalOpen: boolean = false;
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.modalDeleteOpen);
  const removeId = useAppSelector((state) => state.id);
  const modalDeleteOpen: boolean = true;

  useEffect(() => {
    if (removeId) {
      dispatch(openModalDelete(modalDeleteOpen));
    }
  }, [removeId]);

  const handelModalOpen = () => {
    dispatch(openModalDelete(isModalOpen));
    dispatch(setId(''));
  };

  const handleDelete = () => {
    dispatch(removeUser(removeId));
    handelModalOpen();
  };

  return (
    <div className={open ? styles.modalDelete : styles.disabled}>
      <div className={styles.form}>
        <p className={styles.title}>
          {' '}
          Вы действительно хотите удалить задачу?{' '}
        </p>
        <div className={styles.btnWrapp}>
          <button type="button" className={styles.btn} onClick={handleDelete}>
            Удалить
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={handelModalOpen}
          >
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;

import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { openModalAdd } from '../../Redux/Slices/modalAddSlice';
import styles from './TaskPage.module.css';
import ModalAdd from '../../components/ModalAdd/ModalAdd';
import UsersList from '../../components/UsersList/UsersList';
import ModalDelete from '../../components/ModalDelete/ModalDelete';
import ModalEdit from '../../components/ModalEdit/ModalEdit';

const TaskPage: FC = () => {
  const modalAddOpen: boolean = true;
  const modalDeleteOpen: boolean = true;
  const modalEditOpen: boolean = true;
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.list);
  const handelModalAddOpen = () => {
    dispatch(openModalAdd(modalAddOpen));
  };

  return (
    <>
      <div className={styles.wrapp}>
        <button className={styles.btn} onClick={handelModalAddOpen}>
          Добавить задачу
        </button>
        <div className={styles.table}>
          <div className={styles.item}>ID</div>
          <div className={styles.item}>Название</div>
          <div className={styles.item}>Статус</div>
          <div className={styles.item}>Дата создания</div>
          <div className={styles.item}>Действие</div>
        </div>
        {modalAddOpen && <ModalAdd />}
        {modalDeleteOpen && <ModalDelete />}
        {modalEditOpen && <ModalEdit />}
        {users && <UsersList />}
      </div>
    </>
  );
};
export default TaskPage;

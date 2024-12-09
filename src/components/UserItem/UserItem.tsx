import { FC } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useAppDispatch } from '../../hooks/hook';
import { setId } from '../../Redux/Slices/idSlice';
import styles from './UserItem.module.css';
import { setUserEdit } from '../../Redux/Slices/userEditSlice';

interface UserItemProps {
  id: string;
  name: string;
  status: string;
  date: string;
}

const UserItem: FC<UserItemProps> = ({ id, name, status, date }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <p className={styles.itemFirst}>{id}</p>
      <p className={styles.itemSecond}>{name}</p>
      <p className={styles.item}>{status}</p>
      <p className={styles.item}>{date}</p>
      <div className={styles.item}>
        <div className={styles.btnEdit}>
          <FaEdit
            onClick={() => dispatch(setUserEdit({ id, name, status, date }))}
          />
        </div>
        <div className={styles.btnDelete}>
          <RiDeleteBin2Fill onClick={() => dispatch(setId(id))} />
        </div>
      </div>
    </>
  );
};

export default UserItem;

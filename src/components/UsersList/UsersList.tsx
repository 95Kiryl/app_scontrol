import { FC } from 'react';
import UserItem from '../UserItem/UserItem';
import { useAppSelector } from '../../hooks/hook';
import styles from './UserList.module.css';

const UsersList: FC = () => {
  const users = useAppSelector((state) => state.users.list);

  return (
    <div className={styles.table}>
      {users.map((user) => {
        return <UserItem key={user.id} {...user} />;
      })}
    </div>
  );
};

export default UsersList;

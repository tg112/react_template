import { useEffect } from 'react';
import { Button } from './atoms';

import { useAppSelector, useAppDispatch } from '../hooks/hooks';

import { decrement, increment } from '../stores/slices/counterSlice';
import { deleteTask, completeTask } from '../stores/slices/taskSlice';
import { fetchAsyncGet } from '../stores/slices/fetchSlice';

const Sample = () => {
  const count = useAppSelector((state) => state.counter.value);
  const users = useAppSelector((state) => state.fetch.users);
  const tasks = useAppSelector((state) => state.task.tasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAsyncGet());
  }, [dispatch]);
  return (
    <>
      {users.slice(0, count).map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <p>{count}</p>
      <Button onClick={() => dispatch(increment())} label="+" color="gray" />
      <Button onClick={() => dispatch(decrement())} label="-" color="blue" />
      <br />
      {tasks.map((task) => (
        <div key={task.id}>
          <p
            style={
              task.completed
                ? { textDecoration: 'line-through' }
                : { textDecoration: 'none' }
            }
          >
            {task.title}
          </p>
          <input
            type="checkbox"
            onClick={() => dispatch(completeTask(task))}
            defaultChecked={task.completed}
          />
          <Button
            onClick={() => dispatch(deleteTask(task))}
            label="delete"
            color="blue"
          />
        </div>
      ))}
    </>
  );
};

export default Sample;

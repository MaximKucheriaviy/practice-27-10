import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'Redux/todoSlice';

export const Todo = ({ text, counter, id }) => {

  const dispatch = useDispatch();

    const onDeleteTodo = () => {
      dispatch(deleteTodo(id));
    // setTodos((prev) => prev.filter(({ id }) => id !== idDeleted));
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => onDeleteTodo(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};

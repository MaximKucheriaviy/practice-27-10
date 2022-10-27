import { Component } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTodos } from "Redux/selectors";

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from "components";

export const App = () => {
  // const [todos, setTodos] = useState([]);
  const todos = useSelector(getTodos);

  // const [todos, setTodos] = useState(
  //   JSON.parse(localStorage.getItem("todos")) || []
  // );
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);



  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    // onClick={deleteTodo}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};

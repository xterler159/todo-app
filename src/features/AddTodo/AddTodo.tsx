import { useEffect, useState } from "react";
import styled, { StyledComponent } from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";

import Input from "../../components/Input/Input";
import List from "../../components/List/List";

export interface IButton {
  primary?: boolean;
}

const Wrapper: StyledComponent<"section", {}, any> = styled.section`
  padding: 4em;
  background: papayawhip;
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  flex-direction: column;
  //border: 1px solid crimson;
`;

const FormWrapper: StyledComponent<"div", {}, any> = styled.div`
  form {
    display: flex;
    align-items: center;
  }

  .add-btn {
    margin-left: 25px;
  }

  #addTask {
    padding: 0.5rem;
    border-radius: 5px;
    border: solid 1px #9E9E9E;
  }
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${({ primary }: IButton) => (primary ? "palevioletred" : "white")};
  color: ${(props: any) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;

  padding: 0.25em 1em;

  border: 2px solid palevioletred;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`;

export type AddTodoInputs = {
  todoName: string
}

const validationSchema = yup.object({
  todoName: yup.string().required("required")
});

const AddTodo = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: {
      errors
    }
  } = useForm<AddTodoInputs>({ resolver: yupResolver(validationSchema) });
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      const savedTodosParsed = JSON.parse(savedTodos);
      setTodos(savedTodosParsed);
    }
  }, []);


  const onSubmit = (data: any) => {
    setTodos(prevState => [...prevState, data.todoName]);
    setValue("todoName", "");
  };

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    alert("Saved todos !");
  };

  return (
    <Wrapper>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} name="todoName" error={errors} />
          <Button primary className="add-btn" type="submit">Add</Button>
        </form>
      </FormWrapper>

      <List data={todos} />
      <Button onClick={handleSaveToLocalStorage}>Save</Button>
      <DevTool control={control} />
    </Wrapper>
  );
};

export default AddTodo;

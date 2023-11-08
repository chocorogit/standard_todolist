import React from "react";

const Todolist = ({ todos, setTodos, listIsDone }) => {
    const todoList = todos.filter((todo) => todo.isDone === listIsDone);

    return (
        <div>
            <h2>{listIsDone === false ? "할일 목록" : "완료 목록"}</h2>
            <ul>
                {todoList.map((todo) => {
                    return (
                        <li key={todo.id} id={todo.id}>
                            <span>{todo.id}</span>
                            <h3>{todo.title}</h3>
                            <p>{todo.contents}</p>
                            <p>{todo.isDone.toString()}</p>
                            <button
                                onClick={() => {
                                    const newTodos = todos.map((item) => {
                                        if (item.id === todo.id) {
                                            return {
                                                ...item,
                                                isDone: !item.isDone,
                                            };
                                        } else {
                                            return item;
                                        }
                                    });
                                    setTodos(newTodos);
                                }}
                            >
                                {listIsDone === false ? "완료" : "완료취소"}
                            </button>
                            <button
                                onClick={() => {
                                    const deletedTodos = todos.filter((item) => {
                                        return item.id !== todo.id;
                                    });
                                    setTodos(deletedTodos);
                                }}
                            >
                                삭제
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Todolist;

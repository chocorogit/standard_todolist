import React, { useState } from "react";
import uuid from "react-uuid";

const Input = ({ todos, setTodos }) => {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const newTodo = {
                        id: uuid(),
                        title,
                        contents,
                        isDone: false,
                    };
                    setTodos([...todos, newTodo]);

                    setTitle("");
                    setContents("");
                }}
            >
                <input
                    placeholder="제목을 입력해 주세요"
                    value={title}
                    onChange={function (event) {
                        setTitle(event.target.value);
                    }}
                />
                <input
                    placeholder="내용을 입력해 주세요"
                    value={contents}
                    onChange={function (event) {
                        setContents(event.target.value);
                    }}
                />
                <button type="submit">입력</button>
            </form>
        </div>
    );
};

export default Input;

import { useState } from "react";
import uuid from "react-uuid";
import Input from "./components/Input";
import Todolist from "./components/Todolist";

function App() {
    const initialState = [
        {
            id: uuid(),
            title: "제목1",
            contents: "내용1",
            isDone: false,
        },
        {
            id: uuid(),
            title: "제목2",
            contents: "내용2",
            isDone: true,
        },
        {
            id: uuid(),
            title: "제목3",
            contents: "내용3",
            isDone: false,
        },
    ];

    const [todos, setTodos] = useState(initialState);

    return (
        <div className="todolist">
            <header>Todolist</header>
            <main>
                <Input todos={todos} setTodos={setTodos} />
                <Todolist todos={todos} setTodos={setTodos} listIsDone={false} />
                <Todolist todos={todos} setTodos={setTodos} listIsDone={true} />
            </main>
            <footer>footer</footer>
        </div>
    );
}

export default App;

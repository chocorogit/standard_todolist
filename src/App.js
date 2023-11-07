import { useState, react } from "react";

function App() {
    const initialState = [
        {
            id: 1,
            title: "제목1",
            contents: "내용1",
            isDone: false,
        },
        {
            id: 2,
            title: "제목2",
            contents: "내용2",
            isDone: true,
        },
        {
            id: 3,
            title: "제목3",
            contents: "내용3",
            isDone: false,
        },
    ];

    const [title, setTitle] = useState("");
    const [contents, setcontents] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [num, setNum] = useState(4);

    const todoList = todos.filter((todo) => todo.isDone === false);

    const doneList = todos.filter((todo) => todo.isDone === true);

    return (
        <div>
            <header style={{ backgroundColor: "lightyellow" }}>todolist</header>
            <main>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setNum(num + 1);
                        const newTodo = {
                            id: num,
                            title,
                            contents,
                            isDone: false,
                        };
                        setTodos([...todos, newTodo]);
                    }}
                >
                    <input
                        value={title}
                        onChange={function (event) {
                            setTitle(event.target.value);
                        }}
                    />
                    <input
                        value={contents}
                        onChange={function (event) {
                            setcontents(event.target.value);
                        }}
                    />
                    <button type="submit">입력</button>
                </form>
                <div>
                    <h2>할일 목록</h2>
                    <ul>
                        {todoList.map((todo) => {
                            return (
                                <li key={todo.id} id={todo.id}>
                                    <h3>{todo.title}</h3>
                                    <p>{todo.contents}</p>
                                    <p>{todo.isDone.toString()}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <h2>완료 목록</h2>
                    <ul>
                        {doneList.map((todo) => {
                            return (
                                <li key={todo.id} id={todo.id}>
                                    <h3>{todo.title}</h3>
                                    <p>{todo.contents}</p>
                                    <p>{todo.isDone.toString()}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </main>
            <footer>footer</footer>
        </div>
    );
}

export default App;

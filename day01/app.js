const domcontainer = document.querySelector("#root");

// const myElement = React.createElement(
//     "div",
//     null,
//     [
//         React.createElement("p", null, "hello world"),
//         React.createElement("p", null, "hello world"),
//         React.createElement("p", null, "hello world")
//     ]
// );

const Increment = () => {
    const [counter, setcounter] = React.useState(0);
    return (
        <div class="container">
            <h1 id="display" >{counter}</h1>
            <div>
                <button id="button" class="btn btn-primary" onClick={() => setcounter(counter + 1)}> Increment +</button>
            </div>
        </div >
    )
}


ReactDOM.render(<div>
    <Increment />
    <Increment />
    <Increment />
</div>, domcontainer);
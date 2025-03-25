import "./App.css";
import ToDo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  // const time = 50; //todo time
  const actors = ["Bapparaj", "manna", "hero-alom", "anwarul-haque"];

  const singers = [
    { id: 1, name: "Habib wahid", age: 24 },
    { id: 2, name: "Momtaj", age: 69 },
    { id: 3, name: "Tahsan", age: 39 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <h1>React Core concepts</h1>
      <br />
      <br />
      {/* <Student name="Habib" dept="AME"></Student>
      <Student name="Nasir" dept="Power"></Student>
      <br />
      <Player name="Tamim" run="5000"></Player>
      <Player name="Sakib" run="9000"></Player> */}

      {/* todo */}

      {/* <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Revise JS" isDone={false}></ToDo>
      <ToDo task="Take a Shower" isDone={true} time="100"></ToDo> */}

      <br />
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      <br />

      {singers.map((singer) => <Singer key={singer.id} name={singer.name} age= {singer.age}></Singer>)}
    </>
  );
}

function Person() {
  const age = 21;
  const personStyle = {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <p style={personStyle}>
      Hello I am a Person. Age : {age} <br />
    </p>
  );
}

const Sports = () => {
  return (
    <>
      <h1>sports</h1>
      <p>I Play cricket and loose</p>
      <ul>
        <li>Cricket</li>
        <li>Football</li>
        <li>Table Tennis</li>
      </ul>
    </>
  );
};

// react core concepts:

function Student(prop) {
  return (
    <div className="student">
      <p>Name: {prop.name}</p>
      <p
        style={{
          color: "yellow",
          fontWeight: "bold",
        }}
      >
        Dept: {prop.dept}
      </p>
    </div>
  );
}

// dynamic values from object destructuring
function Player({ name, run }) {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        borderRadius: "20px",
        border: "2px green solid",
      }}
    >
      <p>Player Name: {name}</p>
      <p>Total Runs: {run}</p>
    </div>
  );
}

export default App;

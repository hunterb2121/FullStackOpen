const Header = ({ name }) => <h1>{name}</h1>;

const Total = ({ sum }) => <p>Number of exercises {sum.reduce((acc, currVal) => acc + currVal, 0)}</p>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => <Part part={part} />)}
    </>
  );
};

const Course = ({ courses }) => {
  return (
    courses.map(course => {
        return (
          <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total sum={course.parts.map(part => part.exercises)} />
          </div>
        );
      }
    )
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack Application Development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <Course courses={courses} />
  );
};

export default App;

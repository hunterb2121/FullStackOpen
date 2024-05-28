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

export default Course;
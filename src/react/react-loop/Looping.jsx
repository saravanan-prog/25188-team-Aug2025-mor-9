export default function looping() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  const vegetables = ["Carrot", "Broccoli", "Cauliflower", "Potato"];

  return (
    <div>
      <div className="fruit-heading">
        <h1> Fruit List </h1>
        <div className="fruits">
          {fruits && fruits.length !== 0 && fruits.map((name, index) => {
            return <p key={index}>{name}</p>;
          })}
        </div>
      </div>
      <div className="veggie-heading">
        <h1> Vegetable List </h1>
        {vegetables && vegetables.length !== 0 ? (
          vegetables.map((name, index) => {
            return <p key={index}>{name}</p>;
          })
        ) : (
          <p> Currently no vegetables available </p>
        )}
      </div>
    </div>
  );
}
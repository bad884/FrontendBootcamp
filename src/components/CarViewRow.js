export const CarViewRow = (props) => {
  return (
    <>
      <tr key={props.car.id}>
        <td>{props.car.id}</td>
        <td>{props.car.make}</td>
        <td>{props.car.model}</td>
        <td>{props.car.year}</td>
        <td>{props.car.color}</td>
        <td>{props.car.price}</td>
      </tr>
    </>
  );
};
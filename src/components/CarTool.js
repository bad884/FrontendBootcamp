import { useState } from 'react';
import { ToolFooter } from './ToolFooter';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { carsPropType } from "../prop-types/cars";
import { useList } from '../hooks/useList'
import { useSortedList } from '../hooks/useSortedList';

export const CarTool = ({ cars: initialCars }) => {

  const [
    cars, sortInfo, 
    appendCar, replaceCar, , removeCar, 
    sortOnColumn
  ] = useSortedList([ ...initialCars ]);

  const [ editCarId, setEditCarId ] = useState(-1);
  
  const addCar = (newCar) => {
    appendCar(newCar);
    setEditCarId(-1);
  }

  const saveCar = (car) => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = (carId) => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const cancelEdit = () => {
    setEditCarId(-1);
  };
  
  return (
    <>
      <ToolHeader header='CarTool'/>
      <CarTable cars={cars}
        carsSort={sortInfo}
        editCarId={editCarId}
        onEditCar={setEditCarId}
        onCancelEdit={cancelEdit}
        onSaveCar={saveCar}
        onDeleteCar={deleteCar}
        onSortCars={sortOnColumn}/>
      <CarForm buttonText='Add Car' onSubmitCar={addCar}/>
      <ToolFooter companyName='A Car Company, Inc.' />
    </>
  );
};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: carsPropType.isRequired,
};
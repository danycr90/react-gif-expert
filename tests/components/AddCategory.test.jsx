import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas de <AddCategory />', () => {
     
  const inputValue = 'Saitama';

  test('debe de cambiar el valor de la caja de texto', () => {
      
    const { container } = render(
      <AddCategory
        onNewCategory={ () => {} }   
      />
    )

    const input = screen.getByRole('textbox');
    
    // Dos formas
    // fireEvent.change( input, { target: { value: inputValue }} );
    fireEvent.input( input, { target: { value: inputValue }} )

    expect( input.value ).toBe(inputValue);
  })

  test('debe de llamar onNewCategory si el input tiene un valor', () => {

    const onNewCategory = jest.fn();

    const { container } = render(
      <AddCategory
        onNewCategory={ onNewCategory }   
      />
    )

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    
    fireEvent.change( input, { target: { value: inputValue }} );
    fireEvent.submit( form );

    expect( input.value ).toBe('');

    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

  })

  test('no debe de llamar onNewCategory si el input está vacío', () => {

    const onNewCategory = jest.fn();

    const { container } = render(
      <AddCategory
        onNewCategory={ onNewCategory }   
      />
    )

    const form = screen.getByRole('form');    
    fireEvent.submit( form );

    //Dos formas
    //expect( onNewCategory ).toBeCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled();


  })

})
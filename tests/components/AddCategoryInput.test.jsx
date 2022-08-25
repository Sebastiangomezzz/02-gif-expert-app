import { AddCategoryInput } from "../../src/components/AddCategoryInput";
import { render, screen, fireEvent } from "@testing-library/react";

describe("AddCategoryInput tests", () => {
  test("should change the value of the text input", () => {
    render(<AddCategoryInput onNewCategory={() => {}} />);
    //buscamos el elemento que dispara el evento que cambia el value (el input de texto);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Saitama" } });
    //screen.debug();
    expect(input.value).toBe("Saitama");
  });

  test("should call onNewCategory if the input has a value", () => {
    const inputValue = "Saitama";
    //*
    const onNewCategory = jest.fn();

    render(<AddCategoryInput onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //cambiamos el valor del input.
    fireEvent.input(input, { target: { value: inputValue } });
    //screen.debug();

    //disparamos el submit del form.
    fireEvent.submit(form);

    //testeamos que el valor del input ha pasado a estar vacío.
    expect(input.value).toBe("");

    //testeamos que onNewCategory se llama con el valor que tiene el text input.
    //Creamos la funcion mock onNewCategory *.

    //La llamamos sin argumentos en el tohaveBeenCalled, sólo dice que la función ha sido llamada.
    expect(onNewCategory).toHaveBeenCalled();

    //La llamamos indicando el número adecuado de veces que debería haberse llamado en total.
    expect(onNewCategory).toHaveBeenCalledTimes(1);

    //La llamamos con el argumento 'real'.
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should not call onNewCategory if the input is empty", () => {
    //no hace falta
    //const inputValue = "";

    const onNewCategory = jest.fn();

    render(<AddCategoryInput onNewCategory={onNewCategory} />);

    //no hace falta
    //const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //no hace falta
    //cambiamos el valor del input.
    //fireEvent.input(input, { target: { value: inputValue } });
    //screen.debug();

    //disparamos el submit del form.
    fireEvent.submit(form);

    //esperamos que la funcion no se halla llamado con el input vacío, varias maneras:
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});

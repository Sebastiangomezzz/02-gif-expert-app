import React from "react";
import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("GifGridItem tests", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el url y el ALT indicado", () => {
    render(<GifGridItem title={title} url={url} />);
    //screen.debug();

    //1a posibilidad
    // expect(screen.getByRole("img").alt).toBe(title);
    // expect(screen.getByRole("img").src).toBe(url);

    //2a posibilidad, más limpia
    const { alt, src } = screen.getByRole("img");
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test("debe de mostrarse el titulo como texto en el componente", () => {
    //alt tiene el mismo texto, pero es un atributo de image, así que el test pasa correctamente.
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});

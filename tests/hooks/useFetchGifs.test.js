import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("tests on useFetchGifs hook", () => {
  test("should return an initial state", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    //desestructuramos result.current (estado actual)
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });
  test("should return an array of images and isLoading=false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    //no queremos el estado actual, tenemos que usar waitFor!!
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      //si tarda más de un segundo dará error por defecto, se puede especificar un timeOut así:
      { timeout: 2000 }
    );

    //ahora que se ha resuelto la promesa...
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});

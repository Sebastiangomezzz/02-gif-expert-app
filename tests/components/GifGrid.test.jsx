import { GifGrid } from "../../src/components/GifGrid";
import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("GifGrid tests", () => {
  const category = "One Punch";

  test("should render loading first", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
      isError: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });
  test("should render items when images load with useFetchGifs hook", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "lkjdflaskdjflskdjf",
      },
      {
        id: "ABCDD",
        title: "Goku",
        url: "lkjdflaskdjflskdjffsdfg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
      isError: false,
    });
    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});

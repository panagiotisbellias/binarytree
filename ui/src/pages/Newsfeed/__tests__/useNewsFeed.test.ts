// dependencies
import { renderHook, act } from "@testing-library/react";
import { vi } from "vitest";
// hooks
import useNewsFeed from "pages/Newsfeed/useNewsFeed";
import { useFetch } from "hooks";
// mocks
import {
	mockedParsedJSON,
	mockedParsedReactJSON,
	mockedJSON,
	mockedReactJSON,
} from "./newsFeed.testkit";

vi.mock("hooks");

describe("useNewsFeed", () => {
	beforeEach(() => {
		vi.mocked(useFetch).mockReturnValue({
			data: mockedJSON,
			isLoading: false,
			isError: false,
		});
	});

	it("should return initial state", () => {
		// act
		const { result } = renderHook(() => useNewsFeed());

		// assert
		expect(result.current).toEqual({
			data: mockedParsedJSON,
			isLoading: false,
			isError: false,
			setTab: expect.any(Function),
		});
		expect(useFetch).toHaveBeenCalledWith(
			"frontend-focus",
			"http://localhost:3000/rss?name=frontend-focus"
		);
	});

	it("should return react-status state", () => {
		// arrange
		vi.mocked(useFetch)
			.mockReturnValueOnce({
				data: mockedJSON,
				isLoading: false,
				isError: false,
			})
			.mockReturnValue({
				data: mockedReactJSON,
				isLoading: false,
				isError: false,
			});

		const { result } = renderHook(() => useNewsFeed());

		// act
		act(() => {
			result.current.setTab("react-status");
		});

		// assert
		expect(result.current).toEqual({
			data: mockedParsedReactJSON,
			isLoading: false,
			isError: false,
			setTab: expect.any(Function),
		});
		expect(useFetch).toHaveBeenCalledWith(
			"react-status",
			"http://localhost:3000/rss?name=react-status"
		);
	});

	it("should return react-status state with loading as true", () => {
		// arrange
		vi.mocked(useFetch)
			.mockReturnValueOnce({
				data: undefined,
				isLoading: false,
				isError: false,
			})
			.mockReturnValue({
				data: undefined,
				isLoading: true,
				isError: false,
			});

		const { result } = renderHook(() => useNewsFeed());

		// act
		act(() => {
			result.current.setTab("react-status");
		});

		// assert
		expect(result.current).toEqual({
			data: undefined,
			isLoading: true,
			isError: false,
			setTab: expect.any(Function),
		});
		expect(useFetch).toHaveBeenCalledWith(
			"react-status",
			"http://localhost:3000/rss?name=react-status"
		);
	});

	it("should return react-status state with error as true", () => {
		// arrange
		vi.mocked(useFetch)
			.mockReturnValueOnce({
				data: undefined,
				isLoading: false,
				isError: false,
			})
			.mockReturnValue({
				data: undefined,
				isLoading: false,
				isError: true,
			});

		const { result } = renderHook(() => useNewsFeed());

		// act
		act(() => {
			result.current.setTab("react-status");
		});

		// assert
		expect(result.current).toEqual({
			data: undefined,
			isLoading: false,
			isError: true,
			setTab: expect.any(Function),
		});
		expect(useFetch).toHaveBeenCalledWith(
			"react-status",
			"http://localhost:3000/rss?name=react-status"
		);
	});

	it("should return news state", () => {
		// arrange
		vi.mocked(useFetch)
			.mockReturnValueOnce({
				data: undefined,
				isLoading: false,
				isError: false,
			})
			.mockReturnValue({
				data: {
					articles: ["some articles"],
				},
				isLoading: false,
				isError: false,
			});

		const { result } = renderHook(() => useNewsFeed());

		// act
		act(() => {
			result.current.setTab("news");
		});

		// assert
		expect(result.current).toEqual({
			data: ["some articles"],
			isLoading: false,
			isError: false,
			setTab: expect.any(Function),
		});
		expect(useFetch).toHaveBeenCalledWith(
			"react-status",
			"http://localhost:3000/rss?name=react-status"
		);
	});

	it("should return news state with loading as true and undefined data", () => {
		// arrange
		vi.mocked(useFetch)
			.mockReturnValueOnce({
				data: undefined,
				isLoading: false,
				isError: false,
			})
			.mockReturnValue({
				data: undefined,
				isLoading: true,
				isError: false,
			});

		const { result } = renderHook(() => useNewsFeed());

		// act
		act(() => {
			result.current.setTab("news");
		});

		// assert
		expect(result.current).toEqual({
			data: undefined,
			isLoading: true,
			isError: false,
			setTab: expect.any(Function),
		});
		expect(useFetch).toHaveBeenCalledWith(
			"react-status",
			"http://localhost:3000/rss?name=react-status"
		);
	});

	it("should return news state with error and undefined data", () => {
		// arrange
		vi.mocked(useFetch)
			.mockReturnValueOnce({
				data: undefined,
				isLoading: false,
				isError: false,
			})
			.mockReturnValue({
				data: undefined,
				isLoading: false,
				isError: true,
			});

		const { result } = renderHook(() => useNewsFeed());

		// act
		act(() => {
			result.current.setTab("news");
		});

		// assert
		expect(result.current).toEqual({
			data: undefined,
			isLoading: false,
			isError: true,
			setTab: expect.any(Function),
		});
		expect(useFetch).toHaveBeenCalledWith(
			"react-status",
			"http://localhost:3000/rss?name=react-status"
		);
	});

	it("should return an error on wrong url option", () => {
		// arrange
		vi.mocked(useFetch).mockReturnValue({
			data: undefined,
			isLoading: false,
			isError: true,
		});

		const { result } = renderHook(() => useNewsFeed());

		// act
		act(() => {
			result.current.setTab("wrong-url");
		});

		// assert
		expect(result.current).toEqual({
			data: undefined,
			isLoading: false,
			isError: true,
			setTab: expect.any(Function),
		});
		expect(useFetch).toHaveBeenCalledWith(
			"wrong-url",
			"http://localhost:3000/rss?name=wrong-url"
		);
	});
});

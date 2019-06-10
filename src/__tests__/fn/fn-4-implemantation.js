describe('mock implementation', () => {
    test("mock implementation", () => {
        const mock = jest.fn(x => x + 1);

        expect(mock(2)).toBe(3);
        expect(mock).toHaveBeenCalledWith(2);
    });

    test("also mock implementation", () => {
        const mock = jest.fn().mockImplementation(y => y - 1);

        expect(mock(10)).toBe(9);
        expect(mock).toHaveBeenCalledWith(10);
    });

    test("mock implementation one time", () => {
        const mock = jest.fn().mockImplementationOnce(() => "bar");

        expect(mock("foo")).toBe("bar");
        expect(mock).toHaveBeenCalledWith("foo");

        expect(mock("baz")).toBe(undefined);
        expect(mock).toHaveBeenCalledWith("baz");
    });
})

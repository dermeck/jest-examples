describe('return values', () => {
    test("mock return value", () => {
        const mock = jest.fn();
        mock.mockReturnValue("bar");

        expect(mock()).toBe("bar");
    });

    test("mock return value one time", () => {
        const mock = jest.fn();
        mock.mockReturnValueOnce("foo");
        mock.mockReturnValueOnce("bar");

        expect(mock()).toBe("foo");
        expect(mock()).toBe("bar");
        expect(mock()).toBeUndefined();
    });
});

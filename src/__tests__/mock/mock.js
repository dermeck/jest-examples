import * as app from "../../app";
import * as math from "../../math";

// set all module functions to jest.fn
jest.mock("../../math.js");

test("calls math.add", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
    app.doSubtract(1, 2);
    math.subtract.mockReturnValue("foo");
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
    expect(math.subtract(1, 2)).toBe("foo");
});


describe('simple test suite', ()=> {

    it('demonstrates test synthax', () => {
        expect(true).toBeTruthy();
    });

    test.each([
        [1, 1, 2],
        [1, 2, 3],
        [2, 1, 3]
    ])(
        'demo that tests can be parameterized',
        (a, b, expected) => {
            expect(a + b).toBe(expected);
        }
    );

    test.todo('demo skip, only');

});

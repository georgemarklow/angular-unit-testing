describe('Promise', () => {
  it('should resolve with a value', async () => {
    const promise = Promise.resolve('Hello, world!');
    const value = await promise;
    expect(value).toEqual('Hello, world!');
  });
});

function forEach<T>(items: T[], callback: (items: T) => T) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

test('testing foreach', () => {
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);

    expect(mockCallback.mockReturnValueOnce([42, 43]));

    // console.log(mockCallback.mock.calls);
    // console.log(mockCallback.mock.instances);
})

const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
test('set mockfunction\'s return value', () => {
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));

    // console.log(result);
    // > [11]
    // console.log(filterTestFn.mock.calls);
    // > [ [11], [12] ]
})

const sayHello = (name:string) => {
  return `hello ${name}`;
}

test('mock sayHello', async () => {
  const mock = jest.fn(sayHello);
  expect(mock('tom')).toBe('hello tom');
  expect(mock).toHaveBeenCalledWith('tom');

  mock.mockImplementationOnce(() => 'I lost my name');
  expect(mock('kelly')).toBe('I lost my name');
  expect(mock('kelly')).toBe('hello kelly');
})


// function forEach(items, callback) {
//   for (let index = 0; index < items.length; index++) {
//     callback(items[index]);
//   }
// }

// const mockCallback = jest.fn(x => 42 + x);
// forEach([0, 1], mockCallback);

// // The mock function is called twice
// expect(mockCallback.mock.calls.length).toBe(2);

// // The first argument of the first call to the function was 0
// expect(mockCallback.mock.calls[0][0]).toBe(0);

// // The first argument of the second call to the function was 1
// expect(mockCallback.mock.calls[1][0]).toBe(1);

// // The return value of the first call to the function was 42
// expect(mockCallback.mock.results[0].value).toBe(42);

interface CoffeeData {
    id: number;
    name: string;
    price: number;
    size: string;
};

const coffeeData:CoffeeData[] = [
    {
        id: 1,
        name: "Americano",
        price: 4100,
        size: "Regular"
    },
    {
        id: 2,
        name: "Cafe Mocha",
        price: 5600,
        size: "Regular" 
    },
    {
        id: 3,
        name: "Mango Juice",
        price: 6300,
        size: "Large"
    }
]

const getCoffeName:any = (data: CoffeeData[]) => {
    return data.map((coffee:CoffeeData) => coffee.name);
}

test('test coffee mock function', () => {
    const mockFunction = jest.fn(getCoffeName(coffeeData));

    expect(mockFunction.mock.results).toContain("Americano");
})


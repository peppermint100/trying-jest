interface CoffeeData {
    id: number;
    name: string;
    price: number;
    size: string;
};

const data:CoffeeData[] = [
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
test('testing test is working', () => {
    expect(3).toBe(3);
})

test('coffe data has length of 3 ', () => {
    expect(data).toHaveLength(3);
});


test('Checking Coffee\'s name', () => {
    expect(data.map(coffee => coffee.name)).toEqual([
        "Americano",
        "Cafe Mocha",
        "Mango Juice"
    ])
})


test('Testing Coffee Data Snapshot', () => {
    expect(data).toMatchSnapshot();
})
const coffeeOfToday = 'Americano';

const fetchData = (coffee: string) => {
    return new Promise((resolve, reject) => {
        return resolve(coffee);
        // return reject("ERROR!"); 
    });
}

test('promise resolves', () => {
    const data = 'americano';
    return expect(fetchData(data)).resolves.toBe(data);
})

// test('promise rejects', () => {
//     const data = 'americano';
//     return expect(fetchData(data)).rejects.toBe('ERROR!');
// });

test('async await test', async () => {
    const data = 'americano';
    const value = await fetchData(data);
    expect(value).toMatch(data);
})


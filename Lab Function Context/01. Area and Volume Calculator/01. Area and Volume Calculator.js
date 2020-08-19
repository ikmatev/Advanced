function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};


function solve(area, vol, input) {
    const arrOfObj = JSON.parse(input);
    let result = [];
    for (const iterator of arrOfObj) {
        result.push(
            {
                area: Math.abs(area.call(iterator)),
                volume: Math.abs(vol.call(iterator))
            }
        )
    }
    return result
};
solve(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]')
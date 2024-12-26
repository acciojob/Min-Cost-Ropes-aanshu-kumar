function mincost(arr) { 
    let cost = 0;

    while (arr.length > 1) {
        // Sort the array numerically
        arr.sort((a, b) => a - b);

        // Take the two smallest elements
        const first = arr.shift();
        const second = arr.shift();

        // Calculate the cost of combining them
        const sum = first + second;
        cost += sum;

        // Push the combined rope back into the array
        arr.push(sum);
    }

    return cost;
}


module.exports=mincost;

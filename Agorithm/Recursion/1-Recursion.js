let counter = 0;

function inception() {
    debugger;
    console.log(counter)
    if (counter > 3) {
        return "done!";
    }
    counter++
    return inception()
}

// identify the base case
// identify the recursive case
// get closer and closer and return when needed.Usually 2 returns 
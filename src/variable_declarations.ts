function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    //error
    //return b;
}

//scoping of try-catch
try {
    throw "Oh no!";
} catch (e) {
    console.log("Oh well.");
}

(function () {
    let x = 3;

    //cannot redeclare 'x'
    //let x;

    //however you can redeclare variables with var
})();

//variable shadowing example:
function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

(function () {
    function theCityThatAlwaysSleeps() {
        let getCity;

        if (true) {
            let city = "Seattle";
            getCity = function () {
                return city;
            }
        }

        return getCity();
    }
})();

(function () {
    //let creates a new variable scope every iteration
    for (let i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    }
})();

//const have the same scope rules as let, but it can be initialized only once

function constExample() {
    //value cannot be changed later
    const numLivesForCat = 9;

    //properties of object can be changed later, but the reference cannot
    const kitty = {
        name: "Aurora",
        numLives: numLivesForCat
    }

    //this is illegal
    //kitty = { };

    //this is okay
    kitty.name = "Danielle";
}

/* ***** array destructuring ***** */
function arrayDestructuring() {
    let input = [1, 2];
    let [first, second] = input;
    console.log(first);
    console.log(second);


    //swapping variables with array destructuring
    [first, second] = [second, first];

    //parameters of a function
    function f([first, second]: [number, number]) {
        console.log(first);
        console.log(second);
    }
    f([1, 2]);

    let [first1, ...rest] = [1, 2, 3, 4];
    console.log(first1);
    console.log(rest)
}

/* ***** object destructuring ***** */
function objectDestructuring() {
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    //let { a, b } = o;
    //now a and b has o.a and o.b

    //passthrough has all the other properties than a
    let { a, ...passthrough } = o;
    let total = passthrough.b + passthrough.c.length;

    //property renaming
    let { a: newName1, b: newname2 } = o;

    //default values
    function keepWholeObject(wholeObject: { a: string, b?: number }) {
        //now b gets a default value in case when wholeObject doenst have that property (or undefined)
        let { a, b = 1001 } = wholeObject;
    }
}
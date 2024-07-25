// recursion - a function that calls itself from within, 
// visualizes a complex problem into steps
// which can be solved easily by iteration or recursion
// A recursive function consists of two parts: the recursive call and the base case (Stop condition).
// Every recursive function should have at least one base case, though there may be multiple.
// iterative = faster, complex
// recursive = slower, simpler

// iterative
def walk (steps):
    for step in range(1, step + 1):
    print(`you take step ${steps}`)

walk (100)

// recursive
// function
def walk(steps) :
    // check base condition
    if steps == 0:
    return
    // invoke the function
    walk(steps - 1)
    print(`you take step ${steps}`)


// factorial function : 
// product of all positive integers less than or equal to n
// iterative
def factorial(x):
    result = 1
    if x > 0:
        for y in range(1, x + 1)
            result *= y
    return result

// recursive
def factorial(x):
// base condition
    if x == 1:
        return 1
    // invoke function
    else:
        return x * factorial - 1


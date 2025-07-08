let variable1 = "Coffee Bean"
let variable2 = "Milk"

// This is a coffee machine
function CoffeMechine(variable1, variable2) {
    
    let output 

    // This is sensor
    if(variable1 == "Coffee Bean" && variable2 == "Milk") {
        output = "Milk Coffee"
    }

    else {
        output = "Empty !"
    }

    // This is what the machine produce
    return output
}

// This is where I hold the machine output
let CupVariable = CoffeMechine(variable1, variable2)

// This is for human to see
console.log(CupVariable);
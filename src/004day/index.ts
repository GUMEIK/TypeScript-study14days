abstract class Chess {
    abstract readonly name:string  
}

class Horse extends Chess {
    readonly name:string = "马"
}
let h = new Horse();
h.name = "dd"
export class Ride {
    constructor
        (
            public idDriver: number,
            public nameStart: string,
            public nameEnd: string
        ) { }
}
export class Driver {
    constructor
        (
            public name?: string,
            public id?: number,
            public distance?: number,
            public priority?: number,
            public price?: number,
    ) { }
}

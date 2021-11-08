import { Pipe } from "@angular/core";

@Pipe({ name: 'weekDay' })

export class weekDayPipe {
    transform(value: number, lang: string = "he") {
        if (lang == "he")
            switch (value) {
                case 1: return "יום ראשון"
                case 2: return "יום שני"
                case 3: return "יום שלישי"
                case 4: return "יום רבעי"
                case 5: return "יום חמשי"
                case 6: return "יום שישי"
                case 7: return "מוצאי שבת"
            }
        else {
            switch (value) {
                case 1: return "sunday "
                case 2: return "יום שני"
                case 3: return "יום שלישי"
                case 4: return "יום רבעי"
                case 5: return "יום חמשי"
                case 6: return "יום שישי"
                case 7: return "מוצאי שבת"
            }
        }
    }
}

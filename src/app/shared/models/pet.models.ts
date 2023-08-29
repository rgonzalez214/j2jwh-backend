export class Pet {

    petName!: string;
    birthDate!: string;
    microChip?: string;
    rabiesVaccine?: {
        firstDate?: string;
        secondDate?: string;
    };
    antibodyTest?: string | string;
    waitingPeriodRange?: {
        startDate?: string;
        endDate?: string ;
    };
    advancedNotificationRange?: string;
    expectedArrivalDate?: string;
}
import { Constants } from "../Constants";
import { DateTime } from 'luxon';

export class CalculateDates {
    static getExpectedMicroChipDate(birthDate: string) {
        return getAdjustedDate(birthDate, Constants.microChipWaitingPeriod).toLocaleString();
    }
    static getExpectedFirstRabiesDate(microChipDate: string) {
        return getAdjustedDate(microChipDate, Constants.firstRabiesWaitingPeriod).toLocaleString();
    }
    static getExpectedSecondRabiesDate(firstRabiesDate: string) {
        return getAdjustedDate(firstRabiesDate, Constants.secondRabiesWaitingPeriod);
    }
    static getExpectedPreExportDate(antiBodyTestDate: string) {
        return getAdjustedDate(antiBodyTestDate, Constants.preExportWaitingPeriod);
    }
    static getExpectedAdvancedNoticeDeadline(expectedWaitingPeriodDate: string) {
        return getAdjustedDate(expectedWaitingPeriodDate, Constants.advancedNotificationPeriod);
    }

    static isMicroChipDateCleared(birthDate: string, microChippedDate: string) {
        const actualDiffMChipandBirth = getAdjustedDate(microChippedDate, 0)
            .diff(getAdjustedDate(birthDate, 0), 'days').days > Constants.microChipWaitingPeriod
            ? true
            : false;
        const actualDiffMChipandNow = getAdjustedDate(microChippedDate, 0).diffNow('days').days < 1 ? true : false;
        return (actualDiffMChipandBirth && actualDiffMChipandNow) ? true : false;

    }

    static isFirstRabiesShotCleared(microChipDate: string, firstRabiesShotDate: string) {
        console.info(getAdjustedDate(firstRabiesShotDate, 0)
            .diff(getAdjustedDate(microChipDate, 0), 'days').days);

        const actualDiffMChipandFirstRabiesShot = getAdjustedDate(firstRabiesShotDate, 0)
            .diff(getAdjustedDate(microChipDate, 0), 'days').days > Constants.firstRabiesWaitingPeriod
            ? true
            : false;


        const actualDiffMChipandNow = getAdjustedDate(firstRabiesShotDate, 0).diffNow('days').days < 1 ? true : false;
        return (actualDiffMChipandFirstRabiesShot && actualDiffMChipandNow) ? true : false;

    }

    static isSecondRabiesShotCleared(firstRabiesShotDate: string, secondRabiesShotDate: string) {
        console.info(getAdjustedDate(secondRabiesShotDate, 0)
            .diff(getAdjustedDate(firstRabiesShotDate, 0), 'days').days);

        const actualDiffMChipandFirstRabiesShot = getAdjustedDate(secondRabiesShotDate, 0)
            .diff(getAdjustedDate(firstRabiesShotDate, 0), 'days').days > Constants.firstRabiesWaitingPeriod
            ? true
            : false;


        const actualDiffMChipandNow = getAdjustedDate(firstRabiesShotDate, 0).diffNow('days').days < 1 ? true : false;
        return (actualDiffMChipandFirstRabiesShot && actualDiffMChipandNow) ? true : false;

    }

    static isPreExportWaitingPeriodCleared(firstRabiesShotDate: string, secondRabiesShotDate: string) {
        console.info(getAdjustedDate(secondRabiesShotDate, 0)
            .diff(getAdjustedDate(firstRabiesShotDate, 0), 'days').days);

        const actualDiffMChipandFirstRabiesShot = getAdjustedDate(secondRabiesShotDate, 0)
            .diff(getAdjustedDate(firstRabiesShotDate, 0), 'days').days > Constants.firstRabiesWaitingPeriod
            ? true
            : false;


        const actualDiffMChipandNow = getAdjustedDate(firstRabiesShotDate, 0).diffNow('days').days < 1 ? true : false;
        return (actualDiffMChipandFirstRabiesShot && actualDiffMChipandNow) ? true : false;

    }

    static isAdvancedNotificationPeriodValid(firstRabiesShotDate: string, secondRabiesShotDate: string) {
        console.info(getAdjustedDate(secondRabiesShotDate, 0)
            .diff(getAdjustedDate(firstRabiesShotDate, 0), 'days').days);

        const actualDiffMChipandFirstRabiesShot = getAdjustedDate(secondRabiesShotDate, 0)
            .diff(getAdjustedDate(firstRabiesShotDate, 0), 'days').days > Constants.firstRabiesWaitingPeriod
            ? true
            : false;


        const actualDiffMChipandNow = getAdjustedDate(firstRabiesShotDate, 0).diffNow('days').days < 1 ? true : false;
        return (actualDiffMChipandFirstRabiesShot && actualDiffMChipandNow) ? true : false;

    }








}

function getAdjustedDate(inputDate: string, inputConstant: number) {
    // console.info('inputDate', inputDate);
    return DateTime.fromFormat(inputDate, 'MM/dd/yyyy').plus({ days: inputConstant });
}

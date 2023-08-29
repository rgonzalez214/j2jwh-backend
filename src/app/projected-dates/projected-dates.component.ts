import { Component, OnInit } from '@angular/core';
import { Pet } from '../shared/models/pet.models';
import { CalculateDates } from '../shared/helper-functions/CalculateDates';
import { Constants } from '../shared/Constants';

@Component({
  selector: 'app-projected-dates',
  templateUrl: './projected-dates.component.html',
  styleUrls: ['./projected-dates.component.css']
})
export class ProjectedDatesComponent implements OnInit {
  firstrabiesdate = Constants.firstRabiesWaitingPeriod;




  constructor() { }

  ngOnInit(): void {
  }

  currentPet: Pet =
    {
      petName: "lilJohn",
      birthDate: "02/02/2002",
      microChip: "04/01/2002",
      rabiesVaccine:{
        firstDate: "05/01/2002"
      }
    };

  petDates = getProjectedDates(this.currentPet);
}



function getProjectedDates(petDetails: Pet) {
//TODO: Do Projected flow
//microchip -> first rabies -> second rabies -> antibody -> Pre Expor && Advance notice


//TODO: Then Actual Flow

//MicroChip related================================================================
//fix logic
  let expectedMChipDate = petDetails?.birthDate
    ? CalculateDates.getExpectedMicroChipDate(petDetails.birthDate)
    : '';

//fix logic
  // let isActualMChipCleared = petDetails?.microChip && petDetails?.birthDate
  //   ? CalculateDates.isMicroChipDateCleared(petDetails.birthDate, petDetails?.microChip)
  //   : false;

//First Rabies Shot related================================================================
//fix logic
  let expectedFirstRabiesShotDate = petDetails?.rabiesVaccine?.firstDate
    ? CalculateDates.getExpectedFirstRabiesDate(petDetails?.rabiesVaccine.firstDate)
    : '';

//fix logic
  // let isActualFirstRabiesShotCleared = petDetails?.rabiesVaccine?.firstDate && petDetails?.microChip
  //   ? CalculateDates.isFirstRabiesShotCleared(petDetails.birthDate, petDetails?.microChip)
  //   : false;

//Second Rabies Shot related=================================================================
//fix logic
  let expectedSecondRabiesShotDate = petDetails?.rabiesVaccine?.secondDate
    ? CalculateDates.getExpectedSecondRabiesDate(petDetails?.rabiesVaccine.secondDate)
    : '';

//fix logic
  // let isActualSecondRabiesShotCleared = petDetails?.rabiesVaccine?.secondDate && petDetails?.rabiesVaccine?.firstDate
  //   ? CalculateDates.isFirstRabiesShotCleared(petDetails.rabiesVaccine.firstDate, petDetails?.rabiesVaccine.secondDate)
  //   : false;

//AntiBody test related================================================================
//fix logic
  let expectedAntiBodyTestDate = petDetails?.antibodyTest
    ? CalculateDates.getExpectedSecondRabiesDate(petDetails?.antibodyTest)
    : '';

//fix logic
  // let isActualAntiBodyTestCleared = petDetails?.antibodyTest && petDetails?.rabiesVaccine?.secondDate
  //   ? CalculateDates.isFirstRabiesShotCleared(petDetails.rabiesVaccine.secondDate, petDetails?.antibodyTest)
  //   : false;

//Pre Export related================================================================
//fix logic
  let expectedPreExportDate = petDetails?.expectedArrivalDate
    ? CalculateDates.getExpectedPreExportDate(petDetails?.expectedArrivalDate)
    : '';

//fix logic
  // let isPreExportWaitingPeriodCleared = petDetails?.rabiesVaccine?.firstDate && petDetails?.microChip
  //   ? CalculateDates.isPreExportWaitingPeriodCleared(petDetails.birthDate, petDetails?.microChip)
  //   : false;

//Advanced Notification related================================================================
//fix logic
  let expectedAdvancedNotificationDeadline = petDetails?.rabiesVaccine?.firstDate
    ? CalculateDates.getExpectedAdvancedNoticeDeadline(petDetails?.rabiesVaccine.firstDate)
    : '';

//fix logic
  // let isAdvancedNotificationPeriodValid = petDetails?.rabiesVaccine?.firstDate && petDetails?.microChip
  //   ? CalculateDates.isAdvancedNotificationPeriodValid(petDetails.birthDate, petDetails?.microChip)
  //   : false;




return {
    expectedMChipDate,
    expectedFirstRabiesShotDate,
    expectedSecondRabiesShotDate,
    expectedAntiBodyTestDate,
    expectedPreExportDate,
    expectedAdvancedNotificationDeadline,
    // isActualMChipCleared,
    // isActualFirstRabiesShotCleared,
    // isActualSecondRabiesShotCleared,
    // isActualAntiBodyTestCleared,
    // isPreExportWaitingPeriodCleared,
    // isAdvancedNotificationPeriodValid,

  }
}



import {Gender} from '../enum/gender.enum';
import {Page} from './page.model';

export class CriminalCase {

  id: number;

  title: string;

  location: string;

  dateOfIncidence: string;

  description: string;

  victims: Array<Victim>;

  suspects: Array<Suspect>;
}

export class Victim {
  name: string;

  dateOfBirth: string;

  address: string;

  genderConstant: Gender;

  id: number;
}

export class Suspect {

  name: string;

  address: string;

  dateOfBirth: string;

  genderConstant: Gender;

  id: number;

}

export class IncidenceReportResponse {

  title: string;

  location: string;

  dateOfIncidence: string;

  description: string;

  numberOfVictims: number;

  numberOfSuspects: number;

  id: number;


  constructor(
    title: string,
    location: string,
    dateOfIncidence: string,
    description: string,
    numberOfVictims: number,
    numberOfSuspects: number,
    id: number
  ) {
    this.title = title;
    this.location = location;
    this.dateOfIncidence = dateOfIncidence;
    this.description = description;
    this.numberOfVictims = numberOfVictims;
    this.numberOfSuspects = numberOfSuspects;
    this.id = id;
  }
}

export class PagedData<T> {
  results = new Array<T>();
  page = new Page();
}

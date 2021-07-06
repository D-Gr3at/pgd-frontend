import {Component, OnInit} from '@angular/core';
import {faPlus, faSave, faTrashAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CriminalCaseService} from '../../services/criminal-case.service';
import {CriminalCase} from '../../model/criminal-case.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-criminal-case',
  templateUrl: './add-criminal-case.component.html',
  styleUrls: ['./add-criminal-case.component.css']
})
export class AddCriminalCaseComponent implements OnInit {
  form: FormGroup;
  currentDate: Date;
  selectedDate: Date;
  remove = faTrashAlt;
  add = faUserPlus;
  plus = faSave;
  loading: boolean;
  incidenceReport: CriminalCase = new CriminalCase();
  defaultValue = null;

  constructor(
    private formBuilder: FormBuilder,
    private criminalCaseService: CriminalCaseService,
    private toastrService: ToastrService
  ) {
    this.currentDate = new Date();
    this.selectedDate = new Date();
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      location: ['', [Validators.required]],
      dateOfIncidence: ['', [Validators.required]],
      description: [''],
      suspects: this.formBuilder.array([this.createSuspect()], [Validators.required]),
      victims: this.formBuilder.array([this.createVictim()])
    });
  }

  ngOnInit(): void {
  }

  create() {
    this.incidenceReport.dateOfIncidence = this.dateOfIncidence.value;
    this.incidenceReport.description = this.description.value;
    this.incidenceReport.location = this.location.value;
    this.incidenceReport.title = this.title.value;
    this.incidenceReport.suspects = this.suspects.value;
    this.incidenceReport.victims = this.victims.value;
    this.loading = true;
    this.criminalCaseService.createIncidenceReport(this.incidenceReport).subscribe((response) => {
      this.toastrService.success(response.message);
      this.form.reset();
    }, (error) => {
      console.log(error);
    }, () => {
      this.loading = false;
      console.log('complete');
    });
  }

  get suspects(): FormArray {
    return this.form.get('suspects') as FormArray;
  }

  get victims(): FormArray {
    return this.form.get('victims') as FormArray;
  }

  createSuspect(): FormGroup {
    return this.formBuilder.group({
      suspectName: [''],
      suspectDob: [''],
      suspectAddress: [''],
      suspectGender: [null]
    });
  }

  createVictim(): FormGroup {
    return this.formBuilder.group({
      victimName: ['', [Validators.required]],
      victimDob: ['', [Validators.required]],
      victimAddress: [''],
      victimGender: [null, [Validators.required]]
    });
  }

  addSuspect() {
    this.suspects.push(this.createSuspect());
  }

  addVictim() {
    this.victims.push(this.createVictim());
  }

  removeSuspect(i: number) {
    this.suspects.removeAt(i);
  }

  removeVictim(i: number) {
    this.victims.removeAt(i);
  }

  get title() {
    return this.form.get('title');
  }

  get location() {
    return this.form.get('location');
  }

  get victimAddress() {
    return this.victims.get('victimAddress');
  }

  victimName(i: number) {
    return this.victims.at(i).get('victimName');
  }

  victimDob(i: number) {
    return this.victims.at(i).get('victimDob');
  }

  victimGender(i: number) {
    return this.victims.at(i).get('victimGender');
  }

  suspectName(i: number) {
    return this.suspects.at(i).get('suspectName');
  }

  get suspectDob() {
    return this.suspects.get('suspectDob');
  }

  get dateOfIncidence() {
    return this.form.get('dateOfIncidence');
  }

  get description() {
    return this.form.get('description');
  }

  get suspectAddress() {
    return this.suspects.get('suspectAddress');
  }

  get suspectGender() {
    return this.suspects.get('suspectGender');
  }

}

import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {faSave, faTrashAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {CriminalCase, Suspect, Victim} from '../../model/criminal-case.model';
import {CriminalCaseService} from '../../services/criminal-case.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-criminal-case',
  templateUrl: './edit-criminal-case.component.html',
  styleUrls: ['./edit-criminal-case.component.css']
})
export class EditCriminalCaseComponent implements OnInit {
  form: FormGroup;
  currentDate: Date;
  selectedDate: Date;
  remove = faTrashAlt;
  add = faUserPlus;
  plus = faSave;
  loading: boolean;
  suspectLength: boolean;
  incidenceReport: CriminalCase;
  incidenceReportId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private criminalCaseService: CriminalCaseService,
    private toastrService: ToastrService
  ) {
    this.incidenceReport = new CriminalCase();
    this.currentDate = new Date();
    this.selectedDate = new Date();
  }

  ngOnInit(): void {
    this.route.params.subscribe(v => {
      if (v && v.id) {
        this.incidenceReportId = v.id;
        this.getDetails(v.id);
      } else {
        // this.goBack();
      }
    });
  }

  getDetails(id: number) {
    this.criminalCaseService.getIncidenceReport(id)
      .subscribe(response => {
        this.incidenceReport = response;
        console.log(response);
        this.initForm(this.incidenceReport);
      }, e => {
        console.log(e);
      });
  }

  initForm(data: CriminalCase) {
    this.form = this.formBuilder.group({
      id: [this.incidenceReportId],
      title: [data.title, [Validators.required]],
      location: [data.location, [Validators.required]],
      dateOfIncidence: [new Date(data.dateOfIncidence), [Validators.required]],
      description: [data.description],
      suspects: this.formBuilder.array([], [Validators.required]),
      victims: this.formBuilder.array([])
    });

    this.initializeSuspectsFormArray(data.suspects);
    this.initializeVictimsFormArray(data.victims);
  }

  updateReport() {
    this.incidenceReport.dateOfIncidence = this.dateOfIncidence.value;
    this.incidenceReport.description = this.description.value;
    this.incidenceReport.location = this.location.value;
    this.incidenceReport.title = this.title.value;
    this.incidenceReport.suspects = this.suspects.value;
    this.incidenceReport.victims = this.victims.value;
    this.loading = true;
    this.criminalCaseService.updateReport(this.incidenceReport).subscribe((response) => {
      this.toastrService.success('Updated successfully.', 'Success', {timeOut: 800})
        .onHidden.subscribe(value => {
          this.router.navigate(['criminal-case']);
      });
    }, (error) => {
      this.toastrService.error('An internal server error occurred', 'Error', {timeOut: 800});
    }, () => {
      this.loading = false;
      console.log('complete');
    });
  }

  initializeSuspectsFormArray(suspects: Array<Suspect>) {
    for (let i = 0; i < suspects.length; i++) {
      this.addSuspect();
      this.suspectName(i).setValue(suspects[i].name);
      this.suspectAddress(i).setValue(suspects[i].address);
      this.suspectDob(i).setValue(new Date(suspects[i].dateOfBirth));
      this.suspectGender(i).setValue(suspects[i].genderConstant);
      this.suspectId(i).setValue(suspects[i].id);
    }
  }

  initializeVictimsFormArray(victims: Array<Victim>) {
    for (let i = 0; i < victims.length; i++) {
      this.addVictim();
      this.victimName(i).setValue(victims[i].name);
      this.victimAddress(i).setValue(victims[i].address);
      this.victimDob(i).setValue(new Date(victims[i].dateOfBirth));
      this.victimGender(i).setValue(victims[i].genderConstant);
      this.victimId(i).setValue(victims[i].id);
    }
  }

  get suspects(): FormArray {
    return this.form.get('suspects') as FormArray;
  }

  get victims(): FormArray {
    return this.form.get('victims') as FormArray;
  }

  createSuspect(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      suspectName: [''],
      suspectDob: [''],
      suspectAddress: [''],
      suspectGender: [null]
    });
  }

  createVictim(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      victimName: ['', [Validators.required]],
      victimDob: ['', [Validators.required]],
      victimAddress: [''],
      victimGender: [null, [Validators.required]]
    });
  }

  addSuspect() {
    this.suspects.push(this.createSuspect());
    if (this.suspects.length > 0){
      this.suspectLength = true;
    }
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

  victimAddress(i: number) {
    return this.victims.at(i).get('victimAddress');
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

  suspectDob(i: number) {
    return this.suspects.at(i).get('suspectDob');
  }

  get dateOfIncidence() {
    return this.form.get('dateOfIncidence');
  }

  get description() {
    return this.form.get('description');
  }

  suspectAddress(i: number) {
    return this.suspects.at(i).get('suspectAddress');
  }

  suspectGender(i: number) {
    return this.suspects.at(i).get('suspectGender');
  }

  suspectId(i: number) {
    return this.suspects.at(i).get('id');
  }

  victimId(i: number) {
    return this.victims.at(i).get('id');
  }
}

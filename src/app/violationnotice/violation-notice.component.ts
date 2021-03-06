import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'violation-notice',
    templateUrl: './violation-notice.component.html',
    styleUrls: ['./violation-notice.component.css']
})

export class ViolationNoticeComponent implements OnInit {
    violationNoticeForm: FormGroup;

    violations: string[] = [
      'Overweight on License',
      'CDL Violation',
      'Speeding',
      'Violation NR or Farm License',
      'CMV Driver Violation',
      'Overweight Violation',
      'No Vehicle License',
      'CMV Equipment Violation',
      'Other'
    ];

    summonsLocations: string[] = [
      'AR Department of Finance and Administration'
    ];

    log(form) {
        console.log(form);
    }

    constructor(private _fb: FormBuilder) {}

    ngOnInit() {    
        this.violationNoticeForm = this._fb.group({
            driver: this._fb.group({
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                initial: ['', Validators.required],
                street: ['', Validators.required],
                city: ['', Validators.required],
                state: ['', Validators.required],
                age: ['', Validators.required],
                birthDate: ['', Validators.required],
                race: ['', Validators.required],
                sex: ['', Validators.required],
                height: ['', Validators.required],
                weight: ['', Validators.required],
                licenseNum: ['', Validators.required],
                licenseClass: ['', Validators.required],
                licenseState: ['', Validators.required],
                origin: ['', Validators.required],
                address: ['', Validators.required],
                destination: ['', Validators.required]
            }),
            vehicle: this._fb.group({
                owner: ['', Validators.required],            
                vehicleLicenseNum: ['', Validators.required],
                vehicleLicenseState: ['', Validators.required],
                vehicleLicenseYear: ['', Validators.required],
                vehicleMake: ['', Validators.required]
            }),    
            violation: this._fb.group({
                dateTime: ['', Validators.required],
                location: ['', Validators.required],
                stateStatute: ['', Validators.required],
                stateStatuteViolation: ['', Validators.required],
                codeNum: ['', Validators.required],
                violation: ['', Validators.required],
                officer: ['', Validators.required],
                officerUnit: ['', Validators.required],
                summonsLocation: ['', Validators.required],
                summonsDate: ['', Validators.required]
            })
        })
        console.log(this.violationNoticeForm);
        this.violationNoticeForm.value.driver.firstName = "Shane";
        this.violationNoticeForm.value.driver.lastName = "Parcus";
        console.log(this.violationNoticeForm);
    }

    
}
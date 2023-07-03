import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  form!: FormGroup;
  editmode = false;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.initForm();
    this.checkEditMode();
  }

  initForm() {
    this.form = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editmode = true;
        const getData = this.dataservice.getData();
        this.editForm['brand'].setValue(getData.brand);
        this.editForm['model'].setValue(getData.model);
        this.editForm['year'].setValue(getData.year);
      }
    });
  }

  get editForm() {
    return this.form.controls;
  }

  save() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    if (this.editmode) {
      this.updateData();
    } else {
      this.addData();
    }
  }

  addData() {
    this.dataservice.addData(this.form.value);
    this.router.navigateByUrl(`list`);
  }

  updateData() {
    this.dataservice.updateData(this.form.value);
    this.router.navigateByUrl(`list`);
  }

  cancel() {
    this.router.navigateByUrl(`list`);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  form = this.fb.group({
    term: '',
  });

  term: string = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const { term = '' } = this.form.value;

    this.router.navigate(['/items'], {
      queryParams: {
        search: term.toLowerCase(),
      },
    });
  }
}

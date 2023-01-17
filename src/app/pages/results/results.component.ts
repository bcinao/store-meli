import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Results } from 'src/app/shared/models/results.interface';

// Models
import { Item } from '../../shared/models/item.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  result!: Results;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ results }: any) => (this.result = results));
  }
}

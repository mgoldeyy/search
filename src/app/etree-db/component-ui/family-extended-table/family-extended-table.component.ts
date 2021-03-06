import { Component } from '@angular/core';
import { FamilyExtendedService } from '../../../data/service/family-extended.service';
import { AbstractHalLinkTable } from '../abstract-hal-link-table';

@Component({
  selector: 'app-family-extended-table',
  templateUrl: './family-extended-table.component.html',
  styleUrls: ['./family-extended-table.component.css']
})
export class FamilyExtendedTableComponent extends AbstractHalLinkTable {
  protected queryParams: any = {
    'filter': [],
    'order-by': [
      {
        field: 'name',
        type: 'field',
        direction: 'asc'
      }
    ]
  };

  constructor(
    protected halService: FamilyExtendedService
  ) {
    super();
  }
}

import { Component, Input } from '@angular/core';
import { EntityLinkService } from '../../../data/service/entity-link.service';
import { AbstractHalLinkTable } from '../abstract-hal-link-table';

@Component({
  selector: 'app-link-table',
  templateUrl: './link-table.component.html',
  styleUrls: ['./link-table.component.css']
})
export class LinkTableComponent extends AbstractHalLinkTable {
  // One of artist, performance, source
  @Input() entityType: string;

  constructor(
    protected halService: EntityLinkService
  ) {
    super();
  }

  getLinks(): void {
    return this.halResponse._embedded[this.entityType + '_link'];
  }
}

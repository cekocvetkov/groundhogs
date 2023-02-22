import { Component, OnInit } from '@angular/core';
import { Groundhog } from 'src/app/services/groundhog';
import { GroundhogService } from 'src/app/services/groundhog.service';

@Component({
  selector: 'app-groundhogs-list',
  templateUrl: './groundhogs-list.component.html',
  styleUrls: ['./groundhogs-list.component.scss'],
})
export class GroundhogsListComponent implements OnInit {
  public groundhogs: Groundhog[] = [];

  constructor(private groundhogService: GroundhogService) {}

  ngOnInit(): void {
    this.groundhogService.getGroundhogs().subscribe((gh: Groundhog[]) => {
      this.groundhogs = gh;
    });
  }
  onClick(g: string, $event: MouseEvent) {
    console.log(g);
  }
}

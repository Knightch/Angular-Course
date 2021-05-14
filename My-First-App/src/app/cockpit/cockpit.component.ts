import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CockpitComponent implements OnInit {
  @Output('sCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
 
  @ViewChild('serverContent') serverContents: ElementRef;

  onAddserver(serverName) {
    this.serverCreated.emit({
      serverName: serverName.Value,
      serverContent: this.serverContents.nativeElement.Value
    });
  }

  onAddblueprint(serverName) {
    this.blueprintCreated.emit({
      serverName: serverName.Value,
      serverContent: this.serverContents.nativeElement.Value
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}

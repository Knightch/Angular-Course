import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: Array<string> = ['server 1', 'server 2', 'server 3'];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onReloadPage() {
    this.router.navigate(['servers'], { relativeTo: this.route })
  }
}

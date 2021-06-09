import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from './server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  Servers: { name: string, status: string }[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private serverService: ServerService) { }

  ngOnInit() {
    this.Servers = this.serverService.servers;
  }
}

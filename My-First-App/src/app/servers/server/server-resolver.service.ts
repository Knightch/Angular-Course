import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs";
import { ServerService } from "../server.service";
interface Server {
    id: number;
    name: string;
    status: string;
}
@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private serverService: ServerService) { }
    resolve(route: ActivatedRouteSnapshot, states: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params['id']);
    }
}
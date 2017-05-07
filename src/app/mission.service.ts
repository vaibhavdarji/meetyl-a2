import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Mission } from './mission';


@Injectable()
export class MissionService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private url = 'api/missions';  // URL to web api

    constructor(private http: Http) { }

    getMissions(): Promise<Mission[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().data as Mission[])
            .catch(this.handleError);
    }

    update(mission: Mission): Promise<Mission> {
        const url = `${this.url}/${mission.id}`;
        return this.http
            .put(url, JSON.stringify(mission), {headers: this.headers})
            .toPromise()
            .then(() => mission)
            .catch(this.handleError);
    }

    create(mission: Mission): Promise<Mission> {
        return this.http
            .post(this.url, JSON.stringify(mission), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Mission)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}

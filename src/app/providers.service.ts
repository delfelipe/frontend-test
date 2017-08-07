import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProvidersService {

	headers: Headers;
    options: RequestOptions;
    API_URL: string = "http://netflixroulette.net/api/api.php?";

	constructor(private http: Http) {
		this.headers = new Headers({
			'Content-Type': 'application/json'
        });
        this.options = new RequestOptions({ headers: this.headers });
	}

	get(url: string, param: any): Promise<any> {
    	let body = Object.keys(param).map(function(key){
              return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
            }).join('&');

    	return this.http
    		.get(this.API_URL + url+'?'+body, this.options)
    		.toPromise()
    		.then(this.extractData)
    		.catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        body = body || {};

				var success = true;
				if('success' in body)
				{
					success = body.success;
				}

				return {'success' : success, 'value' : body};
    }

	private handleError(err: any){
		var hubUrl = HUB_URL;

		if(err.status == 403)
		{
				window.location.href = hubUrl+'login/?product=an';
		}
		else
		{
			return {
				'success' : false,
				'value' : err.message || err
			};
		}
	}

}

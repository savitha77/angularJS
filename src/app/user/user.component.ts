import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'app-user',
	templateUrl: 'user.component.html',
	styleUrls: ['user.component.css']
})

export class UserComponent {

	name = 'Hello'
	http = null;
	userData ;
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		})
	};

	constructor(http: HttpClient) {
		this.http = http;
	}
	get() {
		
		this.http.get("http://localhost:8080/users", this.httpOptions)
			.subscribe(data => {
				this.userData = data;
				this.name = this.userData.username;
				console.log('the data', this.userData);

			});
		console.log('UserData ', this.name);
	}

	create(pname) {
		const newLocal = "{\"username\":\"" + pname + "\"}";
		console.log(newLocal);
		console.log('changed name in create', pname);
		this.http.post("http://localhost:8080/users", newLocal, this.httpOptions).toPromise();

	}


}
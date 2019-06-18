import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
	selector:'app-userlist',
	templateUrl:'userlist.component.html',
	styleUrls:['userlist.component.css']
})
export class UserlistComponent{
	constructor(private http: HttpClient){
		this.http=http;
		this.get();
		
	}

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		})
	};


	
	userData:any[];


	get() {

		this.http.get("http://localhost:8080/users/list", this.httpOptions)
		.subscribe(data => {
			this.userData=data;
		//	this.usersJson=Array.of(this.userData);
			console.log('the data 1 ' ,this.userData[0]);
		//	this.userData=this.usersJson[0];
			
			
			
		  });
		 
		 
	}
}
import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private HttpClient:HttpClient) { }

  getData()
  {
  	return this.HttpClient.get('http://127.0.0.1:8000/api/employees');
  }

  insertData(data)
  {
  	return this.HttpClient.post('http://127.0.0.1:8000/api/addEmployee', data);
  }

  deleteData(id)
  {
  	return this.HttpClient.delete('http://127.0.0.1:8000/api/deleteEmployee/'+id);
  }

  getEmployeeById(id)
  {
    return this.HttpClient.get('http://127.0.0.1:8000/api/employee/'+id);
  }

  updateData(id, data)
  {
    return this.HttpClient.put('http://127.0.0.1:8000/api/updateEmployee/'+id, data);
  }
}

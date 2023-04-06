import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://file.io/'
  constructor(private http: HttpClient) { }

  upload(file:File) {
    const formData = new FormData()
    formData.append('file', file, file.name)
    return this.http.post(this.baseUrl, formData)
  }
}

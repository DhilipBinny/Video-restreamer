import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilService {

  constructor() { }

  python_backend_url = "http://localhost:8000/python"
  nodejs_backend_url = "http://localhost:8001/nodejs"
}

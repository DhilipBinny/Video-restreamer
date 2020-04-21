import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilService {

  constructor() { }

  // python_backend_url = "http://localhost:8000/python"
  // nodejs_backend_url = "http://localhost:8001/nodejs"

  python_backend_url = "http://134.209.105.222:8000/python"
  nodejs_backend_url = "http://134.209.105.222:8001/nodejs"
}

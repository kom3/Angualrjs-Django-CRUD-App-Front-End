import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  //baseurl="http://127.0.0.1:8000"
    httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }
 
 
  getAllMovies():Observable<any>{

    return this.http.get('http://127.0.0.1:8000/movies/',
    {headers:this.httpHeaders});
   }

   getOneMovie(id):Observable<any>{

    return this.http.get('http://127.0.0.1:8000/movies/'+id+'/',
    {headers:this.httpHeaders});
   }
  

   updateMovie(selectedmovie):Observable<any>{

    const body={title:selectedmovie.title, desc:selectedmovie.desc, year:selectedmovie.year};
    const id=selectedmovie.id
    return this.http.put('http://127.0.0.1:8000/movies/'+id+'/',body,
    {headers:this.httpHeaders});
   }

   
   CreateMovie(selectedmovie):Observable<any>{

    const body={title:selectedmovie.title, desc:selectedmovie.desc, year:selectedmovie.year};
    
    return this.http.post('http://127.0.0.1:8000/movies/',body,
    {headers:this.httpHeaders});
   }


   DeleteMovie(id):Observable<any>{

   
    
    return this.http.delete('http://127.0.0.1:8000/movies/'+id+'/',
    {headers:this.httpHeaders});
   }



}


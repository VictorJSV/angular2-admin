import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'

//Le digo a Angular para inyectar esta clase.
//Necesitamos utulizarlo para evitar un error
@Injectable()
export class AdminService {

    constructor(private http : Http){}

    adminList(){
        return this.http.get('https://crackling-torch-81.firebaseio.com/data.json')
            .toPromise()
            .then(respuesta => respuesta.json())
            .catch(this.handlerError);
    }

    adminInformation(id:number){
        let url = `https://jsonplaceholder.typicode.com/users/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(respuesta => respuesta.json())
            .catch(this.handlerError);
    }

    sendNewAdmin(admin: any){
        const info = JSON.stringify(admin);
        return this.http.post('https://crackling-torch-81.firebaseio.com/data.json', info)
            .toPromise()
            .then(respuesta => console.log(respuesta))
            .catch(this.handlerError);
    }

    private handlerError(error){
        console.log('Ocurrio un error con el llamado HTTP.');
        return Promise.reject(error.message || error)
    }
}
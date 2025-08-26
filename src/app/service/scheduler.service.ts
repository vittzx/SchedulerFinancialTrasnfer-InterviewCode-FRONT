import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Agendamento {
  documentoOrigem: string;
  documentoDestino: string;
  dataAgendamento: string;
  valor: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  private baseUrl = 'http://localhost:9090'
  private apiUrl = '/scheduler-trasnfer/v1/schedule';

  constructor(private http: HttpClient) {}

  agendarTransferencia(agendamento: Agendamento): Observable<any> {
    const headers = new HttpHeaders({
      'documentoOrigem': agendamento.documentoOrigem,
      'documentoDestino': agendamento.documentoDestino
    });

    // Corpo só com dataAgendamento e valor
    const body = {
      dataAgendamento: agendamento.dataAgendamento,
      valor: agendamento.valor
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}

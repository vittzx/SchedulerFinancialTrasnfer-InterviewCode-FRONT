import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Agendamento {
  documentoOrigem: string;
  documentoDestino: string;
  dataAgendamento: string;
  valor: number | null;
}

@Injectable({ providedIn: 'root' })
export class SchedulerService {
  constructor(private http: HttpClient) {}

  agendarTransferencia(dados: Agendamento) {
    return this.http.post('http://localhost:9090/scheduler-financial-transfer/v1/schedule', 
      {
        'dateSchedule': dados.dataAgendamento,
        'transferValue': dados.valor
      },
      {
        headers: new HttpHeaders({
          'originAccountId': dados.documentoOrigem,
          'destinationAccountId': dados.documentoDestino
        })
    });
  }
}

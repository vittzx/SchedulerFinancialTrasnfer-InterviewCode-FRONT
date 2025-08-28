import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Agendamento, SchedulerService } from '../service/scheduler.service';

@Component({
  selector: 'scheduler',
  templateUrl: './scheduler.component.html',
  imports: [FormsModule,HttpClientModule],
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  agendamento: Agendamento = {
    documentoOrigem: '',
    documentoDestino: '',
    dataAgendamento: '',
    valor: null
  };

  constructor(private schedulerService: SchedulerService) {}

  agendarTransferencia() {
    let dataAux = new Date(this.agendamento.dataAgendamento as string)
    this.agendamento.dataAgendamento = `${String(dataAux.getDate() + 1).padStart(2, '0')}/${String(dataAux.getMonth() + 1).padStart(2, '0')}/${dataAux.getFullYear()}`
    this.schedulerService.agendarTransferencia(this.agendamento).subscribe({
      next: (response) => {
        console.log('Transferência agendada:', response);
        alert('Transferência agendada com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao agendar transferência:', err);
        alert('Erro ao agendar transferência. Tente novamente.');
      }
    });
  }
}

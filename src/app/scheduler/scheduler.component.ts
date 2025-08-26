import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Agendamento, SchedulerService } from '../service/scheduler.service';

@Component({
  selector: 'scheduler',
  templateUrl: './scheduler.component.html',
  imports: [FormsModule],
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  agendamento: Agendamento = {
    documentoOrigem: '',
    documentoDestino: '',
    dataAgendamento: '',
    valor: null
  };

  constructor(@Inject(String) private schedulerService: SchedulerService) {}

  agendarTransferencia() {
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

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'scheduler',
  templateUrl: './scheduler.component.html',
  imports: [FormsModule],
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  agendamento = {
    documentoOrigem: '',
    documentoDestino: '',
    dataAgendamento: '',
    valor: null
  };

  agendarTransferencia() {
    console.log('Transferência Agendada:', this.agendamento);
    alert('Transferência agendada com sucesso!');
  }
}

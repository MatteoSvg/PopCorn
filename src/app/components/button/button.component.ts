import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
    @Input({required: true}) title!: string

    @Output() btnClicked = new EventEmitter<void>()
    onBtnClicked(){
      this.btnClicked.emit()
    }

}

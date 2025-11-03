import { Component, effect, input, linkedSignal, output } from '@angular/core';

@Component({
  selector: 'contry-search-input',
  imports: [],
  templateUrl: './contry-search-input.html',
})
export class ContrySearchInput {
  placeholder = input.required<string>()
  initialValue = input<string>('')
  inputValue = linkedSignal<string>(() => this.initialValue() ?? '')

  value = output<string>()

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue()
    const timeout = setTimeout(() => {
      this.value.emit(value)
    }, 500)

    onCleanup(() => {
      clearTimeout(timeout)
    })
  })
}

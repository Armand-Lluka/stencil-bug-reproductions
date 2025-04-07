import { Component, h } from '@stencil/core';

@Component({
  tag: 'example-component',
  styleUrl: 'example-component.scss',
  shadow: true,
})
export class ExampleComponent {
  render() {
    return (
      <div class="example-component">
        <slot></slot>
      </div>
    );
  }
}

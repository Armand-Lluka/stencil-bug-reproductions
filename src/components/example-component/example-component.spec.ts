import { newSpecPage } from '@stencil/core/testing';
import { ExampleComponent } from './example-component';

describe('example-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ExampleComponent],
      html: '<example-component></example-component>',
    });
    expect(root).toEqualHtml(`
      <example-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </example-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ExampleComponent],
      html: `<example-component first="Stencil" middle="'Don't call me a framework'" last="JS"></example-component>`,
    });
    expect(root).toEqualHtml(`
      <example-component first="Stencil" middle="'Don't call me a framework'" last="JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </example-component>
    `);
  });
});

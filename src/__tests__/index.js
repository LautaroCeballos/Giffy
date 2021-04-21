import { fireEvent, render, screen } from '@testing-library/react';
import App from 'App';

test('Home at work', async () => {
  render(<App />);
  const title = await screen.findByText(/Ultima/i);
  expect(title).toBeVisible();
});

// test('search from could be used', async () => {
//   render(<App/>);
//   const input = await screen.findByRole('textbox');
//   const button = await screen.findByRole('button');

//   console.log("button" + button)
//   console.log("input" + input)
  
//   fireEvent.change(input, { target: { value: 'Matrix' }});
//   fireEvent.click(button);

//   const title = await screen.findByText('Matrix');
//   // expect(title).toBeVisible();

// });
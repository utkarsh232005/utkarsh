import { render, screen } from '@testing-library/react';
import App from './App';
/**
 * Test case to check if the "learn react" link is rendered in the App component.
 */
test('renders learn react link', () => {
  // Render the App component into a virtual DOM
  render(<App />);

  // Query the rendered DOM for an element that contains the text "learn react" (case-insensitive)
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the queried element is present in the document
  expect(linkElement).toBeInTheDocument();
});

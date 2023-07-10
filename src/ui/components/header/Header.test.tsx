import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from 'ui/components/header/Header';


describe('Header component', () => {
  test('Header', () => {
    render(<Header />);
    expect(screen.getByText(/Wrench/)).toBeInTheDocument()
  });
  test('Header with empty snapshot',()=>{
    const header = render(<Header/>)
    expect(header).toMatchSnapshot()
  })
});

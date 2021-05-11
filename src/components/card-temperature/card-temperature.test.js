import { render, screen } from '@testing-library/react';
import CardTemperature from './card-temperature';
import Moment from 'moment';

test('Verifica se mostra informações basica no card', () => {
  const moment = Moment();
  const rendered = render(<CardTemperature title="TESTE123" temperature="34" updatedAt={moment} />);
  const title = screen.getByText(/TESTE123/i);
  expect(title).toBeInTheDocument();
  
  const temperature = screen.getByText(/34/i);
  expect(temperature).toBeInTheDocument();

  const updatedAt = screen.getByText(/Updated at /i);
  expect(updatedAt).toBeInTheDocument();
});

test('Verifica se mostra informações completas no card', () => {
  const moment = Moment();
  const rendered = render(<CardTemperature title="TESTE123" temperature="34" humidity="95" pressure="1025" updatedAt={moment} />);
  const title = screen.getByText(/TESTE123/i);
  expect(title).toBeInTheDocument();
  
  const humidity = screen.getByText(/95/i);
  expect(humidity).toBeInTheDocument();
  
  const pressure = screen.getByText(/1025/i);
  expect(pressure).toBeInTheDocument();
  
  const temperature = screen.getByText(/34/i);
  expect(temperature).toBeInTheDocument();

  const updatedAt = screen.getByText(/Updated at /i);
  expect(updatedAt).toBeInTheDocument();
});

test('Verifica botão de tentar novamente do card', () => {  
  const rendered = render(<CardTemperature retryCallback={()=>{}} />);
  const buttonRetry = rendered.container.querySelector('button');
  expect(buttonRetry).toBeInTheDocument();
});

test('Verifica carregando no card', () => {  
  const rendered = render(<CardTemperature />);
  const loadingDiv = rendered.container.querySelector('div.loading');
  expect(loadingDiv).toBeInTheDocument();
});
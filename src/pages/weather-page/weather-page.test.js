import { render } from '@testing-library/react';
import WeatherPage from './weather-page';

test('Verificar se há três cards de temperatura', () => {
  const rendered = render(<WeatherPage />);
  const cardTemperature = rendered.container.querySelectorAll('card-temperature');
  expect(cardTemperature.length === 3).toEqual(true);
});

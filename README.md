# Conta Azul - Desafio Frontend (WeatherNow)

Teste prático de cargo Desenvolvedor Frontend na [ContaAzul](https://contaazul.com/).

## Desafio

Construir uma aplicação para exibir a temperatura atual de 3 cidades
diferentes.

### Especificações
- Condições climáticas das cidades `Nuuk/GL, Urubici/BR e Nairobi/KE`;
- As cores das temperaturas deve seguir:
  - Igual ou abaixo de 5 graus em azul;
  - Acima de 5 graus e igual ou abaixo de 25 em laranja;
  - Acima de 25 graus em vermelho;
- A topbar deve permanecer fixa ao rola a página;
- O layout para **desktop** baseado neste [documento](https://marvelapp.com/13gd240g/screen/38477114);
- O layout para **mobile** baseado neste [documento](https://marvelapp.com/13gd240g/screen/38477115);
- As **cores** utilizadas de acordo a [paleta](https://marvelapp.com/13gd240g/screen/38477116);
- Sugestão de **API** da [OpenWeatherMap](https://openweathermap.org/api);
- Cache de 10min para as requisições com a API;
- Atualizar as informações a cada 10min;
- HTML Semântico;
- Testes automatizados;

## Aplicação
### Estrutura
- Servidor [**Node.JS**](https://nodejs.org/en/)
- Framework de Javascript em [**React**](https://pt-br.reactjs.org/)
- CSS com [**SassScript**](https://www.npmjs.com/package/node-sass)

### Preparação de Desenvolvimento
> Para rodar o projeto, você precisa do servidor [**Node.js**](https://nodejs.org/en/) instalado.

1. Vá para a pasta onde ficam seus projetos e faça clone com o comando:
```bash
git clone https://github.com/lucasmattooos/conta-azul-desafio-frontend.git
```
2. Vamos para a pasta onde o projeto foi clonado com o comando:
```bash
cd conta-azul-desafio-frontend
```
3. Instale as dependências do projeto com o comando:
```bash
npm install
```
4. Após instalado as dependências, iniciamos o servidor com o comando:
```bash
npm start
```

Agora seu servidor de desenvolvimento já está acessível em `localhost:3000`

### Preparação de Produção
> Lembre-se de utilizar um Servidor Web apropriado para aplicações [**single-page application**](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)

> **Observação:** Tenha executado ao menos uma vez a Preparação de Desenvolvimento antes de preparar para produção

1. Iremos compilar o projeto com o comando:
```bash
npm run build
```
2. Copiamos os arquivos da pasta `build` localizada dentro do projeto para o servidor web

Agora sua aplicação estará disponível a partir do seu Servidor Web

### Testes Automatizados

> **Observação:** Tenha executado ao menos uma vez a Preparação de Desenvolvimento antes de rodar os testes

1. Iremos rodar os testes com o comando
```bash
npm test
```
2. Uma primeira vez irá apresentar um menu para escolha do tipo de teste, pressione `a` para selecionar `run all tests`
3. Aguarde o fim do processo e confira se todos os testes tiveram resultado `passed`, um exemplo abaixo:
```Bash
Test Suites: 4 passed, 4 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        5.333 s
Ran all test suites.
```

## Licença
© 2021 [Lucas Mattos](https://www.lucasmattos.com.br/).

# Teste de desenvolvimento frontend Ensinio 💻

## Sobre o projeto 
Este projeto é um teste de frontend para a <a href="https://ensinio.com">Ensinio</a>, com integração com uma fake-api feita com json-sever. É possível ver este projeto em deploy na Vercel neste <a href="https://ensinio-frontend-challenge.vercel.app">link</a>.

## IMPORTANTE ⚠️
Por estar em deploy, a fake-api também foi posta em deploy para melhor visualização da aplicação.
É possível ver esta api e tudo sobre neste <a href="https://json-server-ensionio.vercel.app">link</a>.

## Tecnologias 🚀

- <a href= "https://react.dev">React.js</a>
- <a href= "https://react.dev">TypeScript</a>
- <a href="https://axios-http.com/ptbr/docs/intro">Axios</a>
- <a href="https://axios-http.com/ptbr/docs/intro">Styled Components</a>
- <a href="https://vitest.dev">Vitest</a>
- <a href="https://testing-library.com">Testing Library</a>
- <a href="https://vitejs.dev">Vite</a>
- <a href="https://www.framer.com/motion/">Frammer Motion</a>

## Componentes ✍️ 
Para a construção desse site, a página toda foi dividida em 6 componentes sendo eles:
 - Footer
 - HeroSection
 - LanguageMenu
 - MobileMenu
 - Navbar  
 - BottomInitialPageContent
## Instalação 📥

Faça um clone desse repositório e acesse o diretório.
```bash
git https://github.com/Felpasw/ensinio-frontend-challenge.git && cd ensinio-frontend-challenge
```
Instalando as dependências.
```bash
npm i 
```
Executanto aplicação em modo de desenvolvedor.
```bash
npm run start  
```
Iniciando o json-sever.
- Crie um arquivo na root do projeto com a extensão `.env` 
- Neste arquivo, crie uma variável com o nome `VITE_DATA_BASE_URL` e atribua o valor a `http://localhost:3000` ou atribua o valor da API já em deploy disponibilizada 
- Caso opte por atribuir o valor de servidor local, você pode iniciar ele com o seguinte comando:
```bash
npm start-dev
```
## Testes 
Esse projeto possui alguns testes simples e essenciais para a lógica da página, você pode executar eles usando:
```bash
npm run test
```



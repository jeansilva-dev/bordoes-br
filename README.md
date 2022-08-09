
# Bordões BR

Aplicação desenvolvida em ReactJS que lista e reproduz alguns bordões famosos da TV e internet.

## Demo
Acesse: https://bordoes-br.vercel.app
 
![App Screenshot](https://ik.imagekit.io/nl4kkw4a0/bordoes-br_NrjKQRK6R.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660033249191)


## Instalação

Clone esse repositório do GitHub na sua máquina:

```bash
    git clone https://github.com/jeansilva-dev/bordoes-br.git && cd bordoes-br
```

Instale as dependências e rode a aplicação:

```bash
    npm install
    npm run dev
```

Acesse: http://127.0.0.1:5173 no seu navegador


## Fazendo Modificações

### Fonte de dados

Essa aplicação utiliza como fonte de dados um objeto json localizado em ```./public/catchphrases.json```
e consumido através de requisição HTTP. 

Para adicionar, editar ou remover áudios, faça suas modificações nesse arquivo respeitando a estrutura de chaves e valores, ou substitua por sua própria fonte de dados.

### Estilização

Essa aplicação é estilizada utilizando CSS Modules. Cada componente possui seu próprio arquivo CSS localizado no diretório ```./src/components```. Além disso, é utilizado um arquivo ```./src/global.css``` para aplicar as estilizações globais e genéricas.
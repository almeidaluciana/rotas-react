# Projeto React com Rotas

Projeto desenvolvido em sala de aula para apresentar a criação de páginas e navegação utilizando o **React Router DOM**.

## Rotas

| Rota        | Página   |
| ----------- | -------- |
| `/`         | Home     |
| `/products` | Produtos |
| `*`         | NotFound |

## Navegação

A navegação entre as páginas é realizada utilizando o componente `Link` do React Router.

Exemplo:

```jsx
<Link to="/">Home</Link>
<Link to="/products">Produtos</Link>
```

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/almeidaluciana/rotas-react.git
```

Acesse a pasta do projeto:

```bash
cd rotas-react
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois, acesse a aplicação pelo endereço exibido no terminal.

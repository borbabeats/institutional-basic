# Site Institucional - Escritório de Advocacia

Este é um site institucional moderno para escritório de advocacia, construído com Astro, React e TypeScript. O site é responsivo, rápido e otimizado para SEO.

## 🛠️ Recursos

- ✅ Design responsivo para todos os dispositivos
- 💻 Páginas estáticas otimizadas
- 📝 Blog integrado
- 💼 Seção de serviços
- 📣 Formulário de contato
- 👍 Otimizado para SEO

## 💻 Tecnologias

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass/SCSS](https://sass-lang.com/)
- [Vite](https://vitejs.dev/)

## 💻 Estrutura do Projeto

```
/
├── public/                 # Arquivos estáticos
│   ├── images/            # Imagens globais
│   └── favicon.svg        # Ícone do site
│
├── src/
│   ├── assets/           # Assets como SVGs, fontes, etc.
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Header/       # Cabeçalho do site
│   │   ├── Footer/       # Rodapé
│   │   ├── Button/       # Botões personalizados
│   │   └── ...
│   ├── layouts/          # Layouts das páginas
│   │   └── Layout.astro  # Layout principal
│   ├── pages/            # Páginas do site
│   │   ├── index.astro   # Página inicial
│   │   ├── about.astro    # Sobre nós
│   │   ├── services.astro # Serviços
│   │   ├── blog/          # Páginas do blog
│   │   └── ...
│   └── styles/           # Estilos globais
│       ├── _color.scss    # Variáveis de cores
│       ├── _sizes.scss    # Variáveis de tamanho
│       └── global.scss   # Estilos globais
├── .gitignore
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🛠️ Como Executar

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITÓRIO]
   cd institutional-basic
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   O site estará disponível em: http://localhost:4321

4. **Para produção**
   ```bash
   npm run build
   npm run preview
   ```

## 💻 Comandos Disponíveis

| Comando           | Descrição                                      |
|-------------------|------------------------------------------------|
| `npm install`     | Instala as dependências do projeto            |
| `npm run dev`     | Inicia o servidor de desenvolvimento         |
| `npm run build`   | Constrói o site para produção                |
| `npm run preview` | Visualiza a build de produção localmente     |
| `npm run format`  | Formata o código com Prettier                |
| `npm run lint`    | Executa o ESLint para verificar o código     |

## 💼 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# URL da API do WordPress (se aplicável)
PUBLIC_API_URL=SUA_API_AQUI
```

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👋 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

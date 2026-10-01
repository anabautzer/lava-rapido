# 🚗 Lava-Rápido Brilho

Site de um lava-rápido fictício, com agendamento de lavagens e fila de espera em tempo real.

🔗 **Repositório:** https://github.com/anabautzer/lava-rapido

## 👤 Integrante

| Nome | RM |
|---|---|
| Ana Carolina Orcelli Bautzer | RM570281 |

## ✨ Funcionalidades

- **Home:** apresentação do lava-rápido, serviços oferecidos e depoimentos de clientes com fotos dos carros.
- **Agendamento:** formulário com validação (nome do cliente, modelo, placa e tipo de lavagem) que gera os tíquetes de lavagem, com opção de exclusão em cada tíquete.
- **Fila de espera:** mostra o carro sendo lavado e os próximos da fila, com o tempo de espera estimado de cada um.
- **Sobre:** história da empresa, diferenciais e informações do desenvolvedor.
- **Cabeçalho:** menu de navegação e quantidade de carros aguardando lavagem, compartilhada entre as páginas via Context API.
- **Página 404:** exibida quando o endereço acessado não existe.

## 🛠️ Tecnologias

- [React](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/) e [Yup](https://github.com/jquense/yup) para validação do formulário

## ▶️ Como rodar o projeto

```bash
# clonar o repositório
git clone https://github.com/anabautzer/lava-rapido

# entrar na pasta
cd lava-rapido

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço que aparecer no terminal (normalmente http://localhost:5173).

## 📁 Estrutura

```
lava-rapido/
├── public/
│   └── favicon.svg                  # Ícone da aba do navegador
│
├── src/
│   ├── assets/                      # Acervo de mídias
│   │   ├── carro1.jpg               # Foto do carro 1
│   │   ├── carro2.jpg               # Foto do carro 2
│   │   ├── carro3.jpg               # Foto do carro 3
│   │   ├── carro4.jpg               # Foto do carro 4
│   │   └── Integrante.jpeg          # Foto da integrante
│   │
│   ├── components/                  # Componentes reutilizáveis
│   │   ├── Footer.tsx               # Rodapé da aplicação
│   │   ├── Header.tsx               # Cabeçalho e faixa da fila de espera
│   │   └── Menu.tsx                 # Navegação entre páginas
│   │
│   ├── context/
│   │   └── TicketContext.ts         # Tíquetes compartilhados entre as páginas
│   │
│   ├── dados/
│   │   └── Tempo.ts                 # Tempos de lavagem e formatação do tempo de espera
│   │
│   ├── pages/                       # Páginas da aplicação
│   │   ├── Agendamento/
│   │   │   └── AgendamentoPage.tsx  # Página de Agendamento
│   │   ├── Error/
│   │   │   └── ErrorPage.tsx        # Página de Erro (404)
│   │   ├── FilaDeEspera/
│   │   │   └── FilaDeEsperaPage.tsx # Página da Fila de Espera
│   │   ├── Home/
│   │   │   └── HomePage.tsx         # Página Inicial
│   │   └── Sobre/
│   │       └── SobrePage.tsx        # Página Sobre
│   │
│   ├── App.tsx                      # Layout base com Header, Footer e Contexto
│   ├── main.tsx                     # Ponto de entrada e configuração das rotas
│   └── index.css                    # Importação do Tailwind CSS
│
├── .gitignore                       # Arquivos ignorados pelo Git
├── eslint.config.js                 # Configuração do ESLint
├── index.html                       # HTML base carregado pelo Vite
├── package.json                     # Dependências e scripts do projeto
├── package-lock.json                # Trava de versões das dependências
├── tsconfig.json                    # Configuração base do TypeScript
├── tsconfig.app.json                # Configuração do TypeScript (aplicação)
├── tsconfig.node.json               # Configuração do TypeScript (Node/Vite)
├── vite.config.ts                   # Configuração do Vite
│
└── README.md                        # Guia do projeto (este arquivo)
```

---

Projeto desenvolvido para o Checkpoint 5 da disciplina de Front-End Design Engineering, FIAP.

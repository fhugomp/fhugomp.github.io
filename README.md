# Portfólio Profissional | Hugo Mendes

[![Visualizar o Portfólio Online](https://img.shields.io/badge/Acessar_Portfólio-05122A?style=for-the-badge&logo=vercel&logoColor=white)](https://fhugomp.github.io/)

Este repositório contém o código-fonte da minha interface web de portfólio profissional. O projeto foi desenvolvido para atuar como um centralizador público da minha trajetória acadêmica, competências técnicas e projetos práticos nas áreas de Ciência de Dados, Business Intelligence e Engenharia de Software.

![Capa do Projeto](https://fhugomp.github.io/Images/og-image-portfolio.jpg)

## 1. Perfil e Stack Tecnológico

Atualmente graduando em Ciência de Dados pela Universidade Federal do Ceará (UFC) e pesquisador bolsista de Business Intelligence (BI) no CPITT. Minha atuação foca no ciclo completo dos dados, com ênfase na resolução de problemas estruturais entre tecnologia e negócios.

**Principais Domínios de Atuação:**
* **Engenharia e Análise de Dados:** Extração, transformação e manipulação de bases complexas (*ETL*) utilizando SQL, Python (Pandas e NumPy) e R.
* **Business Intelligence (BI):** Mapeamento de métricas operacionais, monitoramento de KPIs e construção de *dashboards* analíticos interativos via Power BI e automações de planilhas.
* **Fundamentos Analíticos:** Estatística Aplicada, Modelagem Probabilística, Regressões e classificadores de *Machine Learning*.

**Stack e Ferramentas:**
<div align="center">
  <img src="https://img.shields.io/badge/-Linux-05122A?style=for-the-badge&logo=linux&logoColor=E95420">&nbsp;
  <img src="https://img.shields.io/badge/-VS%20Code-05122A?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwN0FDQyI+PHBhdGggZD0iTTIzLjE1IDIuNTg3TDE4LjIxLjIxYTEuNDk0IDEuNDk0IDAgMCAwLTEuNzA1LjI5bC05LjQ2IDguNjMtNC4xMi0zLjEyOGEuOTk5Ljk5OSAwIDAgMC0xLjI3Ni4wNTdMLjMyNyA3LjI2MUExIDEgMCAwIDAgMCA4LjAyNnY3Ljk0OGExIDEgMCAwIDAgLjMyNi43NjVsMS4zMjMgMS4yMDFhMSAxIDAgMCAwIDEuMjc2LjA1Nmw0LjEyLTMuMTI4IDkuNDYgOC42M2ExLjQ5MiAxLjQ5MiAwIDAgMCAxLjcwNC4yOWw0Ljk0Mi0yLjM3N0ExLjUgMS41IDAgMCAwIDI0IDIwLjA2VjMuOTM5YTEuNSAxLjUgMCAwIDAtLjg1LTEuMzUyem0tNS4xNDYgMTQuODYxTDEwLjgyNiAxMmw3LjE3OC01LjQ0OHYxMC44OTZ6Ii8+PC9zdmc+">&nbsp;
  <img src="https://img.shields.io/badge/-Git-05122A?style=for-the-badge&logo=git">&nbsp;
  <img src="https://img.shields.io/badge/-Power%20BI-05122A?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0YyQzgxMSI+PHBhdGggZD0iTTIxIDF2MjJhMSAxIDAgMCAxLTEgMWgtMy41VjdjMC0uODI3LS42NzMtMS41LTEuNS0xLjVoLTJWMWExIDEgMCAwIDEgMS0xaDZhMSAxIDAgMCAxIDEgMXptLTYgNUg5YTEgMSAwIDAgMC0xIDF2NC41aDJjLjgyNyAwIDEuNS42NzMgMS41IDEuNXYxMUgxNlY3YTEgMSAwIDAgMC0xLTF6bS01IDZINGExIDEgMCAwIDAtMSAxdjEwYTEgMSAwIDAgMCAxIDFoN1YxM2ExIDEgMCAwIDAtMS0xeiIvPjwvc3ZnPg==">&nbsp;
  <img src="https://img.shields.io/badge/-Python-05122A?style=for-the-badge&logo=python">&nbsp;
  <img src="https://img.shields.io/badge/-R-05122A?style=for-the-badge&logo=r&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/-SQL-05122A?style=for-the-badge&logo=postgresql">&nbsp;
  <img src="https://img.shields.io/badge/-NumPy-05122A?style=for-the-badge&logo=numpy&logoColor=4DABCF">&nbsp;
  <img src="https://img.shields.io/badge/-Pandas-05122A?style=for-the-badge&logo=pandas&logoColor=white">&nbsp;
</div>

## 2. Engenharia da Interface e UI/UX

A aplicação foi construída nativamente (sem frameworks), focando em performance, baixo custo de processamento e aplicação de boas práticas de desenvolvimento web.

* **Arquitetura de Estilização (CSS3):** Layout estruturado através de *CSS Grid* e *Flexbox*, sob a metodologia *Mobile First*, garantindo renderização adaptativa (*Media Queries*) em diferentes resoluções.
* **Gerenciamento de Estado de UI:** Implementação de um sistema de alternância de temas (Claro/Escuro) utilizando manipulação de variáveis nativas CSS (`:root`) via JavaScript, com persistência de estado de usuário no `localStorage` do navegador.
* **Interatividade e Eventos:** Lógica de manipulação de DOM para orquestrar menu de navegação responsivo (*overlay* e cabeçalho *sticky*), além de micro-interações como *fade-in* ativado por rolagem (*scroll*) e animações CSS (efeitos *hover* dinâmicos e de digitação em blocos de texto).

## 3. Requisitos de Ambiente

Por tratar-se de uma aplicação *client-side* puramente estática baseada em HTML5, CSS3 e JavaScript Vanilla, o sistema dispensa a necessidade de ambientes de *runtime* locais, gerenciadores de pacotes ou processos de compilação.

## 4. Instruções de Execução Local

1. Realize a clonagem do repositório:
```bash
git clone https://github.com/fhugomp/fhugomp.github.io.git
```

2. Acesse o diretório do projeto:
```bash
cd fhugomp.github.io
```

3. Inicialização:
Abra o arquivo `index.html` na raiz do diretório através de qualquer navegador web moderno para visualizar a aplicação localmente.

## 5. Implantação e Demonstração Online

O repositório está integrado à infraestrutura de hospedagem contínua do GitHub Pages. Alterações na *branch* principal são refletidas automaticamente no ambiente de produção.

> **Ambiente de Produção:** [Acessar Portfólio](https://fhugomp.github.io/)

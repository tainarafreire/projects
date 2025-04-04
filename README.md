# 💰 Simulador de Margem Consignável

Este é um projeto desenvolvido durante uma imersão em desenvolvimento web.  
O simulador calcula a **margem consignável atual** de uma pessoa e o **limite de crédito** que ela pode contratar, com base no valor do benefício e dos descontos existentes.

## 🚀 Funcionalidades

- Solicita ao usuário:
  - O valor do benefício
  - A soma dos descontos atuais
- Calcula a margem disponível (35% do benefício menos os descontos)
- Estima o limite de crédito com base em uma taxa fixa (2,35%)
- Exibe os valores formatados em reais (R$)

## 🛠️ Tecnologias usadas

- HTML
- CSS
- JavaScript (`prompt`, `alert`, `toLocaleString`)

## 🧮 Fórmula aplicada

- `margem = benefício * 0.35`
- `margemAtual = margem - descontos`
- `limite = margemAtual / 0.0235` (considerando um fator base)

## 💻 Como usar

Abra o arquivo `index.html` no navegador

## 📚 Aprendizados

- Interação com o usuário (`prompt` e `alert`)
- Operações matemáticas com porcentagens e taxas
- Formatação de valores monetários em JavaScript
- Lógica de simulação e retorno dinâmico

---

✨ Projeto desenvolvido com muita dedicação e vontade de aprender mais sobre lógica de programação e aplicações práticas no dia a dia!

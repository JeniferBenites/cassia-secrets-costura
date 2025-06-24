
# Site de Vendas - Segredos de Cássia Medeiros

## 🎯 Sobre o Projeto

Site de vendas moderno, feminino e elegante para curso de costura. Desenvolvido com React + TypeScript + Tailwind CSS, totalmente responsivo e otimizado para conversões.

## ✨ Características

- **Design Feminino**: Cores suaves (rosa, lilás, roxo) com elementos elegantes
- **Contagem Regressiva**: Timer de 3 minutos para criar urgência
- **Formulário de Captura**: Coleta nome e email dos interessados
- **Botões de Ação**: WhatsApp (verde) e suporte (laranja) bem destacados
- **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- **SEO Otimizado**: Meta tags e estrutura otimizada para buscadores

## 🚀 Como Publicar no GitHub Pages

### Passo 1: Criar Repositório
1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository"
3. Nome: `site-costura` (ou nome de sua preferência)
4. Marque como **Public**
5. Clique em "Create repository"

### Passo 2: Fazer Upload dos Arquivos
1. No repositório criado, clique em "uploading an existing file"
2. Faça upload de todos os arquivos do projeto
3. Adicione uma mensagem de commit: "Site inicial"
4. Clique em "Commit changes"

### Passo 3: Configurar GitHub Pages
1. No repositório, vá em **Settings**
2. Role até a seção **Pages** (menu lateral)
3. Em **Source**, selecione **"Deploy from a branch"**
4. Em **Branch**, selecione **"main"**
5. Mantenha **"/ (root)"** selecionado
6. Clique em **Save**

### Passo 4: Acessar o Site
Após alguns minutos, seu site estará disponível em:
```
https://seunome.github.io/site-costura/
```

## 🛠️ Personalizações Necessárias

### 1. Logo
No arquivo `src/pages/Index.tsx`, localize o comentário:
```html
{/* INSIRA SUA LOGO AQUI */}
```
Substitua o ícone de coração pela sua logo.

### 2. Link do WhatsApp
Localize o comentário:
```html
{/* INSIRA AQUI O LINK DO GRUPO DO WHATSAPP */}
```
Substitua `#whatsapp-group` pelo link do seu grupo.

### 3. Link de Suporte
Localize o comentário:
```html
{/* INSIRA AQUI O LINK DE SUPORTE */}
```
Substitua `#support` pelo seu email ou WhatsApp pessoal.

## 🎨 Paleta de Cores

- **Fundo**: Degradê rosa/lilás (#fdf2f8 → #f3e8ff → #fdf2f8)
- **Textos**: Preto (#1f2937), Branco (#ffffff), Azul (#2563eb)
- **Botão WhatsApp**: Verde vibrante (#22c55e)
- **Botão Suporte**: Laranja vibrante (#f97316)
- **Urgência**: Vermelho (#ef4444)

## 📱 Funcionalidades

### Contagem Regressiva
- **Duração**: 3 minutos (180 segundos)
- **Reinicia**: A cada acesso à página
- **Ação ao zerar**: Mostra mensagem e botão para tentar novamente

### Formulário de Captura
- **Campos**: Nome completo e email
- **Validação**: Campos obrigatórios
- **Ação**: Mostra seção de confirmação após envio

### Seção de Confirmação
- **Aparece**: Após preenchimento do formulário
- **Botões**: WhatsApp (verde) e Suporte (laranja)
- **Scroll automático**: Para a seção de confirmação

## 🌐 Tecnologias Utilizadas

- **React 18**: Framework JavaScript
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização utilitária
- **Lucide React**: Ícones modernos
- **Vite**: Build tool rápido

## 📈 Otimizações Implementadas

- **Performance**: Código otimizado e leve
- **SEO**: Meta tags completas
- **UX**: Transições suaves e feedback visual
- **Mobile First**: Design responsivo prioritário
- **Acessibilidade**: Contraste adequado e navegação por teclado

## 🔧 Desenvolvimento Local

Para desenvolvimento local:

```bash
npm install
npm run dev
```

O site estará disponível em `http://localhost:8080`

## 📞 Suporte

Para dúvidas sobre personalização ou implementação, consulte a documentação do React e Tailwind CSS.

---

**Desenvolvido com 💜 para converter visitantes em clientes**

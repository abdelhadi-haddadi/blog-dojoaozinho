---
title: "Casa em Dia: Aplicativo Mobile para Gestão Doméstica Completa"
excerpt: "Conheça o Casa em Dia, um aplicativo React Native que simplifica a organização de tarefas, finanças e atividades familiares com interface intuitiva e colaborativa."
date: 2025-11-16
category: "Android"
image: "https://images.unsplash.com/photo-1777896193454-8b4863264f0b"
---

# Casa em Dia: Aplicativo Mobile para Gestão Doméstica Completa

Gerenciar uma casa envolve múltiplas responsabilidades: tarefas domésticas, controle financeiro, lista de compras, estoque e coordenação entre membros da família. Pensando nisso, desenvolvi o **Casa em Dia**, um aplicativo mobile completo que centraliza todas essas necessidades em uma única plataforma intuitiva e colaborativa.

## O Conceito

Casa em Dia é um aplicativo React Native projetado para simplificar a organização doméstica através de uma abordagem colaborativa. Cada membro da família pode participar ativamente da gestão da casa, desde o cumprimento de tarefas até o controle orçamentário e manutenção do estoque.

## Stack Tecnológico

O projeto foi desenvolvido com tecnologias modernas e robustas:

### Frontend

- **React Native 0.79.5** com **Expo ~53.0.20** - Framework multiplataforma
- **TypeScript ~5.8.3** - Tipagem estática para maior confiabilidade
- **Expo Router ~5.1.4** - Sistema de roteamento tipado
- **React Navigation ~7.1.6** - Navegação fluida entre telas
- **React Native Reanimated ~3.17.4** - Animações suaves e performáticas

### Backend

- **Supabase** - Plataforma completa com:
  - Autenticação segura
  - Banco de dados PostgreSQL
  - APIs REST automáticas
  - Row Level Security (RLS) para proteção de dados

### Armazenamento e UI

- **AsyncStorage** - Preferências locais (tema, configurações)
- **Expo Vector Icons** - Biblioteca completa de ícones
- **React Native Modal** - Modais nativos
- **Expo Linear Gradient** - Gradientes visuais elegantes

## Funcionalidades Principais

### 🔐 Autenticação Completa

Sistema robusto integrado com Supabase Auth oferecendo:

- Login e registro seguros
- Recuperação de senha
- Logout com limpeza de sessão
- Proteção de rotas privadas

### ✅ Gerenciamento de Tarefas

Sistema gamificado de tarefas domésticas:

- Criação e atribuição de tarefas para membros específicos
- Sistema de pontos para incentivar participação
- Definição de prazos e prioridades
- Marcação de conclusão com feedback visual
- Acompanhamento de progresso individual

### 📅 Agenda Integrada

Calendário interativo que centraliza todos os eventos:

- Visualização mensal de atividades
- Tipos de eventos: tarefas, despesas, compras e reuniões
- Notificações de eventos próximos
- Interface intuitiva com códigos de cores

### 💬 Chat Familiar

Comunicação interna para coordenação:

- Mensagens entre membros da família
- Sistema de mensagens temporárias (24 horas)
- Reduz poluição de conversas antigas
- Ideal para lembretes e coordenação rápida

### 💰 Controle Financeiro

Gestão completa do orçamento doméstico:

- Registro detalhado de despesas
- Definição de orçamento mensal
- Acompanhamento de saldo disponível
- Identificação de quem está gastando
- Calculadora integrada para cálculos rápidos

### 📦 Gestão de Estoque

Sistema inteligente de controle de itens:

- Cadastro por categorias (alimentos, limpeza, higiene, outros)
- Alertas automáticos de reposição
- Controle de quantidades mínimas
- Monitoramento de datas de validade
- Organização por localização na casa
- Campo de observações para detalhes

### 🛒 Lista de Compras

Organização prática para idas ao mercado:

- Criação e edição de itens
- Marcação de itens comprados
- Sincronização em tempo real
- Integração com o estoque

### 👥 Membros da Família

Gestão colaborativa:

- Adicionar e remover membros
- Atribuição de responsabilidades
- Acompanhamento de performance
- Sistema de pontos por membro

### ⚙️ Configurações Personalizadas

Controle completo do aplicativo:

- Ajuste de orçamento mensal
- Gerenciamento de membros
- Alternância entre tema claro e escuro
- Preferências salvas localmente

## Arquitetura do Banco de Dados

O aplicativo utiliza 8 tabelas principais no Supabase, cada uma com propósito específico:

### 1. Balances (Saldos)

Armazena saldo e orçamento de cada usuário:

```sql
- user_id: Referência ao usuário
- total_balance: Saldo total disponível
- monthly_budget: Orçamento mensal definido
```

### 2. Expenses (Despesas)

Registra todas as despesas:

```sql
- amount: Valor da despesa
- description: Descrição detalhada
- payer: Responsável pelo pagamento
- created_at: Data da transação
```

### 3. Family Members (Membros)

Gerencia os membros da família:

```sql
- name: Nome do membro
- user_id: Proprietário da família
- created_at: Data de adição
```

### 4. Messages (Mensagens)

Sistema de chat interno:

```sql
- content: Conteúdo da mensagem
- family_member_id: Membro que enviou
- created_at: Timestamp do envio
```

### 5. Tasks (Tarefas)

Controla tarefas domésticas:

```sql
- title: Descrição da tarefa
- done: Status de conclusão
- assignee: Responsável
- points: Pontos ganhos
- due_date: Prazo de conclusão
```

### 6. Events (Eventos)

Centraliza eventos do calendário:

```sql
- title: Nome do evento
- event_time: Data/hora
- type: task | expense | shopping | meeting
- description: Detalhes adicionais
```

### 7. Shopping List (Lista de Compras)

Organiza itens para compras:

```sql
- title: Nome do item
- done: Status de compra
- user_id: Criador do item
```

### 8. Inventory (Estoque)

Monitora itens domésticos:

```sql
- name: Nome do item
- category: alimentos | limpeza | higiene | outros
- current_quantity: Quantidade atual
- minimum_quantity: Alerta de reposição
- expiration_date: Data de validade
- location: Local de armazenamento
- needs_restock: Calculado automaticamente
```

## Segurança: Row Level Security (RLS)

Implementei políticas de segurança em todas as tabelas para garantir que:

- Cada usuário acesse apenas seus próprios dados
- Não haja vazamento de informações entre famílias
- Autenticação seja respeitada em todas as operações

```sql
ALTER TABLE public.nome_da_tabela ENABLE ROW LEVEL SECURITY;
```

## Como Instalar e Usar

### Pré-requisitos

- Node.js versão 18 ou superior
- Expo CLI instalado globalmente
- Projeto configurado no Supabase
- Yarn ou npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/joaomjbraga/casaemdia.git

# Entre no diretório
cd casaemdia

# Instale as dependências
npm install
# ou
yarn install
```

### Configuração

Crie um arquivo `.env` na raiz:

```bash
EXPO_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima-aqui
```

**Importante**: Nunca commite o arquivo `.env` no controle de versão!

### Executar

```bash
npm start
# ou
expo start
```

Use o Expo Go no celular ou um emulador para visualizar.

## Fluxo de Uso Recomendado

1. **Primeiro Acesso**:

   - Registre-se ou faça login
   - Configure seu orçamento mensal
   - Adicione membros da família

2. **Gestão de Tarefas**:

   - Crie tarefas na tela principal
   - Atribua responsáveis
   - Defina pontos e prazos
   - Acompanhe o progresso

3. **Controle Financeiro**:

   - Registre despesas conforme acontecem
   - Monitore saldo vs orçamento
   - Use a calculadora para cálculos rápidos
   - Veja quem está gastando mais

4. **Gestão de Estoque**:

   - Cadastre itens por categoria
   - Configure alertas de reposição
   - Monitore validades
   - Organize por localização

5. **Comunicação**:
   - Use o chat para coordenar
   - Envie lembretes rápidos
   - Comunique mudanças de planos

## Contribuindo

Contribuições são muito bem-vindas! Para contribuir:

1. Fork o repositório
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m "feat: adiciona funcionalidade X"`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

### Convenção de Commits

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` alteração na documentação
- `style:` formatação de código
- `refactor:` refatoração
- `test:` adição de testes

## Roadmap Futuro

Estou trabalhando em melhorias como:

- 📊 Dashboard com estatísticas e gráficos
- 🔔 Sistema de notificações push
- 📸 Upload de fotos de notas fiscais
- 📈 Relatórios financeiros mensais
- 🏆 Sistema de conquistas e gamificação
- 🌐 Sincronização com calendários externos
- 🎨 Temas personalizados
- 🗣️ Suporte a múltiplos idiomas

## Tecnologias e Decisões de Design

### Por que React Native?

Escolhi React Native para ter uma única base de código para iOS e Android, reduzindo tempo de desenvolvimento e facilitando manutenção.

### Por que Supabase?

O Supabase oferece uma solução completa com autenticação, banco de dados e APIs REST automatizadas, permitindo foco no desenvolvimento do aplicativo.

### Por que TypeScript?

A tipagem estática previne bugs em tempo de desenvolvimento e melhora significativamente a experiência de desenvolvimento com autocomplete e refatoração segura.

## Conclusão

O Casa em Dia nasceu da necessidade real de organizar melhor a vida doméstica de forma colaborativa. O aplicativo centraliza todas as responsabilidades da casa em uma plataforma intuitiva, tornando a gestão familiar mais eficiente e menos estressante.

Com arquitetura moderna, foco em segurança e interface pensada para toda a família, o Casa em Dia é uma solução completa para quem busca mais organização no dia a dia.

## Links

- 🔗 [Repositório no GitHub](https://github.com/joaomjbraga/CasaemDia)
- 📱 [Documentação completa](https://github.com/joaomjbraga/CasaemDia#readme)
- ⭐ Dê uma estrela se o projeto foi útil!

---

**Nota**: Este projeto foi idealizado e inteiramente desenvolvido por João M J Braga, desde a concepção da ideia até a implementação completa de todas as funcionalidades. Licenciado sob MIT License.

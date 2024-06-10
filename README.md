# EducaLivros
### Descrição do Projeto

O projeto "EducaLivros" é uma aplicação web que visa gerenciar um sistema de vendas de livros e produtos de papelaria. A aplicação é construída utilizando o framework Spring Boot no backend e PostgreSQL como banco de dados. A aplicação é projetada para suportar operações CRUD (Create, Read, Update, Delete) para gerenciar entidades como usuários, clientes, livros, autores, carrinhos, pagamentos e endereços. Além disso, foram criadas funções, stored procedures e triggers em sql para facilitar o desenvolvimento do projeto.

#### Funcionalidades Principais

1. **CRUD Operations:**
   - **Clientes:** Gerenciamento de clientes, incluindo criação, leitura, atualização e exclusão de registros de clientes. Cada cliente está associado a um usuário com permissões específicas no sistema.
   - **Usuários:** Criação e gerenciamento de usuários com diferentes roles (ADMIN, USER) para controlar o acesso a diferentes partes da aplicação.
   - **Livros e Autores:** Gerenciamento de livros e seus respectivos autores. Cada livro pode ter múltiplos autores e vice-versa, configurando uma relação muitos-para-muitos.
   - **Endereços:** Gerenciamento de endereços associados aos clientes. Cada cliente pode ter múltiplos endereços.
   - **Carrinhos e Pagamentos:** Gerenciamento de carrinhos de compras e registros de pagamentos.

2. **Autenticação e Autorização:**

3. **Segurança:**

#### Estrutura do Projeto

1. **Controllers:**
   - Responsáveis por lidar com as requisições HTTP e direcionar as operações para os serviços apropriados.
   - Exemplo: `PedidoController` para gerenciar operações relacionadas a pedidos.

2. **Services:**
   - Contém a lógica de negócio e interage com os repositórios para manipulação dos dados.
   - Exemplo: `PedidoService` para operações de criação, atualização, leitura e exclusão de pedidos.

3. **Repositories:**
   - Utiliza Spring Data JPA para interagir com o banco de dados.
   - Exemplo: `PedidoRepository` para operações CRUD na tabela de pedidos.

4. **Models:**
   - Definem as entidades do banco de dados.
   - Exemplo: `Pedido`, `Cliente`, `Livro`, `Autor`, `Endereco`.

5. **Security:**
   - Configuração de segurança para autenticação e autorização.
   - Exemplo: `SecurityConfigurations` para definir regras de segurança e gerenciamento de tokens JWT.
  
#### Triggers

1. **Auditorias:**
   - Foram criados como trigger dois esquemas de auditoria. Auditorias são tabelas que armazenam alterações feitas em outras tabelas através de triggers. As alterações são de update, create e delete.
   - Foram criados nesse esquema as tabelas livro_audit e autor_audit.

### Normalização

1. **O que é a normalização?**
  - A normalização é o processo de organização dos dados em um banco de dados para reduzir a redundância e melhorar a integridade dos dados. A 3ª Forma Normal (3NF) é uma das formas mais comuns de normalização e tem como objetivo eliminar dependências transitivas.

   Para que uma tabela esteja na 3ª Forma Normal, ela deve:
   - Estar na 2ª Forma Normal (2NF): Todos os atributos não-chave devem ser totalmente dependentes da chave primária.
   - Eliminar Dependências Transitivas: Nenhum atributo não-chave deve depender de outro atributo não-chave.
   - Aplicação da 3ª Forma Normal às Tabelas
   - Vamos associar as tabelas fornecidas e adicionar algumas suposições para demonstrar como elas poderiam ser normalizadas em 3NF.

2. **Tabelas Originais:**
   - autor (nome_autor, sobrenome_autor)
   - carrinho (quantidade_produto)
   - cliente (nome, sobrenome, telefone, email, cpf)
   - endereco (codigo_postal, estado, rua_nome, rua_complemento)
   - livro (descricao_livro, estoque_produto, nome_livro, avaliacao, data_publicacao)
   - pagamento (forma_pagamento, data_pagamento, pagamento_valido)
   - papelaria (tipo, marca, nome_produto, estoque_papelaria)
   - pedido (valor_total, data_pedido)

#### Resumo do Projeto

O projeto EducaLivros é uma aplicação robusta de gerenciamento de vendas de livros e produtos de papelaria, construído com Spring Boot e PostgreSQL. Ele inclui funcionalidades de CRUD para várias entidades, implementa autenticação e autorização com JWT, e garante a integridade dos dados através de triggers no banco de dados. A arquitetura é organizada em camadas (controllers, services, repositories, models), seguindo boas práticas de desenvolvimento para garantir manutenção e escalabilidade do sistema. A aplicação está pronta para ser integrada com interfaces frontend modernas, proporcionando uma experiência de usuário completa e segura.

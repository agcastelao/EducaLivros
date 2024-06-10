# EducaLivros
### Descrição do Projeto

O projeto "EducaLivros" é uma aplicação web que visa gerenciar um sistema de vendas de livros e produtos de papelaria. A aplicação é construída utilizando o framework Spring Boot no backend e PostgreSQL como banco de dados. A aplicação é projetada para suportar operações CRUD (Create, Read, Update, Delete) para gerenciar entidades como usuários, clientes, livros, autores, carrinhos, pagamentos e endereços.

#### Funcionalidades Principais

1. **CRUD Operations:**
   - **Clientes:** Gerenciamento de clientes, incluindo criação, leitura, atualização e exclusão de registros de clientes. Cada cliente está associado a um usuário com permissões específicas no sistema.
   - **Usuários:** Criação e gerenciamento de usuários com diferentes roles (ADMIN, USER) para controlar o acesso a diferentes partes da aplicação.
   - **Livros e Autores:** Gerenciamento de livros e seus respectivos autores. Cada livro pode ter múltiplos autores e vice-versa, configurando uma relação muitos-para-muitos.
   - **Endereços:** Gerenciamento de endereços associados aos clientes. Cada cliente pode ter múltiplos endereços.
   - **Carrinhos e Pagamentos:** Gerenciamento de carrinhos de compras e registros de pagamentos.

2. **Autenticação e Autorização:**
   - Implementação de segurança utilizando Spring Security e JWT (JSON Web Token) para autenticação e autorização. Apenas usuários autenticados podem acessar recursos protegidos.

3. **Views:**
   

4. **Triggers:**
  

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

#### Resumo do Projeto

O projeto EducaLivros é uma aplicação robusta de gerenciamento de vendas de livros e produtos de papelaria, construído com Spring Boot e PostgreSQL. Ele inclui funcionalidades de CRUD para várias entidades, implementa autenticação e autorização com JWT, e garante a integridade dos dados através de triggers no banco de dados. A arquitetura é organizada em camadas (controllers, services, repositories, models), seguindo boas práticas de desenvolvimento para garantir manutenção e escalabilidade do sistema. A aplicação está pronta para ser integrada com interfaces frontend modernas, proporcionando uma experiência de usuário completa e segura.

-- Adicionando chave estrangeira para OneToMany entre Pedido e Pagamento
ALTER TABLE public.pagamento
ADD COLUMN id_pedido bigint,
ADD CONSTRAINT fk_pagamento_pedido FOREIGN KEY (id_pedido) REFERENCES public.pedido(id_pedido);

-- Adicionando chave estrangeira para OneToMany entre Carrinho e Pedido
ALTER TABLE public.pedido
ADD COLUMN id_carrinho bigint,
ADD CONSTRAINT fk_pedido_carrinho FOREIGN KEY (id_carrinho) REFERENCES public.carrinho(id_carrinho);

-- Criando a tabela de junção para ManyToMany entre Carrinho e Papelaria
CREATE TABLE public.carrinho_papelaria (
    id_carrinho_fk bigint NOT NULL,
    id_papelaria_fk bigint NOT NULL,
    PRIMARY KEY (id_carrinho_fk, id_papelaria_fk),
    CONSTRAINT fk_carrinho_papelaria_carrinho FOREIGN KEY (id_carrinho_fk) REFERENCES public.carrinho(id_carrinho),
    CONSTRAINT fk_carrinho_papelaria_papelaria FOREIGN KEY (id_papelaria_fk) REFERENCES public.papelaria(id_papelaria)
);

-- Criando a tabela de junção para ManyToMany entre Carrinho e Livro
CREATE TABLE public.carrinho_livro (
    id_carrinho_fk bigint NOT NULL,
    id_livro_fk bigint NOT NULL,
    PRIMARY KEY (id_carrinho_fk, id_livro_fk),
    CONSTRAINT fk_carrinho_livro_carrinho FOREIGN KEY (id_carrinho_fk) REFERENCES public.carrinho(id_carrinho),
    CONSTRAINT fk_carrinho_livro_livro FOREIGN KEY (id_livro_fk) REFERENCES public.livro(id_livro)
);

-- Criando a tabela de junção para ManyToMany entre Livro e Autor
CREATE TABLE public.livro_autor (
    id_livro_fk bigint NOT NULL,
    id_autor_fk bigint NOT NULL,
    PRIMARY KEY (id_livro_fk, id_autor_fk),
    CONSTRAINT fk_livro_autor_livro FOREIGN KEY (id_livro_fk) REFERENCES public.livro(id_livro),
    CONSTRAINT fk_livro_autor_autor FOREIGN KEY (id_autor_fk) REFERENCES public.autor(id_autor)
);

-- -- Adicionando chave estrangeira para ManyToOne entre Pagamento e Pedido
-- ALTER TABLE public.pagamento
-- ADD CONSTRAINT fk_pagamento_pedido FOREIGN KEY (id_pedido) REFERENCES public.pedido(id_pedido);

-- -- Adicionando chave estrangeira para ManyToOne entre Pedido e Carrinho
-- ALTER TABLE public.pedido
-- ADD CONSTRAINT fk_pedido_carrinho FOREIGN KEY (id_carrinho) REFERENCES public.carrinho(id_carrinho);

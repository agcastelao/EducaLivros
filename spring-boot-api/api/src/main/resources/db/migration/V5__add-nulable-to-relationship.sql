-- Alterar as colunas de junção para NOT NULL nas tabelas de junção

-- Carrinho - Pedido (ManyToOne)
ALTER TABLE public.pedido
ALTER COLUMN id_carrinho SET NOT NULL;

-- Pagamento - Pedido (ManyToOne)
ALTER TABLE public.pagamento
ALTER COLUMN id_pedido SET NOT NULL;

-- -- Carrinho - Papelaria (ManyToMany)
-- ALTER TABLE public.carrinho_papelaria
-- ALTER COLUMN id_carrinho_fk SET NOT NULL,
-- ALTER COLUMN id_papelaria_fk SET NOT NULL;

-- -- Carrinho - Livro (ManyToMany)
-- ALTER TABLE public.carrinho_livro
-- ALTER COLUMN id_carrinho_fk SET NOT NULL,
-- ALTER COLUMN id_livro_fk SET NOT NULL;

-- Livro - Autor (ManyToMany)
ALTER TABLE public.livro_autor
ALTER COLUMN id_livro_fk SET NOT NULL,
ALTER COLUMN id_autor_fk SET NOT NULL;
CREATE SCHEMA public;

CREATE TABLE public.autor (
    id_autor bigint NOT NULL,
    nome_autor character varying(255) NOT NULL,
    sobrenome_autor character varying(255) NOT NULL
);

CREATE SEQUENCE public.autor_id_autor_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.autor_id_autor_seq OWNED BY public.autor.id_autor;


CREATE TABLE public.carrinho (
    id_carrinho bigint NOT NULL,
    quantidade_produto integer NOT NULL
);

CREATE SEQUENCE public.carrinho_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


CREATE TABLE public.cliente (
    id_cliente bigint NOT NULL,
    nome character varying(255) NOT NULL,
    sobrenome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    telefone character varying(255) NOT NULL,
    cpf character varying(255) NOT NULL
);


CREATE SEQUENCE public.cliente_id_cliente_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cliente_id_cliente_seq OWNED BY public.cliente.id_cliente;


CREATE TABLE public.endereco (
    id_endereco bigint NOT NULL,
    codigo_postal character varying(255) NOT NULL,
    estado character varying(255) NOT NULL,
    rua_nome character varying(255) NOT NULL,
    rua_complemento character varying(255) NOT NULL
);


CREATE SEQUENCE public.endereco_id_endereco_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.endereco_id_endereco_seq OWNED BY public.endereco.id_endereco;


CREATE TABLE public.livro (
    id_livro bigint NOT NULL,
    nome_livro character varying(255) NOT NULL,
    data_publicacao timestamp(6) without time zone NOT NULL,
    descricao_livro character varying(255) NOT NULL,
    avaliacao character varying(255) NOT NULL,
    estoque_produto character varying(255) NOT NULL
);


CREATE SEQUENCE public.livro_id_livro_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.livro_id_livro_seq OWNED BY public.livro.id_livro;



CREATE TABLE public.pagamento (
    id_pagamento bigint NOT NULL,
    data_pagamento date NOT NULL,
    forma_pagamento character varying(255) NOT NULL,
    pagamento_valido boolean NOT NULL
);


CREATE SEQUENCE public.pagamento_id_pagamento_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pagamento_id_pagamento_seq OWNED BY public.pagamento.id_pagamento;


CREATE TABLE public.papelaria (
    id_papelaria bigint NOT NULL,
    tipo character varying(255) NOT NULL,
    nome_produto character varying(255) NOT NULL,
    marca character varying(255) NOT NULL,
    estoque_papelaria integer NOT NULL
);


CREATE SEQUENCE public.papelaria_id_papelaria_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.papelaria_id_papelaria_seq OWNED BY public.papelaria.id_papelaria;


ALTER TABLE ONLY public.autor ALTER COLUMN id_autor SET DEFAULT nextval('public.autor_id_autor_seq'::regclass);


ALTER TABLE ONLY public.cliente ALTER COLUMN id_cliente SET DEFAULT nextval('public.cliente_id_cliente_seq'::regclass);


ALTER TABLE ONLY public.endereco ALTER COLUMN id_endereco SET DEFAULT nextval('public.endereco_id_endereco_seq'::regclass);


ALTER TABLE ONLY public.livro ALTER COLUMN id_livro SET DEFAULT nextval('public.livro_id_livro_seq'::regclass);


ALTER TABLE ONLY public.pagamento ALTER COLUMN id_pagamento SET DEFAULT nextval('public.pagamento_id_pagamento_seq'::regclass);


ALTER TABLE ONLY public.papelaria ALTER COLUMN id_papelaria SET DEFAULT nextval('public.papelaria_id_papelaria_seq'::regclass);


ALTER TABLE ONLY public.autor
    ADD CONSTRAINT autor_pkey PRIMARY KEY (id_autor);


ALTER TABLE ONLY public.carrinho
    ADD CONSTRAINT carrinho_pkey PRIMARY KEY (id_carrinho);


ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_cliente);


ALTER TABLE ONLY public.endereco
    ADD CONSTRAINT endereco_pkey PRIMARY KEY (id_endereco);


ALTER TABLE ONLY public.livro
    ADD CONSTRAINT livro_pkey PRIMARY KEY (id_livro);


ALTER TABLE ONLY public.pagamento
    ADD CONSTRAINT pagamento_pkey PRIMARY KEY (id_pagamento);


ALTER TABLE ONLY public.papelaria
    ADD CONSTRAINT papelaria_pkey PRIMARY KEY (id_papelaria);



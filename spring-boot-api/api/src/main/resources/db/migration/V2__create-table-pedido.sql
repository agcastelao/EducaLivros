CREATE TABLE public.pedido(
    id_pedido bigint NOT NULL,
    valor_total float NOT NULL,
    data_pedido date NOT NULL
);

CREATE SEQUENCE public.pedido_id_pedido_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.pedido_id_pedido_seq OWNED BY public.pedido_id_pedido

ALTER TABLE ONLY public.pedido ALTER COLUMN id_pedido SET DEFAULT nextval('public.pedido_id_pedido_seq'::regclass);

ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_pkey PRIMARY KEY (id_pedido);


CREATE TABLE livro_audit (
    id BIGSERIAL PRIMARY KEY,
    livro_id BIGINT NOT NULL,
    descricao_livro VARCHAR(255),
    estoque_produto VARCHAR(255),
    nome_livro VARCHAR(255),
    avaliacao VARCHAR(255),
    data_publicacao TIMESTAMP,
    operacao CHAR(1) NOT NULL,
    alterado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE OR REPLACE FUNCTION log_livro_changes() RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT') THEN
        INSERT INTO livro_audit (livro_id, descricao_livro, estoque_produto, nome_livro, avaliacao, data_publicacao, operacao)
        VALUES (NEW.id_livro, NEW.descricao_livro, NEW.estoque_produto, NEW.nome_livro, NEW.avaliacao, NEW.data_publicacao, 'I');
        RETURN NEW;
    ELSIF (TG_OP = 'UPDATE') THEN
        INSERT INTO livro_audit (livro_id, descricao_livro, estoque_produto, nome_livro, avaliacao, data_publicacao, operacao)
        VALUES (NEW.id_livro, NEW.descricao_livro, NEW.estoque_produto, NEW.nome_livro, NEW.avaliacao, NEW.data_publicacao, 'U');
        RETURN NEW;
    ELSIF (TG_OP = 'DELETE') THEN
        INSERT INTO livro_audit (livro_id, descricao_livro, estoque_produto, nome_livro, avaliacao, data_publicacao, operacao)
        VALUES (OLD.id_livro, OLD.descricao_livro, OLD.estoque_produto, OLD.nome_livro, OLD.avaliacao, OLD.data_publicacao, 'D');
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER livro_changes_trigger
AFTER INSERT OR UPDATE OR DELETE ON livro
FOR EACH ROW EXECUTE FUNCTION log_livro_changes();

-- Criação da tabela de auditoria
CREATE TABLE autor_audit (
    id SERIAL PRIMARY KEY,
    autor_id BIGINT NOT NULL,
    nome_autor VARCHAR(255),
    sobrenome_autor VARCHAR(255),
    operacao CHAR(1), -- 'I' para Insert, 'U' para Update, 'D' para Delete
    alterado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da trigger que logará operações de INSERT, UPDATE e DELETE na tabela autor
CREATE OR REPLACE FUNCTION log_autor_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO autor_audit (autor_id, nome_autor, sobrenome_autor, operacao)
        VALUES (NEW.id_autor, NEW.nome_autor, NEW.sobrenome_autor, 'I');
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO autor_audit (autor_id, nome_autor, sobrenome_autor, operacao)
        VALUES (NEW.id_autor, NEW.nome_autor, NEW.sobrenome_autor, 'U');
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO autor_audit (autor_id, nome_autor, sobrenome_autor, operacao)
        VALUES (OLD.id_autor, OLD.nome_autor, OLD.sobrenome_autor, 'D');
        RETURN OLD;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Vinculando a trigger à tabela autor
CREATE TRIGGER autor_changes_trigger
AFTER INSERT OR UPDATE OR DELETE ON autor
FOR EACH ROW EXECUTE FUNCTION log_autor_changes();


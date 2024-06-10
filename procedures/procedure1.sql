CREATE PROCEDURE calcular_total_estoque()
BEGIN
    DECLARE total_estoque INT;

    SELECT SUM(estoque_produto) + SUM(estoque_papelaria) INTO total_estoque
    FROM (
        SELECT estoque_produto AS estoque_produto, 0 AS estoque_papelaria FROM livro
        UNION ALL
        SELECT 0 AS estoque_produto, estoque_papelaria AS estoque_papelaria FROM papelaria
    ) AS total;

    SELECT total_estoque AS total_estoque;
END;

CREATE PROCEDURE calcular_quantidade_produtos_vendidos()
BEGIN
    SELECT p.nome_produto, SUM(pp.quantidade_vendida) AS quantidade_total_vendida
    FROM pedido_produto AS pp
    JOIN (
        SELECT id_livro AS id_produto, nome_livro AS nome_produto FROM livro
        UNION ALL
        SELECT id_papelaria AS id_produto, nome_produto FROM papelaria
    ) AS p ON pp.id_produto = p.id_produto
    GROUP BY p.nome_produto;
END;

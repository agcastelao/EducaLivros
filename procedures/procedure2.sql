CREATE PROCEDURE calcular_total_livros_por_autor()
BEGIN
    SELECT a.nome_autor, a.sobrenome_autor, COUNT(l.id_livro) AS total_livros
    FROM autor AS a
    JOIN autor_livro al ON a.id_autor = al.id_autor
    JOIN livro l ON al.id_livro = l.id_livro
    GROUP BY a.nome_autor, a.sobrenome_autor;
END;

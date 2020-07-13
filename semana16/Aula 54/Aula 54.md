### Exercício 01
A) uma chave estrangeira é uma ligação entre uma tabela e outra.
C) Diz que a FOREIGN KEY falhou
E) diz que não pode apagar pois teve um erro na foreign key

### Exercício 02
A) é uma tabela que vai linkar os atores com os filmes

### Exercício 03
A) diz para juntar o Rating com o movie.id

### Exercício 04
A) SELECT m.id, m.name, r.rate, r.comment FROM Movie m LEFT JOIN Rating r ON m.id = r.movie_id
B) SELECT m.id, m.name, mc.actor_id FROM Movie m RIGHT JOIN MovieCast mc ON mc.movie_id = m.id
C) SELECT AVG(r.rate), m.id, m.name FROM Movie m LEFT JOIN Rating r ON m.id = r.movie_id GROUP BY (m.id)

### Exercício 05
A) é utilizado dois join pois queremos juntar 3 tabelas.
B) SELECT m.id, m.name, a.id, a.name FROM Movie m LEFT JOIN MovieCast mc ON m.id = mc.movie_id JOIN Actor a ON a.id = mc.actor_id
C) A query que está escrita no notion está errada.
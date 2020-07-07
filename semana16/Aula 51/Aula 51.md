### Exercício 01
A) VARCHAR representa uma string (vários caracteres em uma única variável), e DATE representa uma data.
B) SHOW DATABASES mostra quais banco de dados eu possuo naquela conexão, e show tables mostra as tabelas criadas.
C) O comando Describe Actor nos mostra uma descrição dos tipos de variáveis utilizados nas colunas dos tipos, e se elas podem ser nulos ou não.

### Exercício 02
Adicionado todos os atores.

### Exercício 03
A) SELECT * from Actor WHERE gender = "female"
B) SELECT Salary from Actor where name = "Tony Ramos"
C) Mostrou todos como null, pois não achou um resultado "invalid"
D) SELECT * from Actor where salary <= 500000
E) O erro diz que não existe nenhuma coluna "nome"

### Exercício 04
A) Pesquisa por atores que tem as letras A e J, e o salário seja MAIOR que 300000
B) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000
C) SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%"
D) SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000

### Exercício 06
A) SELECT id, title, rating FROM Movie WHERE id = "002"
B) SELECT * FROM Movie WHERE name = "Doce mãe";
C) SELECT id, title, synopsis FROM Movie WHERE valuation > 7;

### Exercício 07
A) SELECT * FROM Movie WHERE title LIKE "%vida%";
B) SELECT * FROM Movie WHERE title LIKE "%mãe%" OR sinopse LIKE "menino"
C) SELECT * FROM MOVIE WHERE launchDate < "2020-07-06";
D) SELECT * FROM MOVIE WHERE release_date < "2020-07-06" AND (title LIKE "%mãe%" OR synopsis LIKE "%menino%") AND rating > 7;
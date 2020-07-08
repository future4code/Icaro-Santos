### Exercício 01
A) Remove a coluna salário
B) Muda o nome da coluna gender para sex
C) Altera a coluna gender para VARCHAR(255)
D) ALTER TABLE Actor CHANGE gender gender VARCHAR(100)

### Exercício 02
A) UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10" WHERE id = "003"
B) UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PÃES";
D) Diz que fez a query, mas não mudou após eu verificar o select.

### Exercício 03
Feito

### Exercício 04
A) SELECT MAX(salary) FROM Actor
B) SELECT MIN(salary) FROM Actor WHERE gender = "female"
C) SELECT COUNT(*) FROM Actor WHERE gender = "female"
D) SELECT COUNT(*) FROM Actor WHERE gender = "female"

## Exercício 05
A) Contador dos atores, e outra coluna para os generos (também dos atores), e é agrupado pelo gênero.
B) SELECT id, name FROM Actor ORDER BY name DESC
C) SELECT * FROM Actor ORDER BY salary
D) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3
E) SELECT AVG(salary), gender FROM Actor GROUP BY gender

### Exercício 06
Feito

### Exercício 07
A) 2
B) 8.33
C) 1
D) 3
E) 10
F) 7

### Exercício 08
Feito
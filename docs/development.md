## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

## Requisitos Não-Funcionais
| ID  | Descrição  | Responsável | Artefato Criado |
| -------- | -------- | -------- |
| RNF01  | A interface do usuário deve ser intuitiva, sendo fácil de operar mesmo para pessoas sem familiaridade com tecnologia                                               | Fulano  | index.html
| RNF02  | O sistema deve ser responsivo, garantindo que a interface do usuário se adapte de forma fluida e sem distorções a qualquer tamanho de tela                         | Fulano  | index.html
| RNF03  | O sistema deve ter um design visual atraente, utilizando uma paleta de cores harmoniosa, tipografia legível e uma interface que promova uma experiência positiva   | Fulano  | index.html
| RNF04  | O sistema deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge) e suas versões mais recentes                                           | Fulano  | index.html
| RNF05  | O sistema deve ser capaz de processar e responder a todas as solicitações dos usuários em até 3 segundos                                                           | Fulano  | index.html

## Requisitos Funcionais
| ID  | Descrição  | Responsável | Artefato Criado |
| -------- | -------- | -------- |
| RF01  | Cadastrar usuário na plataforma                                                      | Fulano  | index.html
| RF02  | Permitir que um usuário cadastrado se autentique                                     | Fulano  | index.html
| RF03  | Exibir formulário para inserção dos dados do usuário                                 | Fulano  | index.html
| RF04  | Possibilitar a edição dos campos do formulário                                       | Fulano  | index.html
| RF05  | Calcular IMC, TMB e GET a partir dos dados preenchidos                               | Fulano  | index.html
| RF06  | Orientar quantidade ideal de água que o usuário deve consumir diariamente            | Fulano  | index.html
| RF07  | Recomendar quantidade e tipo de exercícios baseado nos dados inseridos               | Fulano  | index.html
| RF08  | Recomendar distribuição de macronutrientes baseado nos dados inseridos               | Fulano  | index.html
| RF10  | Exibir modais de ajuda explicando termos técnicos como FAT, IMC, TMB e GET           | Fulano  | index.html
| RF11  | Ter persistência dos dados informados e gerados, associando ao usuário autenticado   | Fulano  | index.html

## Descrição das estruturas:

## Perfil de Usuário
|  **Nome**      | **Tipo**          | **Descrição**                              | **Exemplo**                  |
|:--------------:|-------------------|--------------------------------------------|------------------------------|
| Id             | Texto             | Identificador único do usuário             | X5vsnZsKaJgKSP6b7I84jr45vA03 |
| Activity       | Texto             | Nível de atividade física do usuário       | Ativo                        |
| Gender         | Texto             | Gênero do usuário                          | Masculino                    |
| Height         | Texto             | Altura do usuário                          | 185cm                        |
| Weight         | Texto             | Peso do usuário                            | 75kg                         |
| IMC            | Texto             | Indice de Massa Corporal do usuário        | 21.91                        |
| GET            | Texto             | Taxa Basal Metabólica do usuário           | 1924.32                      |

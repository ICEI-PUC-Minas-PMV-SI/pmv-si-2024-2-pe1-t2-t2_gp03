# **Documentação de Testes**

## **Descrição do Projeto**
Este projeto visa fornecer aos usuários ferramentas para monitorar e gerenciar informações de saúde e nutrição. A aplicação inclui funcionalidades como cálculo de IMC, TMB, GET, orientações sobre hidratação, macronutrientes e atividades físicas, além de recomendações nutricionais gerais.  

---

## **Tipos de Testes**

### **Teste de Software**
- **Objetivo**: Verificar a conformidade do software com os requisitos funcionais e não funcionais utilizando a abordagem de caixa preta.

### **Teste de Usabilidade**
- **Objetivo**: Avaliar a experiência do usuário com a aplicação, medindo taxa de sucesso, satisfação subjetiva e tempo para conclusão de tarefas.

---

## **Teste de Software**

### **Plano de Testes**

| **Caso de Teste**       | **Procedimento**                                                                                           | **Requisitos Associados** | **Resultado Esperado**                        |
|--------------------------|----------------------------------------------------------------------------------------------------------|----------------------------|-----------------------------------------------|
| **CT01 - Cadastrar Usuário** | 1) Acesse a página de cadastro. <br> 2) Preencha os campos obrigatórios (nome, e-mail, senha). <br> 3) Clique no botão "Cadastrar". | RF01                       | Usuário cadastrado com sucesso.              |
| **CT02 - Login no Sistema**  | 1) Acesse a página de login. <br> 2) Insira o e-mail e senha cadastrados. <br> 3) Clique no botão "Entrar". | RF02                       | Usuário autenticado e redirecionado.         |
| **CT03 - Inserção de Dados** | 1) Acesse o formulário de perfil. <br> 2) Insira informações (gênero, idade, peso, altura, FAT). <br> 3) Clique em "Salvar". | RF03, RF04                 | Dados salvos e cálculos realizados.          |
| **CT04 - Cálculo do IMC**    | 1) Complete o formulário de perfil. <br> 2) Clique em "Calcular IMC".                                | RF05                       | Exibição do IMC e classificação correspondente. |
| **CT05 - Recomendação de Água** | 1) Preencha o perfil do usuário. <br> 2) Acesse a aba de hidratação.                                | RF06                       | Quantidade ideal de água exibida.            |

### **Registro dos Testes de Software**

| **Caso de Teste**       | **Requisito Associado**         | **Evidência**                                                                                                |
|--------------------------|---------------------------------|--------------------------------------------------------------------------------------------------------------|
| **CT01 - Cadastrar Usuário** | RF01                           | [Vídeo de Teste](https://linkexemplo.com/ct01).                                                              |
| **CT02 - Login no Sistema**  | RF02                           | [Vídeo de Teste](https://linkexemplo.com/ct02).                                                              |
| **CT03 - Inserção de Dados** | RF03, RF04                    | [Vídeo de Teste](https://linkexemplo.com/ct03).                                                              |
| **CT04 - Cálculo do IMC**    | RF05                           | [Vídeo de Teste](https://linkexemplo.com/ct04).                                                              |
| **CT05 - Recomendação de Água** | RF06                           | [Vídeo de Teste](https://linkexemplo.com/ct05).                                                              |

### **Avaliação dos Testes de Software**
Os testes realizados confirmaram a funcionalidade esperada para os principais requisitos.  

**Pontos fortes identificados:**
- Processamento rápido para cálculos e exibição de resultados.
- Interface intuitiva para preenchimento do perfil.  

**Pontos fracos identificados:**
- Mensagens de erro genéricas em caso de falha na autenticação.
- Falta de validação robusta para campos numéricos (ex.: altura, peso).  

**Ações futuras:**
- Melhorar as mensagens de erro para torná-las mais informativas.
- Implementar validação nos formulários para evitar entradas inválidas.

---

## **Testes de Usabilidade**

### **Cenários de Teste**

| **Nº do Cenário** | **Descrição**                                                                                       |
|--------------------|---------------------------------------------------------------------------------------------------|
| **Cenário 1**      | O usuário deseja calcular seu IMC e verificar a classificação correspondente.                     |
| **Cenário 2**      | O usuário deseja calcular seu GET e obter a recomendação de calorias diárias.                     |
| **Cenário 3**      | O usuário deseja receber recomendações sobre a distribuição de macronutrientes.                   |
| **Cenário 4**      | O usuário deseja consultar a quantidade de água recomendada com base em seu perfil.               |

### **Registro dos Testes de Usabilidade**

#### **Cenário 1: Calcular IMC**
| **Usuário** | **Taxa de Sucesso** | **Satisfação Subjetiva** | **Tempo para Conclusão** |
|-------------|----------------------|--------------------------|--------------------------|
| Usuário 1   | SIM                  | 5                        | 20 segundos              |
| Usuário 2   | SIM                  | 4                        | 25 segundos              |
| Usuário 3   | SIM                  | 5                        | 18 segundos              |

**Comentários dos usuários:** "O processo é claro e intuitivo. Apenas demorou um pouco para carregar os resultados."  

#### **Cenário 2: Calcular GET**
| **Usuário** | **Taxa de Sucesso** | **Satisfação Subjetiva** | **Tempo para Conclusão** |
|-------------|----------------------|--------------------------|--------------------------|
| Usuário 1   | SIM                  | 4                        | 30 segundos              |
| Usuário 2   | SIM                  | 5                        | 22 segundos              |
| Usuário 3   | SIM                  | 4                        | 28 segundos              |

**Comentários dos usuários:** "Seria interessante explicar mais sobre o conceito de GET no mesmo local do cálculo."  

### **Avaliação dos Testes de Usabilidade**
Os resultados mostram que a aplicação atende às expectativas dos usuários quanto à execução de tarefas principais.  

- **Taxa de Sucesso**: 100% em todos os cenários.
- **Satisfação Subjetiva**: Média de 4.5/5.  
- **Tempo de Conclusão**: Dentro do esperado, mas há espaço para melhorias no carregamento de algumas funções.  

**Ações futuras:**
- Adicionar explicações visuais e interativas sobre conceitos técnicos como IMC, TMB e GET.
- Otimizar o desempenho de cálculos para melhorar o tempo de resposta.

# **Documentação de Testes**

## **Descrição do Projeto**
Este projeto visa fornecer aos usuários ferramentas para monitorar e gerenciar informações de saúde e nutrição. A aplicação inclui funcionalidades como cálculo de IMC, TMB, GET, orientações sobre hidratação, macronutrientes e atividades físicas, além de recomendações nutricionais gerais.  

---

## **Tipos de Testes**

### **Teste de Software**
- **Objetivo**: Verificar a conformidade do software com os requisitos funcionais e não funcionais utilizando a abordagem de caixa preta.

Utilizamos o **Jest** como framework de testes para validar as funcionalidades do projeto. Para rodar os testes:

- Comando básico:
```bash
npx jest
```

Para obter mais detalhes, incluindo o tempo de execução de cada teste:

```bash
Copiar código
npx jest --verbose
```

### **Teste de Usabilidade**
- **Objetivo**: Avaliar a experiência do usuário com a aplicação, medindo taxa de sucesso, satisfação subjetiva e tempo para conclusão de tarefas.

---

## **Teste de Software**

### **Plano de Testes**

| **Caso de Teste**                  | **Procedimento**                                                                                                                                                      | **Resultado Esperado**                                     | **Requisitos Associados**       |
|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|----------------------------------|
| **CT01 - Seleção de Gênero**        | 1) Acesse o formulário de perfil. <br> 2) Selecione uma das opções de gênero.                                                                                        | O gênero correto deve ser identificado e processado.       | RF03, RF04                      |
| **CT02 - Cálculo de IMC**           | 1) Preencha o peso e altura. <br> 2) Clique no botão "Calcular".                                                                                                     | O IMC deve ser exibido corretamente, com classificação.    | RF03, RF05                      |
| **CT03 - Cálculo de TMB**           | 1) Preencha o perfil com idade, gênero e peso. <br> 2) Clique no botão "Calcular TMB".                                                                              | O TMB deve ser calculado corretamente.                     | RF03, RF05                      |
| **CT04 - Cálculo de GET**           | 1) Escolha um nível de atividade física. <br> 2) Clique no botão "Calcular GET".                                                                                    | O GET deve ser exibido corretamente.                       | RF03, RF05                      |
| **CT05 - Salvamento de Dados**      | 1) Preencha o perfil e clique no botão "Salvar".                                                                                                                    | Os dados devem ser salvos no localStorage.                 | RF11, RF03, RF04                |
| **CT06 - Interface Atualizada**     | 1) Execute uma operação (IMC, TMB, GET). <br> 2) Verifique os resultados exibidos na interface.                                                                     | Os valores devem aparecer corretamente no DOM.             | RF03, RF05, RF10                |


### **Resultados Recentes**

Com base na última execução dos testes com Jest, obtivemos os seguintes resultados:

| Test Suite              | Teste                                         | Tempo (ms) |
|-------------------------|-----------------------------------------------|------------|
| **processInfo.test.js**  | deve selecionar o gênero corretamente         | 49         |
|                         | deve ler corretamente a altura e o peso       | 9          |
|                         | deve selecionar corretamente a atividade física | 13         |
|                         | deve calcular corretamente o IMC              | 7          |
|                         | deve calcular corretamente o TMB              | 11         |
|                         | deve calcular corretamente o GET              | 6          |
| **result.test.js**       | deve incrementar o número corretamente        | 7          |
|                         | alternar visibilidade do elemento             | 3          |
|                         | preencher resultados no DOM                   | 5          |
| **new-profile.test.js**  | changeWeight deve alterar peso no display     | 1          |
|                         | changeHeight deve alterar altura no display   | 1          |
|                         | calcular IMC                                  | 1          |
|                         | calcular TMB para homens                      | 1          |
|                         | calcular TMB para mulheres                    | 1          |
|                         | calcular GET                                  | 1          |


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

Por outro lado, foi observada uma diferença significativa no tempo médio de conclusão entre usuários e especialistas. Embora essa discrepância seja natural devido ao maior conhecimento prévio do especialista sobre a interface e os processos, alguns participantes relataram dificuldades em localizar informações e compreender termos técnicos, especialmente no cálculo de GET e na distribuição de macronutrientes.

#### **Principais Oportunidades de Melhoria**
- **Mensagens de Ajuda:** Incluir explicações breves diretamente na interface para conceitos técnicos, como GET e TMB, para facilitar a compreensão durante o uso.
- **Carregamento de Resultados:** Otimizar o tempo de exibição dos cálculos para uma experiência mais fluida e ágil.
- **Design de Navegação:** Ajustar o posicionamento de botões e elementos visuais para tornar as ações mais intuitivas e rápidas.

Apesar das oportunidades de melhoria identificadas, a aplicação apresentou um desempenho sólido, sendo considerada intuitiva e eficaz na realização de suas funcionalidades principais. Os ajustes sugeridos podem contribuir para melhorar ainda mais a experiência do usuário.


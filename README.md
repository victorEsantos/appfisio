# Sistema de Gerenciamento de Clínica de Fisioterapia

# ****1 Introdução****

**1.1 Objetivo deste documento**

Neste documento são apresentado a especificação e evidências de implementação de uma “Inteligência Artificial Assistente” nomeada como **“Nora”**, esta classifica os melhores procedimentos aplicados em pacientes diante de todos os resultados registrados em banco de dados, retornando o procedimento mais eficaz a ser utilizado nas sessões de tratamento do paciente avaliado. 

Neste projeto, temos como objetivo desenvolver a “Nora” com o algoritimo de rede neural Multi-Layer, aplicando o treinamento backpropagation. 

# Requisitos

### Funcionais

**→RF_001:** A captura deve ser diante de tratamentos cadastrados no sistema.

→**RF_002:** Base de dados previamente populada.

→**RF_003:** IA deve processar as patologias do paciente e retornando os tratamentos qualificados.

### Não funcionais

**RNF_001:** Treinamento com rede neural

**RNF_002:** Utilização de python ou java

**RNF_003:** A IA deve ser capaz de produzir resultados  confiáveis

**RNF_004:** Deve ter uma manutenção fácil

**RNF_005:** Se adaptar a novos dados na base 

---

# Diagrama de classe

![DRE -_  CRV - Centro Integrado de Fisioterapia.drawio.png](https://github.com/victorEsantos/appfisio/blob/main/DRE%20-_%20%20CRV%20-%20Centro%20Integrado%20de%20Fisioterapia.drawio.png?raw=true)

# Tecnologias utilizadas

Para popular a base de dados para o projeto principal temos outros dois projetos auxiliares

### FrontEnd

Projeto em angular utilizado como interface para cadastro de formularios

### BackEnd

Projeto Java utilizado para comunicação com a base de dados, salvando-os para manipularmos posteriormente.

### Banco de dados

Banco de dados relacional PostgreSQL

### Inteligência artificial

Iremos utilizar java ou python

## Boas práticas

- Clean code
    - SOLID
    - DRY code
- Criação de testes unitarios com framework
- Banco de dados Dockerizado

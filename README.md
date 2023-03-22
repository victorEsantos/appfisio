# Sistema de Gerenciamento de Clínica de Fisioterapia

O sistema contém diversos cadastros e listagens de dados agrupados em linhas dentro de tabelas. Os dados são agrupados em conjuntos que formam informações, estas são:

→ Paciente - presente em todo o sistema.

→ Funcionário - em grande maioria fisioterapeuta.

→ Procedimentos - musculação, pilates, fortalecimentos (…).

→ Avaliação - onde é avaliado a condição atual do paciente bem como sua dores referente a lesão.

→ Evolução - somente existe diante de uma avaliação.

## Requisitos funcionais e não funcionais

### Requisitos funcionais


⇒ RF_001: Deve ser possível cadastrar funcionários.

⇒ RF_002: Deve ser possível cadastrar pacientes.

⇒ RF_003: Os sistema deve conter listagens para todos os tipos de cadastro associados ao paciente e funcionários.

⇒ RF_004: Cadastro das avaliações diante da listagem e seleção de um paciente.

⇒ RF_005: Cadastro das evoluções diante da listagem e seleção de uma avaliação relacionada a um paciente.

⇒ RF_006: Associações entre avaliações e evoluções com o funcionário e paciente da operação.

⇒ RF_007: Roles para separar acessos no sistema entre operantes do sistema.

⇒ RF_008: Login e Cadastro de usuário do sistema.

⇒ RF_009: Validação na autenticação com token de 18 horas 



### Requisitos não funcionais

⇒ RNF_001: Cadastro, listagem ou vínculo de procedimentos de serviço.

⇒ RNF_002: Validação externa com identificação de terceiros referente ao convênio.

⇒ RNF_003: Somatória de todos os cliente ativos, avaliações e evoluções.

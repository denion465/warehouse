# Entities
### Product
- ID
- NAME
- DESCRIPTION
- SKU
- BRAND
- QUANTITY (TOTAL)
- MEASURE UNIT

### Intake
- ID
- PRODUCT
- QUANTITY (RECEBIDA)
- SUPPLIER
- BATCH
- DATE

### Write-off
- ID
- PRODUCT
- QUANTITY (SÁIDA)
- DATE
- WITHDRAWAL REASON
- OBSERVATIONS

### Supplier
- ID
- NAME
- EMAIL
- ADDRESS
- PHONES: []
- OBSERVATIONS

### User
- NAME
- USERNAME
- PASSWORD
- EMAIL
- CREATED_AT
- UPDATED_AT

# Use cases
- Cadastrar um produto
- Dar entrada a um produto
- Dar baixa a um produto
- Cadastrar um fornecedor (Somente administrador terá permissões)
- Cadastrar usúario do sistema



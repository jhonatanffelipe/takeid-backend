/**
 * @swagger
 * tags:
 *   - name: employees
 *     description: Endpoints de colaboradores
 */

/**
 * @swagger
 * /employees:
 *   get:
 *     tags: [employees]
 *     summary: Lista todos os colaboradores
 *     responses:
 *       200:
 *         description: Lista de colaboradores
 *   post:
 *     tags: [employees]
 *     summary: Cria um novo colaborador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               position:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Colaborador criado
 */

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     tags: [employees]
 *     summary: Busca colaborador por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do colaborador
 *   put:
 *     tags: [employees]
 *     summary: Atualiza colaborador
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               position:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       204:
 *         description: Colaborador atualizado
 *   delete:
 *     tags: [employees]
 *     summary: Remove colaborador
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Colaborador removido
 */

/**
 * @swagger
 * tags:
 *   - name: signatures
 *     description: Endpoints de assinaturas
 */

/**
 * @swagger
 * /signatures:
 *   get:
 *     tags: [signatures]
 *     summary: Lista todas as assinaturas
 *     responses:
 *       200:
 *         description: Lista de assinaturas
 *   post:
 *     tags: [signatures]
 *     summary: Cria uma nova assinatura
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employee_id:
 *                 type: integer
 *               signed_at:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Assinatura criada
 */

/**
 * @swagger
 * /signatures/all/{employee_id}:
 *   get:
 *     tags: [signatures]
 *     summary: Lista todas as assinaturas de um colaborador
 *     parameters:
 *       - in: path
 *         name: employee_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de assinaturas do colaborador
 */

/**
 * @swagger
 * /signatures/{id}:
 *   get:
 *     tags: [signatures]
 *     summary: Busca assinatura por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados da assinatura
 *   put:
 *     tags: [signatures]
 *     summary: Atualiza assinatura
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               employee_id:
 *                 type: integer
 *               signed_at:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       204:
 *         description: Assinatura atualizada
 *   delete:
 *     tags: [signatures]
 *     summary: Remove assinatura
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Assinatura removida
 */

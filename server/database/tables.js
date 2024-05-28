// Importez les modules de dépôt responsables de la manipulation des opérations de données sur les tables
const ItemRepository = require("./models/ItemRepository");
const CategoryRepository = require("./models/CategoryRepository");
const ProgramRepository = require("./models/ProgramRepository");

// Créez un objet vide pour contenir les dépôts de données pour différentes tables
const tables = {};

/* ************************************************************************* */
// Enregistrez les dépôts de données pour les tables
/* ************************************************************************* */

// Enregistrez chaque dépôt comme point d'accès aux données pour sa table
tables.item = new ItemRepository();
tables.category = new CategoryRepository();
tables.program = new ProgramRepository();

/* ************************************************************************* */

// Utilisez un Proxy pour personnaliser les messages d'erreur lors de la tentative d'accès à une table non existante

// Exportez l'instance Proxy avec une gestion d'erreur personnalisée
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Vérifiez si la propriété (table) existe dans l'objet tables
    if (prop in obj) return obj[prop];

    // Si la propriété (table) n'existe pas, lancez une ReferenceError avec un message d'erreur personnalisé
    throw new ReferenceError(
      `tables.${prop} n'est pas défini. L'avez-vous enregistré dans ${__filename}?`
    );
  },
});
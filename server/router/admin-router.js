const express = require("express");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
 
const router = express.Router();

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);


  router.route("/users/:id")
  .get(
    // Ensure authMiddleware, adminMiddleware, and adminController.getUserById are functions
    typeof authMiddleware === 'function' && typeof adminMiddleware === 'function' && typeof adminController.getUserById === 'function'
    ? [authMiddleware, adminMiddleware, adminController.getUserById] // If they are functions, use them as middleware
    : (req, res, next) => { // Otherwise, return a middleware function that throws an error
        const error = new Error('Middleware or controller is not a function');
        error.statusCode = 500;
        next(error);
    }
  );

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

module.exports = router;
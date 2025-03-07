
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValidation } from './project.validation';
import { ProjectControllers } from './project.controller';

// import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();


// Creat Project Data Route
// router.post(
//     '/create-project',
//     upload.single('file'),
//     (req: Request, res: Response, next: NextFunction) => {
//         req.body = JSON.parse(req.body.data);
//         next();
//     },
//     validateRequest(ProjectValidation.createProjectValidation),
//     ProjectControllers.createProject
// );


router.post(
    '/create-project',
    validateRequest(ProjectValidation.createProjectValidation),
    ProjectControllers.createProject
);


// All Data get of Project Route
router.get('/', ProjectControllers.getAllProject);


// Single Project data get Route
router.get("/:id", ProjectControllers.getSingleProject)



// Update Project Route
router.patch(
    '/:id',
    // upload.single('file'),
    // (req: Request, res: Response, next: NextFunction) => {
    //     req.body = JSON.parse(req.body.data);
    //     next();
    // },
    validateRequest(ProjectValidation.updateProjectValidation),
    ProjectControllers.updateProject,
);


// Delete Project Route
router.delete(
    '/:id',  ProjectControllers.deleteProject,
);




export const ProjectRoutes = router;
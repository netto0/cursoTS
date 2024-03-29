import { Router, Request, Response } from "express";
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";


const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working!");
  })
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id", getMovieById)
  .get("/movie", getAllMovies)
  .delete("/movie/:id", deleteMovie)
  .patch("/movie/:id", movieCreateValidation(), validate, updateMovie)

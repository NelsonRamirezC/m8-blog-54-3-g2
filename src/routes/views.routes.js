import express from "express";

const router = express.Router();

//VISTA HOME
router.get(["/"], (req, res) => {
    try {

        res.render("home");

    } catch (error) {
        console.log(error);
        res.render("home");
    }
});


export default router;

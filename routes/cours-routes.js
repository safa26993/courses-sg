const express = require("express");
const router = express.Router();
const Cours = require("../models/Cours");
const { check, validationResult } = require("express-validator");

// home page route
router.get("/", (req, res) => {
  res.render("cours/home");
});

// lang page route
router.get("/lang", (req, res) => {
  res.render("cours/lang");
});

//index route
router.get("/index", (req, res) => {
  Cours.find()
    .then((result) => {
      res.render("cours/index", {
        courses: result,
        message: req.flash("info"),
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//create new lesson
router.get("/create", (req, res) => {
  res.render("cours/create", {
    //   errors: false
    errors: req.flash("errors"),
  });
});

//save lesson to db
router.post(
  "/create",
  [check("title")
    .isLength({ min: 5 })
    .withMessage("Titel should be more than 5 char"),
  check("content")
    .isLength({ min: 50 })
    .withMessage("Lesson should be more than 50 char"),
  check("level")
    .isLength({ min: 6 })
    .withMessage("level should be more than 5 char"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      req.flash("errors", errors.array());
      res.redirect("/cours/create");
    } else {
      let newCours = new Cours({
        title: req.body.title,
        content: req.body.content,
        level: req.body.level,
      });
      newCours.save((err) => {
        if (!err) {
          console.log("lesson was added");
          req.flash("info", "The lesson was created successfuly !");
          res.redirect("/cours");
        } else {
          console.log(err);
        }
      });
    }
  }
);

//show page
router.get("/:id", async (req, res) => {
  try {
    const courses = await Cours.find();
    const cours = courses.find((course) => course.id === req.params.id);

    res.render("cours/show", {
      cours,
      courses,
      message: req.flash("info"),
    });
  } catch (err) {
    console.log(err);
  }
});

//edit route
router.get("/edit/:id", (req, res) => {
  Cours.findOne({ _id: req.params.id }, (err, cours) => {
    if (!err) {
      res.render("cours/edit", {
        cours: cours,
        errors: req.flash("errors"),
        message: req.flash("info"),
      });
    } else {
      console.log(err);
    }
  });
});

//update form
router.post(
  "/update",
  [
    check("title")
      .isLength({ min: 5 })
      .withMessage("Titel should be more than 5 char"),
    check("level")
      .isLength({ min: 5 })
      .withMessage("Level should be more than 5 char"),
    check("content")
      .isLength({ min: 5 })
      .withMessage("Cours content should be more than 50 char"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash("errors", errors.array());
      res.redirect("/cours/edit/" + req.body.id);
    } else {
      // create object
      let newfeilds = {
        title: req.body.title,
        level: req.body.level,
        content: req.body.content,
      };
      let query = { _id: req.body.id };

      Cours.updateOne(query, newfeilds, (err) => {
        if (!err) {
          req.flash("info", " The lesson was updated successfuly !"),
            res.redirect("/cours/edit/" + req.body.id);
        } else {
          console.log(err);
        }
      });
    }
  }
);

//delete
router.delete("/delete/:id", (req, res) => {
  let query = { _id: req.params.id };

  Cours.deleteOne(query, (err) => {
    if (!err) {
      res.status(200).json("deleted");
    } else {
      res.status(404).json("There was an error . lesson was not deleted");
    }
  });
});

module.exports = router;

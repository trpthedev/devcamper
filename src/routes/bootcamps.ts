import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Show bootcamps",
  });
});

router.get("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Show bootcamp with id: " + req.params.id,
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Create bootcamps",
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Update id with id: " + req.params.id,
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Delete id with id: " + req.params.id,
  });
});

export default router;

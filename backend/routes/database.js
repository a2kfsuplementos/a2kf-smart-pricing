const express = require("express");
const router = express.Router();

const supabase = require("../config/supabase");

router.get("/", async (req, res) => {

    try {

        const { error } = await supabase
            .from("products")
            .select("*")
            .limit(1);

        if (error) {
            return res.status(500).json({
                status: "erro",
                message: error.message
            });
        }

        return res.json({
            status: "online",
            database: "conectado"
        });

    } catch (err) {

        return res.status(500).json({
            status: "erro",
            message: err.message
        });

    }

});

module.exports = router;

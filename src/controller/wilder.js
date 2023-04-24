module.exports = {
    // Create a new wilder
    create: (req, res) => {
        dataSource
            .getRepository
            .save(req.body)
            .then(() => {
                res.send ("hello from wilder controller");
            })
            .catch(() => {
                res.send("Error while creating wilder");
            });
        },
    };

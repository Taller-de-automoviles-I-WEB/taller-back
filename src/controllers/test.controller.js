module.exports = {
    test: (req, res) => {
        const data = "Database info"
        const RESPONSE = {
            meta: 200,
            data
        }
        return res.status(200).json(RESPONSE)
    }
}
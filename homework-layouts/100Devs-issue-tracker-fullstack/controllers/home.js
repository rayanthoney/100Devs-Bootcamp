const TicketList = require('../models/ticketlist')

module.exports = {
    getIndex : async (req, res) => {
        try {
            const tickets = await
            TicketList.find()
            res.render("index.ejs", { ticketList: tasks });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    createTicket: async (req, res) => {
        const newTicket = new TicketList(
            {
                subject: req.body.subject,
                description: req.body.description,
                severity: req.body.severity,
                assignedTo: req.body.assignedTo,
                status: req.body.status
            });
        try {
            await todoTask.save();
            console.log(todoTask)
            res.redirect("/");
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/");
        }
    }
}
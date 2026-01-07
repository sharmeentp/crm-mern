const Customer = require("../models/Customer");

exports.createCustomer = async (req, res) => {
  try {
    const { name, email } = req.body;

    const customer = new Customer({
      name,
      email,
      user: req.user.id
    });

    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add customer" });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({ user: req.user.id });
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch customers" });
  }
};

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Razorpay = require("razorpay");
const cors = require("cors")({ origin: true });

admin.initializeApp();

// Initialize Razorpay with placeholder keys
// In production, these should be stored in Firebase environment config
// e.g., functions.config().razorpay.id
const razorpay = new Razorpay({
  key_id: "rzp_test_placeholder_key",
  key_secret: "placeholder_secret",
});

exports.createRazorpayOrder = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
      }

      const { amount, currency = "INR", receipt } = req.body;

      if (!amount) {
        return res.status(400).json({ error: 'Amount is required' });
      }

      const options = {
        amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        receipt: receipt || `rcpt_${Date.now()}`,
      };

      const order = await razorpay.orders.create(options);
      
      return res.status(200).json({
        id: order.id,
        currency: order.currency,
        amount: order.amount,
      });

    } catch (error) {
      console.error("Error creating order:", error);
      return res.status(500).json({ error: error.message });
    }
  });
});

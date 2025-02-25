import { Webhook } from "svix";
import userModel from "../models/userModel.js";
// API Controller function to manage clerk use with database
// http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    await whook.verify(req.rawBody, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });
    
    const { data, type } = req.body;
    console.log('Webhook type:', type);
    console.log('Webhook data:', data);
    
    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url || data.profile_image_url,
        };
        console.log('Creating user with data:', userData);
        
        const newUser = await userModel.create(userData);
        console.log('User created:', newUser);
        
        res.status(201).json({ success: true });
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url || data.profile_image_url,
        };
        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        res.status(200).json({ success: true });
        break;
      }
      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        res.status(200).json({ success: true });
        break;
      }
      default: {
        console.log('Unhandled webhook type:', type);
        res.status(400).json({ success: false, message: 'Unhandled webhook type' });
      }
    }
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { clerkWebhooks };

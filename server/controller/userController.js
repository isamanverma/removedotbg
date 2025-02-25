import { Webhook } from "svix";
import userModel from "../models/userModel.js";
// API Controller function to manage clerk use with database
// http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
  try {
    // Log incoming request
    console.log('Webhook Headers:', req.headers);
    console.log('Webhook Body:', req.body);

    if (!process.env.CLERK_WEBHOOK_SECRET) {
      throw new Error('CLERK_WEBHOOK_SECRET is not configured');
    }

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    
    try {
      await whook.verify(JSON.stringify(req.body), {
        "svix-id": req.headers["svix-id"],
        "svix-timestamp": req.headers["svix-timestamp"],
        "svix-signature": req.headers["svix-signature"],
      });
    } catch (verifyError) {
      console.error('Webhook verification failed:', verifyError);
      return res.status(400).json({ 
        success: false, 
        message: 'Webhook verification failed',
        error: verifyError.message 
      });
    }
    
    const { data, type } = req.body;
    console.log('Webhook type:', type);
    console.log('Webhook data:', JSON.stringify(data, null, 2));
    
    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name || '',
          lastName: data.last_name || '',
          photo: data.image_url || data.profile_image_url || 'https://via.placeholder.com/150',
        };
        console.log('Creating user with data:', JSON.stringify(userData, null, 2));
        
        try {
          const newUser = await userModel.create(userData);
          console.log('User created successfully:', JSON.stringify(newUser, null, 2));
          return res.status(201).json({ success: true, user: newUser });
        } catch (dbError) {
          console.error('Database error while creating user:', dbError);
          throw dbError;
        }
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
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error',
      error: error.message 
    });
  }
};

export { clerkWebhooks };

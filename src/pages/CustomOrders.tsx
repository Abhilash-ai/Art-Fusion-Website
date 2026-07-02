import { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const customOrderSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  artworkType: z.string().min(1, { message: "Please select an artwork type" }),
  size: z.string().min(1, { message: "Please select a size" }),
  details: z.string().min(10, { message: "Please provide some details (min 10 characters)" }),
  colors: z.string().optional(),
  deliveryOption: z.string().min(1, { message: "Please select a delivery option" })
});

type CustomOrderFormValues = z.infer<typeof customOrderSchema>;

export default function CustomOrders() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CustomOrderFormValues>({
    resolver: zodResolver(customOrderSchema)
  });

  const onSubmit = async (data: CustomOrderFormValues) => {
    // Simulate API call
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full pt-24 pb-20 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6"
          >
            Commission a Custom Piece
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Turn your memories, ideas, and dreams into tangible art. Fill out the form below to start the conversation about your unique piece.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          
          {/* Information Side */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm border border-border/50">
              <h3 className="text-xl font-serif text-foreground mb-4">How It Works</h3>
              <ul className="flex flex-col gap-4 text-muted-foreground relative">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-medium text-foreground">Submit Request</h4>
                    <p className="text-sm">Provide details, reference images, and your vision.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-medium text-foreground">Consultation</h4>
                    <p className="text-sm">We'll discuss the design, timeline, and final quote.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-medium text-foreground">Creation</h4>
                    <p className="text-sm">I'll bring your piece to life, sharing updates along the way.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h4 className="font-medium text-foreground">Delivery</h4>
                    <p className="text-sm">Carefully packaged and shipped securely to your door.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 p-8 rounded-sm border border-primary/20 text-primary-foreground">
              <h3 className="text-lg font-medium mb-2 text-primary">Estimated Completion Time</h3>
              <p className="text-3xl font-serif text-foreground mb-1">3 - 5 Weeks</p>
              <p className="text-sm text-muted-foreground">Depending on complexity and current waitlist.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-sm shadow-sm border border-border/50">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-serif text-foreground mb-4">Request Received!</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you for entrusting me with your vision. I will review your details and get back to you within 48 hours to discuss the next steps.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-6 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors rounded-sm"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Your Name</label>
                    <input 
                      type="text" 
                      {...register("name")}
                      className={`px-4 py-3 bg-muted/30 border ${errors.name ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-primary`}
                    />
                    {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <input 
                      type="email" 
                      {...register("email")}
                      className={`px-4 py-3 bg-muted/30 border ${errors.email ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-primary`}
                    />
                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Artwork Type</label>
                    <select 
                      {...register("artworkType")}
                      className={`px-4 py-3 bg-muted/30 border ${errors.artworkType ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-primary`}
                    >
                      <option value="">Select a type...</option>
                      <option value="embroidery">Embroidered Handkerchief</option>
                      <option value="watercolor">Watercolor Painting</option>
                      <option value="digital">Digital Illustration</option>
                      <option value="sketch">Pencil Sketch</option>
                      <option value="other">Other / Mixed Media</option>
                    </select>
                    {errors.artworkType && <span className="text-xs text-red-500">{errors.artworkType.message}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Preferred Size</label>
                    <select 
                      {...register("size")}
                      className={`px-4 py-3 bg-muted/30 border ${errors.size ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-primary`}
                    >
                      <option value="">Select size...</option>
                      <option value="small">Small (Up to 8x10")</option>
                      <option value="medium">Medium (Up to 16x20")</option>
                      <option value="large">Large (Up to 24x36")</option>
                      <option value="custom">Custom Size</option>
                    </select>
                    {errors.size && <span className="text-xs text-red-500">{errors.size.message}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">Customization Details</label>
                  <textarea 
                    {...register("details")}
                    rows={4}
                    placeholder="Describe your vision, subjects, mood, or any specific requirements..."
                    className={`px-4 py-3 bg-muted/30 border ${errors.details ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-primary resize-none`}
                  ></textarea>
                  {errors.details && <span className="text-xs text-red-500">{errors.details.message}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">Color Preferences (Optional)</label>
                  <input 
                    type="text" 
                    {...register("colors")}
                    placeholder="E.g., warm earthy tones, strictly black and white..."
                    className="px-4 py-3 bg-muted/30 border border-border rounded-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">Reference Images</label>
                  <div className="border-2 border-dashed border-border rounded-sm p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 transition-colors">
                    <UploadCloud className="w-8 h-8 text-muted-foreground mb-2" />
                    <span className="text-sm font-medium text-foreground">Click to upload or drag and drop</span>
                    <span className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or GIF (max. 5MB)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">Delivery Option</label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex items-center gap-3 p-4 border border-border rounded-sm cursor-pointer hover:border-primary transition-colors flex-1">
                      <input type="radio" value="standard" {...register("deliveryOption")} className="text-primary focus:ring-primary" />
                      <span className="text-sm">Standard Shipping (Free)</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-border rounded-sm cursor-pointer hover:border-primary transition-colors flex-1">
                      <input type="radio" value="express" {...register("deliveryOption")} className="text-primary focus:ring-primary" />
                      <span className="text-sm">Express Shipping (+$25)</span>
                    </label>
                  </div>
                  {errors.deliveryOption && <span className="text-xs text-red-500">{errors.deliveryOption.message}</span>}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-4 w-full bg-primary text-white font-medium py-4 px-6 rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Custom Request'}
                </motion.button>

              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Loader2, Mail, Check } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  message: z.string().optional(),
  scheduleVisit: z.boolean().optional(),
  agreeToPolicy: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryForm = ({ isOpen, onClose }: EnquiryFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      scheduleVisit: false,
      agreeToPolicy: false,
    }
  });

  // Effect to prevent body scrolling when the form is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      
      // Simulating API call since we might not have the actual backend
      setTimeout(() => {
        setFormSubmitted(true);
        reset();
        setIsSubmitting(false);
      }, 1000);

      /* Uncomment this for actual API integration
      const response = await fetch('http://localhost:5000/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          message: data.message || '',
          scheduleVisit: data.scheduleVisit,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      setFormSubmitted(true);
      reset();
      */
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            className="bg-[#faf5ef] rounded-lg max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-secondary transition-colors duration-200 z-10"
              disabled={isSubmitting}
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-6">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.div
                    key="enquiry-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-heading text-xl font-semibold text-secondary mb-5 text-center">
                      Enquire Now
                    </h3>
                    
                    {submitError && (
                      <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-xs">
                        {submitError}
                      </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div className="flex flex-col">
                        <input
                          {...register('firstName')}
                          className="py-2 px-0 bg-transparent border-b border-[#d1b989] focus:outline-none focus:border-[#947c4d] text-gray-800 placeholder-[#d1b989]/80 text-sm"
                          placeholder="Enter your first name"
                          disabled={isSubmitting}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                        )}
                      </div>

                      <div className="flex flex-col">
                        <input
                          {...register('lastName')}
                          className="py-2 px-0 bg-transparent border-b border-[#d1b989] focus:outline-none focus:border-[#947c4d] text-gray-800 placeholder-[#d1b989]/80 text-sm"
                          placeholder="Enter your last name"
                          disabled={isSubmitting}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                        )}
                      </div>

                      <div className="flex flex-col relative">
                        <div className="flex items-center border-b border-[#d1b989]">
                          <div className="flex items-center gap-1 pr-2 border-r border-[#d1b989] py-2">
                            <img src="https://flagcdn.com/w20/in.png" alt="India flag" className="h-3" />
                            <span className="text-[#d1b989] text-sm">+91</span>
                          </div>
                          <input
                            {...register('phone')}
                            type="tel"
                            className="py-2 px-2 bg-transparent flex-1 focus:outline-none text-gray-800 placeholder-[#d1b989]/80 text-sm"
                            placeholder="Enter your 10-digit mobile number"
                            disabled={isSubmitting}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div className="flex flex-col relative">
                        <div className="flex items-center border-b border-[#d1b989]">
                          <input
                            {...register('email')}
                            type="email"
                            className="py-2 px-0 bg-transparent flex-1 focus:outline-none text-gray-800 placeholder-[#d1b989]/80 text-sm"
                            placeholder="Enter your email address"
                            disabled={isSubmitting}
                          />
                          <Mail className="h-4 w-4 text-[#d1b989]" />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div className="flex flex-col">
                        <textarea
                          {...register('message')}
                          className="py-2 px-0 bg-transparent border-b border-[#d1b989] focus:outline-none focus:border-[#947c4d] text-gray-800 placeholder-[#d1b989]/80 resize-none text-sm"
                          placeholder="How can we assist you? (optional)"
                          rows={2}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="relative flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              type="checkbox"
                              id="schedule-visit"
                              {...register('scheduleVisit')}
                              className="h-3 w-3 rounded border-[#d1b989] text-[#947c4d] focus:ring-[#947c4d]"
                            />
                          </div>
                          <div className="ml-2 text-xs leading-5">
                            <label htmlFor="schedule-visit" className="text-gray-700">
                              Schedule a site visit
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="relative flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              type="checkbox"
                              id="agree-policy"
                              {...register('agreeToPolicy')}
                              className="h-3 w-3 rounded border-[#d1b989] text-[#947c4d] focus:ring-[#947c4d]"
                            />
                          </div>
                          <div className="ml-2 text-xs leading-5">
                            <label htmlFor="agree-policy" className="text-gray-700">
                              I agree to the Swastik Group <a href="#" className="text-[#947c4d] hover:underline">Privacy Policy</a>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center pt-3">
                        <Button 
                          type="submit" 
                          className="w-full py-2 bg-[#d1b989] text-white border-0 hover:bg-[#947c4d] transition-colors duration-300 text-sm" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              SUBMITTING...
                            </span>
                          ) : (
                            'SUBMIT'
                          )}
                        </Button>
                      </div>

                      <p className="text-xs text-gray-500 mt-3 text-center">
                        * We will send OTP via SMS to acknowledge your interest in Swastik Group projects.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 flex flex-col items-center justify-center"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-secondary mb-2 text-center">
                      Thank You for Your Interest!
                    </h3>
                    <p className="text-gray-700 text-sm text-center mb-6">
                      Our representative will get back to you shortly to assist with your enquiry.
                    </p>
                    <Button
                      onClick={onClose}
                      className="bg-[#947c4d] text-white hover:bg-[#7a673f] transition-colors duration-300 text-sm py-2 px-6"
                    >
                      CLOSE
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Loader2, Mail } from 'lucide-react';
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

      reset();
      onClose();
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
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            className="bg-[#faf5ef] rounded-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-secondary transition-colors duration-200"
              disabled={isSubmitting}
              aria-label="Close form"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8">
              {submitError && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                  {submitError}
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex flex-col">
                  <input
                    {...register('firstName')}
                    className="py-3 px-0 bg-transparent border-b border-[#d1b989] focus:outline-none focus:border-[#d1b989] text-gray-800 placeholder-[#d1b989]"
                    placeholder="FIRST NAME*"
                    disabled={isSubmitting}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <input
                    {...register('lastName')}
                    className="py-3 px-0 bg-transparent border-b border-[#d1b989] focus:outline-none focus:border-[#d1b989] text-gray-800 placeholder-[#d1b989]"
                    placeholder="LAST NAME*"
                    disabled={isSubmitting}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>

                <div className="flex flex-col relative">
                  <div className="flex items-center border-b border-[#d1b989]">
                    <div className="flex items-center gap-2 pr-2 border-r border-[#d1b989] py-3">
                      <img src="https://flagcdn.com/w20/in.png" alt="India flag" className="h-4" />
                      <span className="text-[#d1b989]">+91</span>
                    </div>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="py-3 px-2 bg-transparent flex-1 focus:outline-none text-gray-800 placeholder-[#d1b989]"
                      placeholder="MOBILE NUMBER*"
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div className="flex flex-col relative">
                  <div className="flex items-center border-b border-[#d1b989]">
                    <input
                      {...register('email')}
                      type="email"
                      className="py-3 px-0 bg-transparent flex-1 focus:outline-none text-gray-800 placeholder-[#d1b989]"
                      placeholder="EMAIL ID*"
                      disabled={isSubmitting}
                    />
                    <Mail className="h-5 w-5 text-[#d1b989]" />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <textarea
                    {...register('message')}
                    className="py-3 px-0 bg-transparent border-b border-[#d1b989] focus:outline-none focus:border-[#d1b989] text-gray-800 placeholder-[#d1b989] resize-none"
                    placeholder="MESSAGE"
                    rows={3}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    id="schedule-visit"
                    {...register('scheduleVisit')}
                    className="w-4 h-4 rounded border-[#d1b989] text-[#d1b989] focus:ring-[#d1b989]"
                  />
                  <label htmlFor="schedule-visit" className="text-gray-700 text-sm">
                    Schedule a site visit
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="agree-policy"
                    {...register('agreeToPolicy')}
                    className="w-4 h-4 rounded border-[#d1b989] text-[#d1b989] focus:ring-[#d1b989]"
                  />
                  <label htmlFor="agree-policy" className="text-gray-700 text-sm">
                    I agree to the Swastik Group <a href="#" className="text-[#d1b989]">Privacy Policy</a>
                  </label>
                </div>

                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    className="w-3/4 py-3 bg-[#d1b989] text-white border-0 transition-transform duration-200" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        SUBMITTING...
                      </span>
                    ) : (
                      'SUBMIT'
                    )}
                  </Button>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  * We will send OTP via SMS to acknowledge your interest in Swastik Group projects.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
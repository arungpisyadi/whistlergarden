'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'

interface ContactFormData {
  fullName: string
  email: string
  phone: string
  eventType: string
  preferredDate: string
  guestCount: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  message?: string
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void
  className?: string
}

const ContactForm = ({ onSubmit, className }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'General Inquiry',
    preferredDate: '',
    guestCount: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const eventTypeOptions = [
    { value: 'General Inquiry', label: 'General Inquiry' },
    { value: 'Wedding', label: 'Wedding' },
    { value: 'Corporate', label: 'Corporate Event' },
    { value: 'Special Event', label: 'Special Event' },
    { value: 'Hotel Booking', label: 'Hotel Booking' }
  ]

  const guestCountOptions = [
    { value: '', label: 'Select guest count' },
    { value: '1-10', label: '1-10 guests' },
    { value: '11-25', label: '11-25 guests' },
    { value: '26-50', label: '26-50 guests' },
    { value: '51-100', label: '51-100 guests' },
    { value: '101-200', label: '101-200 guests' },
    { value: '200+', label: '200+ guests' }
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (onSubmit) {
        onSubmit(formData)
      }
      
      // Show success message
      setShowSuccess(true)
      
      // Reset form after success
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        eventType: 'General Inquiry',
        preferredDate: '',
        guestCount: '',
        message: ''
      })
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
      
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }))
    }
  }

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0]

  if (showSuccess) {
    return (
      <div className={`bg-green-50 border-2 border-green-200 p-8 rounded-lg text-center ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-playfair text-2xl font-semibold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="font-inter text-green-700 mb-4">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setShowSuccess(false)}
          variant="outline"
          className="bg-green-600 text-white hover:bg-green-700 border-green-600"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className={`bg-gray-50 p-8 rounded-lg ${className}`}>
      <h3 className="font-playfair text-2xl font-semibold text-primary-500 mb-6 text-center">
        Send us a Message
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            label="Full Name *"
            type="text"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            error={errors.fullName}
            required
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Input
              label="Email Address *"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={errors.email}
              required
            />
          </div>
          <div>
            <Input
              label="Phone Number *"
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              error={errors.phone}
              required
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Select
              label="Event Type"
              options={eventTypeOptions}
              value={formData.eventType}
              onChange={(e) => handleChange('eventType', e.target.value)}
            />
          </div>
          <div>
            <Input
              label="Preferred Date"
              type="date"
              min={today}
              value={formData.preferredDate}
              onChange={(e) => handleChange('preferredDate', e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <Select
            label="Number of Guests"
            options={guestCountOptions}
            value={formData.guestCount}
            onChange={(e) => handleChange('guestCount', e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message / Special Requirements *
          </label>
          <textarea
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-colors duration-200"
            placeholder="Tell us about your event, special requirements, or how we can help you..."
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            required
          />
          {errors.message && (
            <p className="text-sm text-red-600 mt-2">{errors.message}</p>
          )}
        </div>
        
        <div className="text-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-accent-gold text-white px-8 py-3 rounded-lg font-inter font-medium hover:bg-accent-gold/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 text-center mt-4">
          Fields marked with * are required
        </p>
      </form>
    </div>
  )
}

export { ContactForm }
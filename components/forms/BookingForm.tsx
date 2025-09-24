'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'

interface BookingData {
  arrival: string
  departure: string
  adults: string
  children: string
}

interface BookingFormProps {
  onSubmit?: (data: BookingData) => void
  className?: string
}

const BookingForm = ({ onSubmit, className }: BookingFormProps) => {
  const [formData, setFormData] = useState<BookingData>({
    arrival: '',
    departure: '',
    adults: '1',
    children: '0'
  })

  const adultsOptions = [
    { value: '1', label: '1 Adult' },
    { value: '2', label: '2 Adults' },
    { value: '3', label: '3 Adults' },
    { value: '4', label: '4+ Adults' }
  ]

  const childrenOptions = [
    { value: '0', label: '0 Children' },
    { value: '1', label: '1 Child' },
    { value: '2', label: '2 Children' },
    { value: '3', label: '3+ Children' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(formData)
    }
  }

  const handleChange = (field: keyof BookingData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className={`bg-white bg-opacity-95 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg ${className}`}>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <Input
            label="Arrival"
            type="date"
            min={today}
            value={formData.arrival}
            onChange={(e) => handleChange('arrival', e.target.value)}
            required
          />
        </div>
        
        <div>
          <Input
            label="Departure"
            type="date"
            min={formData.arrival || today}
            value={formData.departure}
            onChange={(e) => handleChange('departure', e.target.value)}
            required
          />
        </div>
        
        <div>
          <Select
            label="Adults"
            options={adultsOptions}
            value={formData.adults}
            onChange={(e) => handleChange('adults', e.target.value)}
          />
        </div>
        
        <div>
          <Select
            label="Children"
            options={childrenOptions}
            value={formData.children}
            onChange={(e) => handleChange('children', e.target.value)}
          />
        </div>
        
        <div className="flex items-end">
          <Button
            type="submit"
            variant="primary"
            className="w-full font-bold tracking-wide"
          >
            CHECK AVAILABILITY
          </Button>
        </div>
      </form>
    </div>
  )
}

export { BookingForm }
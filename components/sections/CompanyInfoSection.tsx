import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapPin, faEnvelope } from '../../lib/icons'

interface CompanyInfoSectionProps {
  className?: string
}

const CompanyInfoSection = ({ className }: CompanyInfoSectionProps) => {
  const companyInfo = [
    {
      title: "Operational times",
      content: "09.00 - 23.00 WIB",
      backgroundColor: "#a37238",
      icon: faClock
    },
    {
      title: "Business address",
      content: "Jl. Rasuna Said, Salembaran, Kosambi, Tangerang Regency, Banten 15214",
      backgroundColor: "#7a5529",
      icon: faMapPin
    },
    {
      title: "Email address",
      content: "salesteam.wg@gmail.com",
      backgroundColor: "#493010",
      icon: faEnvelope
    }
  ]

  return (
    <section className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {companyInfo.map((info, index) => (
          <div 
            key={index}
            className="px-6 py-4 md:py-6 text-white flex justify-center items-center"
            style={{ backgroundColor: info.backgroundColor }}
          >
            <div className="max-w-xs md:max-w-sm grid grid-cols-[auto_1fr] gap-4 items-center">
              <div className="flex justify-center items-center">
                <FontAwesomeIcon icon={info.icon} className="text-white text-3xl md:text-4xl" />
              </div>
              <div className="text-left space-y-2">
                <h3 className="text-xs md:text-sm font-bold tracking-wide uppercase">
                  {info.title}
                </h3>
                <div className="w-12 h-0.5 bg-white opacity-75"></div>
                <p className="text-xs leading-relaxed font-medium">
                  {info.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { CompanyInfoSection }
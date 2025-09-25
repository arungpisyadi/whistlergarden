'use client'

interface TestimonialProps {
  className?: string
}

const Testimonial = ({ className }: TestimonialProps) => {
  return (
    <section className={`section-padding bg-neutral-beige ${className}`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hotel Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-accent-gold rounded-full flex items-center justify-center shadow-lg p-2">
              <img src="/images/logos/logo-transp-white.png" alt="Whistler Garden Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          
          {/* Testimonial Quote */}
          <blockquote className="relative">
            <div className="text-6xl text-accent-gold opacity-50 absolute -top-4 -left-4">
              "
            </div>
            <p className="font-dancing text-2xl md:text-3xl lg:text-4xl text-gray-700 italic leading-relaxed px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A truly exceptional experience that exceeded all expectations.
            </p>
            <div className="text-6xl text-accent-gold opacity-50 absolute -bottom-8 -right-4">
              "
            </div>
          </blockquote>
          
          {/* Attribution (optional) */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <div className="flex justify-center items-center space-x-2">
              <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center p-1">
                <img src="/images/logos/logo-transp-white.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-playfair font-semibold text-accent-gold">
                WHISTLER GARDEN
              </span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Experience the beauty of luxury
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Testimonial }
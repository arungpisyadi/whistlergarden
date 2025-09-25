'use client'

interface AboutUsProps {
className?: string
}

const AboutUs = ({ className }: AboutUsProps) => {
return (
    <section id="about" className={`section-padding bg-neutral-beige ${className}`}>
        <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
                {/* Hotel Logo */}
                <div className="flex justify-center mb-8">
                    <div className="w-full max-w-2xl h-auto flex items-center justify-center p-2">
                        <img src="/images/logos/logo-dark.png" alt="Whistler Garden Logo" className="w-full h-full object-contain" />
                    </div>
                </div>
            
                {/* About Us Title */}
                <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold mb-8">
                    Whistler Garden - Where Memories Are Crafted
                </h2>
            
                {/* About Us Description */}
                <div className="relative">
                    <p className="font-dancing text-sm md:text-xl lg:text-2xl text-gray-700 italic leading-relaxed px-8">
                        In the heart of elegance lies Whistler Garden, where every celebration becomes an extraordinary symphony of luxury and refinement. From prestigious corporate gatherings that command respect, to intimate birthday celebrations that sparkle with joy. At Whistler Garden, we don't simply host events; we create heirloom memories that will be treasured for generations.
                    </p>
                </div>
            </div>
        </div>
    </section>
)
}

export { AboutUs }
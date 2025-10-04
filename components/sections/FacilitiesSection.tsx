import React from 'react'

interface FacilitiesSectionProps {
className?: string
}

const FacilitiesSection = ({ className }: FacilitiesSectionProps) => {
const features = [
    {
    title: "EMOTIONS",
    description: "Creating memorable experiences that touch the heart and soul, bringing warmth and joy to every moment of your stay."
    },
    {
    title: "BALANCE",
    description: "Harmoniously blending luxury with comfort, modern amenities with timeless elegance for the perfect equilibrium."
    },
    {
    title: "FUNCTIONALITY",
    description: "Every detail thoughtfully designed to serve a purpose, ensuring seamless experiences and effortless living."
    },
    {
    title: "QUALITY",
    description: "Uncompromising standards in every aspect, from materials to service, delivering excellence that exceeds expectations."
    }
]

return (
    <section className={`py-16 md:py-24 bg-white ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    World-Class Facilities
                </h2>
                <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Discover our exceptional venues designed to accommodate every type of celebration, 
                    from intimate gatherings to grand celebrations, all set within our beautiful gardens.
                </p>
            </div>
        </div>
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Single Large Box with Internal 2-Column Layout */}
            <div className="bg-black/80 rounded-lg p-8 md:p-12 lg:p-16 text-white shadow-lg mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Main heading text, subtitle, and bottom image */}
                    <div className="space-y-24">
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                                Premium Facilities
                            </h2>
                            <div className="w-20 h-1 bg-white mb-6"></div>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                Timeless, the same as 5 star hotels they always stay up-to-date
                            </p>
                        </div>
            
                        {/* Bottom Image in Left Column */}
                        <div className="mt-8">
                            <img
                                src="https://placehold.co/500x300/D4AF37/ffffff?text=Luxury+Bathroom"
                                alt="Luxury hotel bathroom interior with premium fixtures and elegant design"
                                className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    {/* Right Column - Top images and four features */}
                    <div className="space-y-8">
                        {/* Top Images - Side by Side */}
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://placehold.co/250x200/C9A961/ffffff?text=Premium+Amenities"
                                alt="Premium hotel amenities including luxury bath products"
                                className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md"
                            />
                            <img
                                src="https://placehold.co/250x200/B8860B/ffffff?text=Luxury+Towels"
                                alt="Luxury hotel towels and room details"
                                className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md"
                            />
                        </div>
            
                        {/* Four features in 2x2 grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                            <div key={index} className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-bold text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-white/90 leading-relaxed text-sm md:text-base">
                                    {feature.description}
                                </p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 lg:mt-24 bg-gray-500/50 rounded-lg p-8 text-white">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                            Experience Luxury Living
                        </h3>
                        <p className="text-white/90 leading-relaxed mb-6 text-lg">
                            Step into a world where every detail reflects the sophistication and elegance 
                            of premium hospitality.
                        </p>
                        <ul className="space-y-3 text-white/90">
                            <li className="flex items-center text-lg">
                                <span className="mr-3 text-xl">✓</span>
                                Premium interior design and furnishing
                            </li>
                            <li className="flex items-center text-lg">
                                <span className="mr-3 text-xl">✓</span>
                                Personalized hospitality services
                            </li>
                            <li className="flex items-center text-lg">
                                <span className="mr-3 text-xl">✓</span>
                                Curated experiences and amenities
                            </li>
                            <li className="flex items-center text-lg">
                                <span className="mr-3 text-xl">✓</span>
                                Attention to every comfort detail
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
                            <h4 className="text-xl md:text-2xl font-bold mb-4 text-white">
                                Discover Your Sanctuary
                            </h4>
                            <p className="text-white/90 text-base mb-6 leading-relaxed">
                                Experience the perfect blend of luxury and comfort in your personal space
                            </p>
                            <button className="bg-white text-primary-gold-light px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                                Explore Our Spaces
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Action Box */}
            <div className="">
                
            </div>
        </div>
    </section>
)
}

export { FacilitiesSection }
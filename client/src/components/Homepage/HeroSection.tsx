import HeroForm from './HeroForm';
import HeroImage from './HeroImage';

export default function HeroSection() {
    return (
        <section className="bg-[radial-gradient(65.89%_100%_at_100%_0%,_#D1DDFB_0%,_rgba(209,221,251,0)_100%)] py-10 px-4 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <HeroForm />
                <div>
                    <h1 className="text-4xl font-bold leading-tight mb-4 text-gray-900">
                        Start Your Journey with the <br />
                        <span className="text-blue-600">Car of Your Dreams</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Choose from 1000+ high-quality cars with flexible financing and
                        delivery to your door.
                    </p>
                    <HeroImage />
                </div>
            </div>
        </section>
    );
}

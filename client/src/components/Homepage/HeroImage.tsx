import Image from 'next/image';

export default function HeroImage() {
    return (
        <div className="flex justify-center items-center">
            <Image
                src="/cars-hero.png" // You should place the image in the `public/` folder
                alt="Car of your dreams"
                width={800}
                height={400}
                className="w-full h-auto object-contain"
                priority
            />
        </div>
    );
}

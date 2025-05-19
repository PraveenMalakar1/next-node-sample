import VehicleDetailClient from "@/components/VehicleDetailClient";
import { Car } from "@/context/CarContext";

export type PageProps = {
    params: {
        id: string;
    };
};


export default async function VehicleDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/instock-cars");
    const data = await res.json();
    const vehicle = data.data.vehicles.find((v: Car) => v.id.toString() === id) ?? null;

    return <VehicleDetailClient initialCar={vehicle} />;
}

// This function is used to generate metadata for the page
// It fetches the vehicle data and sets the title and description based on the vehicle details
// export async function generateMetadata({ params }: Props) {
//     const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/instock-cars");
//     const data = await res.json();
//     const vehicle = data.data.vehicles.find((v: Car) => v.id.toString() === params.id) ?? null;

//     return {
//         title: vehicle ? `${vehicle.make} ${vehicle.model}` : "Car Not Found",
//         description: vehicle ? `Details for ${vehicle.make} ${vehicle.model}` : "Car not found",
//     };
// }
// Uncomment the above function if you want to set metadata dynamically based on the vehicle details

// This function is used to generate static paths for the dynamic route
// export async function generateStaticParams() {
//     const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/instock-cars");
// const data = await res.json();
// const vehicles: Car[] = data.data.vehicles;
// return vehicles.map((vehicle) => ({
//     id: vehicle.id.toString(),
// }));
// }
// Uncomment the above function if you want to pre-render specific paths at build time
// This is useful for SEO and performance, but it requires knowing the IDs in advance
// and may not be suitable for all use cases, especially if the data changes frequently.


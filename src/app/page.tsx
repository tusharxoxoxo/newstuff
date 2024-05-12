import Link from "next/link";

const mockUrls = [
    "https://utfs.io/f/2055ff8a-85a7-4979-a90c-d380947c6431-ry6719.jpg",
    "https://utfs.io/f/d363436f-a873-4640-99c8-1abb6ec13791-ry5bqr.jpg",
    "https://utfs.io/f/2d6de541-be78-495a-aa96-c28e45281bc9-s1tllf.jpg",
    "https://utfs.io/f/f829ec2e-55b1-4d71-8297-e6ec26c9b3aa-rrpo2a.jpg",
    "https://utfs.io/f/9a489008-e2fd-45f4-aae5-49e27fa63772-ryptqy.jpg",
    "https://utfs.io/f/94e60c6e-d882-45f0-b0ff-88ec446e196e-rxyw3y.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1, 
    url, 
   })); 


export default function HomePage() {
  return (
    <main className="">
        <div className="flex flex-wrap gap-4">{
            [...mockImages, ...mockImages, ...mockImages].map((image) => (
                        <div key={image.id} className="w-48">
                            <img src={image.url} />
                        </div>
            ))
        }
        </div>  
        Hello (gallery in progress)
   </main>
  );
}

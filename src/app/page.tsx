import Link from "next/link";

const mockUrls = [
    "https://utfs.io/f/3fe6a1f6-88a8-4070-86df-363e386aeaf2-ykal1k.jpg",
    "https://utfs.io/f/eb266c69-e479-4c3f-8bc9-19092bbd6cea-y2mm3w.jpg",
    "https://utfs.io/f/8b5733b9-5ab0-4888-85a8-64f2aad81c7b-xm4sb2.jpg",
    "https://utfs.io/f/f21815c1-07b7-4978-a30d-1800d50ce2f0-yioh8j.jpg",
    "https://utfs.io/f/1770ce5b-5122-40fa-935c-ee20eafdfe3d-xmrru2.jpg",
    "https://utfs.io/f/0efb0c84-d7a6-45ef-9bd7-e5b331e44ccb-y37oob.jpg",
    "https://utfs.io/f/9c449bcc-923c-4bb9-8a5c-31d6a5c1dbd9-z1tg30.jpg",
    "https://utfs.io/f/022484a6-bb76-4a6a-b3dc-a2e6276ff96d-ylazan.jpg",
    "https://utfs.io/f/8af31c13-0d54-4efa-b2c4-3517f918da34-z07c9z.jpg",
    "https://utfs.io/f/eeb25e6d-ada5-4fb9-9ab3-1e2e8825e583-y4amvi.jpg",
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

import { CarouselComponent } from "@/components/CarouselComponent"

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw', overflow: 'hidden', margin: 0, padding: 0 }}>
      <div style={{ position: 'absolute', top: '2rem', width: '100%', textAlign: 'center', zIndex: 20 }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: 'Georgia, serif', color: 'black', margin: 0 }}>
          Hello Shane
        </h1>
      </div>
      <CarouselComponent />
    </div>
  );
}

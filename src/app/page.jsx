import image from '../assets/images/kv_v04a.png';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-body" style={{ aspectRatio: 1 }}>
        <img src={image.src} alt="HKOSCon 2024" />
      </div>
    </section>
  );
}

import TopHeader from '../components/TopHeader';
import MainBanner from '../components/MainBanner';
import StoreDetailsForm from '../components/StoreDetailsForm';
import ColorSelector from '../components/ColorSelector';

export default function MainPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f4fa', fontFamily: 'Inter, Arial, sans-serif' }}>
      <TopHeader />
      <MainBanner />
      <div style={{ maxWidth: 700, margin: '0 auto', marginTop: -60, position: 'relative', zIndex: 10 }}>
        <StoreDetailsForm />
        <ColorSelector />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
          <button style={{ background: '#6c2eb7', color: '#fff', borderRadius: 999, padding: '10px 32px', fontWeight: 600, fontSize: 18, border: 'none', cursor: 'pointer' }}>Next</button>
        </div>
        <p style={{ fontSize: 12, color: '#b0aeb8', textAlign: 'right', marginTop: 8 }}>It will take about 10 min.</p>
      </div>
    </div>
  );
}
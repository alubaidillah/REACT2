export default function Footer({ items }) {

  if (items.length === 0) {
    return (
      <footer className="stats">
        Daftar belanjaan kosong, ayo tambahkan barang belanjaan anda!
      </footer>
    );
  }

  const totalItems = items.length;
  const totalChecked = items.filter((item) => item.checked).length;
  const precentage = Math.round((totalChecked / totalItems) * 100);

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {totalChecked} barang sudah dibeli ({precentage}%)
    </footer>
  );
}
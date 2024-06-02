const Mylist = () => {
  const songs = [
    {
      id: 1,
      nama: 'Ariana Grande',
      songs: "We Can't Be Friends",
      band: 'Solo',
      gambar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJTx6IP3efUR8jFaAON9dTP-_559BE8DtNw&s',
      bgColor: 'bg-slate-200',
    },
    {
      id: 2,
      nama: 'Blackpink Feat Dualipa',
      songs: 'Kiss & Make Up',
      band: 'BlackPink',
      gambar:
        'https://i.pinimg.com/originals/91/22/ae/9122ae8c8b81365a9e7f15dd097cb798.jpg',
      bgColor: 'bg-slate-200',
    },
    {
      id: 3,
      nama: 'Ed Sharren',
      songs: 'Happier',
      band: 'Solo',
      gambar: 'https://i1.sndcdn.com/artworks-000296734902-kh6ba1-t500x500.jpg',
      bgColor: 'bg-slate-200',
    },
    {
      id: 4,
      nama: 'Little Mix',
      songs: 'Power',
      band: 'Little Mix',
      gambar:
        'https://m.media-amazon.com/images/I/6125rOwXKqL._AC_UF350,350_QL50_.jpg',
      bgColor: 'bg-slate-200',
    },
    {
      id: 5,
      nama: 'Iu Feat V',
      songs: 'Love Wins All',
      band: 'Collaboration',
      gambar: 'https://pbs.twimg.com/media/GEMqFira0AAxyrT.jpg:large',
      bgColor: 'bg-slate-200',
    },
    {
      id: 6,
      nama: 'Camila Cabello',
      songs: 'Shameless',
      band: 'Solo',
      gambar:
        'https://i.pinimg.com/736x/1c/fa/34/1cfa3425effc3af94fa6b3123042d9ff.jpg',
      bgColor: 'bg-slate-200',
    },
  ];

  const handle = songs => {
    alert(
      `Nama Penyayi: ${songs.nama}\nNama Band: ${songs.band}\nJudul songs: ${songs.songs}`,
    );
  };

  return (
    <div className="flex flex-wrap gap-4 mx-2 my-16">
      {songs.map(song => (
        <div
          key={song.id}
          className={`group p-4 rounded ${song.bgColor} hover:bg-purple-800 hover:text-white`}>
          <img src={song.gambar} alt={`poster ${song.songs}`} className="h-44" />
          <h3 className="text-lg font-bold mt-2">{song.songs}</h3>
          <span className="block text-gray-700 group-hover:text-white">
            {song.nama}
          </span>
          <span className="block text-gray-700 group-hover:text-white">
            {song.band}
          </span>
          <button
            className="mt-2 bg-purple-700 text-white py-1 px-3 rounded-full hover:bg-white hover:text-purple-800"
            onClick={() => handle(song)}>
            Lihat Selengkapnya
          </button>
        </div>
      ))}
    </div>
  );
};

export default Mylist;

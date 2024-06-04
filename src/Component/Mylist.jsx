/* eslint-disable no-unused-vars */
import {useState} from 'react';

const Mylist = () => {
  const [comment, setComment] = useState(''); // State to store comment
  const [selectedSong, setSelectedSong] = useState(null); // State to store selected song for comment

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

  const handleInformation = song => {
    alert(
      `Nama Penyanyi: ${song.nama}\nNama Band: ${song.band}\nJudul Lagu: ${song.songs}`,
    );
  };

  const handleComment = song => {
    setSelectedSong(song);
    const userComment = prompt('Masukkan Komentar Anda:');
    if (!userComment) {
      alert('Komentar tidak boleh kosong');
    } else {
      setComment(userComment);
      alert(`Komentar Anda untuk lagu "${song.songs}": ${userComment}`);
    }
  };

  const handleLike = () => {
    alert('Ragil Menyukai Lagu Kami');
  };

  return (
    <div className="flex flex-wrap gap-4 mx-2 my-16">
      {songs.map(song => (
        <div
          key={song.id}
          className={`group p-4 rounded ${song.bgColor} hover:bg-purple-800 hover:text-white flex flex-col`}>
          <img
            src={song.gambar}
            alt={`poster ${song.songs}`}
            className="h-44"
          />
          <h3 className="text-lg font-bold mt-2">{song.songs}</h3>
          <span className="block text-gray-700 group-hover:text-white">
            {song.nama}
          </span>
          <span className="block text-gray-700 group-hover:text-white">
            {song.band}
          </span>
          <button
            className="mt-2 bg-purple-700 text-white py-1 px-3 rounded-full hover:bg-white hover:text-purple-800"
            onClick={() => handleInformation(song)}>
            Informasi
          </button>
          <button
            className="mt-2 bg-purple-700 text-white py-1 px-3 rounded-full hover:bg-white hover:text-purple-800"
            onClick={handleLike}>
            Suka
          </button>
          <button
            className="mt-2 bg-purple-700 text-white py-1 px-3 rounded-full hover:bg-white hover:text-purple-800"
            onClick={() => handleComment(song)}>
            Komentar
          </button>
        </div>
      ))}
    </div>
  );
};

const Header = ({nama}) => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <h1>Daftar Lagu</h1>
      <h2>{nama ? nama : 'Tanpa Nama'}</h2>
      <nav>
        <a href="#" className="mx-2">
          Home
        </a>
        <a href="#" className="mx-2">
          About
        </a>
        <a href="#" className="mx-2">
          Contact
        </a>
      </nav>
    </header>
  );
};

const App = () => {
  const nama = '';

  return (
    <div>
      <Header nama={nama} />
      <Mylist />
    </div>
  );
};

export default App;

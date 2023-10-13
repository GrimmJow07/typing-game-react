import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./Components/Header";
import Timer from "./Components/Timer";
import Score from "./Components/Score";
import WordDisplay from "./Components/WordDisplay";
import InputBox from "./Components/InputBox";
import Status from "./Components/Status";

const words = [
  "mobil",
  "rumah",
  "kucing",
  "sekolah",
  "buku",
  "komputer",
  "pohon",
  "meja",
  "telepon",
  "makanan",
  "bahagia",
  "mengapa",
  "cinta",
  "tempat",
  "malam",
  "pagi",
  "udara",
  "bulan",
  "matahari",
  "bunga",
  "musik",
  "hujan",
  "angin",
  "pantai",
  "gunung",
  "pedesaan",
  "kota",
  "kehidupan",
  "senyum",
  "keluarga",
  "teman",
  "hati",
  "kebaikan",
  "alasan",
  "senang",
  "bermain",
  "tertawa",
  "berbicara",
  "mimpi",
  "waktu",
  "tugas",
  "pintu",
  "jendela",
  "air",
  "bola",
  "laut",
  "perjalanan",
  "cita-cita",
  "warna",
  "kemudian",
  "sekarang",
];

const levels = {
  easy: 60,
  medium: 45,
  hard: 30,
};

function App() {
  const [keyKata, setKeyKata] = useState("");
  const [input, setInput] = useState("");
  const [timeS, setTimeS] = useState(levels.medium);
  const [play, setPlay] = useState(true);
  const [keterangan, setKeterangan] = useState("");
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeS > 0 && play) {
        setTimeS((prevTime) => prevTime - 1);
      } else if (timeS === 0 && play) {
        setPlay(false);
        setKeterangan("Game Over!");
        if (score > highestScore) {
          setHighestScore(score);
        }
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeS, play]);

  const tampilKata = () => {
    const ranIndex = Math.floor(Math.random() * words.length);
    setKeyKata(words[ranIndex]);
  };

  useEffect(() => {
    if (play && input === keyKata && input.length > 0) {
      tampilKata();
      setInput("");
      setKeterangan("Benar!");
      setScore((data) => data + 1);
    }
  }, [input, keyKata, play]);

  useEffect(() => {
    if (play) {
      tampilKata();
    }
  }, [play]);

  const handleResetClick = () => {
    // Logika reset skor tertinggi
    setHighestScore(0);
    // Reset skor dan waktu
    setScore(0);
    setTimeS(levels.medium);
    // Mulai permainan
    setPlay(true);
    // Tampilkan kata baru
    tampilKata();
    // Reset keterangan
    setKeterangan("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (input === keyKata) {
        setInput("");
        setKeterangan("Benar!");
        setScore((data) => data + 1);
        tampilKata();
      }
    }
  };

  return (
    <>
      <Header />
      <div className="container text-center col-md-8 col6">
        <div className="row pt-5">
          <Timer timeS={timeS} />
          <Score score={score} highestScore={highestScore} />
          <WordDisplay keyKata={keyKata} />
          <InputBox
            input={input}
            setInput={setInput}
            onKeyPress={handleKeyPress}
          />
          <h4 className="mt-3 pt-5">{keterangan}</h4>
          <Status keterangan={keterangan} onResetClick={handleResetClick} />
        </div>
      </div>
    </>
  );
}

export default App;

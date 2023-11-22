import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const customStyle = {
    "--accent-color": "#41516c",
  };
  return (
    <>
      <hr className="border border-dark border-3 opacity-100" />
      <hr className="border border-dark border-3 opacity-100" />
      <div className="timeline">
        <h1>Timeline Kegiatan</h1>
        <ul>
          <li style={customStyle}>
            <div className="date">07 November 2023</div>
            <div className="title">Selasa, 09.00 - Selesai</div>
            <div className="descr">Diskusi penentuan mitra abdi masyarakat untuk kelompok 8</div>
          </li>
          <li style={customStyle}>
            <div className="date">14 November 2023</div>
            <div className="title">Selasa, 08.30 - Selesai</div>
            <div className="descr">Survey mitra dan Rapat bersama pihak sekolah</div>
          </li>
          <li style={customStyle}>
            <div className="date">17 November 2023</div>
            <div className="title">Jum at, 08.00 - selesai</div>
            <div className="descr">Pengajuan proposal ke mitra</div>
          </li>
          <li style={customStyle}>
            <div className="date">20 November 2023</div>
            <div className="title">Senin, 07.30 - selesai</div>
            <div className="descr">Mengajar materi algoritma dasar dengan flowchart</div>
          </li>
          <li style={customStyle}>
            <div className="date">21 November 2023</div>
            <div className="title">Selasa, 07.00 - selesai</div>
            <div className="descr">Mengajar materi google productivity tools</div>
          </li>
          <li style={customStyle}>
            <div className="date">22 November 2023</div>
            <div className="title">Rabu, 10.00 - selesai 5</div>
            <div className="descr">Mengajar materi bullying</div>
          </li>
          <li style={customStyle}>
            <div className="date">24 November 2023</div>
            <div className="title">Jumat, 13.00 - selesai</div>
            <div className="descr">Fun Game (Lomba keseimbangan kelompok menggunakan tali rafia dengan air dan lomba estafet air)</div>
          </li>
          <li style={customStyle}>
            <div className="date">25 November 2023</div>
            <div className="title">Sabtu, 07.30 - selesai</div>
            <div className="descr">Mengajar materi dasar pemrograman</div>
          </li>
          <li style={customStyle}>
            <div className="date">27 November 2023</div>
            <div className="title">Senin, 07.00 - selesai</div>
            <div className="descr">Praktek algoritma dasar dengan flowchart di lab</div>
          </li>
          <li style={customStyle}>
            <div className="date">28 November 2023</div>
            <div className="title">Selasa, 07.00 - selesai</div>
            <div className="descr">Praktek materi tentang google form, google spreadsheet dan lain lain</div>
          </li>
          <li style={customStyle}>
            <div className="date">29 November 2023</div>
            <div className="title">Rabu, 07.30- selesai</div>
            <div className="descr">Praktek materi tentang pemrograman dasar</div>
          </li>
          <li style={customStyle}>
            <div className="date">1 Desember 2023</div>
            <div className="title">Jumat, 07.00 - selesai</div>
            <div className="descr">Pembuatan luaran , Persiapan untuk video Youtube , Pemilihan materi video Youtube , dan Penyusunan Laporan Kegiatan</div>
          </li>
          <li style={customStyle}>
            <div className="date">2 Desember 2023</div>
            <div className="title">Sabtu, 07.00 - selesai</div>
            <div className="descr">Pembuatan luaran , Pembuatan berita media massa , Pengeditan video Youtube , dan Penyusunan Laporan Kegiatan (lanjutan)</div>
          </li>
          <li style={customStyle}>
            <div className="date">3 Desember 2023</div>
            <div className="title">Minggu, 07.00 - selesai</div>
            <div className="descr">Pembuatan luaran , Penyelesaian Laporan Kegiatan , Upload video youtube , dan Publikasi berita media massa</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Timeline;

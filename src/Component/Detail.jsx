import React from "react";

const Detail = () => {
  return (
    <>
      <hr className="border border-dark border-3 opacity-100 my-2" />
      <hr className="border border-dark border-3 opacity-100 my-1" />
      <div className="container">
        <h1 className="text-center ">Detail</h1>
        <table className="tablett table table-borderless d-flex justify-content-center ">
          <tbody>
            <tr className="tablett">
              <td className="tablett pe-lg-5">Kelompok </td>
              <td className="tablett ps-lg-5">: 08</td>
            </tr>
            <tr>
              <td className="tablett pe-lg-5">Mitra </td>
              <td className="tablett ps-lg-5">: MTs. Nurul Hidayah</td>
            </tr>
            <tr>
              <td className="tablett pe-lg-5">Kecamatan </td>
              <td className="tablett ps-lg-5">: Krian</td>
            </tr>
            <tr>
              <td className="tablett pe-lg-5">Kabupaten </td>
              <td className="tablett ps-lg-5">: Sidoarjo</td>
            </tr>
            <tr>
              <td className="tablett pe-lg-5">Ketua </td>
              <td className="tablett ps-lg-5">: Erwin Erdiyanto</td>
            </tr>
            <tr>
              <td className="tablett pe-lg-5">DPL </td>
              <td className="tablett ps-lg-5">: Fawwaz Ali Akbar, S.kom, M.kom</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="border border-dark border-3 opacity-100" />
      <hr className="border border-dark border-3 opacity-100" />
    </>
  );
};

export default Detail;

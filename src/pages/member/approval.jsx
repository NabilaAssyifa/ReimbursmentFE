import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApprovalMember = () => {
  const [searchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [projectFilter, setProjectFilter] = useState('');
  const [idInstansiFilter, setIdInstansiFilter] = useState('');
  const [idDepartemenFilter, setIdDepartemenFilter] = useState('');

  const navigate = useNavigate();

  const items = [
    { project: 'Lorem Ipsum', instansi: 'Quinsis Lintas Mitra', departement: 'Sales', status: 'Menunggu', date: '12-09-2024', harga: 'Rp 500.000' },
    { project: 'Dolor Sit Amet', instansi: 'Lintas Telematika Nusantara', departement: 'Teknis', status: 'Disetujui', date: '13-09-2024', harga: 'Rp 1.000.000' },
    { project: 'Constectur', instansi: 'Jetcoms Netindo', departement: 'Quality Assurance', status: 'Dibatalkan', date: '14-09-2024', harga: 'Rp 900.000' },
  ];

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.instansi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === '' || item.status === statusFilter;
    const matchesDate = dateFilter === '' || item.date === dateFilter;
    const matchesProject = projectFilter === '' || item.project === projectFilter;
    const matchesInstansi = idInstansiFilter === '' || item.instansi === idInstansiFilter;
    const matchesDepartement = idDepartemenFilter === '' || item.departement === idDepartemenFilter;

    return matchesSearch && matchesStatus && matchesDate && matchesDepartement && matchesInstansi && matchesProject;
  });

  return (
    <div className="ml-72 pr-14 p-1 mt-[-12px] bg-white font-sans min-h-screen relative overflow-hidden">
      <h1 className="font-bold text-2xl mb-6">Approval Reimbursement</h1>

      <form className="w-full mb-3">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="ml-4 w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block h-10 w-full p-4 ps-14 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className="text-white absolute h-10 end-0 bottom-0 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="flex space-x-4 ">
        <select
          className="bg-gray-100 text-gray-500 font-medium border border-gray-400 rounded-md text-xs px-4 h-6"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          <option value="">Hari Terakhir</option>
          <option value="seminggu">7 hari terakhir</option>
          <option value="sebulan">30 hari terakhir</option>
          <option value="setahun">Setahun terakhir</option>
        </select>

        <select
          className="bg-gray-100 text-gray-500 font-medium border border-gray-400 rounded-md text-xs px-4 h-6"
          value={projectFilter}
          onChange={(e) => setProjectFilter(e.target.value)}
        >
          <option value="">Project</option>
          <option value="lorem">Lorem Ipsum</option>
          <option value="dolor">Dolor Sit Amet</option>
          <option value="consectetur">Consectetur adipiscing</option>
        </select>

        <select
          className="bg-gray-100 text-gray-500 font-medium border border-gray-400 rounded-md text-xs px-4 h-6"
          value={idInstansiFilter}
          onChange={(e) => setIdInstansiFilter(e.target.value)}
        >
          <option value="">Instansi</option>
          <option value="quinsis">Quinsis Lintas Mitra</option>
          <option value="jetcoms">Jetcoms Netindo</option>
        </select>

        <select
          className="bg-gray-100 text-gray-500 font-medium border border-gray-400 rounded-md text-xs px-4 h-6"
          value={idDepartemenFilter}
          onChange={(e) => setIdDepartemenFilter(e.target.value)}
        >
          <option value="">Departemen</option>
          <option value="teknis">Teknisi</option>
          <option value="sales">Sales</option>
          <option value="qa">Quality Assurance</option>
        </select>

        <select
          className="bg-gray-100 text-gray-500 font-medium border border-gray-400 rounded-md text-xs px-4 h-6"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Status</option>
          <option value="Menunggu">Menunggu</option>
          <option value="Disetujui">Disetujui</option>
          <option value="Selesai">Selesai</option>
          <option value="Dibatalkan">Dibatalkan</option>
        </select>
      </div>

      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Judul Request</th>
              <th scope="col" className="px-6 py-3">Deskripsi</th>
              <th scope="col" className="px-6 py-3">Request Oleh</th>
              <th scope="col" className="px-6 py-3">Tanggal</th>
              <th scope="col" className="px-6 py-3">Jumlah Harga</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr
                key={item.project}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                onClick={() => navigate('/member/detailapproval')}
              >
                <th scope="row" className="px-6 py-4 font">
                  {item.project}
                </th>
                <td className="px-6 py-4">{item.instansi}</td>
                <td className="px-6 py-4">{item.departement}</td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.harga}</td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full text-white text-xs font-semibold p-2 ${
                      item.status === 'Menunggu'
                        ? 'bg-yellow-500'
                        : item.status === 'Disetujui'
                        ? 'bg-green-800'
                        : item.status === 'Dibatalkan'
                        ? 'bg-red-500'
                        : item.status === 'Selesai'
                        ? 'bg-blue-800'
                        : 'bg-gray-500'
                    }`}
                  >
                    {item.status}
                    {item.status === 'Disetujui' && (
                      <span className="font-normal ml-2">{item.approvalDate}</span>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovalMember;

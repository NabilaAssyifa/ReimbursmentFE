import React  from 'react';


const ProjectSV = () => {

  return (
    <div className="ml-72 pr-14 p-1 mt-[-12px] bg-white font-sans min-h-screen relative overflow-hidden">
      <div>
          <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Project</label>
          <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div class="mt-2 ">
          <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi Project</label>
          <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <form>
          <div class="grid gap-6 mt-2 md:grid-cols-2">
              <div>
                  <label for="first_project" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mulai Project</label>
                  <input type="date" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
              <div>
                  <label for="last_project" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Berakhir</label>
                  <input type="date" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
              </div>
            </div>
      </form>
      <div>
          <label for="small-input" class="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget Project</label>
          <input type="number" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div>
          <label for="small-input" class="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Manager</label>
          <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <button type="button" class="mt-5 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
      <hr className="my-4 border-gray-300"/>

      <h1 className="text-2xl font-bold mt-10 mb-5"  >Detail Project</h1>

      

      <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-56">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          Nama project
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Deskripsi Project
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Mulai Project
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Project Berakhir 
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Budget Project
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Project Manager
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Pembuatan Aplikasi Mobile Edukasi
                      </th>
                      <td class="px-6 py-4">
                          Project ini bertujuan untuk mengembangkan aplikasi mobile yang menyediakan materi edukasi interaktif untuk siswa tingkat dasar. Aplikasi ini akan mencakup berbagai topik seperti matematika, sains, dan bahasa Indonesia dengan metode pembelajaran yang menyenangkan.
                      </td>
                      <td class="px-6 py-4">
                          15/10/2024
                      </td>
                      <td class="px-6 py-4">
                          15/04/2025
                      </td>
                      <td class="px-6 py-4">
                          Rp 150.000.000
                      </td>
                      <td class="px-6 py-4">
                          Ahmad Ridwan
                      </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Sistem Informasi Manajemen Rumah Sakit
                      </th>
                      <td class="px-6 py-4">
                          Proyek ini bertujuan untuk membangun sistem informasi yang terintegrasi untuk manajemen rumah sakit, termasuk pendaftaran pasien, jadwal dokter, dan rekam medis elektronik.
                      </td>
                      <td class="px-6 py-4">
                          01/11/2024
                      </td>
                      <td class="px-6 py-4">
                          01/11/2025
                      </td>
                      <td class="px-6 py-4">
                          Rp 200.000.000
                      </td>
                      <td class="px-6 py-4">
                          Siti Nurhaliza
                      </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Website E-Commerce Fashion
                      </th>
                      <td class="px-6 py-4">
                          Membangun website e-commerce untuk menjual produk fashion dengan fitur keranjang belanja, pembayaran online, dan sistem pengiriman otomatis.
                      </td>
                      <td class="px-6 py-4">
                          05/09/2024
                      </td>
                      <td class="px-6 py-4">
                          05/03/2025
                      </td>
                      <td class="px-6 py-4">
                          Rp 100.000.000
                      </td>
                      <td class="px-6 py-4">
                          Budi Santoso
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>

    
  );
};



export default ProjectSV;

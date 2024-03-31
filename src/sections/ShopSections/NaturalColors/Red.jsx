import { useState } from 'react'
import { motion } from 'framer-motion'

// Images
import Beetroot from "../../../assets/Natural Color/Red/Beetroot.png"
import BlackCarrot from "../../../assets/Natural Color/Red/Black Carrot.png"
import Carmine from "../../../assets/Natural Color/Red/Carmine.jpg"
import red from "../../../assets/Natural Color/Red/img_2-2.jpg"
import RedRadish from "../../../assets/Natural Color/Red/Red Raddish.jpg"
import SweetPotato from "../../../assets/Natural Color/Red/SweetPotato.jpg"

// Image-Table
import table from "../../../assets/Natural Color/Table/RedTable.png"

export default function Red() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex flex-col justify-center items-center mb-4 sm:mb-14" >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-4xl font-bold text-[#EF3D31]" > Red </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex flex-col gap-4 p-2" >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex flex-wrap justify-center items-center gap-4" >
          <div className="sm:w-40 w-32 h-[140px]">
            <img src={Beetroot} alt='Beetroot' className='w-full h-full object-cover' />
          </div>
          <div className="sm:w-40 w-32 h-[140px]">
            <img src={BlackCarrot} alt='Black Carrot' className='w-full h-full object-cover' />
          </div>
          <div className="sm:w-40 w-32 h-[140px]">
            <img src={Carmine} alt='Carmine' className='w-full h-full object-cover' />
          </div>
          <div className="sm:w-40 w-32 h-[140px]">
            <img src={red} alt='red' className='w-full h-full object-cover' />
          </div>
          <div className="sm:w-40 w-32 h-[140px]">
            <img src={RedRadish} alt='Red Radish' className='w-full h-full object-cover' />
          </div>
          <div className="sm:w-40 w-32 h-[140px]">
            <img src={SweetPotato} alt='Sweet Potato' className='w-full h-full object-cover' />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="flex flex-col w-full justify-center items-center" >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} >
            <p className="py-2">Red shades vary from a deep pink to an intense deep red hue which are naturally suited for a wide range of applications in the food and beverage industry. The raw ingredients used by Plant Lipids to achieve these red hues are derived from a variety of sources including Beetroot, Carmine, Monascus, & Anthocyanin based products including  Black Carrot, Red Radish and Purple Sweet potato.</p>
            <p className="py-2">Our formulations are designed with you, the customer in mind, so whatever your application – savoury, ready meals, sauces, beverages, confectionery or dairy, we have the perfect, tailor-made products, to deliver these shades.</p>
          </motion.div>
          
        </motion.div>
        <div className='hidden sm:flex justify-center items-center'>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="overflow-x-auto">
            <table className="table-fixed border-collapse border border-slate-500">
              <thead className="bg-slate-300 ">
                <tr>
                  <th rowSpan={2} className="border border-slate-600 w-36">Product Name</th>
                  <th rowSpan={2} className="border border-slate-600 w-36">Solubility</th>
                  <th rowSpan={2} className="border border-slate-600 w-36">Form</th>
                  <th colSpan={3} className="border border-slate-600">Stability</th>
                  <th rowSpan={2} className="border border-slate-600 w-[700px]">Typical Applications</th>
                </tr>
                <tr>
                  <th className="border border-slate-600 w-[54px]">pH</th>
                  <th className="border border-slate-600 w-[54px]">Heat</th>
                  <th className="border border-slate-600 w-[54px]">Light</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold" rowSpan={2}>Betanin<br/>(Beetroot)</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid / Powder</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Dairy, Bakery, Confectionery, Beverage, Sauces, Seasoning, Snacks</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Oil Soluble</td>
                  <td className="border border-slate-600">Liquid</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Fats & Oils</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Anthocyanin<br/>(Red Raddish)</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid / Powder</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Bakery, Confectionery, Beverages, Sauces, Curries, Extruded Snacks</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Anthocyanin<br/>(Black Carrot, Sweet Potato)</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid / Powder</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">	Bakery, Confectionery, Beverages, Sauces, Curries, Extruded Snacks</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Carmine</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid / Powder</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600 text-start p-2">Meat, Poultry, Sea Foods, Sauces, Curries, Extruded Snacks, Bakery & Confectionery</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Monascus Red</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid / Powder</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Bakery, Meat, Poultry, Seasoning, Sauces, Curries, Extruded Snacks</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="sm:hidden flex flex-col gap-10">
          <div className="flex justify-center items-center pb-2" >
            <button onClick={() => setSelectedImage(!selectedImage)} className="bg-slate-500 text-white py-2 px-4 rounded-md">{selectedImage ? <div>Close Table</div> : <div>View Table</div>}</button>
          </div>
          {selectedImage && (
            <img src={table} alt="table" className="w-full h-full object-cover scale-105" />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

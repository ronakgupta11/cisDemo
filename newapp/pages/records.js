import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Table } from 'flowbite-react'
function Records() {


const [data,setData] = useState([])
  

useEffect(()=>{

  async function getData(){
    const options = {
      method: 'POST',
      url: 'https://rto-vehicle-details.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'd9efa9367amsh7c3c16e9f65adffp124cb8jsne909ea9804c5',
        'X-RapidAPI-Host': 'rto-vehicle-details.p.rapidapi.com'
      },
      data: {
        vehicleId: 'rj45ch2949'
      }
    };
    
    try {
      // const response = await axios.request(options);
      console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
    }
  

  }

  getData().then(v=>{

  
    console.log(v)
    setData(v)})
  

},[])





  return (
    <div className='p-8'>

<h1 className='text-white font-bold text-center text-3xl'>
        Records
        </h1>
        <div className='m-4' >
        <Table>
      <Table.Head>
        <Table.HeadCell>
          Vehicle No
        </Table.HeadCell>
        <Table.HeadCell>
          Type
        </Table.HeadCell>
        <Table.HeadCell>
          Color
        </Table.HeadCell>
        <Table.HeadCell>
          Owner
        </Table.HeadCell>
        <Table.HeadCell>
          Address
        </Table.HeadCell>
        <Table.HeadCell>
          Time Captured
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {/* {data.regNo} */}
            RJ45CH2949
          </Table.Cell>
          <Table.Cell>
            {/* {data.vehicleClass} */}
            MOTOR VEHICLE LMV
          </Table.Cell>
          <Table.Cell>
            {/* {data.vehicleColor} */}
            WHITE ORCHID PEARL
          </Table.Cell>
          <Table.Cell>
            {/* {data.owner} */}
            RAJENDRA PRASAD YADAV
          </Table.Cell>
          <Table.Cell>
            {/* {data.presentAddress} */}
            B-238 MALVIYA NAGAR Jaipur Rajasthan 302017

          </Table.Cell>
          <Table.Cell>
           
              
                07:54:33
              
            
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {/* {data.regNo} */}
            RJ14YC1102
          </Table.Cell>
          <Table.Cell>
            {/* {data.vehicleClass} */}
            Motor Car(LMV)
          </Table.Cell>
          <Table.Cell>
            {/* {data.vehicleColor} */}
            2 TONE PHANTOM BLAC
          </Table.Cell>
          <Table.Cell>
            {/* {data.owner} */}
            PANKAJ SINGH
          </Table.Cell>
          <Table.Cell>
            {/* {data.presentAddress} */}
            200 JAI JAWAN COLONY IST TONK ROAD Jaipur Rajasthan 302015

          </Table.Cell>
          <Table.Cell>
           
              
                07:54:38
              
            
          </Table.Cell>
        </Table.Row>

      </Table.Body>
    </Table>
        </div>
    </div>
  )
}

export default Records

// data = {
//   "regNo": "RJ45CH2949",
//   "vehicleClass": "Motor Car(LMV)",
//   "chassis": "MAKGL173EK4030340",
//   "engine": "L12B43039824",
//   "vehicleManufacturerName": "HONDA CARS INDIA LTD",
//   "model": "WR-V 1.2 VX MT (I-VTEC)",
//   "vehicleColour": "WHITE ORCHID PEARL",
//   "type": "PETROL",
//   "normsType": "BHARAT STAGE IV",
//   "bodyType": "HATCHBACK",
//   "ownerCount": "1",
//   "owner": "RAJENDRA PRASAD YADAV",
//   "ownerFatherName": "SUKH LAL YADAV",
//   "mobileNumber": null,
//   "status": "ACTIVE",
//   "statusAsOn": "23-Aug-2023",
//   "regAuthority": "JAIPUR (FIRST) RTO, Rajasthan",
//   "regDate": "12-Jul-2019",
//   "vehicleManufacturingMonthYear": "5/2019",
//   "rcExpiryDate": "11-Jul-2034",
//   "vehicleTaxUpto": null,
//   "vehicleInsuranceCompanyName": "Universal Sompo General Insurance  Co. Ltd.",
//   "vehicleInsuranceUpto": "07-Jul-2024",
//   "vehicleInsurancePolicyNumber": null,
//   "rcFinancer": null,
//   "presentAddress": "B-238 MALVIYA NAGAR Jaipur Rajasthan 302017",
//   "permanentAddress": "B-238 MALVIYA NAGAR Jaipur Rajasthan 302017",
//   "vehicleCubicCapacity": "1199",
//   "grossVehicleWeight": "1479",
//   "unladenWeight": "1104",
//   "vehicleCategory": "LMV",
//   "rcStandardCap": "0",
//   "vehicleCylindersNo": "4",
//   "vehicleSeatCapacity": "5",
//   "vehicleSleeperCapacity": "0",
//   "vehicleStandingCapacity": "0",
//   "wheelbase": "2555",
//   "vehicleNumber": "RJ45CH2949",
//   "puccNumber": null,
//   "puccUpto": "31-May-2024",
//   "blacklistStatus": "NA",
//   "blacklistDetails": [
//     "NA"
//   ],
//   "permitIssueDate": null,
//   "permitNumber": null,
//   "permitType": null,
//   "permitValidFrom": null,
//   "permitValidUpto": null,
//   "nonUseStatus": null,
//   "nonUseFrom": null,
//   "nonUseTo": null,
//   "nationalPermitNumber": null,
//   "nationalPermitUpto": null,
//   "nationalPermitIssuedBy": null,
//   "isCommercial": false,
//   "nocDetails": "NA",
//   "dbResult": true,
//   "partialData": true,
//   "mmvResponse": null,
//   "financed": null
// }



// {
//   "regNo": "RJ14YC1102",
//   "vehicleClass": "Motor Car(LMV)",
//   "chassis": "MALC381ULGM195613",
//   "engine": "D4FBGM229507",
//   "vehicleManufacturerName": "HYUNDAI MOTOR INDIA LTD",
//   "model": "CRETA 1.6 CRDI SX+ SE",
//   "vehicleColour": "2 TONE (PHANTOM BLAC",
//   "type": "DIESEL",
//   "normsType": "BHARAT STAGE IV",
//   "bodyType": "STATION WAGON",
//   "ownerCount": "1",
//   "owner": "PANKAJ SINGH",
//   "ownerFatherName": "VIJAY PAL SINGH",
//   "mobileNumber": null,
//   "status": "ACTIVE",
//   "statusAsOn": "20-Aug-2023",
//   "regAuthority": "JAIPUR (FIRST) RTO, Rajasthan",
//   "regDate": "09-Feb-2017",
//   "vehicleManufacturingMonthYear": "12/2016",
//   "rcExpiryDate": "08-Feb-2032",
//   "vehicleTaxUpto": null,
//   "vehicleInsuranceCompanyName": "Acko General Insurance Limited",
//   "vehicleInsuranceUpto": "07-Feb-2024",
//   "vehicleInsurancePolicyNumber": null,
//   "rcFinancer": null,
//   "presentAddress": "200 JAI JAWAN COLONY IST TONK ROAD Jaipur Rajasthan 302015",
//   "permanentAddress": "200 JAI JAWAN COLONY IST TONK ROAD Jaipur Rajasthan 302015",
//   "vehicleCubicCapacity": "1582",
//   "grossVehicleWeight": "1790",
//   "unladenWeight": "1346",
//   "vehicleCategory": "LMV",
//   "rcStandardCap": "0",
//   "vehicleCylindersNo": "4",
//   "vehicleSeatCapacity": "5",
//   "vehicleSleeperCapacity": "0",
//   "vehicleStandingCapacity": "0",
//   "wheelbase": "2590",
//   "vehicleNumber": "RJ14YC1102",
//   "puccNumber": null,
//   "puccUpto": "14-Mar-2023",
//   "blacklistStatus": "NA",
//   "blacklistDetails": [
//     "NA"
//   ],
//   "permitIssueDate": null,
//   "permitNumber": null,
//   "permitType": null,
//   "permitValidFrom": null,
//   "permitValidUpto": null,
//   "nonUseStatus": null,
//   "nonUseFrom": null,
//   "nonUseTo": null,
//   "nationalPermitNumber": null,
//   "nationalPermitUpto": null,
//   "nationalPermitIssuedBy": null,
//   "isCommercial": false,
//   "nocDetails": "NA",
//   "dbResult": true,
//   "partialData": true,
//   "mmvResponse": null,
//   "financed": null
// }
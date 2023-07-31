const trips = [
  {
    id: 1,
    cargoOwner: 'generador-carga@example.com',
    cargoDescription: 'Carga de periodicos',
    typeService: 'Luv (800 Kl – 1,4 Ton Vol.-Max 1,85-3,15-1,9)',
    cargoType: 'Granel sólido',
    cargoImage1:
      'https://www.transcocargo.com.au/wp-content/uploads/2023/02/The-Future-of-Cargo-Transportation-and-Logistics-1.jpg',
    cargoImage2:
      'https://www.transcocargo.com.au/wp-content/uploads/2023/02/The-Future-of-Cargo-Transportation-and-Logistics-1.jpg',
    typeVehicle: 'Estacas',
    declaredAmount: 1000000,
    weight: 500,
    serviceObservations: 'Sin observaciones',
    originDateTime: '2023-07-26',
    dispacherName: 'David Sarria - La 14',
    dispacherId: '1130611204',
    dispacherPhone: '3156507322',
    dispacherEmail: 'dispacher@example.com',
    originState: 'Valle del Cauca',
    originCity: 'Cali',
    originAdress: 'Carrera 32B # 35 - 82',
    loadHours: 3,
    loadCrew: true,
    unloadHours: 3,
    unloadCrew: true,
    destinationDateTime: '2023-07-26',
    recipientName: 'Mateo Cardona - La 14',
    recipientId: '1113611204',
    recipientPhone: '3156507325',
    recipientEmail: 'recipient@example.com',
    destinationState: 'Valle del Cauca',
    destinationCity: 'Cali',
    destinationAdress: 'Calle 1BN # 44 - 35',
    amountOffered: 1000000,
    tripState: 'Pendiente asignar'
  },
  {
    id: 2,
    cargoOwner: 'generador-carga@example.com',
    cargoDescription: 'Carga de periodicos',
    typeService: 'Luv (800 Kl – 1,4 Ton Vol.-Max 1,85-3,15-1,9)',
    cargoType: 'Granel sólido',
    cargoImage1:
      'https://www.transcocargo.com.au/wp-content/uploads/2023/02/The-Future-of-Cargo-Transportation-and-Logistics-1.jpg',
    cargoImage2:
      'https://www.transcocargo.com.au/wp-content/uploads/2023/02/The-Future-of-Cargo-Transportation-and-Logistics-1.jpg',
    typeVehicle: 'Estacas',
    declaredAmount: 1000000,
    weight: 500,
    serviceObservations: 'Sin observaciones',
    originDateTime: '2023-07-27',
    dispacherName: 'David Sarria - La 14',
    dispacherId: '1130611204',
    dispacherPhone: '3156507322',
    dispacherEmail: 'dispacher@example.com',
    originState: 'Valle del Cauca',
    originCity: 'Cali',
    originAdress: 'Carrera 32B # 35 - 82',
    loadHours: 3,
    loadCrew: true,
    unloadHours: 3,
    unloadCrew: true,
    destinationDateTime: '2023-07-27',
    recipientName: 'Mateo Cardona - La 14',
    recipientId: '1113611204',
    recipientPhone: '3156507325',
    recipientEmail: 'recipient@example.com',
    destinationState: 'Valle del Cauca',
    destinationCity: 'Cali',
    destinationAdress: 'Calle 1BN # 44 - 35',
    amountOffered: 2000000,
    tripState: 'Asignado'
  },
  {
    id: 3,
    cargoOwner: 'generador-carga@example.com',
    cargoDescription: 'Carga de periodicos',
    typeService: 'Luv (800 Kl – 1,4 Ton Vol.-Max 1,85-3,15-1,9)',
    cargoType: 'Granel sólido',
    cargoImage1:
      'https://www.transcocargo.com.au/wp-content/uploads/2023/02/The-Future-of-Cargo-Transportation-and-Logistics-1.jpg',
    cargoImage2:
      'https://www.transcocargo.com.au/wp-content/uploads/2023/02/The-Future-of-Cargo-Transportation-and-Logistics-1.jpg',
    typeVehicle: 'Estacas',
    declaredAmount: 1000000,
    weight: 500,
    serviceObservations: 'Sin observaciones',
    originDateTime: '2023-07-28',
    dispacherName: 'David Sarria - La 14',
    dispacherId: '1130611204',
    dispacherPhone: '3156507322',
    dispacherEmail: 'dispacher@example.com',
    originState: 'Valle del Cauca',
    originCity: 'Cali',
    originAdress: 'Carrera 32B # 35 - 82',
    loadHours: 3,
    loadCrew: true,
    unloadHours: 3,
    unloadCrew: true,
    destinationDateTime: '2023-07-28',
    recipientName: 'Mateo Cardona - La 14',
    recipientId: '1113611204',
    recipientPhone: '3156507325',
    recipientEmail: 'recipient@example.com',
    destinationState: 'Valle del Cauca',
    destinationCity: 'Cali',
    destinationAdress: 'Calle 1BN # 44 - 35',
    amountOffered: 3000000,
    tripState: 'Asignado'
  },
  {
    id: 4,
    cargoOwner: 'generador-carga@example.com',
    cargoDescription: 'Carga de periodicos',
    typeService: 'Luv (800 Kl – 1,4 Ton Vol.-Max 1,85-3,15-1,9)',
    cargoType: 'Granel sólido',
    cargoImage1:
      'https://www.transcocargo.com.au/wp-content/uploads/2023/02/The-Future-of-Cargo-Transportation-and-Logistics-1.jpg',
    cargoImage2:
      'https://www.transcocargo.com.au/wp-content/uploads/2023/02/The-Future-of-Cargo-Transportation-and-Logistics-1.jpg',
    typeVehicle: 'Estacas',
    declaredAmount: 1000000,
    weight: 500,
    serviceObservations: 'Sin observaciones',
    originDateTime: '2023-07-28',
    dispacherName: 'David Sarria - La 14',
    dispacherId: '1130611204',
    dispacherPhone: '3156507322',
    dispacherEmail: 'dispacher@example.com',
    originState: 'Valle del Cauca',
    originCity: 'Cali',
    originAdress: 'Carrera 32B # 35 - 82',
    loadHours: 3,
    loadCrew: true,
    unloadHours: 3,
    unloadCrew: true,
    destinationDateTime: '2023-07-28',
    recipientName: 'Mateo Cardona - La 14',
    recipientId: '1113611204',
    recipientPhone: '3156507325',
    recipientEmail: 'recipient@example.com',
    destinationState: 'Valle del Cauca',
    destinationCity: 'Cali',
    destinationAdress: 'Calle 1BN # 44 - 35',
    amountOffered: 3000000,
    tripState: 'Asignado'
  },
  {
    id: 5,
    cargoOwner: 'generador-carga@example.com',
    cargoDescription: 'Carga de periodicos',
    typeService: 'Luv (800 Kl – 1,4 Ton Vol.-Max 1,85-3,15-1,9)',
    cargoType: 'Granel sólido',
    cargoImage1:
      'https://www.transcocargo.com.au/wp-content/uploads/2023/02/The-Future-of-Cargo-Transportation-and-Logistics-1.jpg',
    cargoImage2:
      'https://www.transcocargo.com.au/wp-content/uploads/2023/02/The-Future-of-Cargo-Transportation-and-Logistics-1.jpg',
    typeVehicle: 'Estacas',
    declaredAmount: 1000000,
    weight: 500,
    serviceObservations: 'Sin observaciones',
    originDateTime: '2023-07-28',
    dispacherName: 'David Sarria - La 14',
    dispacherId: '1130611204',
    dispacherPhone: '3156507322',
    dispacherEmail: 'dispacher@example.com',
    originState: 'Valle del Cauca',
    originCity: 'Cali',
    originAdress: 'Carrera 32B # 35 - 82',
    loadHours: 3,
    loadCrew: true,
    unloadHours: 3,
    unloadCrew: true,
    destinationDateTime: '2023-07-28',
    recipientName: 'Mateo Cardona - La 14',
    recipientId: '1113611204',
    recipientPhone: '3156507325',
    recipientEmail: 'recipient@example.com',
    destinationState: 'Valle del Cauca',
    destinationCity: 'Cali',
    destinationAdress: 'Calle 1BN # 44 - 35',
    amountOffered: 3000000,
    tripState: 'Asignado'
  },
  {
    id: 6,
    cargoOwner: 'generador-carga@example.com',
    cargoDescription: 'Carga de periodicos',
    typeService: 'Luv (800 Kl – 1,4 Ton Vol.-Max 1,85-3,15-1,9)',
    cargoType: 'Granel sólido',
    cargoImage1:
      'https://www.transcocargo.com.au/wp-content/uploads/2023/02/The-Future-of-Cargo-Transportation-and-Logistics-1.jpg',
    cargoImage2:
      'https://www.transcocargo.com.au/wp-content/uploads/2023/02/The-Future-of-Cargo-Transportation-and-Logistics-1.jpg',
    typeVehicle: 'Estacas',
    declaredAmount: 1000000,
    weight: 500,
    serviceObservations: 'Sin observaciones',
    originDateTime: '2023-07-28',
    dispacherName: 'David Sarria - La 14',
    dispacherId: '1130611204',
    dispacherPhone: '3156507322',
    dispacherEmail: 'dispacher@example.com',
    originState: 'Valle del Cauca',
    originCity: 'Cali',
    originAdress: 'Carrera 32B # 35 - 82',
    loadHours: 3,
    loadCrew: true,
    unloadHours: 3,
    unloadCrew: true,
    destinationDateTime: '2023-07-28',
    recipientName: 'Mateo Cardona - La 14',
    recipientId: '1113611204',
    recipientPhone: '3156507325',
    recipientEmail: 'recipient@example.com',
    destinationState: 'Valle del Cauca',
    destinationCity: 'Cali',
    destinationAdress: 'Calle 1BN # 44 - 35',
    amountOffered: 3000000,
    tripState: 'Asignado'
  }
];

export default trips;
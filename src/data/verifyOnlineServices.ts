import { masterOnlineServicesInventory } from './featureRegistry';

const requiredServices = [
  'All India Tourist Permit',
  'Driving Licence Related Services',
  'National Permit Authorization',
  'Permit Related Services',
  'Vahan Green Sewa',
  'Vehicle Scrapping',
  'CNG Maker',
  'Fancy Number Booking',
  'National Transport Repository',
  'SLD Maker',
  'Vehicle Fitness Testing',
  'eChallan',
  'Checkpost Tax',
  'Homologation',
  'PUCC',
  'Trade Certificate',
  'Vehicle Recall',
  'Dealer Authorization Certificate',
  'NR Services',
  'Paid NR Services',
  'VLTD Maker',
  'Vehicle Related Services'
];

console.log('================================================================');
console.log('PROGRAMMATIC FEATURE COMPLETENESS TEST — PARIVAHAN ONLINE SERVICES');
console.log('================================================================');

let missingCount = 0;
const results: { name: string; found: boolean; route: string; status: string; category: string }[] = [];

for (const reqName of requiredServices) {
  const item = masterOnlineServicesInventory.find(
    (s) => s.name.toLowerCase().trim() === reqName.toLowerCase().trim()
  );
  if (item) {
    results.push({
      name: item.name,
      found: true,
      route: item.route,
      status: item.status,
      category: item.category
    });
  } else {
    missingCount++;
    results.push({
      name: reqName,
      found: false,
      route: 'N/A',
      status: 'MISSING',
      category: 'N/A'
    });
  }
}

console.table(results);
console.log(`Total Required Services: ${requiredServices.length}`);
console.log(`Total Found in Registry: ${results.filter((r) => r.found).length}`);
console.log(`Total Missing: ${missingCount}`);

if (missingCount === 0 && masterOnlineServicesInventory.length === 22) {
  console.log('✅ ALL 22 VERIFIED ONLINE SERVICES ARE PRESENT AND VALIDATED (Missing = 0)');
} else {
  console.error('❌ VALIDATION FAILED: Missing items or count mismatch');
  throw new Error('Validation failed');
}

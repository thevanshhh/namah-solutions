/**
 * Namah Solutions — Master Data Model
 * Ahmedabad, Kathwada, Gujarat, India
 */

export const COMPANY = {
  name: "Namah Solutions",
  tagline: "Machine shop & Engineering Works",
  established: 2008,
  yearsInOperation: "18+",
  proprietor: "Management Team & Works Director",
  gst: "24AAACG1092F1ZK",
  phoneDisplay: "+91 99099 80808",
  phoneRaw: "+919909980808",
  waNumber: "919909980808",
  email: "contact@namahsolutions.in",
  address: "35, Vishwakarma Estate Kathwada-Singarva Road B/h, Kathwada GIDC, Kathwada, Ahmedabad, Gujarat 382430, India",
  addressShort: "Ahmedabad, Kathwada, Gujarat",
  coordinates: "23.0225° N, 72.5714° E",
  businessType: "Manufacturer · Supplier · Industrial Services",
  teamSize: "20+",
  compliance: "ISO 9001:2015 Compliant Industrial Facility",
  heroImage: "assets/img/01.jpg",
  aboutImage: "assets/img/05.jpg"
};

export const CATALOG = [
  {
    "id": "namah-solutions-cnc-machining",
    "code": "MFG-01",
    "name": "Precision CNC Turning & VMC Milling Components",
    "category": "Precision Machining",
    "spec": "High-tolerance machined components for automotive, industrial machinery, and engineering assemblies.",
    "specsList": [
      {
        "label": "Machining Accuracy",
        "val": "\u00b1 0.005 mm (5 Microns)"
      },
      {
        "label": "Turning Capacity",
        "val": "Dia 10 mm to 450 mm \u00d7 1000 mm Length"
      },
      {
        "label": "Materials",
        "val": "SS 304/316, Alloy Steel (EN8/EN19/EN24), Brass"
      },
      {
        "label": "Inspection",
        "val": "CMM Verified with Quality Test Certificates"
      }
    ],
    "price": "\u20b995,000",
    "priceUnit": "/ batch"
  },
  {
    "id": "namah-solutions-tool-die",
    "code": "MFG-02",
    "name": "Custom Industrial Jigs, Fixtures & Dies",
    "category": "Tool & Die",
    "spec": "Engineered tooling, progressive press dies, and precision inspection fixtures tailored to production lines.",
    "specsList": [
      {
        "label": "Die Steel Grades",
        "val": "D2, D3, H13 Vacuum Hardened (HRC 58-62)"
      },
      {
        "label": "Process",
        "val": "Wire EDM, CNC Milling & Surface Grinding"
      },
      {
        "label": "Life Expectancy",
        "val": "1,000,000+ Cycles Certified"
      },
      {
        "label": "Delivery",
        "val": "Rapid Prototyping & Production Tooling"
      }
    ],
    "price": "\u20b91,50,000",
    "priceUnit": "/ set"
  },
  {
    "id": "namah-solutions-spares-assemblies",
    "code": "MFG-03",
    "name": "Custom Industrial Machinery Assemblies & Spares",
    "category": "Industrial Spares",
    "spec": "Precision shafts, hardened gears, couplings, and mechanical assemblies built to OEM specifications.",
    "specsList": [
      {
        "label": "Heat Treatment",
        "val": "Case Carburizing / Induction Hardening"
      },
      {
        "label": "Surface Finish",
        "val": "Ra 0.4 \u00b5m Cylindrical Ground"
      },
      {
        "label": "Dynamic Balancing",
        "val": "ISO 1940 G1.0 Specification"
      },
      {
        "label": "Traceability",
        "val": "100% Material Test & Heat Code Reports"
      }
    ],
    "price": "\u20b948,000",
    "priceUnit": "/ lot"
  }
];

export function getWhatsAppInquiryUrl(machine, customMessage = "") {
  let text = "";
  if (machine) {
    const priceText = machine.price ? ` (listed at ${machine.price})` : "";
    text = `Hello ${COMPANY.name}, I am interested in the ${machine.name}${priceText}. Please share technical catalog and commercial quotation.`;
  } else if (customMessage) {
    text = customMessage;
  } else {
    text = `Hello ${COMPANY.name}, I would like to request an RFQ quotation for your industrial product range.`;
  }
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(text)}`;
}

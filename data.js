export const CITIES = ["Chennai", "Bengaluru", "Coimbatore", "Madurai", "Salem", "Krishnagiri", "Hyderabad", "Kochi", "Mumbai", "Delhi"];
export const TIMES = ["06:00", "09:30", "13:15", "17:45", "20:30", "23:00"];

// perPerson: true = price x passengers, false = one price for the whole vehicle
export const SERVICES = {
  flight: { icon: "🛩", title: "Flight Booking", perPerson: true,
    items: [["IndiGo", 4200], ["Air India", 5100], ["Air Asia", 3800], ["Akasa Air", 3600], ["SpiceJet", 3400], ["Air Kerala", 3900]] },
  cab: { icon: "🚖", title: "Cab Booking", perPerson: false,
    items: [["Mini Hatchback", 600], ["Sedan", 900], ["SUV", 1400], ["Tempo Traveller", 2200], ["Premium Sedan", 1800], ["Luxury Car", 3500]] },
  bus: { icon: "🚌", title: "Bus Booking", perPerson: true,
    items: [["VP Travels", 500], ["SPS Travels", 700], ["Amarnath Travels", 900], ["DSP Travels", 400], ["SR Travels", 900], ["RR Travels", 800]] },
  train: { icon: "🚆", title: "Train Booking", perPerson: true,
    items: [["Vande Bharat", 1200], ["Shatabdi Express", 950], ["Chennai Mail", 450], ["Kovai Express", 380], ["Intercity Express", 300], ["Rajdhani", 1800]] },
};

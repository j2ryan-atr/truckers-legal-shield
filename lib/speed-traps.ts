export type SpeedTrap = {
  id: string;
  state: string; // 2-letter
  highway: string;
  area: string; // mile marker / segment
  nearby: string; // city / county
  issue: string;
  notes: string;
  updated: string; // ISO date
};

// Reported enforcement areas compiled from public corridors and driver reports.
// These are informational only and are NOT legal conclusions about any location.
export const SPEED_TRAPS: SpeedTrap[] = [
  { id: "i5-ca-grapevine", state: "CA", highway: "I-5", area: "MM 205–215 (Tejon Pass)", nearby: "Lebec / Kern County", issue: "Downgrade speed & brake-check enforcement", notes: "Steep grade with frequent CHP commercial enforcement.", updated: "2026-04-12" },
  { id: "i5-ca-buttonwillow", state: "CA", highway: "I-5", area: "MM 257 area", nearby: "Buttonwillow / Kern County", issue: "Commercial speed enforcement", notes: "Open straightaway, radar common near rest area.", updated: "2026-03-30" },
  { id: "i5-or-siskiyou", state: "OR", highway: "I-5", area: "MM 1–10 (Siskiyou Summit)", nearby: "Ashland / Jackson County", issue: "Grade & chain-law enforcement", notes: "Truck speed and brake checks in winter months.", updated: "2026-02-18" },
  { id: "i5-wa-jb/dupont", state: "WA", highway: "I-5", area: "MM 116–119", nearby: "DuPont / Pierce County", issue: "Speed & following-too-closely patrols", notes: "Congestion zone, aggressive lane-change enforcement.", updated: "2026-04-02" },
  { id: "i10-tx-vanhorn", state: "TX", highway: "I-10", area: "MM 135–140", nearby: "Van Horn / Culberson County", issue: "Speed enforcement (75→reduced zones)", notes: "Known DPS commercial patrol corridor.", updated: "2026-04-20" },
  { id: "i10-az-quartzsite", state: "AZ", highway: "I-10", area: "MM 17–20", nearby: "Quartzsite / La Paz County", issue: "Speed & commercial inspection", notes: "Inspection station and radar near town.", updated: "2026-03-15" },
  { id: "i10-la-atchafalaya", state: "LA", highway: "I-10", area: "MM 121–135 (Basin Bridge)", nearby: "Henderson / St. Martin Parish", issue: "Reduced-speed bridge enforcement", notes: "60 mph bridge limit strictly enforced.", updated: "2026-04-08" },
  { id: "i10-fl-madison", state: "FL", highway: "I-10", area: "MM 258–262", nearby: "Madison County", issue: "Rural speed enforcement", notes: "Frequent FHP commercial stops.", updated: "2026-02-25" },
  { id: "i15-nv-mesquite", state: "NV", highway: "I-15", area: "MM 118–122", nearby: "Mesquite / Clark County", issue: "Speed enforcement near AZ line", notes: "Heavy patrol on Vegas–Utah freight run.", updated: "2026-04-18" },
  { id: "i15-ca-baker", state: "CA", highway: "I-15", area: "MM 245–250", nearby: "Baker / San Bernardino County", issue: "Desert speed enforcement", notes: "Long grades, radar near rest stops.", updated: "2026-03-22" },
  { id: "i15-ut-cedarcity", state: "UT", highway: "I-15", area: "MM 57–62", nearby: "Cedar City / Iron County", issue: "Speed & port-of-entry checks", notes: "Inspection station with adjacent enforcement.", updated: "2026-04-05" },
  { id: "i15-mt-dillon", state: "MT", highway: "I-15", area: "MM 59–63", nearby: "Dillon / Beaverhead County", issue: "Rural speed enforcement", notes: "Open road, intermittent patrol.", updated: "2026-01-30" },
  { id: "i20-tx-cisco", state: "TX", highway: "I-20", area: "MM 330–335", nearby: "Cisco / Eastland County", issue: "Speed enforcement", notes: "DPS commercial patrols, reduced-speed transitions.", updated: "2026-03-28" },
  { id: "i20-la-minden", state: "LA", highway: "I-20", area: "MM 47–52", nearby: "Minden / Webster Parish", issue: "Speed & lane-use enforcement", notes: "Left-lane restriction enforcement reported.", updated: "2026-02-11" },
  { id: "i20-ga-augusta", state: "GA", highway: "I-20", area: "MM 190–196", nearby: "Augusta / Richmond County", issue: "Urban speed enforcement", notes: "Construction-zone speed reductions enforced.", updated: "2026-04-14" },
  { id: "i25-co-monument", state: "CO", highway: "I-25", area: "MM 161–163 (Monument Hill)", nearby: "Monument / El Paso County", issue: "Downgrade & chain-law enforcement", notes: "Truck brake checks and grade speed patrol.", updated: "2026-03-09" },
  { id: "i25-nm-raton", state: "NM", highway: "I-25", area: "MM 446–451 (Raton Pass)", nearby: "Raton / Colfax County", issue: "Grade speed enforcement", notes: "Steep pass near CO line, port of entry nearby.", updated: "2026-02-20" },
  { id: "i25-wy-cheyenne", state: "WY", highway: "I-25", area: "MM 7–12", nearby: "Cheyenne / Laramie County", issue: "Speed & wind-restriction enforcement", notes: "High-wind closures and speed patrol.", updated: "2026-04-01" },
  { id: "i35-tx-westmoreland", state: "TX", highway: "I-35", area: "MM 268–275", nearby: "Hillsboro / Hill County", issue: "Speed enforcement & split junction", notes: "I-35E/W split, frequent DPS presence.", updated: "2026-04-10" },
  { id: "i35-ok-pauls", state: "OK", highway: "I-35", area: "MM 70–75", nearby: "Pauls Valley / Garvin County", issue: "Speed enforcement", notes: "Reported OHP commercial patrols.", updated: "2026-03-05" },
  { id: "i35-ks-emporia", state: "KS", highway: "I-35", area: "MM 127–131", nearby: "Emporia / Lyon County", issue: "Turnpike speed enforcement", notes: "Toll corridor with active patrol.", updated: "2026-02-28" },
  { id: "i35-ia-ames", state: "IA", highway: "I-35", area: "MM 111–116", nearby: "Ames / Story County", issue: "Speed & work-zone enforcement", notes: "Seasonal construction speed reductions.", updated: "2026-04-16" },
  { id: "i40-az-kingman", state: "AZ", highway: "I-40", area: "MM 48–53", nearby: "Kingman / Mohave County", issue: "Grade & speed enforcement", notes: "Long grades west of town, radar common.", updated: "2026-03-12" },
  { id: "i40-nm-tucumcari", state: "NM", highway: "I-40", area: "MM 329–335", nearby: "Tucumcari / Quay County", issue: "Speed enforcement", notes: "Reduced-speed town transition.", updated: "2026-02-22" },
  { id: "i40-tx-amarillo", state: "TX", highway: "I-40", area: "MM 72–76", nearby: "Amarillo / Potter County", issue: "Urban speed enforcement", notes: "Frequent commercial stops near interchange.", updated: "2026-04-09" },
  { id: "i40-ar-westmemphis", state: "AR", highway: "I-40", area: "MM 277–280", nearby: "West Memphis / Crittenden County", issue: "Inspection & speed enforcement", notes: "Major inspection station and patrol zone.", updated: "2026-04-21" },
  { id: "i40-tn-jackson", state: "TN", highway: "I-40", area: "MM 79–85", nearby: "Jackson / Madison County", issue: "Speed & following-distance enforcement", notes: "THP commercial enforcement reported.", updated: "2026-03-18" },
  { id: "i40-nc-blackmtn", state: "NC", highway: "I-40", area: "MM 64–73 (Black Mountain)", nearby: "Black Mountain / Buncombe County", issue: "Steep downgrade enforcement", notes: "Runaway-truck grade, strict speed patrol.", updated: "2026-04-03" },
  { id: "i44-mo-lebanon", state: "MO", highway: "I-44", area: "MM 123–130", nearby: "Lebanon / Laclede County", issue: "Speed enforcement", notes: "Reported MSHP commercial patrols.", updated: "2026-03-01" },
  { id: "i44-ok-vinita", state: "OK", highway: "I-44", area: "MM 283–289", nearby: "Vinita / Craig County", issue: "Turnpike speed enforcement", notes: "Will Rogers Turnpike patrol.", updated: "2026-02-14" },
  { id: "i55-il-lincoln", state: "IL", highway: "I-55", area: "MM 123–129", nearby: "Lincoln / Logan County", issue: "Speed & lane enforcement", notes: "ISP commercial patrols reported.", updated: "2026-03-26" },
  { id: "i55-ms-grenada", state: "MS", highway: "I-55", area: "MM 204–210", nearby: "Grenada / Grenada County", issue: "Speed enforcement", notes: "Reduced-speed transitions near town.", updated: "2026-02-09" },
  { id: "i55-mo-sikeston", state: "MO", highway: "I-55", area: "MM 66–70", nearby: "Sikeston / Scott County", issue: "Speed & junction enforcement", notes: "I-55/I-57 split traffic enforcement.", updated: "2026-04-11" },
  { id: "i65-in-lafayette", state: "IN", highway: "I-65", area: "MM 168–175", nearby: "Lafayette / Tippecanoe County", issue: "Work-zone & speed enforcement", notes: "Recurring construction zones.", updated: "2026-04-07" },
  { id: "i65-ky-elizabethtown", state: "KY", highway: "I-65", area: "MM 91–94", nearby: "Elizabethtown / Hardin County", issue: "Speed enforcement", notes: "KSP commercial patrols reported.", updated: "2026-03-20" },
  { id: "i65-al-cullman", state: "AL", highway: "I-65", area: "MM 304–310", nearby: "Cullman / Cullman County", issue: "Speed enforcement", notes: "Rolling-hill radar zones.", updated: "2026-02-16" },
  { id: "i70-co-eisenhower", state: "CO", highway: "I-70", area: "MM 205–218 (Eisenhower Tunnel)", nearby: "Silverthorne / Summit County", issue: "Grade, chain-law & speed enforcement", notes: "Mandatory chain/traction laws, steep grades.", updated: "2026-04-19" },
  { id: "i70-ks-hays", state: "KS", highway: "I-70", area: "MM 157–161", nearby: "Hays / Ellis County", issue: "Speed enforcement", notes: "Open-road radar patrols.", updated: "2026-03-03" },
  { id: "i70-mo-columbia", state: "MO", highway: "I-70", area: "MM 124–130", nearby: "Columbia / Boone County", issue: "Speed & work-zone enforcement", notes: "Active reconstruction corridor.", updated: "2026-04-13" },
  { id: "i70-oh-zanesville", state: "OH", highway: "I-70", area: "MM 152–157", nearby: "Zanesville / Muskingum County", issue: "Speed enforcement", notes: "Hilly terrain, OSHP patrols.", updated: "2026-02-27" },
  { id: "i75-fl-alligator", state: "FL", highway: "I-75", area: "MM 32–51 (Alligator Alley)", nearby: "Naples / Collier County", issue: "Strict speed enforcement", notes: "70 mph limit, heavy FHP presence, fencing zone.", updated: "2026-04-22" },
  { id: "i75-ga-valdosta", state: "GA", highway: "I-75", area: "MM 11–18", nearby: "Valdosta / Lowndes County", issue: "Speed enforcement near FL line", notes: "Frequent commercial stops southbound.", updated: "2026-03-29" },
  { id: "i75-tn-jellico", state: "TN", highway: "I-75", area: "MM 144–160 (Jellico Mtn)", nearby: "Jellico / Campbell County", issue: "Steep grade enforcement", notes: "Runaway grades near KY line.", updated: "2026-04-04" },
  { id: "i75-oh-findlay", state: "OH", highway: "I-75", area: "MM 157–164", nearby: "Findlay / Hancock County", issue: "Speed & lane enforcement", notes: "OSHP commercial patrols.", updated: "2026-02-19" },
  { id: "i80-nv-winnemucca", state: "NV", highway: "I-80", area: "MM 173–178", nearby: "Winnemucca / Humboldt County", issue: "Speed enforcement", notes: "Reduced-speed town transition on long corridor.", updated: "2026-03-24" },
  { id: "i80-wy-elk", state: "WY", highway: "I-80", area: "MM 323–345 (Elk Mountain)", nearby: "Elk Mountain / Carbon County", issue: "Wind, ice & speed enforcement", notes: "Frequent closures and variable speed limits.", updated: "2026-04-17" },
  { id: "i80-ne-ogallala", state: "NE", highway: "I-80", area: "MM 122–126", nearby: "Ogallala / Keith County", issue: "Speed enforcement", notes: "NSP commercial patrols reported.", updated: "2026-03-07" },
  { id: "i80-ia-desmoines", state: "IA", highway: "I-80", area: "MM 120–126", nearby: "Des Moines / Polk County", issue: "Urban speed & lane enforcement", notes: "Congested metro segment.", updated: "2026-02-23" },
  { id: "i80-pa-snowshoe", state: "PA", highway: "I-80", area: "MM 145–161", nearby: "Snow Shoe / Centre County", issue: "Grade & speed enforcement", notes: "Long mountain grades, brake checks.", updated: "2026-04-06" },
  { id: "i81-va-wytheville", state: "VA", highway: "I-81", area: "MM 70–77", nearby: "Wytheville / Wythe County", issue: "Speed & following-distance enforcement", notes: "Heavy-truck corridor, VSP patrols.", updated: "2026-04-15" },
  { id: "i81-pa-harrisburg", state: "PA", highway: "I-81", area: "MM 65–72", nearby: "Harrisburg / Dauphin County", issue: "Speed & work-zone enforcement", notes: "Dense freight traffic and construction.", updated: "2026-03-11" },
  { id: "i81-tn-bristol", state: "TN", highway: "I-81", area: "MM 69–74", nearby: "Bristol / Sullivan County", issue: "Speed enforcement near VA line", notes: "THP commercial patrols.", updated: "2026-02-13" },
  { id: "i90-mt-bozeman", state: "MT", highway: "I-90", area: "MM 305–319 (Bozeman Pass)", nearby: "Bozeman / Gallatin County", issue: "Grade & winter speed enforcement", notes: "Steep pass, chain-up areas.", updated: "2026-03-17" },
  { id: "i90-sd-chamberlain", state: "SD", highway: "I-90", area: "MM 260–265", nearby: "Chamberlain / Brule County", issue: "Speed enforcement", notes: "River-valley grade, radar reported.", updated: "2026-02-08" },
  { id: "i90-mn-albertlea", state: "MN", highway: "I-90", area: "MM 154–159", nearby: "Albert Lea / Freeborn County", issue: "Speed & junction enforcement", notes: "I-90/I-35 junction patrols.", updated: "2026-03-31" },
  { id: "i90-ny-syracuse", state: "NY", highway: "I-90", area: "MM 280–284 (Thruway)", nearby: "Syracuse / Onondaga County", issue: "Toll-corridor speed enforcement", notes: "NYSP commercial patrols.", updated: "2026-04-02" },
  { id: "i95-ga-savannah", state: "GA", highway: "I-95", area: "MM 94–102", nearby: "Savannah / Chatham County", issue: "Speed enforcement", notes: "Heavy port-traffic corridor.", updated: "2026-04-20" },
  { id: "i95-sc-florence", state: "SC", highway: "I-95", area: "MM 160–170", nearby: "Florence / Florence County", issue: "Speed & following-distance enforcement", notes: "SCHP commercial patrols, known corridor.", updated: "2026-03-23" },
  { id: "i95-nc-lumberton", state: "NC", highway: "I-95", area: "MM 17–25", nearby: "Lumberton / Robeson County", issue: "Speed enforcement", notes: "Frequent stops near SC line.", updated: "2026-02-26" },
  { id: "i95-va-emporia", state: "VA", highway: "I-95", area: "MM 11–18", nearby: "Emporia / Greensville County", issue: "Strict speed enforcement", notes: "Well-known reduced-speed enforcement zone.", updated: "2026-04-18" },
  { id: "i95-md-baltimore", state: "MD", highway: "I-95", area: "MM 47–53", nearby: "Baltimore / Baltimore County", issue: "Urban speed & lane enforcement", notes: "Tunnel approaches, HazMat routing rules.", updated: "2026-03-14" },
  { id: "i95-ct-norwalk", state: "CT", highway: "I-95", area: "MM 14–20", nearby: "Norwalk / Fairfield County", issue: "Congestion & following-distance enforcement", notes: "Dense corridor, aggressive enforcement.", updated: "2026-02-10" },
  { id: "i85-nc-charlotte", state: "NC", highway: "I-85", area: "MM 35–45", nearby: "Charlotte / Mecklenburg County", issue: "Urban speed & lane enforcement", notes: "Heavy freight metro segment.", updated: "2026-03-27" },
  { id: "i85-ga-lavonia", state: "GA", highway: "I-85", area: "MM 173–178", nearby: "Lavonia / Franklin County", issue: "Speed enforcement near SC line", notes: "Reported commercial patrols.", updated: "2026-02-17" },
  { id: "i94-mt-glendive", state: "MT", highway: "I-94", area: "MM 211–216", nearby: "Glendive / Dawson County", issue: "Speed enforcement", notes: "Open corridor, intermittent patrol.", updated: "2026-01-28" },
  { id: "i94-wi-tomah", state: "WI", highway: "I-94", area: "MM 41–46", nearby: "Tomah / Monroe County", issue: "Speed & junction enforcement", notes: "I-90/94 junction patrols.", updated: "2026-03-08" },
  { id: "i94-mi-kalamazoo", state: "MI", highway: "I-94", area: "MM 74–80", nearby: "Kalamazoo / Kalamazoo County", issue: "Speed & work-zone enforcement", notes: "Recurring construction zones.", updated: "2026-04-01" },
  { id: "i24-tn-monteagle", state: "TN", highway: "I-24", area: "MM 134–140 (Monteagle)", nearby: "Monteagle / Marion County", issue: "Steep grade enforcement", notes: "Notorious 6% grade, strict truck speed.", updated: "2026-04-12" },
  { id: "i17-az-blackcanyon", state: "AZ", highway: "I-17", area: "MM 242–252", nearby: "Black Canyon City / Yavapai County", issue: "Grade & speed enforcement", notes: "Long climb out of Phoenix basin.", updated: "2026-03-19" },
  { id: "i26-nc-saluda", state: "NC", highway: "I-26", area: "MM 53–59 (Saluda Grade)", nearby: "Saluda / Polk County", issue: "Steep downgrade enforcement", notes: "Steepest mainline grade in the East.", updated: "2026-02-21" },
  { id: "i77-wv-flattop", state: "WV", highway: "I-77", area: "MM 28–40 (Flat Top Mtn)", nearby: "Ghent / Raleigh County", issue: "Grade & turnpike speed enforcement", notes: "Toll corridor with steep grades.", updated: "2026-03-25" },
  { id: "i68-md-savagemtn", state: "MD", highway: "I-68", area: "MM 22–34", nearby: "Frostburg / Allegany County", issue: "Steep grade enforcement", notes: "Big Savage Mountain runaway grades.", updated: "2026-02-12" },
  { id: "i84-or-cabbage", state: "OR", highway: "I-84", area: "MM 216–228 (Cabbage Hill)", nearby: "Pendleton / Umatilla County", issue: "Steep grade & speed enforcement", notes: "Deadman Pass descent, brake checks.", updated: "2026-04-09" },
  { id: "i84-id-bluecreek", state: "ID", highway: "I-84", area: "MM 7–15", nearby: "Burley / Cassia County", issue: "Speed enforcement", notes: "Open corridor radar patrols.", updated: "2026-03-04" },
  { id: "i90-wa-snoqualmie", state: "WA", highway: "I-90", area: "MM 52–62 (Snoqualmie Pass)", nearby: "Snoqualmie Pass / Kittitas County", issue: "Chain-law & speed enforcement", notes: "Mountain pass, traction laws enforced.", updated: "2026-04-16" },
  { id: "i15-az-virginriver", state: "AZ", highway: "I-15", area: "MM 9–22 (Virgin River Gorge)", nearby: "Littlefield / Mohave County", issue: "Canyon grade & speed enforcement", notes: "Narrow canyon, no shoulders, strict speed.", updated: "2026-04-23" },
  { id: "i5-ca-sacramento", state: "CA", highway: "I-5", area: "MM 518–524", nearby: "Sacramento / Sacramento County", issue: "Urban lane & speed enforcement", notes: "Truck-route and lane-restriction enforcement.", updated: "2026-03-13" },
  { id: "i10-tx-elpaso", state: "TX", highway: "I-10", area: "MM 18–24", nearby: "El Paso / El Paso County", issue: "Urban speed & inspection", notes: "Border-corridor commercial enforcement.", updated: "2026-02-24" },
  { id: "i70-ut-saltwash", state: "UT", highway: "I-70", area: "MM 100–115", nearby: "Green River / Emery County", issue: "Remote speed enforcement", notes: "Longest services gap in the system; radar reported.", updated: "2026-03-10" },
  { id: "i40-ok-okc", state: "OK", highway: "I-40", area: "MM 125–130", nearby: "Oklahoma City / Oklahoma County", issue: "Urban speed & lane enforcement", notes: "Crosstown freight corridor patrols.", updated: "2026-04-05" },
  { id: "i80-ca-donner", state: "CA", highway: "I-80", area: "MM 174–185 (Donner Summit)", nearby: "Truckee / Nevada County", issue: "Chain-law & grade speed enforcement", notes: "Mandatory chain controls in winter.", updated: "2026-04-21" }
];

export const SPEED_TRAP_COUNT = SPEED_TRAPS.length;

export const TRAP_HIGHWAYS = Array.from(new Set(SPEED_TRAPS.map((t) => t.highway))).sort(
  (a, b) => parseInt(a.replace("I-", ""), 10) - parseInt(b.replace("I-", ""), 10)
);

export const TRAP_STATES = Array.from(new Set(SPEED_TRAPS.map((t) => t.state))).sort();

export function trapsForState(abbr: string) {
  return SPEED_TRAPS.filter((t) => t.state === abbr);
}

export function trapsForHighway(hwy: string) {
  return SPEED_TRAPS.filter((t) => t.highway === hwy);
}

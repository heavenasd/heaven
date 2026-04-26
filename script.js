const QUESTIONS = [

  // 010 AIR LAW
  {topic:"010 – Air Law", q:"What is the outbound time for a standard holding pattern at or below 14,000 ft?", options:["30 seconds","1 minute","1 minute 30 seconds","2 minutes"], answer:1, exp:"Below 14,000 ft the outbound leg is 1 minute. Above 14,000 ft it extends to 1 minute 30 seconds."},
  {topic:"010 – Air Law", q:"ICAO maximum holding speed between 14,000 ft and 20,000 ft?", options:["230 kts","240 kts","265 kts","M0.83"], answer:1, exp:"14,000–20,000 ft: 240 kts. Below 14,000 ft: 230 kts. 20,000–34,000 ft: 265 kts. Above 34,000 ft: M0.83."},
  {topic:"010 – Air Law", q:"Buffer area extending beyond the boundary of a holding area:", options:["2.5 NM","3.0 NM","5.0 NM","10.0 NM"], answer:2, exp:"An additional buffer area extends 5.0 NM beyond the boundary of the holding area."},
  {topic:"010 – Air Law", q:"Zone of flexibility on either side of holding pattern entry sector boundaries:", options:["3°","5°","10°","15°"], answer:1, exp:"There is a zone of flexibility of 5° on either side of the sector boundaries for the three entry sectors."},
  {topic:"010 – Air Law", q:"An intercepted aircraft shall attempt radio contact on:", options:["118.0 MHz","121.5 MHz and 243 MHz","123.45 MHz","156.8 MHz"], answer:1, exp:"An intercepted aircraft shall immediately attempt radio contact on 121.5 MHz and 243 MHz."},
  {topic:"010 – Air Law", q:"An aircraft is maintaining its assigned level when SSR Mode C shows it is within:", options:["±100 ft","±200 ft","±300 ft","±500 ft"], answer:2, exp:"An aircraft is considered maintaining its assigned level as long as Mode C shows it is within ±300 ft."},
  {topic:"010 – Air Law", q:"MSA provides obstacle clearance of (non-mountainous area):", options:["500 ft","1000 ft","2000 ft","1500 ft"], answer:1, exp:"MSA provides 1000 ft obstacle clearance (2000 ft mountainous) within 25 NM of the navaid."},
  {topic:"010 – Air Law", q:"Maximum speed adjustment on final approach under radar control:", options:["±10 kt","±15 kt","±20 kt","±30 kt"], answer:2, exp:"Maximum speed adjustment on intermediate and final approach under radar control is ±20 kt."},
  {topic:"010 – Air Law", q:"Transponder code 7500 indicates:", options:["Aircraft in distress","Communication failure","Unlawful interference","Equipment failure"], answer:2, exp:"7700 = distress; 7600 = comm failure; 7500 = unlawful interference."},
  {topic:"010 – Air Law", q:"An AIP contains which three main parts?", options:["GEN, ENR, AD","GEN, NAV, WX","INTRO, ENR, NOTAM","AIR, ENR, AD"], answer:0, exp:"The AIP contains GEN (General), ENR (En-route) and AD (Aerodromes)."},
  {topic:"010 – Air Law", q:"VMC minimum visibility below 10,000 ft in Class C/D/E airspace:", options:["3 km","5 km","8 km","10 km"], answer:1, exp:"Below 10,000 ft in C/D/E: 5 km visibility, 300 m vertical / 1500 m horizontal from clouds."},
  {topic:"010 – Air Law", q:"IFR minimum over high terrain — obstacle clearance within 8 km:", options:["1000 ft","1500 ft","2000 ft","2500 ft"], answer:2, exp:"Over high terrain/mountainous: at least 2000 ft above highest obstacle within 8 km. Elsewhere: 1000 ft."},
  {topic:"010 – Air Law", q:"Same runway — light/medium following heavy — required departure separation:", options:["1 min","2 min","3 min","4 min"], answer:1, exp:"Same runway: light/medium behind heavy = 2 min. At an intersection: 3 min."},
  {topic:"010 – Air Law", q:"Arriving heavy following heavy — required radar separation:", options:["3 NM","4 NM","5 NM","6 NM"], answer:1, exp:"Arriving: heavy-heavy = 4 NM; heavy-medium = 5 NM; heavy-light = 6 NM."},
  {topic:"010 – Air Law", q:"Which ICAO Annex covers Aircraft Accident and Incident Investigation?", options:["Annex 11","Annex 12","Annex 13","Annex 14"], answer:2, exp:"Annex 13 = Accident and Incident Investigation. Annex 14 = Aerodromes."},
  {topic:"010 – Air Law", q:"Which ICAO Annex covers Personnel Licensing?", options:["Annex 1","Annex 2","Annex 3","Annex 6"], answer:0, exp:"Annex 1 = Personnel Licensing. Annex 2 = Rules of the Air."},
  {topic:"010 – Air Law", q:"Which ICAO Annex covers Safe Transport of Dangerous Goods by Air?", options:["Annex 15","Annex 16","Annex 17","Annex 18"], answer:3, exp:"Annex 18 = Dangerous Goods. Annex 17 = Security."},
  {topic:"010 – Air Law", q:"Holding pattern turns are made at 25° bank OR:", options:["Rate 1 (3°/sec) — whichever requires LESSER bank","Rate 2 (6°/sec) — whichever requires LESSER bank","Rate 1 (3°/sec) — whichever requires MORE bank","Rate 2 (6°/sec) — whichever requires MORE bank"], answer:0, exp:"25° bank OR rate 1 (3°/sec), whichever requires the lesser bank angle."},
  {topic:"010 – Air Law", q:"The approach segment between FAF and the runway/MAP is:", options:["Initial approach","Intermediate approach","Final approach","Missed approach"], answer:2, exp:"Final approach = FAF to runway/MAP. Max descent gradient CAT C/D/E: 6.1%. CAT II/III glidepath: 3.0°."},
  {topic:"010 – Air Law", q:"PAPI stands for:", options:["Precision Approach Path Indicator","Pilot Approach Position Instrument","Precision Altitude Point Indicator","Primary Approach Path Instrument"], answer:0, exp:"PAPI = Precision Approach Path Indicator. VASI = Visual Approach Slope Indicator."},
  {topic:"010 – Air Law", q:"MHA stands for:", options:["Maximum Holding Altitude","Minimum Holding Altitude","Mandatory Heading Avoidance","Minimum Height Above threshold"], answer:1, exp:"MHA = Minimum Holding Altitude — lowest altitude for a holding pattern ensuring navaid coverage and obstacle clearance."},
  {topic:"010 – Air Law", q:"MORA provides obstacle clearance within how many NM of the route centerline?", options:["5 NM","8 NM","10 NM","25 NM"], answer:2, exp:"MORA provides reference-point clearance within 10 NM of the route centerline."},
  {topic:"010 – Air Law", q:"Decision Altitude/Height (DA/H) is used in:", options:["Non-precision approaches only","Circling approaches","Precision approaches","All approach types equally"], answer:2, exp:"DA/H is used in precision approaches. MDA/MDH is used in non-precision and circling approaches."},
  {topic:"010 – Air Law", q:"ATS comprises how many services?", options:["2","3","4","5"], answer:1, exp:"ATS = 3 services: (1) Air Traffic Services, (2) Flight Information Service, (3) Alerting Service."},
  {topic:"010 – Air Law", q:"Aircraft white tail navigation light covers:", options:["110°","120°","140°","150°"], answer:2, exp:"Navigation lights: Red 110° (left), Green 110° (right), White 140° (tail)."},
  {topic:"010 – Air Law", q:"ICAO maximum holding speed above 34,000 ft:", options:["265 kts","280 kts","M0.80","M0.83"], answer:3, exp:"Above 34,000 ft the maximum holding speed is M0.83."},

  // 021 AIRCRAFT GENERAL KNOWLEDGE
  {topic:"021 – Aircraft General Knowledge", q:"Hydroplaning speed formula:", options:["Speed (kt) = 7 × √p(psi)","Speed (kt) = 9 × √p(psi)","Speed (kt) = 11 × √p(psi)","Speed (kt) = 6 × p(psi)"], answer:1, exp:"Hydroplaning speed (kt) = 9 × √p(psi). A320 tyre pressure 210–220 psi gives ~134 kt."},
  {topic:"021 – Aircraft General Knowledge", q:"Bypass ratio 4.8:1 means per 1 kg through core there is:", options:["4.8 kg bypass air","1 kg bypass air","0.48 kg bypass air","48 kg bypass air"], answer:0, exp:"BPR = mass flow bypassing core ÷ mass flow through core. BPR 4.8:1 → 4.8 kg bypass per 1 kg combusted."},
  {topic:"021 – Aircraft General Knowledge", q:"EPR (Engine Pressure Ratio) measures:", options:["Oil pressure ratio","Core exhaust vs. intake pressure — thrust measurement","N1 vs N2 speed ratio","Fan vs compressor pressure"], answer:1, exp:"EPR = core engine exhaust pressure compared to intake pressure — used as thrust measurement on Airbus."},
  {topic:"021 – Aircraft General Knowledge", q:"Secondary engine instruments are:", options:["EPR, EGT, N1, N2","Oil temp/pressure/quantity and vibration meter","Fuel flow and EGT","N1, N2 and fuel flow"], answer:1, exp:"Primary: EPR, EGT, N1, N2, fuel flow. Secondary: vibration meter, oil temperature/pressure/quantity."},
  {topic:"021 – Aircraft General Knowledge", q:"A compressor surge is:", options:["Slow EGT increase","Compressor stall affecting airflow through the ENTIRE engine","Momentary N2 overspeed","Fan blade separation"], answer:1, exp:"When a compressor stall affects airflow through the entire engine it is called a compressor surge."},
  {topic:"021 – Aircraft General Knowledge", q:"The critical engine is:", options:["Engine farthest from fuselage","The one whose failure causes most adverse handling/performance effects","Always the left engine","The highest-thrust engine"], answer:1, exp:"Critical engine = the one whose failure is most adverse. On clockwise props = left engine; counter-clockwise = right engine."},
  {topic:"021 – Aircraft General Knowledge", q:"A jet turbine engine is most efficient at:", options:["Low altitude, low rpm","Low altitude, high rpm","High altitude, low rpm","High altitude, high rpm (90–95%)"], answer:3, exp:"Jet engines most efficient at high altitude and high rpm (90–95%), giving best SFC and minimum cruise drag."},
  {topic:"021 – Aircraft General Knowledge", q:"TSFC = ?", options:["Fuel burn (lb/hr) ÷ Engine Thrust (lb)","Total fuel ÷ trip hours","N1 ÷ fuel flow","Tank size ÷ consumption"], answer:0, exp:"TSFC = Fuel burn (lbs/hour) ÷ Engine Thrust (lb). Measures fuel efficiency per unit thrust."},
  {topic:"021 – Aircraft General Knowledge", q:"High bypass turbofan engines produce more:", options:["Jet thrust than fan thrust","Fan thrust than jet thrust","Core thrust than bypass thrust","Combustion thrust than turbine thrust"], answer:1, exp:"High bypass turbofans produce more FAN thrust than jet (core exhaust) thrust."},
  {topic:"021 – Aircraft General Knowledge", q:"A turbocharger is driven by:", options:["Belt from the crankshaft","Electric motor","Exhaust gas turbine","Dedicated gearbox"], answer:2, exp:"Turbocharger = driven by exhaust gas turbine. Supercharger = mechanically driven from the engine."},
  {topic:"021 – Aircraft General Knowledge", q:"A shuttle valve allows:", options:["Oil flow between tanks","Fluid to flow from one of two sources","Air to bypass the compressor","Hydraulic fluid to return to reservoir"], answer:1, exp:"A shuttle valve allows fluid to flow from one of two sources — used in pneumatic and hydraulic systems."},
  {topic:"021 – Aircraft General Knowledge", q:"Best engine performance conditions:", options:["High humidity, high temp, low pressure","Low humidity, low temp, high pressure density","Low humidity, high temp, high pressure","High humidity, low temp, low pressure"], answer:1, exp:"Best engine performance: LOW humidity, LOW temperature, HIGH pressure density. Hot and high is worst case."},
  {topic:"021 – Aircraft General Knowledge", q:"FLEX thrust is used primarily to:", options:["Increase climb gradient","Protect engine life and reduce noise","Reduce fuel burn only","Satisfy ATC restrictions"], answer:1, exp:"FLEX thrust protects engine life, improves reliability, reduces noise. Even MTOW aircraft can use FLEX if TODR is not limiting."},
  {topic:"021 – Aircraft General Knowledge", q:"Four-stroke engine sequence:", options:["Intake–Power–Compression–Exhaust","Compression–Intake–Power–Exhaust","Intake–Compression–Power–Exhaust","Power–Intake–Compression–Exhaust"], answer:2, exp:"Four-stroke sequence: Intake → Compression → Power → Exhaust."},
  {topic:"021 – Aircraft General Knowledge", q:"On aircraft with counter-clockwise rotating propellers, the critical engine is:", options:["Left engine","Right engine","Both equally critical","Neither is critical"], answer:1, exp:"Counter-clockwise rotating props → right engine is critical due to P-factor and asymmetric thrust."},

  // 022 INSTRUMENTATION
  {topic:"022 – Instrumentation", q:"IAS → CAS → EAS → TAS — corrections applied in order:", options:["Density, compressibility, position error","Position/instrument error → compressibility → density","Temperature → pressure → humidity","Altitude → temperature → pressure"], answer:1, exp:"IAS → (position/instrument error) → CAS → (compressibility) → EAS → (density) → TAS. Mnemonic: ICE Tea Preferred Cold Drink."},
  {topic:"022 – Instrumentation", q:"With pitot source blocked, climbing, the ASI will:", options:["Read zero","Remain constant","Increase (over-read)","Decrease (under-read)"], answer:2, exp:"Blocked pitot: ASI increases in climb, decreases in descent. VSI and altimeter unaffected."},
  {topic:"022 – Instrumentation", q:"With BOTH static sources blocked, VSI and altimeter:", options:["Both freeze","VSI freezes; altimeter increases","Both decrease steadily","VSI reads zero; altimeter over-reads"], answer:0, exp:"Both static blocked: ASI decreases in climb / increases in descent; VSI and Altimeter FREEZE."},
  {topic:"022 – Instrumentation", q:"TCAS Resolution Advisory (RA) is displayed as:", options:["Blue diamond","Yellow circle","Red filled square + arrow","White triangle"], answer:2, exp:"TCAS: RA = red filled square + arrow; TA = yellow filled circle; Proximate traffic = blue/white diamond."},
  {topic:"022 – Instrumentation", q:"FDR data must be retained for:", options:["2 hours","8 hours","25 hours","72 hours"], answer:2, exp:"FDR data: kept 25 hours. CVR data: kept 2 hours."},
  {topic:"022 – Instrumentation", q:"CVR and FDR are required on:", options:["Any aircraft with engines","Multi-engine turbine with >9 seats OR MTOW >5700 kg","All jets regardless of size","Any aircraft on IFR"], answer:1, exp:"Required: multi-engine turbine with more than 9 passenger seats or MTOW over 5,700 kg."},
  {topic:"022 – Instrumentation", q:"Slipping in a turn is caused by:", options:["Too little bank or too much rudder","Too much bank or too little rudder","Too much of both","Too little of both"], answer:1, exp:"Slipping = too much bank OR too little rudder. Skidding = insufficient bank OR too much rudder."},
  {topic:"022 – Instrumentation", q:"Magnetic compass mnemonic ANDS stands for:", options:["Always Note Declination South","Accelerate North, Decelerate South","Avoid North, Descend South","Azimuth Normal, Declination Standard"], answer:1, exp:"ANDS = Accelerate North, Decelerate South. Also: Turn to N = Under Shoot; Turn to S = Over Shoot."},
  {topic:"022 – Instrumentation", q:"Pressure altitude is:", options:["Altitude corrected for temperature and humidity","Altitude on altimeter set to 1013.25 hPa","True altitude adjusted for QNH","Altitude above the aerodrome"], answer:1, exp:"Pressure altitude = altimeter reading when set to standard pressure 1013.25 hPa. Density altitude also corrects for temperature."},
  {topic:"022 – Instrumentation", q:"Temperature correction MUST be added to DA/DH when OAT is:", options:["Above +15°C","Below +5°C","0°C or colder","Below −20°C"], answer:2, exp:"When OAT is 0°C or colder, temperature correction MUST be added to DA/DH, step-down fixes inside FAF, and mountainous altitudes."},
  {topic:"022 – Instrumentation", q:"Mach meter errors are:", options:["Temperature and density error","Instrument error and pressure (position) error","Gyro drift and precession","Compass deviation and variation"], answer:1, exp:"Mach meter: instrument error (construction inaccuracies) and pressure error (position error)."},

  // 031 MASS & BALANCE
  {topic:"031 – Mass & Balance", q:"CG optimum position is:", options:["Near forward limit","Near aft limit","At 50% MAC","At the neutral point"], answer:1, exp:"CG optimum is near the AFT limit — reduces trim drag, increases range and endurance."},
  {topic:"031 – Mass & Balance", q:"With CG outside FORWARD limit:", options:["Range increases","Stalling speed decreases","Longitudinal stability decreases","Stalling speed increases"], answer:3, exp:"Forward CG: stall speed increases, longitudinal stability increases (higher stick forces), range/endurance decrease."},
  {topic:"031 – Mass & Balance", q:"With CG outside AFT limit, spin recovery becomes:", options:["Easier","Harder","Unchanged","Aircraft cannot spin"], answer:1, exp:"Aft CG: longitudinal stability reduces, stick forces lighter (risk of over-stress), spin recovery harder."},
  {topic:"031 – Mass & Balance", q:"Which CG position gives fastest cruise speed?", options:["Forward CG","Aft CG","Mid CG","CG has no effect on cruise speed"], answer:1, exp:"Aft CG = faster cruise, less stability, more range. Forward CG = slower cruise, more stable, less range."},
  {topic:"031 – Mass & Balance", q:"DOM (Dry Operating Mass) =", options:["Airplane + usable fuel + traffic load","Airplane + unusable fuel + oil + coolant","Airplane minus usable fuel and traffic load","Empty airframe only"], answer:2, exp:"DOM = airplane − usable fuel − traffic load. BEM = airplane + unusable fuel + engine oil + coolant."},
  {topic:"031 – Mass & Balance", q:"Weight of Jet A1 fuel:", options:["5.85 lb/US gal","6.71 lb/US gal","7.14 lb/US gal","8.02 lb/US gal"], answer:1, exp:"Jet A1 = 6.71 lb/US gallon. SG approximately 0.804 kg/L."},
  {topic:"031 – Mass & Balance", q:"EU-OPS standard mass for all adult passengers (30+ seat aircraft):", options:["76 kg","84 kg","88 kg","90 kg"], answer:1, exp:"30+ seats: all adult = 84 kg. 20+ seats: Male 88 kg, Female 70 kg. Children = 35 kg."},
  {topic:"031 – Mass & Balance", q:"0% MAC is located at:", options:["Trailing edge","Midpoint","Leading edge","Root chord"], answer:2, exp:"0% MAC = leading edge; 100% MAC = trailing edge. CG expressed as % MAC."},
  {topic:"031 – Mass & Balance", q:"A tail-heavy airplane compared to a nose-heavy airplane is:", options:["More stable, stalls at higher speed","Less stable, stalls at lower speed","More stable, stalls at lower speed","Less stable, stalls at higher speed"], answer:1, exp:"Tail-heavy (aft CG): LESS stable, stalls at LOWER speed than nose-heavy airplane."},

  // 032 PERFORMANCE
  {topic:"032 – Performance", q:"V1 must always be greater than:", options:["VMCA","VR","VMCG","V2"], answer:2, exp:"V1 must be >VMCG, <VMBE, ≤VR. VMCG = minimum control speed on the ground."},
  {topic:"032 – Performance", q:"V2 minimum values are:", options:["≥1.1VS and ≥1.05VMCA","≥1.2VS and ≥1.1VMCA","≥1.1VS and ≥1.1VMCA","≥1.3VS and ≥1.2VMCA"], answer:1, exp:"V2 minimum = 1.2 VS and 1.1 VMCA. Achieved at screen height 35 ft with OEI."},
  {topic:"032 – Performance", q:"VX (best angle of climb) achieves:", options:["Greatest altitude in shortest time","Greatest altitude over shortest horizontal distance","Best fuel efficiency","Maximum endurance"], answer:1, exp:"VX = best angle = greatest altitude over shortest ground distance. VY = best rate = greatest altitude in shortest time."},
  {topic:"032 – Performance", q:"TODA =", options:["TORA only","TORA + stopway","TORA + clearway","ASDA + clearway"], answer:2, exp:"TODA = TORA + clearway. ASDA = TORA + stopway. TORA = runway length."},
  {topic:"032 – Performance", q:"Climbing at constant IAS, Mach number:", options:["Decreases","Stays constant","Increases","First increases then decreases"], answer:2, exp:"Climbing at constant IAS → Mach number increases because local speed of sound decreases with lower temperature."},
  {topic:"032 – Performance", q:"Descending at constant Mach number, IAS:", options:["Decreases","Stays constant","Increases","Oscillates"], answer:2, exp:"Descending at constant Mach: IAS and TAS both increase as temperature and LSS rise."},
  {topic:"032 – Performance", q:"Balanced field condition:", options:["TORA = TODA","TODA = ASDA","ASDA = LDA","TORA = ASDA"], answer:1, exp:"Balanced field: TODA = ASDA for given weight, thrust, configuration and runway condition."},
  {topic:"032 – Performance", q:"Glide angle is:", options:["Greater for heavier aircraft","Less for heavier aircraft","NOT affected by aircraft weight","Only affected by headwind"], answer:2, exp:"Glide angle and gliding range are NOT affected by aircraft weight/mass."},
  {topic:"032 – Performance", q:"Specific Range (SR) =", options:["TAS ÷ total fuel flow","Fuel flow ÷ thrust","Range ÷ weight","Endurance ÷ fuel"], answer:0, exp:"Specific Range = TAS ÷ total fuel flow. Distance achievable per unit of fuel."},
  {topic:"032 – Performance", q:"Braking coefficient for a DRY runway (turbo-jet):", options:["0.40","0.52","0.60","0.72"], answer:2, exp:"Dry runway: 0.60 (60%). Wet runway: 0.52 (52%)."},
  {topic:"032 – Performance", q:"Second takeoff segment gradient for a twin-engine aircraft:", options:["Positive only","2.4%","1.2%","3.0%"], answer:1, exp:"Second segment (gear retracted, V2): Twin = 2.4%, Quad = 3.0%."},
  {topic:"032 – Performance", q:"Standard missed approach climb gradient:", options:["2.1%","2.5%","3.0%","3.3%"], answer:1, exp:"Missed approach = 2.5%. Approach climb OEI twin = 2.1%. SID = 3.3%. Landing climb = 3.2%."},
  {topic:"032 – Performance", q:"Mach number becomes the speed reference above approximately:", options:["18,000 ft","20,000 ft","26,000 ft","35,000 ft"], answer:2, exp:"Above ~26,000 ft Mach becomes the aircraft limiting speed reference in preference to IAS."},
  {topic:"032 – Performance", q:"Net climb gradient deduction for a twin-engine aircraft:", options:["0.5%","0.8%","0.9%","1.0%"], answer:1, exp:"Net = Gross minus: 0.8% twin, 0.9% three-engine, 1.0% four-engine."},
  {topic:"032 – Performance", q:"Using takeoff flaps:", options:["Increases V2 and VLOF","Reduces takeoff distance but reduces rate and angle of climb","Increases both takeoff distance and climb performance","Has no effect on V2"], answer:1, exp:"Flaps reduce takeoff distance but also reduce rate and angle of climb. Flaps down = V2 decreases."},

  // 033 FLIGHT PLANNING
  {topic:"033 – Flight Planning", q:"Final reserve fuel for a jet aircraft:", options:["15 min at 1500 ft","20 min at 1500 ft","30 min at 1500 ft","45 min at 1500 ft"], answer:2, exp:"Final reserve: 30 min jet/turboprop, 45 min piston — holding at 1500 ft above aerodrome in standard conditions."},
  {topic:"033 – Flight Planning", q:"Standard contingency fuel:", options:["3% of trip fuel","5% of trip fuel","10% of trip fuel","5% of block fuel"], answer:1, exp:"Contingency = 5% of planned trip fuel (3% if en-route alternate available), but at least 5 min holding."},
  {topic:"033 – Flight Planning", q:"A fuel emergency is declared by broadcasting:", options:["PAN PAN PAN FUEL","MAYDAY MAYDAY MAYDAY FUEL","URGENCY FUEL LOW","EMERGENCY FUEL"], answer:1, exp:"Fuel emergency: MAYDAY MAYDAY MAYDAY FUEL — when usable fuel on landing will be less than final reserve fuel."},
  {topic:"033 – Flight Planning", q:"Performance Class A includes:", options:["Propeller driven ≤5700 kg","Multi-engine JET and Turboprops >5700 kg or >9 seats","Reciprocating engines >5700 kg","Single engine turboprops"], answer:1, exp:"Class A = multi-engine JET and Turboprops (>5700 kg or >9 seats). Class B = propeller ≤5700 kg and ≤9 seats."},
  {topic:"033 – Flight Planning", q:"RVSM airspace applies between:", options:["FL245 and FL410","FL290 and FL410","FL195 and FL390","FL310 and FL450"], answer:1, exp:"RVSM (Reduced Vertical Separation Minima): FL290 to FL410."},
  {topic:"033 – Flight Planning", q:"Below FL290, IFR tracks 000°–179° use:", options:["Odd flight levels","Even flight levels","Any flight level","ATC assigned only"], answer:1, exp:"Below FL290: 000°–179° = EVEN; 180°–359° = ODD."},
  {topic:"033 – Flight Planning", q:"ETOPS: no suitable airport within:", options:["30 min at single-engine speed","60 min at approved OEI cruise speed","90 min at normal cruise","120 min flying time"], answer:1, exp:"ETOPS = route where no suitable airport within 60 min flying time at approved one-engine-out cruise speed."},
  {topic:"033 – Flight Planning", q:"Take-off alternate for a twin-engine aircraft must be within:", options:["30 min single-engine","1 hour single-engine cruise (Wizz Air = 250 NM)","2 hours OEI cruise","No distance limit"], answer:1, exp:"Take-off alternate: within 1 hour at single-engine cruise speed. Wizz Air = 250 NM."},
  {topic:"033 – Flight Planning", q:"MNPS lateral separation between approved aircraft:", options:["30 NM","60 NM","90 NM","120 NM"], answer:1, exp:"MNPS lateral separation = 60 NM. Longitudinal: 15 min crossing; 10 min same/diverging tracks."},
  {topic:"033 – Flight Planning", q:"Additional fuel for isolated aerodrome (no alternate) — minimum:", options:["30 min holding","1 hour cruise","2 hours normal cruise after overhead destination","3 hours total"], answer:2, exp:"Isolated aerodrome: at least 2 hours normal cruise consumption after arriving overhead, including final reserve."},
  {topic:"033 – Flight Planning", q:"Flight plan code for IFR then changing to VFR:", options:["I","V","Y","Z"], answer:2, exp:"Y = IFR → VFR. Z = VFR → IFR. I = IFR throughout. V = VFR throughout."},
  {topic:"033 – Flight Planning", q:"Rate 1 turn =", options:["1.5°/sec (90°/min)","3°/sec (180°/min)","6°/sec (360°/min)","9°/sec (540°/min)"], answer:1, exp:"Rate 1 = 3°/sec = 180°/min. Rate 2 = 6°/sec. Rate 3 = 9°/sec."},

  // 040 HUMAN PERFORMANCE
  {topic:"040 – Human Performance", q:"Atmosphere composition (approximate):", options:["78% O2, 21% N2, 1% other","21% N2, 78% O2, 1% other","78% N2, 21% O2, 1% other","50% N2, 49% O2, 1% other"], answer:2, exp:"Atmosphere: 78% nitrogen, 21% oxygen, 1% other gases."},
  {topic:"040 – Human Performance", q:"Hyperventilation causes blood to become:", options:["More acidic","More alkaline","Lower in O2 directly","No change"], answer:1, exp:"Hyperventilation → excess CO2 exhaled → blood more alkaline → arterial diameter reduces → less O2 to brain."},
  {topic:"040 – Human Performance", q:"Time of useful consciousness at 40,000 ft:", options:["45–75 seconds","20 seconds","12 seconds","2–3 minutes"], answer:1, exp:"TUC: 18,000 ft = 30 min; 25,000 ft = 2–3 min; 30,000 ft = 45–75 sec; 40,000 ft = 20 sec; 45,000 ft = 12 sec."},
  {topic:"040 – Human Performance", q:"Cyanosis is:", options:["Symptom of hyperventilation","Blue/purple skin coloration due to low O2 saturation","Symptom of hypercapnia only","Redness due to excess O2"], answer:1, exp:"Cyanosis = blue/purple coloration near skin due to low O2 saturation. Exists only in hypoxia."},
  {topic:"040 – Human Performance", q:"Which is NOT a symptom of hypoxia?", options:["Confusion","Euphoria","Pain in the joints","Cyanosis"], answer:2, exp:"Pain in the joints is NOT a symptom of hypoxia — associated with decompression sickness."},
  {topic:"040 – Human Performance", q:"Time of useful consciousness at 30,000 ft:", options:["12 seconds","20 seconds","45–75 seconds","2–3 minutes"], answer:2, exp:"30,000 ft: 45–75 seconds. 25,000 ft: 2–3 min. 40,000 ft: 20 sec."},
  {topic:"040 – Human Performance", q:"Which trans-oceanic direction is easier regarding fatigue?", options:["Eastbound","Westbound","Both equal","Direction irrelevant"], answer:1, exp:"Westbound flights are easier than eastbound red-eye flights — aligns with natural circadian rhythm."},
  {topic:"040 – Human Performance", q:"A narrow/long runway creates the perception of being:", options:["Too low — pull — land long","Too high — push — land short/hard","On correct glidepath","Upwind"], answer:1, exp:"Narrow/long runway: perception = too HIGH → push → land short/hard. Wide/short = too LOW → pull → land long."},
  {topic:"040 – Human Performance", q:"A wide or short runway creates the perception of being:", options:["Too high","Too fast","Too low — pull — land long/overrun","On correct glidepath"], answer:2, exp:"Wide/short runway: pilot perceives being too LOW → pulls up → lands long or overruns."},
  {topic:"040 – Human Performance", q:"An uphill sloping runway creates the perception of being:", options:["Too low","Too high — push — land short/hard","On correct slope","Upwind"], answer:1, exp:"Uphill slope: perception = too HIGH → pushes → lands short/hard. Downhill = too LOW → overrun."},

  // 050 METEOROLOGY
  {topic:"050 – Meteorology", q:"ISA sea-level conditions:", options:["15°C and 1013.25 hPa","0°C and 1013.25 hPa","15°C and 1029.92 hPa","20°C and 1013.25 hPa"], answer:0, exp:"ISA: 1013.25 hPa, 15°C, density 1.225 kg/m³, temp gradient 1.98°C/1000 ft, tropopause 11,000 m (−56.5°C)."},
  {topic:"050 – Meteorology", q:"CAVOK requires visibility greater than:", options:["5 km","8 km","10 km","15 km"], answer:2, exp:"CAVOK: visibility >10 km, no clouds below 5000 ft (or lowest sector altitude), no CB within 15 km, no significant weather."},
  {topic:"050 – Meteorology", q:"QNH higher than standard means true altitude is:", options:["Lower than indicated","Higher than indicated","Equal to indicated","Undeterminable"], answer:1, exp:"QNH↑ = true altitude HIGHER than indicated. QNH↓ = true altitude LOWER than indicated."},
  {topic:"050 – Meteorology", q:"Altimeter error per 1°C deviation from ISA per 1000 ft:", options:["2 ft","4 ft","6 ft","8 ft"], answer:1, exp:"Altimeter error = 4 ft per 1°C per 1000 ft. MEMO: Going from HIGH to LOW, look below!"},
  {topic:"050 – Meteorology", q:"Dry Adiabatic Lapse Rate (DALR):", options:["1.5°C/1000 ft","2.0°C/1000 ft","3.0°C/1000 ft","1.98°C/1000 ft"], answer:2, exp:"DALR (unsaturated air) = 3.0°C/1000 ft. SALR (saturated) = 1.5°C/1000 ft. ISA lapse rate = 1.98°C/1000 ft."},
  {topic:"050 – Meteorology", q:"Cloud base formula:", options:["(T−DP)/2 × 1000 ft","(T−DP)/3 × 1000 ft","(T−DP)/4 × 1000 ft","(T+DP)/3 × 1000 ft"], answer:1, exp:"Cloud base (ft) = (Temp − Dew Point) ÷ 3 × 1000."},
  {topic:"050 – Meteorology", q:"Minimum wind speed for a Jet Stream:", options:["30 knots","45 knots","60 knots","80 knots"], answer:2, exp:"Jet Stream minimum = 60 knots. CAT is strongest on the cold air side just below the jet axis."},
  {topic:"050 – Meteorology", q:"Radiation fog:", options:["Forms over warm ocean currents","Forms at night under clear skies, calm winds, at ground level","Moves rapidly with the wind","Forms on mountain slopes from moist air"], answer:1, exp:"Radiation fog: night, clear skies, calm winds. Depth 3–1000 ft, at ground level, usually stationary."},
  {topic:"050 – Meteorology", q:"Low pressure in Northern Hemisphere — wind circulates:", options:["Clockwise","Counterclockwise","Outward radially","Inward radially"], answer:1, exp:"Low pressure (N hemisphere): counterclockwise. High pressure (N hemisphere): clockwise. Air RISES in low pressure."},
  {topic:"050 – Meteorology", q:"SIGMET maximum validity:", options:["2 hours","4 hours (6 hours for TC/VA)","6 hours","12 hours"], answer:1, exp:"SIGMET validity ≤ 4 hours (≤ 6 hours for Tropical Cyclone and Volcanic Ash)."},
  {topic:"050 – Meteorology", q:"Microburst horizontal outflow extends to approximately:", options:["1 NM","2 NM","4 NM","10 NM"], answer:2, exp:"Microburst: downdraft <1 NM diameter; outflow ~4 NM; downdraft up to 8000 ft/min; surface winds to 100 kt; lasts 1–5 min."},
  {topic:"050 – Meteorology", q:"Rime ice is formed from:", options:["Large supercooled droplets freezing slowly","Small supercooled droplets freezing rapidly — white, brittle, opaque","Slow freezing large droplets","Freezing rain forming transparent sheet"], answer:1, exp:"Rime: small supercooled droplets freeze rapidly → rough, crystalline, opaque, brittle, white. Clear ice: large droplets, slow freeze → transparent."},
  {topic:"050 – Meteorology", q:"TAF valid 12–30 hours is issued every:", options:["1 hour","3 hours","6 hours","12 hours"], answer:2, exp:"TAF 12–30 hours: issued every 6 hours. TAF <12 hours: issued every 3 hours."},
  {topic:"050 – Meteorology", q:"With QFE set, the altimeter reads:", options:["Altitude AMSL","Zero on the ground at the airfield","Flight level","Density altitude"], answer:1, exp:"QFE = station pressure adjusted for field elevation. Altimeter reads zero on the airfield. QNH → AMSL. QNE → FL."},
  {topic:"050 – Meteorology", q:"METAR TREND codes are:", options:["NOTAM, TEMPO, SIGMET","NOSIG, TEMPO, BECMG","SIGMET, AIRMET, PIREP","TAF, METAR, SPECI"], answer:1, exp:"TREND in METAR: NOSIG, TEMPO, BECMG. Valid 2 hours after observation time."},
  {topic:"050 – Meteorology", q:"Clear Air Turbulence (CAT) is strongest:", options:["Warm air side of jet","Above the jet axis","Cold air side, next to and just below the jet axis","At the jet core itself"], answer:2, exp:"CAT strongest on the COLD air side of the jet, next to and just underneath the axis."},
  {topic:"050 – Meteorology", q:"Katabatic wind:", options:["Flows up the hill","Flows down the hill","Blows parallel to isobars","Blows sea to land by day"], answer:1, exp:"Katabatic = flows DOWN the hill. Anabatic = flows UP. Land/sea breeze: sea→land by day, land→sea by night."},
  {topic:"050 – Meteorology", q:"1 hPa equals approximately:", options:["13 ft","20 ft","27 ft","35 ft"], answer:2, exp:"1 hPa = 27.29 ft = 8.32 m."},
  {topic:"050 – Meteorology", q:"In a METAR, R04/1500N means:", options:["RVR runway 04 = 1500 m, not changing significantly","Visibility 1.5 km normal","RVR runway 04 = 1500 m rising","North wind 15 kts on runway 04"], answer:0, exp:"R04/1500N = RVR runway 04 = 1500 m, Not changing. U = rising, D = decreasing, P2000 = more than 2000 m."},

  // 061 GENERAL NAVIGATION
  {topic:"061 – General Navigation", q:"'Deviation east = compass ___' (CDMVT mnemonic):", options:["best","least","correct","inverted"], answer:1, exp:"Deviation east = compass LEAST. Variation east = magnetic LEAST. (+) = east; (−) = west."},
  {topic:"061 – General Navigation", q:"For VOR, variation is applied at:", options:["Aircraft position","Station (beacon) position","Midpoint","Not applied"], answer:1, exp:"VOR variation: at STATION position. NDB variation: at AIRCRAFT position."},
  {topic:"061 – General Navigation", q:"QDM is:", options:["True bearing FROM the station","Magnetic bearing FROM the station","Magnetic bearing TO the station","True bearing TO the station"], answer:2, exp:"QDM = Magnetic bearing TO the station. QDR = Magnetic FROM. QUJ = True TO. QTE = True FROM."},
  {topic:"061 – General Navigation", q:"1° of latitude equals:", options:["30 NM","45 NM","60 NM","90 NM"], answer:2, exp:"1° latitude (N/S) = 60 NM. 1° longitude (E/W) = 30 NM (at 60° latitude)."},
  {topic:"061 – General Navigation", q:"Local Speed of Sound at ISA sea level:", options:["540 kt","600 kt","662 kt","720 kt"], answer:2, exp:"LSS at ISA sea level = 662 kt. LSS = 661 × √(T(K)/288). T↑ = LSS↑."},
  {topic:"061 – General Navigation", q:"The sun travels approximately:", options:["10°/hour","12°/hour","15°/hour = 1°/4 min","18°/hour"], answer:2, exp:"Sun travels 15°/hour = 1° per 4 minutes. Aphelion (farthest): early July. Perihelion (closest): early January."},
  {topic:"061 – General Navigation", q:"An agonic line connects positions with:", options:["Same grivation","Zero magnetic variation","Same elevation","Zero deviation"], answer:1, exp:"Agonic line = zero magnetic variation. Isogonic = same variation. Isogrives = same grivation."},
  {topic:"061 – General Navigation", q:"A Great Circle is:", options:["Line crossing all meridians at same angle","Shortest distance between two points on a sphere — constantly changing track","Line of constant magnetic heading","Circle of equal altitude"], answer:1, exp:"Great Circle = shortest distance on a sphere, with constantly changing track direction due to convergence."},
  {topic:"061 – General Navigation", q:"A Rhumb Line (loxodrome) is:", options:["Shortest distance on a sphere","Arc crossing all meridians at the same angle — constant track","Always shorter than great circle","Line of equal pressure"], answer:1, exp:"Rhumb line = constant track, crosses all meridians at the same angle. Longer than great circle except on equator/meridians."},
  {topic:"061 – General Navigation", q:"Direct Mercator chart is:", options:["Cylindrical projection based on a meridian","Cylindrical projection based on the Equator","Conical projection","Polar stereographic"], answer:1, exp:"Direct Mercator = cylindrical based on Equator. Transverse Mercator = based on meridian. Oblique = any other great circle."},

  // 062 RADIO NAVIGATION
  {topic:"062 – Radio Navigation", q:"Aviation VHF frequencies range from:", options:["108–118 MHz","108–137 MHz","118–137 MHz","30–300 MHz"], answer:1, exp:"Aviation VHF: 108.00–137.00 MHz. Comm: 118–137 MHz. Nav/ILS: 108–117.95 MHz."},
  {topic:"062 – Radio Navigation", q:"DME operating frequency band:", options:["VHF (30–300 MHz)","UHF (962–1213 MHz) = 252 channels","SHF (3–30 GHz)","LF (30–300 kHz)"], answer:1, exp:"DME: UHF 962–1213 MHz = 252 channels. Beacon saturation when simultaneous interrogations exceed 100."},
  {topic:"062 – Radio Navigation", q:"GPS constellation:", options:["18 satellites total","21 operational + 3 standby = 24 total","32 total","12 operational"], answer:1, exp:"GPS: 24 satellites (21 operational + 3 standby) at 20,200 km. Min 5 satellites visible at ≥7.5° above horizon."},
  {topic:"062 – Radio Navigation", q:"ILS localizer frequency range:", options:["108–111.975 MHz (VHF)","329.15–335 MHz (UHF)","75 MHz","962–1213 MHz"], answer:0, exp:"ILS localizer: 108–111.975 MHz (VHF). Glide path: UHF. Markers: 75 MHz. 150 Hz signal = right of and below centerline."},
  {topic:"062 – Radio Navigation", q:"NDB frequency range:", options:["108–117.95 MHz","190–1750 kHz (LF & MF)","960–1215 MHz","108–111.975 MHz"], answer:1, exp:"NDB: 190–1750 kHz (LF & MF). Accuracy ±5° (day only). Range: 3×√P(W) over water; 2×√P(W) over land."},
  {topic:"062 – Radio Navigation", q:"VOR principle of operation:", options:["Pulse timing","Phase comparison of two 30 Hz signals","Doppler shift","AM modulation"], answer:1, exp:"VOR: phase comparison of variable and reference 30 Hz signals. 160 channels, 108–117.95 MHz, line-of-sight range."},
  {topic:"062 – Radio Navigation", q:"MLS frequency:", options:["108–111.975 MHz","329–335 MHz","5.03–5.09 GHz (SHF, 200 channels)","960–1215 MHz"], answer:2, exp:"MLS: 5.03–5.09 GHz (SHF) = 200 channels. All-weather precision landing system with wide capture angles."},
  {topic:"062 – Radio Navigation", q:"HF aviation frequencies:", options:["118–137 MHz","2.85–22 MHz","960–1215 MHz","108–118 MHz"], answer:1, exp:"HF (3–30 MHz) = long-range communication. Aviation HF: 2.85–22 MHz. VHF = short range."},
  {topic:"062 – Radio Navigation", q:"For an NDB on an RMI, variation to get true bearing is applied at:", options:["Beacon position","Aircraft position","Not applied","Midpoint of track"], answer:1, exp:"NDB: variation at AIRCRAFT position. VOR: variation at BEACON position."},
  {topic:"062 – Radio Navigation", q:"INS (Inertial Navigation System) uses:", options:["External radio references only","GPS and barometric input","Accelerometers + gyroscopes — dead reckoning, no external references","VOR/DME triangulation"], answer:2, exp:"INS uses accelerometers (motion) and gyroscopes (rotation) for continuous dead-reckoning — no external references needed."},

  // 070 OPERATIONAL PROCEDURES
  {topic:"070 – Operational Procedures", q:"CAT I ILS minima:", options:["RVR 200 m, DH 50 ft","RVR 300 m, DH 100 ft","RVR 550 m, DH 200 ft","RVR 1000 m, DH 300 ft"], answer:2, exp:"CAT I: RVR 550 m, DH 200 ft. CAT II: 300 m/100 ft. CAT IIIA: 200 m/<100 ft. CAT IIIB: 75 m/<50 ft."},
  {topic:"070 – Operational Procedures", q:"Low Visibility Take-off (LVTO) is where RVR is less than:", options:["200 m","400 m","550 m","800 m"], answer:1, exp:"LVTO = RVR less than 400 m. LVC for landing: RVR <1000 m or cloud base <300 ft."},
  {topic:"070 – Operational Procedures", q:"Category C aircraft (A320) circle-to-land minima:", options:["1500 m / 400 ft","1600 m / 500 ft","2400 m / 600 ft","3600 m / 700 ft"], answer:2, exp:"Cat C (A320, 121–140 kt): 2400 m visibility, 600 ft MDA."},
  {topic:"070 – Operational Procedures", q:"A runway is contaminated when more than what percentage is covered?", options:["10%","15%","25%","50%"], answer:2, exp:"Contaminated: >25% of runway area covered by water >3 mm, slush, compacted snow, or ice."},
  {topic:"070 – Operational Procedures", q:"Maximum SNOWTAM validity:", options:["8 hours","12 hours","24 hours","48 hours"], answer:2, exp:"Maximum SNOWTAM validity is 24 hours."},
  {topic:"070 – Operational Procedures", q:"Minimum alcohol-free period before reporting for flight duty:", options:["4 hours","6 hours","8 hours","12 hours"], answer:2, exp:"EU-OPS: no alcohol <8 hours before reporting. Blood alcohol ≤0.2 promille at start of duty. No alcohol during duty/standby."},
  {topic:"070 – Operational Procedures", q:"Required Landing Distance (dry) = ALD dry ×", options:["1.15","1.35","1.64","1.92"], answer:2, exp:"RLD (dry) = ALD dry × 1.64. RLD (wet) = RLD dry × 1.15. Jets land in 60% LDA; turboprops 70% LDA."},
  {topic:"070 – Operational Procedures", q:"3° glideslope ROD rule of thumb:", options:["GS × 5","(GS ÷ 2) × 10","GS × 10","GS ÷ 5"], answer:1, exp:"3° glideslope: ROD = (Ground Speed ÷ 2) × 10. E.g. 140 kt GS → 700 fpm. 3° = 5.2% = 319 ft/NM."},
  {topic:"070 – Operational Procedures", q:"Recency requirement:", options:["1 take-off and landing in 90 days","2 take-offs and landings in 90 days","3 take-offs and landings in 90 days","5 take-offs and landings in 90 days"], answer:2, exp:"Recency = 3 take-offs and landings in the last 90 days. Flight preparation documents kept for 3 months."},
  {topic:"070 – Operational Procedures", q:"ELT battery must last:", options:["12 hours","24 hours","48 hours","72 hours"], answer:2, exp:"ELT/SARB battery must last 48 hours."},
  {topic:"070 – Operational Procedures", q:"For 61–200 passengers, minimum hand fire extinguishers:", options:["1","2","3","4"], answer:2, exp:"61–200 pax: minimum 3 hand fire extinguishers + crash axe/crow-bar on flight deck. 100+ pax: 2 megaphones."},
  {topic:"070 – Operational Procedures", q:"Miles to top of descent rule of thumb:", options:["ΔFL ÷ 2 = NM","ΔFL ÷ 3 = NM","ΔFL × 3 = NM","ΔFL ÷ 4 = NM"], answer:1, exp:"Miles to descent: ΔFlight Level ÷ 3 = NM. E.g. FL360 to sea level = 360 ÷ 3 = 120 NM."},
  {topic:"070 – Operational Procedures", q:"Operations Manual Part B covers:", options:["General/basic and quality system","Aeroplane operating matters: limitations, procedures, performance, MEL","Route and aerodrome instructions","Training"], answer:1, exp:"Part A = General/basic. Part B = Aeroplane operating matters (limitations, procedures, performance, M&B, MEL, CDL, systems). Part C = Routes. Part D = Training."},
  {topic:"070 – Operational Procedures", q:"Non-precision NDB approach minimum:", options:["200 ft","250 ft","300 ft","350 ft"], answer:3, exp:"NDB = 350 ft. NDB/DME = 300 ft. VOR = 300 ft. VOR/DME = 250 ft. ILS LOC (GS U/S) = 250 ft. RNAV/LNAV = 300 ft."},
  {topic:"070 – Operational Procedures", q:"VIS to RVR conversion — high intensity lighting at night:", options:["RVR = VIS × 1.0","RVR = VIS × 1.5","RVR = VIS × 2.0","RVR = VIS × 2.5"], answer:2, exp:"High intensity approach + runway lighting: daytime RVR = VIS × 1.5; night RVR = VIS × 2.0. Only valid when VIS >800 m."},
  {topic:"070 – Operational Procedures", q:"Life jacket mandatory for passengers flying more than how far from shore?", options:["25 NM","50 NM","100 NM","200 NM"], answer:1, exp:"Life jacket mandatory for any passenger on aircraft flying more than 50 NM from shore."},

  // 080 PRINCIPLES OF FLIGHT
  {topic:"080 – Principles of Flight", q:"Induced drag is highest at:", options:["High speeds","Low speeds (high AOA)","Cruise speed","Mach > 0.8"], answer:1, exp:"Induced drag (lift-dependent) is highest at LOW speeds / high AOA. Parasite drag is highest at high speeds."},
  {topic:"080 – Principles of Flight", q:"Center of Pressure (CP) is generally located at approximately:", options:["50% chord","75% chord","At the leading edge","25% of chord (forward quarter)"], answer:3, exp:"CP is generally within the forward 25% of chord. CP moves FORWARD as AOA approaches the critical angle."},
  {topic:"080 – Principles of Flight", q:"Dutch roll is:", options:["Pure roll oscillation","Pure yaw oscillation","Combined yaw-roll — battle between lateral and directional stability","Longitudinal phugoid oscillation"], answer:2, exp:"Dutch roll = battle between lateral stability (dihedral) and directional stability (fin). Recovery: opposite aileron (yaw dampers U/S)."},
  {topic:"080 – Principles of Flight", q:"The coffin corner is where:", options:["Stall speed equals critical Mach number","Absolute ceiling equals service ceiling","VX equals VY","MMO equals VMO"], answer:0, exp:"Coffin corner = altitude where stall speed equals critical Mach number. Any speed change causes loss of altitude."},
  {topic:"080 – Principles of Flight", q:"Critical Mach number (Mcr) is:", options:["Mach 1.0 at the wing surface","Aircraft Mach at which airflow over the wing becomes sonic","Maximum operating Mach number","Mach number at which shock stall occurs"], answer:1, exp:"Critical Mach = aircraft speed at which local airflow over some part of the airframe first reaches Mach 1, forming a weak shock wave."},
  {topic:"080 – Principles of Flight", q:"Longitudinal static stability requires:", options:["Wing dihedral","CG located in FRONT of the neutral point","Large vertical tail","Swept wings"], answer:1, exp:"Longitudinal static stability: CG in front of the neutral point. Influenced by horizontal stabilizer position and CG position."},
  {topic:"080 – Principles of Flight", q:"Lateral stability is achieved through:", options:["Fin and rudder","Dihedral, sweepback, keel effect and weight distribution","Horizontal stabilizer position","Vortex generators"], answer:1, exp:"Lateral stability: wing dihedral, sweepback, keel effect, and proper weight distribution."},
  {topic:"080 – Principles of Flight", q:"Stall speed in a 60° banked turn increases by factor:", options:["1.20","1.32","1.41","1.73"], answer:2, exp:"Stall speed in 60° banked turn increases by factor 1.41 (√2). Load factor in 60° bank = 2g."},
  {topic:"080 – Principles of Flight", q:"Superstall is:", options:["Any stall above 40,000 ft","Stable stall with nearly constant pitch — aircraft cannot recover","Stall above Mach 0.5","Stall caused by icing"], answer:1, exp:"Superstall = stable stall with almost constant pitch attitude from which the aircraft is unable to recover."},
  {topic:"080 – Principles of Flight", q:"Primary purpose of swept-back wings:", options:["Reduce induced drag","Increase maximum lift","Increase the critical Mach number","Improve low-speed handling"], answer:2, exp:"Primary purpose of sweptback = increase critical Mach number. Advantage: less drag at high speed; disadvantage: higher stall speed."},
  {topic:"080 – Principles of Flight", q:"Aspect ratio =", options:["Wing area ÷ span","Span² ÷ wing area","Chord ÷ span","Span ÷ chord"], answer:1, exp:"Aspect ratio = wingspan² ÷ wing area. High AR = more lift (gliders). Low AR = capable of higher speeds."},
  {topic:"080 – Principles of Flight", q:"Vortex generators:", options:["Create drag for deceleration","Transfer energy from free airflow INTO the boundary layer","Generate lift at high AOA","Reduce wave drag at high Mach"], answer:1, exp:"Vortex generators transfer energy from free airflow into the boundary layer, delaying separation and reducing stall speed."},
  {topic:"080 – Principles of Flight", q:"Service ceiling is where rate of climb drops below:", options:["500 fpm","200 fpm","100 fpm","0 fpm"], answer:2, exp:"Service ceiling = rate of climb drops below 100 fpm. Absolute ceiling = ROC drops to zero."},
  {topic:"080 – Principles of Flight", q:"Winglets reduce:", options:["Profile drag","Induced drag from wingtip vortices — improving L/D ratio","Compressibility drag","Wave drag at high Mach"], answer:1, exp:"Winglets reduce induced drag from wingtip vortices → improved L/D → better fuel efficiency and higher optimum FL."},
  {topic:"080 – Principles of Flight", q:"Fowler flaps (trailing edge) primarily:", options:["Increase lift at lower deflection angles","Only increase drag","Reduce maximum CL","Act as spoilers"], answer:0, exp:"Fowler/trailing edge flaps: increase lift at lower deflection angles. Leading edge devices: extend chord line, camber and area."},
  {topic:"080 – Principles of Flight", q:"For a jet aircraft, best RATE of climb is achieved when:", options:["Excess THRUST is at maximum","Excess POWER is at maximum","L/D is maximum","Thrust equals drag"], answer:1, exp:"Jet: best RATE of climb = maximum excess POWER. Best ANGLE of climb = maximum excess THRUST."},

  // WIZZ AIR DATA
  {topic:"Wizz Air Company", q:"Wizz Air was established in:", options:["September 2001","September 2003","May 2004","January 2005"], answer:1, exp:"Wizz Air established September 2003. First flight from Katowice on 19 May 2004."},
  {topic:"Wizz Air Company", q:"Wizz Air headquarters is at:", options:["Warsaw Chopin Airport","Vienna International Airport","Budapest International Airport","Bucharest Henri Coandă Airport"], answer:2, exp:"Headquarters: Budapest International Airport. Financial office: Geneva."},
  {topic:"Wizz Air Company", q:"Wizz Air IATA code:", options:["WZ","W6","WZZ","WA"], answer:1, exp:"IATA code: W6. ICAO code: WZZ. Callsign: WizzAir."},
  {topic:"Wizz Air Company", q:"Wizz Air's lead investor is:", options:["Ryanair Holdings","Indigo Partners (American private equity)","IAG Capital","Lufthansa Group"], answer:1, exp:"Lead investor: Indigo Partners — an American private equity firm specializing in transportation investments."},
  {topic:"Wizz Air Company", q:"Wizz Air A320 is powered by:", options:["CFM56-5B","GE90","IAE V2500","Rolls-Royce Trent 700"], answer:2, exp:"Wizz Air A320-232 uses IAE (International Aero Engines) V2500. Bypass: 4.8:1. Thrust: 26,400 lbs."},
  {topic:"Wizz Air Company", q:"Wizz Air company slogan:", options:["More for less","Fly smarter","Now we can all fly","Europe's low-cost leader"], answer:2, exp:"Wizz Air slogan: 'Now we can all fly.'"},
];

/* ===== STATE ===== */
let selectedTopics = new Set();
let quizQuestions  = [];
let currentIdx     = 0;
let answers        = {};
let score          = 0;

const topicNames = [...new Set(QUESTIONS.map(q => q.topic))];

/* ===== INIT ===== */
function init() {
  document.getElementById('totalQCount').textContent = QUESTIONS.length;
  const grid = document.getElementById('topicGrid');
  grid.innerHTML = '';
  topicNames.forEach(t => {
    const count = QUESTIONS.filter(q => q.topic === t).length;
    const div   = document.createElement('div');
    div.className   = 'topic-card' + (selectedTopics.has(t) ? ' selected' : '');
    div.dataset.topic = t;
    div.onclick = () => toggleTopic(t, div);
    const parts = t.split('–');
    const code  = parts[0].trim();
    const name  = parts.slice(1).join('–').trim() || t;
    div.innerHTML = `
      <div class="topic-code">${code}</div>
      <div class="topic-name">${name}</div>
      <div class="topic-count">${count} questions</div>
      <div class="topic-check">✓</div>`;
    grid.appendChild(div);
  });
  updateStartBtn();
}

function toggleTopic(t, div) {
  if (selectedTopics.has(t)) { selectedTopics.delete(t); div.classList.remove('selected'); }
  else { selectedTopics.add(t); div.classList.add('selected'); }
  updateStartBtn();
}

function selectAll()  { topicNames.forEach(t => selectedTopics.add(t)); init(); }
function selectNone() { selectedTopics.clear(); init(); }
function updateStartBtn() {
  document.getElementById('startBtn').disabled = selectedTopics.size === 0;
}

/* ===== START QUIZ ===== */
function startQuiz() {
  let pool = QUESTIONS.filter(q => selectedTopics.has(q.topic));
  if (document.getElementById('modeSelect').value === 'random') {
    pool = pool.sort(() => Math.random() - 0.5);
  }
  const countVal = document.getElementById('qCountSelect').value;
  if (countVal !== 'all') pool = pool.slice(0, parseInt(countVal));

  quizQuestions = pool;
  answers       = {};
  score         = 0;
  currentIdx    = 0;

  document.getElementById('topicView').style.display   = 'none';
  document.getElementById('quizView').style.display    = 'block';
  document.getElementById('homeBtn').style.display     = 'block';
  document.getElementById('headerScore').style.display = 'block';

  buildNavGrid();
  renderQuestion();
}

/* ===== NAV GRID ===== */
function buildNavGrid() {
  const grid = document.getElementById('qNavGrid');
  grid.innerHTML = '';
  quizQuestions.forEach((q, i) => {
    const btn   = document.createElement('button');
    btn.className = 'q-nav-btn';
    btn.textContent = i + 1;
    btn.id   = 'nav-' + i;
    btn.onclick = () => { currentIdx = i; renderQuestion(); };
    grid.appendChild(btn);
  });
}

function updateNavGrid() {
  quizQuestions.forEach((q, i) => {
    const btn = document.getElementById('nav-' + i);
    if (!btn) return;
    btn.className = 'q-nav-btn';
    if (i === currentIdx) btn.classList.add('current');
    if (answers[i] !== undefined) {
      btn.classList.add(answers[i] === quizQuestions[i].answer ? 'answered-correct' : 'answered-wrong');
    }
  });
}

/* ===== RENDER QUESTION ===== */
function renderQuestion() {
  const q       = quizQuestions[currentIdx];
  const total   = quizQuestions.length;
  const answered = Object.keys(answers).length;
  const chosen  = answers[currentIdx];
  const revealed = chosen !== undefined;

  document.getElementById('progressFill').style.width = ((answered / total) * 100) + '%';
  document.getElementById('progressLabel').textContent = answered + '/' + total;
  document.getElementById('currentTopic').textContent  = q.topic;
  document.getElementById('qNumber').textContent = 'Question ' + (currentIdx + 1) + ' of ' + total;
  document.getElementById('qText').textContent   = q.q;

  const grid   = document.getElementById('optionsGrid');
  const letters = ['A', 'B', 'C', 'D'];
  grid.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (revealed) {
      btn.disabled = true;
      if (i === q.answer)                   btn.classList.add('correct');
      else if (i === chosen && i !== q.answer) btn.classList.add('wrong');
      else                                    btn.classList.add('dimmed');
    }
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    if (!revealed) btn.onclick = () => selectAnswer(i);
    grid.appendChild(btn);
  });

  const expBox = document.getElementById('explanationBox');
  expBox.innerHTML = revealed
    ? `<div class="explanation-box"><strong>Explanation</strong>${q.exp}</div>`
    : '';

  document.getElementById('prevBtn').disabled = currentIdx === 0;
  document.getElementById('nextBtn').disabled = currentIdx === total - 1;

  const allAnswered = Object.keys(answers).length === total;
  document.getElementById('finishBtn').style.display = allAnswered ? 'block' : 'none';

  updateNavGrid();
  updateHeaderScore();
}

function selectAnswer(i) {
  if (answers[currentIdx] !== undefined) return;
  answers[currentIdx] = i;
  if (i === quizQuestions[currentIdx].answer) score++;
  renderQuestion();
  if (currentIdx < quizQuestions.length - 1) {
    setTimeout(() => { currentIdx++; renderQuestion(); }, 1100);
  }
}

function navigate(dir) {
  const next = currentIdx + dir;
  if (next < 0 || next >= quizQuestions.length) return;
  currentIdx = next;
  renderQuestion();
}

function updateHeaderScore() {
  document.getElementById('headerScoreVal').textContent = score + '/' + quizQuestions.length;
}

/* ===== RESULTS ===== */
function finishQuiz() {
  document.getElementById('quizView').style.display    = 'none';
  document.getElementById('resultsView').style.display = 'block';

  const total = quizQuestions.length;
  const pct   = Math.round((score / total) * 100);

  const scoreEl = document.getElementById('resultScore');
  scoreEl.textContent = pct + '%';
  scoreEl.className   = 'result-score ' + (pct >= 80 ? 'great' : pct >= 60 ? 'ok' : 'poor');

  document.getElementById('resultLabel').textContent =
    pct >= 80 ? 'Excellent — Ready for the interview!' :
    pct >= 60 ? 'Good — Keep studying!' :
                'Needs more work — Review your notes';

  document.getElementById('statCorrect').textContent = score;
  document.getElementById('statWrong').textContent   = total - score;
  document.getElementById('statTotal').textContent   = total;

  const topicStats = {};
  quizQuestions.forEach((q, i) => {
    if (!topicStats[q.topic]) topicStats[q.topic] = { correct: 0, total: 0 };
    topicStats[q.topic].total++;
    if (answers[i] === q.answer) topicStats[q.topic].correct++;
  });

  let html = '<div class="breakdown-title">Topic Breakdown</div>';
  Object.entries(topicStats).forEach(([topic, stats]) => {
    const p   = Math.round((stats.correct / stats.total) * 100);
    const col = p >= 80 ? 'var(--green)' : p >= 60 ? 'var(--gold)' : 'var(--red)';
    const name = topic.split('–').pop().trim();
    html += `<div class="breakdown-row">
      <div class="breakdown-name">${name}</div>
      <div class="breakdown-bar-track">
        <div class="breakdown-bar-fill" style="width:${p}%;background:${col}"></div>
      </div>
      <div class="breakdown-pct" style="color:${col}">${p}%</div>
    </div>`;
  });
  document.getElementById('topicBreakdown').innerHTML = html;
}

function reviewWrong() {
  const wrongIdxs = Object.keys(answers)
    .filter(i => answers[i] !== quizQuestions[i].answer)
    .map(Number);
  if (wrongIdxs.length === 0) { alert('No wrong answers to review! 🎉'); return; }
  quizQuestions = wrongIdxs.map(i => quizQuestions[i]);
  answers    = {};
  score      = 0;
  currentIdx = 0;
  document.getElementById('resultsView').style.display = 'none';
  document.getElementById('quizView').style.display    = 'block';
  buildNavGrid();
  renderQuestion();
}

function goHome() {
  document.getElementById('quizView').style.display    = 'none';
  document.getElementById('resultsView').style.display = 'none';
  document.getElementById('topicView').style.display   = 'block';
  document.getElementById('homeBtn').style.display     = 'none';
  document.getElementById('headerScore').style.display = 'none';
  init();
}

/* ===== BOOT ===== */
selectAll();
init();


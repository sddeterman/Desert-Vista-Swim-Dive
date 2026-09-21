export const metadata={title:"Results",description:"Desert Vista Swim & Dive championship results, state highlights and season results archive.",alternates:{canonical:"/results"},openGraph:{url:"/results"}};
const results=[
["Girls 200 Medley Relay","1st · 1:45.25","Marley Spray · Myra Streit · Sasha Volkova · Holland Stocker","School record"],
["Girls 200 Free Relay","2nd","Holland Stocker · Victoria Nguyen · Katarina Plank · Ellie Kayser",""],
["Girls 400 Free Relay","1st · 3:28.49","Marley Spray · Myra Streit · Alexa Largent · Ellie Kayser","School record"],
["Myra Streit","4th · 100 Fly · 57.41","3rd · 500 Free · 4:59.86","Podium"],
["Alexandra Volkova","4th · 200 IM · 2:08.16","3rd · 100 Breast · 1:04.10","Podium"],
["Delaney Holm","18th · 50 Free · 25.4","7th · 100 Back · 1:00",""],
["Auggie Grimm","9th · 100 Fly · 54.54","",""],
["Alex Yu","13th · 100 Back · 55.87","",""],
["Jonathan Zinger","18th · 50 Free · 22.53","",""],
["Remy Carter","32nd · Dive · 115 points","",""]
];
export default function Results(){return <main><section className="pageHero"><p className="eyebrow">THUNDER HISTORY</p><h1>Results</h1><p>Championship results and the growing season archive.</p></section><section className="section"><article className="championship"><span>2025</span><h2>Girls State Champions</h2><p>Desert Vista's girls finished first at state, highlighted by victories and school records in the 200 medley and 400 freestyle relays.</p></article><h2 className="resultsTitle">2025 State Highlights</h2><div className="tableWrap"><table><thead><tr><th>Event / Athlete</th><th>Result</th><th>Additional result / Relay</th><th>Note</th></tr></thead><tbody>{results.map(r=><tr key={r.join()}>{r.map((x,i)=><td key={i}>{x}</td>)}</tr>)}</tbody></table></div><div className="notice"><b>2026 results</b><p>Meet-by-meet results will be added as official results are posted.</p></div></section></main>}
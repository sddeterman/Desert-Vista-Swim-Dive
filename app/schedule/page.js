const meets=[
["Sep 3","4:00 PM","Millennium","NOZOMI Park","Freedom"],
["Sep 10","4:00 PM","AZ College Prep","Chandler High School","Freedom"],
["Sep 17","4:00 PM","Brophy Prep","NOZOMI Park","Freedom"],
["Sep 24","4:30 PM","Mountain View, Mesa","Kino Aquatic Center","Freedom"],
["Sep 25–26","TBD","Eagle Invite","Phoenix Country Day School","Approved Qualifier"],
["Oct 15","4:00 PM","Highland","Greenfield Junior High","Freedom"],
["Oct 17","TBD","10th Annual Forktoberfest","ASU – Tempe Campus","Approved Qualifier"],
["Oct 22","4:00 PM","Desert Mountain","McDowell Mountain Ranch Pool","Freedom"],
["Oct 27","TBD","Tempe All City Swim/Dive Meet","McClintock High School","Approved Qualifier"]
];
export default function Schedule(){return <main><section className="pageHero"><p className="eyebrow">MEET CENTRAL</p><h1>2026 Schedule</h1><p>Meet dates, locations and qualifier events for the Thunder.</p></section><section className="section"><div className="notice"><b>2026 varsity schedule</b><p>Schedule information is sourced from the current 2026–27 AZPreps365 Desert Vista varsity listing. Meet details can change; check the official listing before travel.</p></div><div className="tableWrap"><table><thead><tr><th>Date</th><th>Time</th><th>Opponent / Meet</th><th>Location</th><th>Type</th></tr></thead><tbody>{meets.map(r=><tr key={r.join()}>{r.map(x=><td key={x}>{x}</td>)}</tr>)}</tbody></table></div><div className="actions darkActions"><a className="primary" href="https://azpreps365.com/teams/swimming-boys/2023-desert-vista/221626-varsity">Official AZPreps365 Schedule</a></div></section></main>}
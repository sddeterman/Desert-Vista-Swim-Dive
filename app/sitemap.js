const base="https://desert-vista-swim-dive-ten.vercel.app";
const routes=["","/announcements","/team","/schedule","/results","/records","/parents","/boosters","/store","/faq","/contact"];
export default function sitemap(){return routes.map(route=>({url:base+route,changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:0.8}))}

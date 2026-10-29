// Demo news only. Replace this array with verified RSS/API data for live publishing.
const newsItems = [
 {id:1,category:"Vulnerability",label:"VULNERABILITY",date:"2026-10-28",source:"CISA",title:"ආරක්ෂක අවදානම් සඳහා නිල උපදෙස් පරීක්ෂා කරන්න",summary:"අදාළ මෘදුකාංග නිෂ්පාදකයාගේ උපදෙස් සහ නිල vulnerability advisories පරීක්ෂා කර, බලපෑමට ලක්වූ පද්ධති යාවත්කාලීන කිරීම වැදගත් වේ.",url:"https://www.cisa.gov/news-events/cybersecurity-advisories"},
 {id:2,category:"Ransomware",label:"RANSOMWARE",date:"2026-10-28",source:"The Hacker News",title:"Ransomware තර්ජන පිළිබඳ නවතම වාර්තා පරීක්ෂා කරන්න",summary:"Ransomware සිදුවීම්වලදී ආරක්ෂිත backup, බහු-සාධක සත්‍යාපනය සහ ජාල වෙන්කිරීම බලපෑම අඩු කිරීමට උපකාරී වේ. මෙය සත්‍ය සිදුවීමක් පිළිබඳ වාර්තාවක් නොව සාමාන්‍ය දැනුවත් කිරීමකි.",url:"https://thehackernews.com/"},
 {id:3,category:"Data Breach",label:"DATA BREACH",date:"2026-10-27",source:"BleepingComputer",title:"දත්ත කාන්දුවීම් වාර්තා තහවුරු කිරීමේදී අවධානය යොමු කළ යුතු කරුණු",summary:"දත්ත කාන්දුවක් පිළිබඳ වාර්තාවක් කියවන විට බලපෑමට ලක්වූ දත්ත වර්ගය, සිදුවූ දිනය සහ ආයතනයේ නිල නිවේදනය වෙන වෙනම තහවුරු කරන්න.",url:"https://www.bleepingcomputer.com/"},
 {id:4,category:"AI Security",label:"AI SECURITY",date:"2026-10-27",source:"SecurityWeek",title:"AI පද්ධති ආරක්ෂාව පිළිබඳ නව පර්යේෂණ අනුගමනය කරන්න",summary:"AI ආරක්ෂාවට prompt injection, දත්ත නිරාවරණය සහ සැපයුම් දාම අවදානම් ඇතුළත් විය හැකිය. සංවිධාන අවදානම් ඇගයීම සහ ප්‍රවේශ පාලනය පවත්වාගත යුතුය.",url:"https://www.securityweek.com/"},
 {id:5,category:"Malware",label:"MALWARE",date:"2026-10-26",source:"The Hacker News",title:"Malware තර්ජන හඳුනාගැනීම සඳහා මූලික ආරක්ෂක පියවර",summary:"නොදන්නා attachments විවෘත නොකිරීම, endpoint protection යාවත්කාලීන කිරීම සහ සැක සහිත ක්‍රියාකාරකම් log පරීක්ෂා කිරීම මූලික ආරක්ෂක පියවර වේ.",url:"https://thehackernews.com/"},
 {id:6,category:"Threat Intelligence",label:"THREAT INTEL",date:"2026-10-26",source:"UK NCSC",title:"තර්ජන වාර්තා කියවීමේදී මූලාශ්‍ර සහ සාක්ෂි වෙන්කර හඳුනාගන්න",summary:"Threat intelligence වාර්තාවකදී තහවුරු කළ කරුණු, විශ්ලේෂක අදහස් සහ තවමත් තහවුරු නොකළ ප්‍රකාශ වෙන්කර කියවීම වැදගත් වේ.",url:"https://www.ncsc.gov.uk/section/keep-up-to-date/threat-reports"},
 {id:7,category:"Vulnerability",label:"VULNERABILITY",date:"2026-10-25",source:"CISA",title:"මෘදුකාංග යාවත්කාලීන කිරීමේ ක්‍රියාවලිය පවත්වාගෙන යන්න",summary:"අවදානම් කළමනාකරණයට asset inventory එකක් පවත්වාගැනීම, patch ප්‍රමුඛතා තීරණය කිරීම සහ යාවත්කාලීන සාර්ථකදැයි පරීක්ෂා කිරීම ඇතුළත් වේ.",url:"https://www.cisa.gov/known-exploited-vulnerabilities-catalog"},
 {id:8,category:"Data Breach",label:"DATA BREACH",date:"2026-10-24",source:"Google News",title:"දත්ත නිරාවරණය පිළිබඳ වාර්තා බහු මූලාශ්‍රවලින් සසඳා බලන්න",summary:"එකම සිදුවීම පිළිබඳ වාර්තා එකකට වඩා කියවා, ප්‍රකාශිත දිනය සහ නිල තහවුරු කිරීම් සසඳා බැලීමෙන් වැරදි තොරතුරු අවම කරගත හැකිය.",url:"https://news.google.com/"},
 {id:9,category:"Ransomware",label:"RANSOMWARE",date:"2026-10-23",source:"BleepingComputer",title:"Backup යථා තත්ත්වයට පත් කළ හැකිදැයි නිතර පරීක්ෂා කරන්න",summary:"Backup එකක් තිබීම පමණක් ප්‍රමාණවත් නැහැ. එය offline හෝ වෙනම ආරක්ෂිත ස්ථානයක තබා restore test කිරීමත් වැදගත් වේ.",url:"https://www.bleepingcomputer.com/"},
 {id:10,category:"AI Security",label:"AI SECURITY",date:"2026-10-22",source:"SecurityWeek",title:"AI භාවිතයේදී සංවේදී දත්ත ආරක්ෂා කරගන්න",summary:"අනුමත මෙවලම් පමණක් භාවිතා කිරීම, සංවේදී තොරතුරු අනවශ්‍ය ලෙස ඇතුළත් නොකිරීම සහ ආයතනික ප්‍රතිපත්ති අනුගමනය කිරීම අවදානම් අඩු කරයි.",url:"https://www.securityweek.com/"},
 {id:11,category:"Malware",label:"MALWARE",date:"2026-10-21",source:"The Hacker News",title:"Phishing පණිවිඩ හඳුනාගැනීමට URL සහ යවන්නා පරීක්ෂා කරන්න",summary:"හදිසි ක්‍රියාමාර්ග ඉල්ලන පණිවිඩ, වැරදි domain නාම සහ අනපේක්ෂිත attachment phishing ලක්ෂණ විය හැකිය. සැකයක් ඇතිනම් වෙනම නිල මාර්ගයකින් තහවුරු කරන්න.",url:"https://thehackernews.com/"},
 {id:12,category:"Threat Intelligence",label:"THREAT INTEL",date:"2026-10-20",source:"CISA",title:"නිල ආරක්ෂක උපදෙස් සහ තර්ජන දැනුම්දීම් නිතර පරීක්ෂා කරන්න",summary:"සංවිධාන තම තාක්ෂණික පරිසරයට අදාළ උපදෙස් තෝරාගෙන, වගකිවයුතු කණ්ඩායම් වෙත දැනුම්දී, නිර්දේශිත පියවර ක්‍රියාත්මක කළ යුතුය.",url:"https://www.cisa.gov/news-events/cybersecurity-advisories"}
];
let selectedCategory = "all";
const grid = document.querySelector("#newsGrid");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function formatDate(date){return new Intl.DateTimeFormat("si-LK",{day:"numeric",month:"short",year:"numeric",timeZone:"Asia/Colombo"}).format(new Date(date+"T12:00:00+05:30"));}
function render(){
 const term=searchInput.value.trim().toLocaleLowerCase();
 let list=newsItems.filter(n=>{
  const matchCat=selectedCategory==="all"||n.category===selectedCategory;
  const haystack=[n.title,n.summary,n.source,n.category,n.label].join(" ").toLocaleLowerCase();
  return matchCat&&haystack.includes(term);
 });
 if(sortSelect.value==="oldest")list.sort((a,b)=>a.date.localeCompare(b.date));
 else if(sortSelect.value==="title")list.sort((a,b)=>a.title.localeCompare(b.title,"si"));
 else list.sort((a,b)=>b.date.localeCompare(a.date));
 grid.innerHTML=list.map(n=>`<article class="news-card">
  <div class="card-meta"><span class="tag">${escapeHtml(n.label)}</span><time class="date" datetime="${escapeHtml(n.date)}">${formatDate(n.date)}</time></div>
  <h3>${escapeHtml(n.title)}</h3><p>${escapeHtml(n.summary)}</p>
  <div class="card-bottomline"><span class="source-name">${escapeHtml(n.source)}</span><a class="read-link" href="${escapeHtml(n.url)}" target="_blank" rel="noopener noreferrer">මූලාශ්‍රය ↗</a></div>
 </article>`).join("");
 resultCount.textContent=`පුවත් ${list.length}ක්`;
 document.querySelector("#totalCount").textContent=newsItems.length;
 emptyState.hidden=list.length!==0;
 grid.hidden=list.length===0;
}
document.querySelector("#categoryFilters").addEventListener("click",e=>{
 const btn=e.target.closest("button[data-category]");if(!btn)return;
 selectedCategory=btn.dataset.category;
 document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===btn));render();
});
searchInput.addEventListener("input",render);sortSelect.addEventListener("change",render);
document.querySelector("#clearFilters").addEventListener("click",()=>{searchInput.value="";selectedCategory="all";sortSelect.value="newest";document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.category==="all"));render();});
const dialog=document.querySelector("#briefingDialog");
document.querySelector("#briefingBtn").addEventListener("click",()=>dialog.showModal());
document.querySelector("#dialogDone").addEventListener("click",()=>dialog.close());
document.querySelector("#refreshBtn").addEventListener("click",()=>{document.querySelector("#lastUpdated").textContent="Demo දත්ත · "+new Intl.DateTimeFormat("si-LK",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Colombo"}).format(new Date());render();});
document.querySelector("#lastUpdated").textContent="Demo දත්ත · "+new Intl.DateTimeFormat("si-LK",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Colombo"}).format(new Date());
render();

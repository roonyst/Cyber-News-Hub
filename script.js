let newsItems = [];
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
  const haystack=[n.titleSi,n.summarySi,n.title,n.summary,n.source,n.category,n.label].join(" ").toLocaleLowerCase();
  return matchCat&&haystack.includes(term);
 });
 if(sortSelect.value==="oldest")list.sort((a,b)=>a.date.localeCompare(b.date));
 else if(sortSelect.value==="title")list.sort((a,b)=>a.title.localeCompare(b.title,"si"));
 else list.sort((a,b)=>b.date.localeCompare(a.date));
 grid.innerHTML=list.map(n=>`<article class="news-card">
  <div class="card-meta"><span class="tag">${escapeHtml(n.label)}</span><time class="date" datetime="${escapeHtml(n.date)}">${formatDate(n.date)}</time></div>
  <h3>${escapeHtml(n.titleSi||n.title)}</h3><p>${escapeHtml(n.summarySi||n.summary)}</p>
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
document.querySelector("#refreshBtn").addEventListener("click",()=>{document.querySelector("#lastUpdated").textContent="නැවත කියවීම...";loadLiveNews();});
async function loadLiveNews(){
 const stamp=document.querySelector("#lastUpdated");
 try {
  const response=await fetch("news.json?ts="+Date.now(),{cache:"no-store"});
  if(!response.ok) throw new Error("news.json not published yet");
  const payload=await response.json();
  newsItems=Array.isArray(payload.items)?payload.items:[];
  stamp.textContent="අවසන් යාවත්කාලීන කිරීම: "+(payload.updatedAt?new Intl.DateTimeFormat("si-LK",{dateStyle:"medium",timeStyle:"short",timeZone:"Asia/Colombo"}).format(new Date(payload.updatedAt)):"දැනට") ;
  const notice=document.querySelector("#liveNotice");
  if(notice){notice.classList.toggle("notice-live",newsItems.length>0);notice.querySelector("p").innerHTML=newsItems.length?`<strong>සජීවී RSS පුවත්:</strong> මූලාශ්‍රවලින් ${newsItems.length} පුවත් ලබාගෙන ඇත. සාරාංශ සිංහලෙන් තිබීම පරිවර්තන API සැකසුම මත රඳා පවතී. මුල් ලිපිය විවෘත කර තහවුරු කරන්න.`:`<strong>පුවත් තවම ලැබී නැහැ.</strong> GitHub Actions workflow එක ක්‍රියාත්මක කර ඇතිදැයි පරීක්ෂා කරන්න.`;}
  render();
 }catch(err){
  newsItems=[];stamp.textContent="සජීවී දත්ත තවම සූදානම් නැහැ";
  const notice=document.querySelector("#liveNotice");if(notice)notice.querySelector("p").innerHTML='<strong>සජීවී feed එක තවම සම්බන්ධ වී නැහැ.</strong> GitHub Actions workflow එක පළ කර පළමු වරට ක්‍රියාත්මක වීමට ඉඩ දෙන්න. මේ අතර ආදර්ශ පුවත් නොපෙන්වයි.';
  render();
 }
}
loadLiveNews();

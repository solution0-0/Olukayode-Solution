const navToggle=document.getElementById("navToggle");
const navMenu=document.getElementById("navbarMenu");
navToggle.addEventListener("click",()=>{const open=navMenu.classList.toggle("open");navToggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".navbar-menu a").forEach(a=>a.addEventListener("click",()=>navMenu.classList.remove("open")));
window.addEventListener("scroll",()=>document.getElementById("mainNav").classList.toggle("scrolled",window.scrollY>40));
document.getElementById("year").textContent=new Date().getFullYear();

const projects=[
 {title:"Student Activity Automation",image:"assets/img/portfolio/automation.svg",description:"A student-focused software concept exploring how university activity information and routine workflows can be organized through a digital platform. This is presented as a project area/concept, not as a claim of a publicly launched product."},
 {title:"Database Design & Management",image:"assets/img/portfolio/database.svg",description:"Practical learning in relational database concepts, table structures, relationships, SQL queries, MySQL, PostgreSQL, data organization and data integrity."},
 {title:"Web Development",image:"assets/img/portfolio/web.svg",description:"Frontend development practice using HTML, CSS and React, with an interest in structured pages, responsive layouts and clear user interfaces."},
 {title:"Data & Spreadsheet Analysis",image:"assets/img/portfolio/data.svg",description:"Spreadsheet and data handling skills including Excel, VLOOKUP, INDEX, COUNTIF, PivotTables, conditional formatting, sorting, filtering and Google Sheets."},
 {title:"Photography & Videography",image:"assets/img/portfolio/creative.svg",description:"Creative media experience covering photography, video production, visual composition, image and video editing, and digital content organization."},
 {title:"Virtual Assistance & Data Entry",image:"assets/img/portfolio/support.svg",description:"Six months of experience at Legislator Global supporting administrative operations, data entry, digital records, spreadsheets, document management and routine communication."}
];
const modal=document.getElementById("portfolioModal");
function closeModal(){modal.classList.remove("show");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}
document.querySelectorAll(".portfolio-item").forEach(item=>item.addEventListener("click",()=>{
 const p=projects[Number(item.dataset.project)];
 document.getElementById("modalTitle").textContent=p.title;
 document.getElementById("modalImage").src=p.image;
 document.getElementById("modalImage").alt=p.title;
 document.getElementById("modalDescription").textContent=p.description;
 modal.classList.add("show");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}));
document.querySelector(".modal-close").addEventListener("click",closeModal);
document.querySelector(".modal-dismiss").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});

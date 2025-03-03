import{j as e,r as N,I as _,C as f,a as w,u as j,b as S,R as L}from"./index-CFyOaO_-.js";import{B as k,A as R}from"./ActorList-C6_6jmzH.js";import"./index.es-B6tE8OHl.js";import"./ModalProvider-DiWS2mDZ.js";const C=({tvInfo:t={}})=>e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-[1.4vw] font-bold",children:"Infomation"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"font-bold",children:"Original Name"}),e.jsx("p",{children:t.original_name})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"font-bold",children:"Original Country"}),e.jsx("p",{children:(t.origin_country||[]).map(s=>e.jsx("img",{src:`https://flagcdn.com/48x36/${s.toLowerCase()}.png`,className:"mt-4 mr-1 w-[1.4vw]"},s))})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"font-bold",children:"Status"}),e.jsx("p",{children:t.status})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"font-bold",children:"Network"}),(t.networks||[]).map(s=>e.jsx("img",{className:"invert",src:`https://media.themoviedb.org/t/p/h30${s.logo_path}`},s.id))]})]}),M=({seasons:t=[]})=>{const[s,n]=N.useState(!1),d=s?t:t.slice(0,5);return e.jsxs("div",{className:"mt-8 text-[1.3vw]",children:[e.jsx("p",{className:"mb-4 text-[1.4vw] font-bold",children:"Seasons"}),d.map(r=>e.jsxs("div",{className:"flex gap-4 rounded border border-slate-200 p-3 shadow-md",children:[e.jsx(_,{width:130,height:195,className:"w-1/4 rounded-lg",src:r.poster_path&&`https://media.themoviedb.org/t/p/w300${r.poster_path}`}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-[1.4vw] font-bold",children:r.name}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:"font-bold",children:"Rating"}),e.jsx(f,{percent:Math.round(r.vote_average*10),size:2.5,strokeWidth:.2})]}),e.jsxs("p",{className:"font-bold",children:["Release Date: ",e.jsx("span",{children:r.air_date})]}),e.jsxs("p",{children:[r.episode_count," episodes"]}),e.jsx("p",{children:r.overview})]})]},r.id)),e.jsx("p",{className:"mt-1 cursor-pointer",onClick:()=>n(!s),children:s?"Show Less":"Show More"})]})},V=()=>{var c,l,m,p,h,x;const{id:t}=w(),{data:s,isLoading:n}=j({url:`/tv/${t}?append_to_response=content_ratings,aggregate_credits,videos`,method:"GET"}),{data:d,isLoading:r}=j({url:`/tv/${t}/recommendations`,method:"GET"}),g=(d.results||[]).slice(0,12),v=(l=(((c=s.content_ratings)==null?void 0:c.results)||[]).find(a=>a.iso_3166_1==="US"))==null?void 0:l.rating,b=(((m=s.aggregate_credits)==null?void 0:m.crew)||[]).filter(a=>{const o=(a.jobs||[]).map(i=>i.job);return["Director","Writer"].some(i=>o.find(u=>u===i))}).slice(0,7).map(a=>({id:a.id,job:a.jobs[0].job,name:a.name}));return n?e.jsx(S,{}):e.jsxs("div",{children:[e.jsx(k,{title:s.name,backdrop_path:s.backdrop_path,poster_path:s.poster_path,release_date:s.first_air_date,genres:s.genres,point:s.vote_average,overview:s.overview,certification:v,crews:b,trailerVideoKey:(h=(((p=s.videos)==null?void 0:p.results)||[]).find(a=>a.type==="Trailer"))==null?void 0:h.key}),e.jsx("div",{className:"bg-black text-[1.2vw] text-white",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"flex-[2]",children:[e.jsx(R,{actors:(((x=s.aggregate_credits)==null?void 0:x.cast)||[]).map(a=>{var o,i;return{...a,character:(o=a.roles[0])==null?void 0:o.character,episodeCount:(i=a.roles[0])==null?void 0:i.episode_count}})}),e.jsx(M,{seasons:(s.seasons||[]).reverse()}),e.jsx(L,{mediaList:g,isLoading:r,title:"More like this",className:"mt-6"})]}),e.jsx("div",{className:"flex-1",children:e.jsx(C,{tvInfo:s})})]})})]})};export{V as default};

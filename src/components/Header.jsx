import React from 'react'


export default function Header({user,onLogout}){
return (
<header className="flex items-center justify-between px-6 py-4 border-b" style={{borderColor:'var(--stroke)'}}>
<div className="flex items-center gap-3">
<div style={{width:42,height:42,borderRadius:8,background:'var(--logo)'}}></div>
<div>
<div style={{color:'var(--heading)',fontWeight:700}}>EventsApp</div>
<div style={{color:'var(--subtitle)',fontSize:12}}>Discover & attend</div>
</div>
</div>
<div className="flex items-center gap-4">
<div style={{color:'var(--heading)'}}>{user?.username}</div>
<button onClick={onLogout} className="px-3 py-2 rounded" style={{border:'1px solid var(--stroke)'}}>Logout</button>
</div>
</header>
)
}

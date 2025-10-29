import React from 'react'
import Header from '../components/Header'
import RecoCarousel from '../components/RecoCarousel'
import UpcomingList from '../components/UpcomingList'
import { logout, getCurrentUser } from '../lib/auth'


export default function Events(){
const u = getCurrentUser()
return (
<div className="min-h-screen">
<Header onLogout={()=>{logout();location.href='/login'}} user={u} />
<main className="px-4 py-6 max-w-5xl mx-auto">
<section className="mb-6">
<img src="/banner.jpg" alt="banner" className="w-full rounded-2xl h-40 object-cover"/>
<h1 className="text-2xl font-bold mt-4" style={{color:'var(--heading)'}}>Upcoming events near you</h1>
<p className="text-sm" style={{color:'var(--subtitle)'}}>Handpicked shows & events</p>
</section>


<section className="mb-6">
<h2 className="font-semibold mb-3" style={{color:'var(--heading)'}}>Recommended Shows</h2>
<RecoCarousel />
</section>


<section>
<h2 className="font-semibold mb-3" style={{color:'var(--heading)'}}>Upcoming Events</h2>
<UpcomingList />
</section>
</main>
</div>
)
}

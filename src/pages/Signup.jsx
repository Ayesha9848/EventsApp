import React, {useState} from 'react'
import { signup } from '../lib/auth'
import { useNavigate, Link } from 'react-router-dom'


export default function Signup(){
const nav = useNavigate()
const [form,setForm]=useState({email:'',username:'',password:''})
const [err,setErr]=useState('')
const [loading,setLoading]=useState(false)


const submit=async e=>{
e.preventDefault(); setErr(''); setLoading(true)
try{ await signup(form); nav('/events') }catch(x){setErr(x.message)}finally{setLoading(false)}
}


return (
<div className="min-h-screen flex items-center justify-center p-4">
<form onSubmit={submit} className="w-full max-w-md border p-6 rounded-2xl" style={{borderColor:'var(--stroke)'}}>
<h2 className="text-2xl font-semibold" style={{color:'var(--heading)'}}>Create account</h2>
<p className="text-sm mt-2" style={{color:'var(--subtitle)'}}>
Signup to see recommended shows and upcoming events
</p>
<input required className="mt-4 p-3 w-full rounded" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
<input required className="mt-3 p-3 w-full rounded" placeholder="Username" value={form.username} onChange={e=>setForm({...form,username:e.target.value})} />
<input required type="password" className="mt-3 p-3 w-full rounded" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
{err && <div className="text-red-600 mt-3">{err}</div>}
<button className="mt-4 w-full py-3 rounded-2xl" style={{background:'var(--logo)',color:'#fff'}}>{loading? 'Creating...':'Sign up'}</button>
<div className="mt-3 text-sm">Already have an account? <Link to="/login" className="underline">Login</Link></div>
</form>
</div>
)
}

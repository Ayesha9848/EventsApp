import React, {useState} from 'react'
import { login } from '../lib/auth'
import { useNavigate, Link } from 'react-router-dom'


export default function Login(){
const nav = useNavigate();
const [form,setForm]=useState({email:'',password:''})
const [err,setErr]=useState('')
const [loading,setLoading]=useState(false)


const submit=async e=>{
e.preventDefault(); setErr(''); setLoading(true)
try{ await login(form); nav('/events') }catch(x){setErr(x.message)}finally{setLoading(false)}
}


return (
<div className="min-h-screen flex items-center justify-center p-4">
<form onSubmit={submit} className="w-full max-w-md border p-6 rounded-2xl" style={{borderColor:'var(--stroke)'}}>
<h2 className="text-2xl font-semibold" style={{color:'var(--heading)'}}>Welcome back</h2>
<input required className="mt-4 p-3 w-full rounded" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
<input required type="password" className="mt-3 p-3 w-full rounded" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
{err && <div className="text-red-600 mt-3">{err}</div>}
<button className="mt-4 w-full py-3 rounded-2xl" style={{background:'var(--logo)',color:'#fff'}}>{loading? 'Signing...':'Login'}</button>
<div className="mt-3 text-sm">No account? <Link to="/signup" className="underline">Create one</Link></div>
</form>
</div>
)
}

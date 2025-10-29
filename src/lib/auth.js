// lightweight client-side auth helper (replace with real backend logic)
export const signup = async ({email, username, password}) => {
const users = JSON.parse(localStorage.getItem('users')||'[]')
if(users.find(u=>u.email===email)) throw new Error('Email exists')
users.push({email,username,password:btoa(password)})
localStorage.setItem('users',JSON.stringify(users))
localStorage.setItem('currentUser',JSON.stringify({email,username}))
return {email,username}
}
export const login = async ({email,password})=>{
const users = JSON.parse(localStorage.getItem('users')||'[]')
const user = users.find(u=>u.email===email && u.password===btoa(password))
if(!user) throw new Error('Invalid credentials')
localStorage.setItem('currentUser',JSON.stringify({email:user.email,username:user.username}))
return {email:user.email,username:user.username}
}
export const logout = ()=>{ localStorage.removeItem('currentUser') }
export const getCurrentUser = ()=> JSON.parse(localStorage.getItem('currentUser')||'null')

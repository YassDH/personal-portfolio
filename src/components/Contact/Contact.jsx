import React, { useState } from 'react'
import {motion} from 'framer-motion'
import ContactCard from './ContactCard';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const [result, setResult] = useState("");

    const [pending, setPending] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e)=>{
      e.preventDefault()
      setPending(true)
      setSucess(false)
      setError(false)
      setResult("Sending....");
      const formData = new FormData(e.target);

      formData.append("access_key", "6d128682-0006-4705-92a2-c0cd285f5fac");
      formData.append("Name", name);
      formData.append("Email", email);
      formData.append("Subject", subject);
      formData.append("Message", message);


      const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST", 
      body: formData
      }).then((res) => res.json());

      if (res.success) {
          setResult(res.message);
          
          setName('')
          setEmail('')
          setMessage('')
          setSubject('')
          
          setSucess(true)
          setPending(false)
          setError(false)
          
          setTimeout(()=>{
              setResult("")
              setSucess(false)
          },5000)
      } else {
          setResult(res.message);

          setSucess(false)
          setPending(false)
          setError(true)

          setTimeout(()=>{
              setResult("")
              setError(false)
          },5000)
      }
  };

const contact =[
  {
    key : 1,
    title : "yassine.dhaouadi@insat.ucar.tn",
    logo : <i class="fa-solid fa-envelope"></i>
  
  },
  {
    key : 2,
    title : "in/yassine-dhaouadi/",
    logo : <i class="fa-brands fa-linkedin"></i>
  
  },
]

  return (
    <div id='contact' className='md:px-20 lg:px-40 px-5 min-h-screen'>
        <div className=' flex flex-col items-start justify-center h-full flex-grow'>
            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1}}>
                <h2 className=' text-lg md:text-xl text-gray-300/60 font-semibold'>GET IN TOUCH</h2>
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1 , delay : 0.2}}>
                <h2 className=' text-5xl md:text-6xl lg:text-7xl text-white font-bold'>CONT<span className=' text-rose-600'>ACT</span></h2>
            </motion.div>
            <div className=' mt-10 w-full z-10 flex flex-wrap gap-10'>
              <div className=' w-full lg:w-5/12 flex-grow max-w-[700px] bg-gray-800/80 flex flex-col p-5 rounded-md hover:bg-gray-800/60 transition-all duration-500'>
                <form onSubmit={handleSubmit}>
                    {sucess ? <div className=' my-3 text-center bg-green-600/70 p-2 rounded-md text-white'>{result}</div> : null }
                    {pending ? <div className=' my-3 text-center bg-yellow-600/70 p-2 rounded-md text-white'>{result}</div> : null }
                    {error ? <div className=' my-3 text-center bg-red-600/70 p-2 rounded-md text-white'>{result}</div> : null }
                  <div className="relative h-10 w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full rounded-[7px] border border-gray-300/60 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray-300/60 focus:border-2 focus:border-rose-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" " required type='text' onChange={(e)=>setName(e.target.value)} value={name}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300/60 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-300/60 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-300/60 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-rose-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-rose-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Fullname
                    </label>
                  </div><br />

                  <div className="relative h-10 w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full rounded-[7px] border border-gray-300/60 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray-300/60 focus:border-2 focus:border-rose-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "type='email' required onChange={(e)=>setEmail(e.target.value)} value={email}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300/60 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-300/60 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-300/60 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-rose-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-rose-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Email adress
                    </label>
                  </div><br />

                  <div className="relative h-10 w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full rounded-[7px] border border-gray-300/60 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray-300/60 focus:border-2 focus:border-rose-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" " required type='text' onChange={(e)=>setSubject(e.target.value)} value={subject}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300/60 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-300/60 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-300/60 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-rose-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-rose-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Subject
                    </label>
                  </div><br />

                  <div className="relative w-full min-w-[200px]">
                    <textarea
                      className="peer w-full rounded-[7px] border border-gray-300/60 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray-300/60 focus:border-2 focus:border-rose-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" " rows={7} required onChange={(e)=>setMessage(e.target.value)} value={message}
                    ></textarea>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300/60 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-300/60 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-rose-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-rose-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Message
                    </label>
                  </div>

                  <button type="submit" className="z-10 w-full mt-5 cursor-pointer rounded bg-rose-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none">Send message</button>

                </form>
              </div>

              <div className=' flex flex-col gap-5 w-full md:w-fit'>
                {contact.map(element => (<ContactCard key={element.key} logo={element.logo} title={element.title} />))}                
              </div>

            </div>
        </div>
    </div>
  )
}

export default Contact
import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddNews = () => {
  const url = "http://localhost:8000/api/article-create"
  const [data, setData] = useState({
    newsHeading: "",
    newsImage: "",
    newsIntro: "",
    newsBody : "",
    conclusion : ""
  })
  function handle(e) {
    const newsdata= {...data}
    newsdata[e.target.id] = e.target.value
    setData(newsdata)
    console.log(newsdata)
  }
  function handleSubmit(e){
    e.preventDefault();
    axios.post(url,{
      headline: data.newsHeading,
      image : data.newsImage,
      introduction: data.newsIntro,
      body : data.newsBody,
      conclusion : data.conclusion
    }).then(res => console.log(res.data))

    // setData();
  }

  return (
    <div className='container'>
        <Navbar />
        <section className="post p-6 bg-fuchsia-100 w-full">

            <div className='rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl'>
              <div className='p-8 py-12 sm:p-16'>
                <h2 className='mb-8 text-2xl font-bold text-gray-800 dark:text-white'>
                  Write your own news article
                </h2>

                <form className='space-y-8'
                      onSubmit={(e)=> handleSubmit(e)}>
                  <div className='space-y-2'>
                    <label htmlFor='newsHeading' className='text-gray-600 dark:text-gray-300'>
                      Headline of the news
                    </label>
                    <input
                      type='text'
                      name='newsHeading'
                      id='newsHeading'
                      onChange={(e)=>handle(e)}
                      value={data.newsHeading}
                      placeholder='Janata Janna Chhahanxa!'
                      required
                      className='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-cyan-300'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label htmlFor='newsImage' className='text-gray-600 dark:text-gray-300'>
                      Upload the news image
                    </label>
                    <input
                      type='file'
                      name='newsImage'
                      id='newsImage'
                      accept='image'
                      onChange={(e)=>handle(e)}
                      value={data.newsImage}
                      required
                      className='focus:outline-none w-full block rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-cyan-300'
                    />
                  </div>

                  
                  <div className='space-y-2'>
                    <label htmlFor='newsIntro' className='text-gray-600 dark:text-gray-300'>
                      Introduction of your news
                    </label>
                    <textarea 
                    name="newsIntro" 
                    id="newsIntro" 
                    cols="30" 
                    rows="10"
                    onChange={(e)=>handle(e)}
                    value={data.newsIntro}
                    placeholder='intro'
                    required
                    className='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-cyan-300'>
                      
                    </textarea>
                  </div>


                  <div className='space-y-2'>
                    <label htmlFor='newsIntro' className='text-gray-600 dark:text-gray-300'>
                      Body of your news
                    </label>
                    <textarea 
                    name="newsBody" 
                    id="newsBody" 
                    cols="30" 
                    rows="10"
                    onChange={(e)=>handle(e)}
                    value={data.newsBody}
                    placeholder='body'
                    required
                    className='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-cyan-300'>
                      
                    </textarea>
                  </div>


                  <div className='space-y-2'>
                    <label htmlFor='conclusion' className='text-gray-600 dark:text-gray-300'>
                      Conclusion of your news
                    </label>
                    <textarea 
                    name="conclusion" 
                    id="conclusion" 
                    cols="30" 
                    rows="10"
                    onChange={(e)=>handle(e)}
                    value={data.conclusion}
                    placeholder='Hence proved!!!'
                    required
                    className='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300'>
                      
                    </textarea>
                  </div>

                  <button
                    type='submit'
                    className='relative py-2 flex h-[30%] w-[30%] items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-[#6366F1] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95'>
                    <span className='relative text-base font-semibold text-white dark:text-dark'>
                      POST
                    </span>
                  </button>

                  <p className='border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400'>
                    Have a question?
                    <a href='#' className='text-blue-400'>
                      {' '}
                      Contact Us
                    </a>
                  </p>
                </form>
              </div>
					</div>


        </section>
    </div>
  )
}

export default AddNews
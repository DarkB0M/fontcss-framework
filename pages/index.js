import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='container'>
      <h1 className='title'>The new font <br/> <span className='colors'>CSS Framework</span></h1>
      <div>
        <h3 className='descripition'> Tired of Importing<br/> Fonts All the Time?<br/> Your Problem ended<br/> with Font-Framework.<br/>
With more than<br/> 15 fonts already prepared.<br/> <span className='docs'><a href='./docs'>Read The Docs</a></span></h3>
<h3 className='created'>Created By DarkB0M</h3>
      </div>
      <style jsx>{`
    .title {
      text-align:center;
      font-size:55px;
      margin:0;
      color:#b5b3b3;
    }
    .colors{
      color:blue;
    }
    .container{
      color:#b5b3b3;
    }
    .descripition{
      text-align:center;
      margin-top:70px;
      margin-right:130px;
      margin-left:34px  
    }
    .docs{
      color:#4dafff;
    }
    .created{
      text-align:right;
      margin-top:200px
    }
    `}</style>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import imgCreateExample from "./../../../public/verlan/verlanDemoCreateAnExample.gif"
import imgSearchFunction from "./../../../public/verlan/verlanDictionaryBasicFunctions.gif"
export const metadata = { title: 'Alice Hepburn: Verlan-French Dictionary' }
export default function Page() {
  return (
    <>
      <div class="project-title">
        <p>
          <h1>Verlan Dictionary</h1>
        </p>
        <p>
          <a href="https://github.com/aokhepburn/French-To-Verlan-Dictionary" target="_blank">
            Github
          </a>
        </p>
        <div className="inline-flex items-baseline"><a href="https://react.dev/" target="_blank"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /></a> <a href="https://reactrouter.com/en/main" target="_blank"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" /></a> <a href="https://devdocs.io/javascript/" target="_blank"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /></a> <a href="https://www.json.org/json-en.html" target="_blank"><img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" /></a></div>
      </div>

      <div class="project-body">
        <p>
          Verlan is a French slang, and though I was able to find a website
          that had translations between standard French and Verlan I could not
          find one that included English translations. So I built a website!</p>

        <p>This is a React based website that utilizes React Router to navigate content. The backend is a simple JSON database that I wrote that is a combination of existing translations of Verlan and my own. While I am trying to provide translations into English some things are context based (like the famous "comme ça") or idiomatic.</p>

        <p>The main feature of this project is a dictionary page with search functionality.</p>
        <p className="flex justify-center"><Image
          src={imgSearchFunction}
          width={800}
          alt="Demonstration of searching of the dictionary."
        /></p>

        We also decided to add a page for adding your own examples. This is a feature I would like to build out to allow for translations, and add other user interactions including recommended feedback to the dictionary (right now everyone is welcome to push changes to the dictionary on github with their recommendations).

        <p className="flex justify-center"><Image
          src={imgCreateExample}
          width={800}
          alt="Demonstration of creating and posting a new example."
        /></p>

        <p><h2>Future Features</h2>
          <ul><li>Adding speech to text to allow people to speak the slang to find the translation.</li>
            <li>Make a version of this site into a mobile app for practical travelling use!</li></ul></p>
      </div>
      <p class="temporary-footer"><Link href="/">Home</Link><br />
        All badges are thanks to <a href="https://github.com/alexandresanlim/Badges4-README.md-Profile" target="_blank">alexandersanlim @ Github</a></p>
    </>
  );
}

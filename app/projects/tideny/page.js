import Link from "next/link"
import Image from "next/image"
import imgFramework1 from "./../../../public/tideny/tidenywireframeworktest1.jpg"
import imgFramework2 from "./../../../public/tideny/tidenywireframeworktest2.jpg"

export const metadata = { title: 'Alice Hepburn: TideNY' }

export default function Page() {
    return <><h1>Hello, TideNY Page!</h1>
        <a href="https://github.com/TideNY/tide-gps-location" target="_blank">GitHub</a>
        <div className="flex min-h-screen flex-wrap items-center justify-center padding">
            {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"></main> */}
            <Image
                src={imgFramework1}
                height={600}
                alt="Picture of the author"
            />
            <Image
                src={imgFramework2}
                height={600}
                alt="Picture of the author"
            />
        </div>
        <p class="temporary-footer"><Link href="/">Home</Link><br />
            All badges are thanks to <a href="https://github.com/alexandresanlim/Badges4-README.md-Profile" target="_blank">alexandersanlim @ Github</a></p>
    </>
}
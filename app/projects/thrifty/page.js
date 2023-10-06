import Link from "next/link"

export const metadata = { title: 'Thrifty' }

export default function Page() {

    return <>
        <h1>Hello, Thrifty Page!</h1>
        <a href="https://github.com/aokhepburn/price-comparison-site" target="_blank">GitHub</a>
        <p class="temporary-footer"><Link href="/">Home</Link><br />
            All badges are thanks to <a href="https://github.com/alexandresanlim/Badges4-README.md-Profile" target="_blank">alexandersanlim @ Github</a></p>
    </>
}
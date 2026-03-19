import Image from 'next/image'
import Link from 'next/link'

export default function MarketingFooter() {
  return (
    <footer className="mx-auto mt-8 grid w-full max-w-[1240px] grid-cols-1 gap-10 border-t border-white/10 px-6 pb-14 pt-16 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="reveal-up">
        <p className="text-2xl text-neutral-400">MAX IT Consulting LLC digital platform for hiring and careers.</p>
        <div className="mt-8 inline-flex rounded-lg border border-white/10 bg-white p-3">
          <Image
            src="/media/maxit-logo-clean-full.png"
            alt="MAX IT Consulting LLC logo"
            width={280}
            height={394}
            className="h-16 w-auto object-contain sm:h-20"
          />
        </div>
      </div>

      <div className="reveal-up grid grid-cols-3 gap-6 text-right">
        <div className="space-y-4 text-lg">
          <Link href="/about" className="block text-neutral-300 hover:text-white">
            About
          </Link>
          <Link href="/roles" className="block text-neutral-300 hover:text-white">
            Roles
          </Link>
          <Link href="/hiring" className="block text-neutral-300 hover:text-white">
            Hiring
          </Link>
        </div>
        <div className="space-y-4 text-lg">
          <Link href="/contact" className="block text-neutral-300 hover:text-white">
            Contact
          </Link>
          <Link href="/blog" className="block text-neutral-300 hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="block text-neutral-300 hover:text-white">
            Terms
          </Link>
        </div>
        <div className="space-y-4 text-lg">
          <a href="https://x.com" target="_blank" rel="noreferrer" className="block text-neutral-300 hover:text-white">
            X (Twitter)
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block text-neutral-300 hover:text-white">
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/maxitconsultingllc/"
            target="_blank"
            rel="noreferrer"
            className="block text-neutral-300 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="reveal-up lg:col-span-2">
        <p className="text-center text-xl text-neutral-500">Built for MAX IT Consulting LLC.</p>
      </div>
    </footer>
  )
}

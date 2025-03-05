"use client"

import Image from "next/image"
import Link from "next/link"
import { DiscIcon as Facebook, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { TikTok } from "@/components/tiktok-icon"
import { MobileMenu } from "@/components/mobile-menu"
import { FaqItem } from "@/components/faq-item"

const navLinks = [
  { href: "/", label: "Főoldal" },
  { href: "#csatlakozas", label: "Csatlakozás" },
  { href: "#gyik", label: "GYIK" },
]

// FAQ adatok
const faqItems = [
  {
    question: "Mi az a FiveM RP szerver?",
    answer:
      "A FiveM egy módosítás a Grand Theft Auto V játékhoz, amely lehetővé teszi egyedi szerverek létrehozását. Az RP (roleplay) szervereken a játékosok különböző karaktereket alakítanak és valós élethelyzeteket szimulálnak egy virtuális városban.",
  },
  {
    question: "Szükségem van a GTA V játékra a csatlakozáshoz?",
    answer:
      "Igen, a FiveM használatához szükséged van a Grand Theft Auto V legális példányára a Steam, Epic Games vagy Rockstar Games platformon.",
  },
  {
    question: "Hogyan kezdhetem el a roleplayt, ha még soha nem csináltam ilyet?",
    answer:
      "Csatlakozz a Discord szerverünkhöz, ahol találsz útmutatókat és segítséget kaphatsz a tapasztalt játékosoktól. Emellett a szerveren belül is vannak oktatók, akik segítenek az első lépésekben.",
  },
  {
    question: "Milyen karaktert hozhatok létre a szerveren?",
    answer:
      "Szinte bármilyen karaktert létrehozhatsz, ami beleillik a szerver világába. Lehetsz rendőr, orvos, szerelő, bűnöző vagy akár vállalkozó is. A lényeg, hogy tartsd be a szerver szabályzatát és játssz valósághűen.",
  },
  {
    question: "Vannak-e egyedi járművek és épületek a szerveren?",
    answer:
      "Igen, a Dark City Roleplay számos egyedi járművel, épülettel és funkcióval rendelkezik, amelyek egyedivé teszik a játékélményt.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Háttér */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/Background.jpg"
          alt="Dark City Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">

        {/* Navigation */}
        <nav className="bg-black/80 sticky top-0 backdrop-blur-sm border-b border-red-900/20 z-10">
          <div className="mx-auto max-w-[1400px] px-4 flex items-center justify-between py-4">
            <div className=" w-11 h-0  justify-center flex items-center">
              <Image src="/favicon.ico" priority width={100} height={50} alt={"logo"}></Image>

            </div>

            {/* Mobile */}
            <MobileMenu links={navLinks} />

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="font-bold tracking-wider text-lg text-gray-200 hover:text-red-500 transition-colors"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index / 10,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}


                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {link.label}
                  </motion.div>
                </Link>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0, 0.71, 0.2, 1.01],
                }}>
                <motion.a
                  href="https://discord.gg/pb2gGfGCND"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discord
                </motion.a>


              </motion.div>

            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center  py-15">
          <div className="mx-auto max-w-[1400px] px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 ">
            <div className="flex flex-col justify-center lg:items-start items-center">
              <motion.h1
                className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight neon-text mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Dark City <br /> Roleplay
              </motion.h1>

              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >

                <motion.a
                  href="https://www.tiktok.com/@darkcity.roleplay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full h-16 w-16 bg-white/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500 transition-all duration-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TikTok className="h-7 w-7" />
                </motion.a>

                <motion.a
                  href="https://facebook.com"
                  aria-disabled="true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full h-16 w-16 bg-white/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500 transition-all duration-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="h-7 w-7" />
                </motion.a>

                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full h-16 w-16 bg-white/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500 transition-all duration-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="h-7 w-7" />
                </motion.a>
              </motion.div>
            </div>


            <motion.div
              className="bg-black/0 shadow-2xl shadow-red-600/40 backdrop-blur-sm  p-8 rounded-xl border border-red-900/40"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Miért mi?</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ha egy dinamikus, izgalmas és folyamatosan fejlődő RP élményre vágysz, ne keress tovább! A DarkCity
                RolePlay most újra megnyitja kapuit, és ezúttal egy teljesen új köntösben várja a kalandvágyó
                játékosokat. Csatlakozz te is a közösséghez, és építsd fel saját történeted egy élethű, szabad világban!
              </p>
              <div className="mt-8 flex justify-center">
                <motion.a
                  href="#csatlakozas"
                  className="inline-block bg-red-600/30 hover:bg-red-700/70 text-white px-8 py-3 rounded-md transition-colors text-lg font-medium w-full sm:w-auto text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Csatlakozás
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Csatlakozás Section */}
        <section id="csatlakozas" className="bg-black/40 backdrop-blur-sm py-18">
          <div className="mx-auto max-w-[1400px] px-4 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-500">Csatlakozás</h2>
              <p className="text-xl text-gray-300 mb-12">
                Kövesd az alábbi lépéseket a szerverünkhöz való csatlakozáshoz
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-black/60 border border-red-900/40 rounded-xl overflow-hidden backdrop-blur-sm hover:border-red-500/50 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="p-6 ">
                  <div className="flex items-center gap-3 mb-4">

                    <div className="bg-red-500/20 p-3 rounded-lg group-hover:bg-red-500/30 transition-colors">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">1. Lépés</h3>
                  </div>
                  <h4 className="text-lg font-medium mb-2">FiveM telepítése</h4>
                  <p className="text-gray-400 mb-6">
                    Töltsd le és telepítsd a FiveM alkalmazást a hivatalos weboldalról.
                  </p>
                  <motion.a
                    href="https://fivem.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-500 hover:text-red-400 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    FiveM letöltése
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                className="bg-black/60 border border-red-900/40  rounded-xl overflow-hidden backdrop-blur-sm hover:border-red-500/50 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-500/20 p-3 rounded-lg group-hover:bg-red-500/30 transition-colors">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">2. Lépés</h3>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Discord csatlakozás</h4>
                  <p className="text-gray-400 mb-6">
                    Csatlakozz a közösségünkhöz, ahol segítséget kaphatsz és értesülhetsz a frissítésekről.
                  </p>
                  <motion.a
                    href="https://discord.gg/pb2gGfGCND"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-500 hover:text-red-400 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Discord szerver
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                className="bg-black/60 border border-red-900/40 rounded-xl overflow-hidden backdrop-blur-sm hover:border-red-500/50 transition-colors group sm:col-span-2 lg:col-span-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-500/20 p-3 rounded-lg group-hover:bg-red-500/30 transition-colors">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">3. Lépés</h3>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Csatlakozás a szerverhez</h4>
                  <p className="text-gray-400 mb-6">
                    Nyisd meg a FiveM-et, és keresd meg a Dark City Roleplay szervert, vagy használd a közvetlen
                    csatlakozási linket.
                  </p>
                  <motion.a
                    href="https://servers.fivem.net/servers/detail/eb5lxb"
                    target="_blank"
                    className="inline-flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Csatlakozás a szerverhez
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="gyik" className="py-16">
          <div className="mx-auto max-w-[1400px] px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-500">GYIK</h2>
              <p className="text-xl text-gray-300 mb-12">Gyakran ismételt kérdések</p>
            </motion.div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <FaqItem question={item.question} answer={item.answer} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/80 backdrop-blur-sm border-t border-red-900/20 py-8">
          <div className="mx-auto max-w-[1400px] px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                className="text-xl font-bold text-red-500 mb-4 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Dark City Roleplay
              </motion.div>
              <motion.div
                className="text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                © 2025 Dark City Roleplay. Minden jog fenntartva.
                <p>Made by: Rendszergazda</p>
              </motion.div>
            </div>
          </div>
        </footer>
      </div >
    </main >
  )
}

